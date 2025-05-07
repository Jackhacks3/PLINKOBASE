// A custom build script for Vercel deployment

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log function for better debugging during Vercel builds
function log(message) {
  console.log(`[build-for-vercel] ${message}`);
}

try {
  log('Starting Vercel build process...');
  
  // Remove node_modules and package-lock.json to start fresh
  log('Cleaning previous installations...');
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  if (fs.existsSync('package-lock.json')) {
    execSync('rm -f package-lock.json', { stdio: 'inherit' });
  }
  
  // Install specific version of webpack config first
  log('Installing @expo/webpack-config beta...');
  execSync('npm install @expo/webpack-config@19.0.0-beta.1 --no-save --legacy-peer-deps', { stdio: 'inherit' });
  
  // Install dependencies with legacy peer deps flag
  log('Installing main dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  // Create a specific webpack.config.js for this project
  log('Creating static webpack configuration...');
  const webpackConfigContent = `
const createExpoWebpackConfig = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  // Create the default Expo webpack configuration
  const config = await createExpoWebpackConfig(
    {
      ...env,
      babel: { dangerouslyAddModulePathsToTranspile: ['@benjeau/react-native-draw'] }
    },
    argv
  );
  
  // Return the modified config
  return config;
};
`;

  fs.writeFileSync('./webpack.config.js', webpackConfigContent);
  
  // Run the web export command using our custom webpack config
  log('Exporting the web build...');
  execSync('npx expo export:web', { stdio: 'inherit' });
  
  // Ensure dist directory has all required files
  if (!fs.existsSync('./dist')) {
    log('Creating dist directory...');
    fs.mkdirSync('./dist', { recursive: true });
  }
  
  // Copy the index.html to the dist directory if needed
  const srcIndexPath = './index.html';
  const distIndexPath = './dist/index.html';
  
  if (fs.existsSync(srcIndexPath) && !fs.existsSync(distIndexPath)) {
    log('Copying index.html to dist folder...');
    fs.copyFileSync(srcIndexPath, distIndexPath);
  }
  
  // Create a dummy server.js file to satisfy Vercel
  log('Creating server file...');
  const serverContent = `
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve index.html for all routes
  const filePath = path.resolve(__dirname, './dist/index.html');
  const content = fs.readFileSync(filePath);
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(content);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}/\`);
});
`;

  fs.writeFileSync('./server.js', serverContent);
  
  log('Build completed successfully!');
} catch (error) {
  log(`Build error: ${error.message}`);
  process.exit(1);
} 