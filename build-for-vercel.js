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
  
  // Install dependencies with legacy peer deps flag
  log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  // Create a compatible webpack config
  log('Setting up compatible webpack configuration...');
  const webpackConfigPath = path.resolve('./node_modules/@expo/webpack-config/webpack.config.js');
  
  if (fs.existsSync(webpackConfigPath)) {
    log('Patching webpack config...');
    let webpackConfig = fs.readFileSync(webpackConfigPath, 'utf8');
    
    // Adjust webpack configuration if needed
    // This is a placeholder - you might not need to modify the webpack config
    
    fs.writeFileSync(webpackConfigPath, webpackConfig);
  } else {
    log('Webpack config not found at expected path. Using defaults.');
  }
  
  // Run the web export command
  log('Exporting the web build...');
  execSync('npx expo export:web', { stdio: 'inherit' });
  
  // Ensure dist directory has all required files
  log('Setting up final build artifacts...');
  
  // Copy the index.html to the dist directory if needed
  const srcIndexPath = './index.html';
  const distIndexPath = './dist/index.html';
  
  if (fs.existsSync(srcIndexPath) && !fs.existsSync(distIndexPath)) {
    log('Copying index.html to dist folder...');
    fs.copyFileSync(srcIndexPath, distIndexPath);
  }
  
  log('Build completed successfully!');
} catch (error) {
  log(`Build error: ${error.message}`);
  process.exit(1);
} 