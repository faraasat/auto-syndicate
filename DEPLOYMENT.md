# 🚀 Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Python 3.12+ installed
- Yarn Berry installed
- Git installed
- Accounts on deployment platforms

## 🌐 Frontend Deployment (Vercel)

### Step 1: Prepare for Deployment

```bash
# Build the Next.js app
cd apps/web
yarn build
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Option B: GitHub Integration**
1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `yarn build`
   - **Output Directory**: `.next`

### Step 3: Environment Variables

Set these in Vercel dashboard:

```
DATABASE_URL=postgresql://...
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=<generate-secret>
PYTHON_API_URL=https://your-api.herokuapp.com
GROQ_API_KEY=<your-key>
GOOGLE_AI_API_KEY=<your-key>
```

## 🐍 Backend Deployment (Railway/Fly.io)

### Option A: Deploy to Railway

**Step 1: Create Railway Account**
- Go to [railway.app](https://railway.app)
- Sign up with GitHub
- Create a new project

**Step 2: Deploy Python API**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd apps/api
railway init

# Deploy
railway up
```

**Step 3: Set Environment Variables**
```bash
railway variable add GROQ_API_KEY=<your-key>
railway variable add GOOGLE_AI_API_KEY=<your-key>
```

### Option B: Deploy to Fly.io

**Step 1: Create Fly.io Account**
- Go to [fly.io](https://fly.io)
- Sign up
- Install Fly CLI

**Step 2: Deploy**
```bash
cd apps/api
fly auth login
fly launch  # Creates fly.toml
fly deploy
```

**Step 3: Set Secrets**
```bash
fly secrets set GROQ_API_KEY=<your-key>
fly secrets set GOOGLE_AI_API_KEY=<your-key>
```

### Option C: Docker to Any Cloud

**Step 1: Build Docker Image**
```bash
cd apps/api
docker build -t autosyndicate-api .
```

**Step 2: Push to Docker Hub**
```bash
docker login
docker tag autosyndicate-api username/autosyndicate-api
docker push username/autosyndicate-api
```

**Step 3: Deploy to Cloud**
- AWS ECS, Google Cloud Run, Azure Container Instances, etc.
- Use the image: `username/autosyndicate-api`

## 🗄️ Database Setup

### PostgreSQL (Recommended: Neon.tech)

**Step 1: Create Neon Account**
- Go to [neon.tech](https://neon.tech)
- Sign up
- Create a new project

**Step 2: Get Connection String**
- Copy the connection string from Neon dashboard
- Format: `postgresql://user:password@host/dbname`

**Step 3: Run Migrations**
```bash
cd apps/web
export DATABASE_URL="your-connection-string"
yarn prisma db push
```

### MongoDB (Optional)

```bash
# Use MongoDB Atlas for managed service
# Go to https://www.mongodb.com/cloud/atlas
# Create account and cluster
# Get connection string and add to .env
```

## 🔑 API Keys & Secrets

### 1. GroqCloud

```bash
# Sign up at https://console.groq.com
# Generate API key
# Add to environment variables as GROQ_API_KEY
```

### 2. Google Gemini

```bash
# Go to https://ai.google.dev
# Create project
# Enable Generative AI API
# Generate API key
# Add to environment variables as GOOGLE_AI_API_KEY
```

### 3. NextAuth Secret

```bash
# Generate a secure secret
openssl rand -base64 32

# Add to .env as NEXTAUTH_SECRET
```

## 📊 Monitoring & Logging

### Vercel
- Built-in analytics: https://vercel.com/analytics
- Real-time logs available in dashboard

### Railway/Fly.io
```bash
# View logs
railway logs        # Railway
fly logs           # Fly.io
```

### Application Errors
- Set up error tracking with Sentry:
  ```bash
  # Install Sentry
  npm install @sentry/nextjs
  ```

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Build and test
        run: |
          cd apps/web
          yarn install
          yarn build
          yarn lint
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: |
          npx vercel --prod --token=$VERCEL_TOKEN
```

## 🧪 Pre-Deployment Checklist

- [ ] All environment variables are set
- [ ] Database migrations are run
- [ ] No console errors or warnings
- [ ] Mobile responsive design tested
- [ ] API endpoints are tested
- [ ] Security headers configured
- [ ] SSL/TLS certificates installed
- [ ] Domain DNS configured
- [ ] Email notifications working
- [ ] Error logging configured

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
yarn build
```

### Database Connection Issues
```bash
# Test connection
psql $DATABASE_URL

# Check migrations
yarn prisma migrate status
```

### API Connection Errors
```bash
# Test API endpoint
curl http://localhost:8000/health

# Check CORS settings in FastAPI
```

## 📈 Performance Optimization

### Frontend
- Enable Next.js Image Optimization
- Configure caching headers
- Use CDN for static assets

### Backend
- Database connection pooling
- API response caching
- Enable gzip compression

## 🔐 Security Checklist

- [ ] HTTPS enabled everywhere
- [ ] SQL injection prevention (Prisma)
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] Secrets in environment variables
- [ ] Database backups enabled
- [ ] Firewall rules configured

## 📞 Support

For deployment issues:
1. Check logs in your hosting platform
2. Review `.env` file for missing variables
3. Verify API keys are valid
4. Test endpoints locally first
5. Contact support of hosting platform

---

**Deployed and running!** 🎉
