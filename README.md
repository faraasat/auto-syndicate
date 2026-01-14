# AutoSyndicate™ - Executable Loans and Intelligent Capital Allocation

A modern, AI-powered platform transforming institutional loan markets from document-centric processes to data-driven, intelligent capital allocation and monitoring.

## 🏗️ Project Structure

```
autosyndicate/
├── apps/
│   ├── web/              # Next.js 15 web application
│   └── api/              # Python FastAPI microservice
├── packages/
│   ├── database/         # Prisma schema & database utilities
│   ├── ui/               # Shared UI components
│   └── typescript-config/# Shared TypeScript configs
├── docs/                 # Documentation
└── README.md
```

## 🚀 Tech Stack

### Frontend
- **Next.js 15.1+** with React 19 & TypeScript
- **Tailwind CSS** + **shadcn/ui** (Web3/NFT/Sci-fi theme)
- **Zustand** for state management
- **TanStack Query** for server state

### Backend
- **Next.js API Routes** + Server Actions
- **PostgreSQL** (Neon.tech) with Prisma ORM
- **MongoDB** for flexible document storage
- **Python FastAPI** microservice for AI/ML

### AI & ML
- **GroqCloud** (Llama 3.2, Mixtral) - Ultra-fast inference
- **Google Gemini 1.5 Pro** - Document understanding
- **CrewAI** + **AutoGen** - Multi-agent systems
- **LangChain** + **LangGraph** - AI orchestration
- **Qdrant** - Vector database

### Build Tools
- **Yarn Berry** (v4.x) with node-modules linker
- **Turborepo** (v2.x) for monorepo management

## 📦 Getting Started

### Prerequisites
- Node.js 18+ (recommend 20+)
- Python 3.12+
- Yarn Berry 4.x
- Docker (optional, for local services)

### Installation

1. **Install Yarn Berry**
```bash
corepack enable
corepack prepare yarn@4.0.2 --activate
```

2. **Clone and Install Dependencies**
```bash
git clone <repository-url>
cd lma
yarn install
```

3. **Setup Environment Variables**
```bash
# Copy example env files
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

4. **Setup Database**
```bash
cd apps/web
yarn prisma generate
yarn prisma db push
```

5. **Run Development Servers**
```bash
# Run all apps
yarn dev

# Or run specific app
cd apps/web && yarn dev
cd apps/api && poetry run uvicorn main:app --reload
```

## 🌐 Application URLs

- **Web App**: http://localhost:3000
- **Python API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## 📋 Available Scripts

- `yarn dev` - Run all apps in development mode
- `yarn build` - Build all apps for production
- `yarn lint` - Lint all packages
- `yarn clean` - Clean build artifacts

## 🎨 UI Theme

Web3/NFT/Sci-fi inspired design with:
- Neon gradients and glowing effects
- Dark mode by default
- Animated components
- Futuristic typography
- Glassmorphism effects

## 📄 Pages

### Public Pages
- Home
- About
- Features  
- Marketplace
- Pricing
- Contact Us

### Auth Pages
- Login
- Sign Up

### Private Pages (After Authentication)
- Dashboard
- Analytics
- Profile
- Settings
- Loan Management
- Capital Allocation
- ESG Tracking
- Secondary Trading

## 🤖 AI Agents

### CrewAI Agents
- **Parser Agent** - Document extraction and structuring
- **Validator Agent** - Data validation and verification
- **Allocator Agent** - Capital allocation optimization
- **Monitor Agent** - Covenant and compliance tracking
- **Explainer Agent** - Natural language justification generation

## 🔐 Security

- NextAuth.js for authentication
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)
- End-to-end encryption
- Row-level security in PostgreSQL

## 📊 Features

### Core Modules
1. **Intelligent Loan Structuring** - AI-powered document parsing
2. **Capital Allocation** - ML-driven syndication matching
3. **Document Creation** - Automated agreement generation
4. **Covenant Monitoring** - Real-time compliance tracking
5. **Secondary Trading** - Automated due diligence
6. **ESG Integration** - Sustainability metrics and reporting

## 🛠️ Development

### Code Structure
```
apps/web/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Auth routes
│   ├── (dashboard)/    # Protected routes
│   ├── api/            # API routes
│   └── layout.tsx      # Root layout
├── components/         # React components
├── lib/                # Utilities
└── styles/             # Global styles
```

### Database Schema
See `packages/database/prisma/schema.prisma` for the complete data model.

## 📝 License

Proprietary - LMA EDGE Hackathon Submission

## 👥 Team

AutoSyndicate™ - Transforming Institutional Loan Markets

---

**Built for the LMA EDGE Hackathon**  
Reimagining loan markets with AI and intelligent capital allocation
