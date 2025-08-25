# 🚀 Deployment Guide

## Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version for Windows
3. Verify installation by running:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Setup GitHub Repository
1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `darsh-portfolio`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Initialize Git in your local folder**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/darsh-1010/Portfolio.git
   git push -u origin main
   ```

## Step 3: Deploy to Vercel (Recommended)

### Option A: Automatic Deployment (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `darsh-portfolio` repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

### Option B: Manual Deployment with GitHub Actions
1. **Get Vercel tokens:**
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create a new token
   - Copy the token

2. **Get Project ID:**
   - In your Vercel dashboard, go to your project
   - Go to Settings → General
   - Copy the Project ID

3. **Get Org ID:**
   - In Vercel dashboard, go to Settings → General
   - Copy the Team ID (or Personal Account ID)

4. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `PROJECT_ID`: Your Vercel project ID
     - `ORG_ID`: Your Vercel org/team ID

5. **Push to trigger deployment:**
   ```bash
   git add .
   git commit -m "Setup deployment"
   git push
   ```

## Step 4: Alternative - Deploy to Render

1. Go to [render.com](https://render.com)
2. Sign up/Login
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `darsh-portfolio`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"

## Step 5: Custom Domain (Optional)

### Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Render:
1. Go to your static site dashboard
2. Settings → Custom Domains
3. Add your domain
4. Update DNS records

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check if all dependencies are in `package.json`
   - Ensure Node.js version is 16+ (18+ recommended)

2. **3D models not loading:**
   - Verify GLTF files are in `public/` folder
   - Check file paths in components

3. **Styling issues:**
   - Ensure Tailwind CSS is properly configured
   - Check if `postcss.config.cjs` exists

4. **Deployment stuck:**
   - Check GitHub Actions logs
   - Verify Vercel tokens are correct

### Performance Tips:

1. **Optimize images:**
   - Use WebP format when possible
   - Compress large images

2. **3D models:**
   - Optimize GLTF files
   - Use appropriate LOD (Level of Detail)

3. **Bundle size:**
   - Run `npm run build` locally to check bundle size
   - Consider code splitting for large components

## Success! 🎉

Your portfolio should now be live at:
- **Vercel**: `https://your-project.vercel.app`
- **Render**: `https://your-project.onrender.com`

## Next Steps:

1. **Customize content** in `src/constants/index.js`
2. **Update personal information** in components
3. **Add your own projects** to the Works section
4. **Customize colors** in `tailwind.config.cjs`
5. **Test on different devices** for responsiveness

---

Need help? Check the [Vercel documentation](https://vercel.com/docs) or [Render documentation](https://render.com/docs).
