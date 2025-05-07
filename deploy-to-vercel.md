# Deploying Plinko Game to Vercel

## Option 1: Deploy via Vercel Web Interface (Recommended)

1. Push your code to GitHub (which you've already done)
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
3. Click "Add New..." > "Project"
4. Select your `PLINKOBASE` repository
5. In the configuration screen:
   - Framework Preset: Choose "Other"
   - Root Directory: Leave as `.`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
6. Click "Deploy"

## Option 2: Deploy via Vercel CLI

If you prefer using the CLI, follow these steps:

1. Make sure you're logged into Vercel: `vercel login`
2. From your project directory, run: `vercel`
3. Answer the prompts:
   - Set up and deploy?: `yes`
   - Which scope?: Choose your account
   - Link to existing project?: `no`
   - What's your project's name?: Choose a name or accept the default
   - In which directory is your code located?: `.` (the current directory)
   - Override settings?: `yes`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Development Command: `npm run start`

## Troubleshooting

If you encounter any issues:

1. Ensure you have the correct `vercel.json` configuration
2. Check that your `package.json` has the proper build scripts
3. For Expo-specific issues, you may need to run `npm install -g expo-cli` before deploying
4. If bundling fails, try `npm install` and then deploy again 