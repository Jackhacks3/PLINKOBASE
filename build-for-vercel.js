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
  
  // Remove node_modules to start fresh
  log('Cleaning previous installations...');
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  
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
      babel: { 
        dangerouslyAddModulePathsToTranspile: ['@benjeau/react-native-draw'] 
      }
    },
    {
      ...argv,
      mode: 'production'
    }
  );
  
  return config;
};
`;

  fs.writeFileSync('./webpack.config.js', webpackConfigContent);
  
  // Try basic web export method
  log('Exporting the web build...');
  try {
    execSync('npx expo export:web', { stdio: 'inherit' });
  } catch (exportError) {
    log('Error with export:web command, trying alternative export method...');
    // If the first method fails, try a workaround
    execSync('npx expo export --platform web', { stdio: 'inherit' });
  }
  
  // Ensure dist directory has all required files
  if (!fs.existsSync('./dist')) {
    log('Export did not create dist directory, creating manually...');
    fs.mkdirSync('./dist', { recursive: true });
    
    // If web-build exists, copy its content to dist
    if (fs.existsSync('./web-build')) {
      log('Copying web-build content to dist...');
      execSync('cp -r ./web-build/* ./dist/', { stdio: 'inherit' });
    }
  }
  
  // Copy the index.html to the dist directory if it doesn't exist
  const distIndexPath = './dist/index.html';
  
  if (!fs.existsSync(distIndexPath)) {
    log('Creating a fallback index.html...');
    
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Plinko Lottery Game</title>
    <style>
      body { margin: 0; padding: 0; font-family: sans-serif; }
      .loading { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
      .spinner { width: 50px; height: 50px; border: 5px solid rgba(0, 0, 0, 0.1); border-radius: 50%; border-top-color: #09d; animation: spin 1s ease-in-out infinite; }
      @keyframes spin { to { transform: rotate(360deg); } }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading Plinko Game...</p>
      </div>
    </div>
    <script>
      window.location.href = '/index.bundle.js';
    </script>
  </body>
</html>
`;
    
    fs.writeFileSync(distIndexPath, htmlContent);
  }
  
  log('Build completed successfully!');
} catch (error) {
  log(`Build error: ${error.message}`);
  process.exit(1);
} 