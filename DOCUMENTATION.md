# Receipters Website — Comprehensive Documentation

> **Platform Tagline**: *Instant Digital Receipts, Zero Paper Waste.*  
> **Repository**: `qbyte-tech/receipters-website`  
> **Framework**: Next.js 15.1.5 (App Router, React 19, TypeScript, Tailwind CSS)

---

## Table of Contents

1. [Executive Summary & Mission](#1-executive-summary--mission)
2. [Part I: Navigation Bar & Web Pages Reference](#2-part-i-navigation-bar--web-pages-reference)
   - [2.1 Home (`/`)](#21-home-)
   - [2.2 About Us (`/about`)](#22-about-us-about)
   - [2.3 Product Showcase (`/product`) & Features](#23-product-showcase-product--features)
   - [2.4 Blogs & Announcements (`/blogs`)](#24-blogs--announcements-blogs)
   - [2.5 Careers (`/careers`)](#25-careers-careers)
   - [2.6 Contact Us (`/contact`)](#26-contact-us-contact)
   - [2.7 Sign Up (`/signup`)](#27-sign-up-signup)
   - [2.8 Login & Authentication (`/login`, `/otp-login`)](#28-login--authentication-login-otp-login)
   - [2.9 Multi-Language Selection (`EN`, `SW`, `FR`, `DE`)](#29-multi-language-selection-en-sw-fr-de)
   - [2.10 Legal & Compliance Pages (`/(legal)`)](#210-legal--compliance-pages-legal)
3. [Part II: Technical Architecture & Core Infrastructure](#3-part-ii-technical-architecture--core-infrastructure)
   - [3.1 Technology Stack & Core Dependencies](#31-technology-stack--core-dependencies)
   - [3.2 Project Directory Structure](#32-project-directory-structure)
   - [3.3 Authentication & Session Management](#33-authentication--session-management)
   - [3.4 Internationalization (i18n) Architecture](#34-internationalization-i18n-architecture)
   - [3.5 Backend API Route Handlers](#35-backend-api-route-handlers)
   - [3.6 Design System & Reusable Components](#36-design-system--reusable-components)
   - [3.7 Data Fetching & State Management](#37-data-fetching--state-management)
   - [3.8 SEO, Metadata & PWA Features](#38-seo-metadata--pwa-features)
4. [Part III: Setup, Operations & Deployment](#4-part-iii-setup-operations--deployment)
   - [4.1 Local Development Setup](#41-local-development-setup)
   - [4.2 Environment Variables Reference](#42-environment-variables-reference)
   - [4.3 AWS Amplify & Cloud Deployment](#43-aws-amplify--cloud-deployment)
   - [4.4 Maintenance Scripts & Utilities](#44-maintenance-scripts--utilities)

---

## 1. Executive Summary & Mission

**Receipters** is an enterprise-grade, eco-friendly digital receipt management platform designed to replace traditional, chemical-coated (BPA/BPS) thermal paper receipts with secure, instant, and machine-readable digital receipts. 

Operating under a hybrid **Software-as-a-Product (SaaP)** and **Software-as-a-Service (SaaS)** model, Receipters bridges point-of-sale (POS) systems, retail merchants, tax compliance bodies, and end consumers. Beyond eliminating waste, Receipters structures raw transaction data into AI-ready intelligence for expense tracking, automated fiscal reporting, customer behavior insights, and fraud prevention.

---

## 2. Part I: Navigation Bar & Web Pages Reference

The application features a sticky, responsive header navigation component located at `components/navigator/index.tsx` that provides uniform access across desktop and mobile devices:

```
[ Logo ]   Home   About   Product   Blogs ▾   Careers   Contact   [ Sign Up ]   [ Login ]   [ EN ▾ ]
```

---

### 2.1 Home (`/`)
* **Path**: `app/(website)/page.tsx`
* **Layout**: Standard site layout with Header Navigator and Footer.
* **Component Modules**:
  1. **Hero Section (`app/(website)/landing/HeroSection.tsx`)**:
     - **Headline**: *"Instant Digital Receipts, Zero Paper Waste."* & *"Receipters: Turn Every Receipt Into Actionable Data"*.
     - **Sub-headline**: *"Digital receipts. Smart storage. Real insights."*
     - **Action Buttons**:
       - *Get Started Now*: Leads to `/signup` or mobile onboarding.
       - *Explore Our Products*: Smooth anchors or routes to `/product`.
     - **Visual Media**: Responsive showcase presenting the digital receipt interface across mobile viewports.
  2. **Who We Are (`app/(website)/landing/WhoWeAre.tsx`)**:
     - Highlights the global environmental impact of paper waste and introduces Receipters' clean-tech alternative.
  3. **Product Suite Grid (*"Start Where You Are. Scale As You Grow"*) (`app/(website)/landing/Features.tsx`)**:
     - **Digital Receipting**: Instant issuance from POS, SoftPOS, or online channels.
     - **Receipt Storage**: Secure, searchable long-term vault for all transaction records.
     - **Receipters App**: Intuitive mobile-first interface for shoppers and store staff.
     - **Data Analysis**: AI-powered intelligence layered on structured transaction data.
  4. **Value Differentiators (*"Why Receipters?"*)**:
     - **Built for Compliance**: Designed to integrate with tax fiscalization regimes and produce audit-ready records.
     - **Secure by Design**: Role-based access control, encryption in transit and at rest, and audit logs.
     - **AI-Ready Data**: Converts every receipt into structured JSON line-items (SKU, taxes, timestamps, merchant IDs).
     - **Developer-Friendly APIs**: Modern REST APIs, webhooks, and SDKs for POS/ERP connectivity.
  5. **How It Works (`app/(website)/landing/HowItWorks.tsx`)**:
     - **Step 1 — Capture**: Automatic POS/SoftPOS transmission, app camera scans, or e-commerce webhooks.
     - **Step 2 — Structure & Store**: OCR and data normalization engine extracts line items into the Receipters Vault.
     - **Step 3 — Search & Retrieve**: Instant lookup by merchant, date range, SKU, payment method, or amount.
     - **Step 4 — Analyse & Act**: AI assistant surfaces spending patterns, margin trends, and anomaly alerts.
  6. **AI Transaction Intelligence**:
     - Highlights performance analytics, risk/anomaly detection (voids, returns), and automated reporting.
  7. **Testimonials (`app/(website)/landing/Testimonials.tsx`)**:
     - Direct feedback and reviews from retail merchants and consumers.
  8. **Call to Action (`app/(website)/landing/CallToAction.tsx`)**:
     - Full-width conversion section directing users to register or download the mobile app.

---

### 2.2 About Us (`/about`)
* **Path**: `app/(website)/about/page.tsx`
* **Sections**:
  1. **About Hero**: High-level thesis on why the world must transition away from fragile, toxic thermal paper.
  2. **Core Values Grid**:
     - **Simplicity**: Frictionless receipt access without forced manual entry.
     - **Speed & Efficiency**: Instant real-time transmission directly at checkout.
     - **Security**: Bank-grade encryption and privacy controls.
     - **Sustainability**: Measured carbon and paper waste reduction.
  3. **Problem Statement**:
     - Details the billions of paper receipts printed annually, their non-recyclable nature (containing BPA/BPS), and operational storage liabilities.
  4. **Mission & Vision**:
     - **Mission**: Empowering businesses and consumers with eco-friendly, cost-effective digital receipting solutions that drive transparency.
     - **Vision**: Becoming the leading digital receipting and financial inclusion platform in Africa and emerging markets.
  5. **Our Story**:
     - The founding narrative of how Receipters grew from solving fading receipts into an end-to-end data platform.
  6. **Leadership Team (`app/(website)/about/components/TeamMember.tsx` & `data/data.tsx`)**:
     - **Gordon Odira** (*CEO & Founder*): Senior Integration Engineer with 8+ years across federal, state, and private deployments (Rutgers & NJIT alumnus).
     - **George Osewe** (*Senior Consultant & Business Development Director*): Policy and government expert involved in Kenya's constitutional transition.
     - **Joffrey Dozva** (*Senior Engineer & Technical Lead*): Core systems engineer who has built hundreds of mobile apps and health-tech systems.
     - **John Obura** (*CTO & Principal Architect*): Technology leader with deep expertise in cloud architectures and security protocols.
     - **Joseph Orinda** (*Chief Operations Officer*): Operations and business transformation executive.

---

### 2.3 Product Showcase (`/product`) & Features
* **Path**: `app/(website)/product/page.tsx`
* **Core Sections**:
  1. **Product Hero**: Comprehensive summary of vendor and consumer capabilities with *"Compare Plans"* and *"Talk to Our Team"* callouts.
  2. **Core Capabilities Grid (`FeatureCard`)**:
     - **Digital Receipt Issuance** (`/features/digital-receipt-issuance`): Generating clean, tax-compliant receipts at checkout.
     - **Offline Storage & Sync** (`/features/receipt-storage`): Seamless receipt creation during network outages, auto-syncing upon reconnection.
     - **Multi-Device Sync** (`/features/multi-device`): Unified cross-platform access across web portals, iOS, and Android.
     - **Budgeting & Data Analysis** (`/features/data-analysis`): Real-time analytics, SKU tracking, and expense breakdown.
     - **Receipt Sharing** (`/features/receipt-sharing`): Secure sharing of proofs-of-purchase for split bills, returns, or warranty claims.
     - **Vendor Analytics Dashboard** (`/features/vendor-analytics-dashboard`): Live merchant dashboard displaying revenue, basket size, and store comparisons.
  3. **AI Benefits Showcase**:
     - 🧠 *Smart Categorization*: Automatic sorting into groceries, travel, utilities, and retail.
     - 📊 *Trend Detection*: Basket velocity, price fluctuations, and seasonal demand.
     - 🔍 *Instant Retrieval*: Natural language semantic search across historical transactions.
  4. **4-Step Implementation Guide**:
     - Step 1: Connect POS terminal / SoftPOS app (`/features/step-1`).
     - Step 2: Extract & Structure data into the cloud vault (`/features/step-2`).
     - Step 3: Enable instant digital delivery via app/SMS/email (`/features/step-3`).
     - Step 4: Turn receipts into business intelligence and automated reports (`/features/step-4`).

---

### 2.4 Blogs & Announcements (`/blogs`)
* **Paths**: 
  - Main Blog Hub: `app/(website)/blogs/page.tsx`
  - Announcements: `app/(website)/blogs/announcement/page.tsx`
* **Features**:
  1. **Main Blogs Hub**:
     - Categorized by **Technology**, **Sustainability**, and **AI & Data**.
     - Includes published articles written by the engineering and product team.
     - Integrated `BlogModal.tsx` for readable, full-screen interactive article viewing without page reloading.
  2. **Announcements (`/blogs/announcement`)**:
     - Chronological feed of platform updates, new feature rollouts, retail partnerships, and milestone announcements.
     - Tagged with category markers (e.g. *Partnership*, *Event*, *Release*).

---

### 2.5 Careers (`/careers`)
* **Path**: `app/(website)/careers/page.tsx`
* **Sections**:
  1. **Careers Hero**: The value of joining a purpose-driven company making commercial transactions eco-friendly and intelligent.
  2. **Why Join Us**:
     - **Global Impact**: Direct contribution toward eliminating tons of toxic paper waste and deforestation.
     - **Innovation**: Hands-on exposure to Next.js, modern cloud architectures, AI data extraction, and fintech integrations.
     - **Culture & Inclusion**: Transparent, collaborative, and diverse international team.
  3. **Open Roles & Submissions**:
     - Information on prospective roles in software engineering, customer operations, sales, and partnerships with direct contact channels.

---

### 2.6 Contact Us (`/contact`)
* **Path**: `app/(website)/contact/page.tsx`
* **Features**:
  1. **Interactive Form**:
     - Fields: `Full Name`, `Email Address`, `Subject`, `Message`.
     - Submit handler with instant UI toast feedback powered by `sonner`.
     - Submits JSON payload directly to the internal API endpoint: `POST /api/contact`.
  2. **Company Info (`app/(website)/contact/components/ContactDetails.tsx`)**:
     - Physical Address: *355 Ridgewood Ave, Suite 1, Newark, NJ 07112, USA*.
     - Email: *support@receipters.com*.
     - Active WhatsApp assistance widget (`WhatsAppWidget.tsx`) for instant queries.

---

### 2.7 Sign Up (`/signup`)
* **Path**: `app/(website)/signup/page.tsx`
* **Functionality**:
  1. **Standard Registration**:
     - Fields: First Name, Middle Name (optional), Last Name, Email, Phone Number, Password.
     - Built using custom validated input components (`TextInput.tsx`) and animated `Button.tsx`.
     - Dispatches through `AuthContext.signUp(payload)`.
  2. **Third-Party OAuth**:
     - Google OAuth sign-up with one-click authorization.
     - Facebook OAuth registration.
  3. **Onboarding Route**:
     - Successful registration routes user to `/download` or initiates OTP verification.

---

### 2.8 Login & Authentication (`/login`, `/otp-login`)
* **Paths**:
  - Email/Password Login: `app/(website)/login/page.tsx`
  - OTP Verification: `app/(website)/otp-login/page.tsx`
  - Auth State Callbacks: `app/(website)/success/page.tsx`
  - Account Deletion Compliance: `app/(website)/delete-account/page.tsx`
* **Functionality**:
  1. **Credential Login**:
     - Email and password submission via `AuthContext.login()`.
     - Error state alerts and loading state management.
  2. **OAuth Sign-In**:
     - Google & Facebook single-sign-on.
  3. **One-Time Password (OTP)**:
     - Multi-factor and passwordless authentication verification.
     - Includes resend timers and pin code entry handling.

---

### 2.9 Multi-Language Selection (`EN`, `SW`, `FR`, `DE`)
* **Implemented in**: `components/navigator/index.tsx`
* **Supported Languages**:
  - **EN** (English — Default)
  - **SW** (Kiswahili)
  - **FR** (Français)
  - **DE** (Deutsch)
* **Mechanism**:
  - Dropdown selector in both desktop navigation bar and mobile drawer menu.
  - Dynamically invokes `i18n.changeLanguage(newLanguage)`.
  - Persists preference in client cookies via `js-cookie` and updates the active context without full page reloads.

---

### 2.10 Legal & Compliance Pages (`/(legal)`)
* **Paths**:
  - Privacy Policy: `app/(website)/(legal)/privacy-policy/page.tsx`
  - Terms & Conditions: `app/(website)/(legal)/terms-and-conditions/page.tsx`
* **Features**:
  - Fully articulated data protection disclosures, compliance with GDPR/data sovereignty principles.
  - Cookie consent banner (`components/CookieConsent.tsx`) storing user consent preferences.

---

## 3. Part II: Technical Architecture & Core Infrastructure

### 3.1 Technology Stack & Core Dependencies

| Category | Technology / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.1.5` | React server/client hybrid rendering, API routes |
| **Language** | TypeScript | `^5.0.0` | Type-safety, robust developer interfaces |
| **UI Library** | React & React DOM | `^19.0.0` | Modern React runtime |
| **Styling** | Tailwind CSS & PostCSS | `^3.4.1` | Utility-first responsive design system |
| **Authentication** | NextAuth.js & Firebase Auth | `^4.24.11` / `^12.15.0` | Session tokens, OAuth, credential auth |
| **Server Admin** | Firebase Admin SDK | `^14.1.0` | Backend verification & database access |
| **Data Fetching** | TanStack React Query | `^5.90.21` | Client caching, query deduplication |
| **HTTP Client** | Axios | `^1.9.0` | Typed API communication |
| **Internationalization** | i18next & next-i18next | `^25.2.1` / `15.4.2` | Multi-language translation management |
| **Mailer** | Nodemailer | `^7.0.13` | SMTP transmission for contact inquiries |
| **Notifications** | Sonner | `^2.0.3` | Lightweight, customizable toast notifications |
| **Icons** | Lucide React & React Icons | `^0.510.0` / `^5.5.0` | Scalable vector icons |
| **Utilities** | QR Code (`qrcode.react`), Date-fns | `^4.2.0` / `^4.1.0` | Dynamic QR generation & date formatting |

---

### 3.2 Project Directory Structure

```
receipters-website/
├── app/
│   └── (website)/
│       ├── (legal)/                 # Privacy Policy & Terms of Service
│       ├── about/                   # About page & Team member cards
│       ├── api/                     # Next.js Server Route Handlers
│       │   ├── auth/                # Login, signup, session, logout, NextAuth
│       │   ├── contact/             # Contact form Nodemailer endpoint
│       │   └── locales/             # Dynamic locale namespace loader
│       ├── blogs/                   # Blog articles and announcements
│       ├── careers/                 # Careers and job openings
│       ├── contact/                 # Contact form & location details
│       ├── delete-account/          # Self-service account deletion page
│       ├── download/                # App Store & Play Store links
│       ├── features/                # 13 dedicated feature deep-dive routes
│       ├── landing/                 # Modular landing page sections
│       ├── login/                   # Credential & OAuth login
│       ├── otp-login/               # OTP verification workflow
│       ├── product/                 # Product showcase & plan comparison
│       ├── signup/                  # Registration portal
│       ├── success/                 # Operation completion feedback
│       ├── layout.tsx               # Root application layout
│       └── page.tsx                 # Root landing page entrypoint
├── components/                      # Reusable UI component library
│   ├── footer/                      # Site footer component
│   ├── navigator/                   # Sticky navbar & mobile navigation drawer
│   ├── Button.tsx                   # Design system button
│   ├── TextInput.tsx                # Validated form input
│   ├── FeatureCard.tsx              # Interactive feature summary card
│   ├── FeatureModal.tsx             # Detail dialog for features
│   ├── BlogModal.tsx                # Article reading modal
│   ├── CookieConsent.tsx            # Cookie preferences banner
│   └── WhatsAppWidget.tsx           # Floating support widget
├── context/
│   └── AuthContext.tsx              # Global authentication context & state
├── lib/
│   ├── api/receipts.ts              # Receipt API request handlers
│   ├── providers/QueryProvider.tsx  # React Query provider wrapper
│   ├── queries/receipts.ts          # TanStack query hooks
│   ├── firebase.ts                  # Client-side Firebase configuration
│   └── firebase-admin.ts            # Server-side Firebase Admin SDK init
├── public/
│   ├── assets/ & img/               # Brand logos, team pictures, illustrations
│   ├── locales/{en,sw,fr,de}/       # JSON translation key-value catalogs
│   ├── manifest.json                # PWA web manifest
│   ├── robots.txt                   # Search engine crawler instructions
│   └── sitemap.xml                  # Search indexing map
├── scripts/
│   └── sync-translations.js         # Automated i18n sync script
├── i18n.ts                          # i18next client configuration
├── middleware.ts                    # Edge middleware for auth and routing
├── amplify.yml                      # AWS Amplify build & deployment pipeline
├── deploy-manifest.json             # AWS Amplify Next.js hosting specification
├── tailwind.config.ts               # Tailwind design tokens & themes
└── package.json                     # Dependency definitions & run scripts
```

---

### 3.3 Authentication & Session Management

1. **Architecture**:
   - Authentication state is unified through `context/AuthContext.tsx`.
   - Supports dual-mode authentication:
     - **Firebase Auth / NextAuth**: Supports Google and Facebook OAuth sign-in.
     - **Backend Credentials API**: Custom endpoint handling with encrypted cookies.
2. **Session Persistence**:
   - `SessionProviderWrapper` wraps the root layout to maintain OAuth sessions across navigation.
   - User tokens and profile metadata are synchronized with `localStorage` and HTTP-only session cookies.
3. **Route Protection (`middleware.ts`)**:
   - Inspects incoming requests for authentication tokens and redirects unauthenticated users away from protected resources.

---

### 3.4 Internationalization (i18n) Architecture

- Configured via `i18n.ts` using `i18next`, `react-i18next`, and `i18next-browser-languagedetector`.
- Locale files reside under `public/locales/[language]/common.json`.
- When translations are requested dynamically on the server side, `app/(website)/api/locales/[lng]/[ns]/route.ts` streams the corresponding JSON namespace.
- **Translation Synchronization Tool**:
  - Run with `npm run sync-i18n` (invokes `scripts/sync-translations.js`).
  - Reads `public/locales/en/common.json` as the source of truth, checks `fr`, `sw`, and `de` files, and automatically injects any missing keys to prevent broken UI text.

---

### 3.5 Backend API Route Handlers

All API handlers are situated in `app/(website)/api/`:

* **`POST /api/contact`** (`contact/route.ts`):
  - Receives `fullname`, `email`, `subject`, and `message`.
  - Uses `nodemailer` with configured SMTP credentials to dispatch an email to the support inbox and send an acknowledgement.
* **`POST /api/auth/login`** (`auth/login/route.ts`):
  - Authenticates credentials against backend services, returning a signed JWT or session cookie.
* **`POST /api/auth/signup`** (`auth/signup/route.ts`):
  - Registers new merchant or consumer accounts.
* **`GET /api/auth/session`** (`auth/session/route.ts`):
  - Validates active cookie/session integrity.
* **`POST /api/auth/logout`** (`auth/logout/route.ts`):
  - Clears authentication tokens and expires session cookies.
* **`GET /api/locales/[lng]/[ns]`** (`locales/[lng]/[ns]/route.ts`):
  - Returns localized key-value sets for language `lng` and namespace `ns`.

---

### 3.6 Design System & Reusable Components

- **Responsive Breakpoints**: Tailwind standards (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- **Typography & Colors**:
  - Primary Brand Blue: `#2563EB` (Tailwind `blue-600`) with hover states at `blue-700`.
  - Background gradients: Smooth transition from `blue-50` to `white` and dark contrast zones in `gray-900`.
- **Key Components**:
  - `Button.tsx`: Supports variants (`primary`, `secondary`, `outline`), integrated loading spinners, and full-width mobile centering.
  - `TextInput.tsx`: Reusable text, email, phone, and password inputs with label integration, error states, and toggleable password visibility.
  - `FeaturePageLayout.tsx`: Standardized container for all deep-dive feature pages providing hero banners, key bullet points, and related links.
  - `CookieConsent.tsx`: Discrete bottom banner compliant with privacy regulations, persisting user choice.

---

### 3.7 Data Fetching & State Management

- **TanStack React Query (`lib/providers/QueryProvider.tsx`)**:
  - Configures global `staleTime` and `cacheTime` rules to avoid redundant background refetching.
- **Receipts API (`lib/api/receipts.ts`) & Queries (`lib/queries/receipts.ts`)**:
  - Modular functions for querying user receipts, filtering by date ranges, SKU items, and fetching vendor summaries.
  - Custom React Query hooks provide caching, loading indicators, and mutation handling.

---

### 3.8 SEO, Metadata & PWA Features

- **Metadata**: Comprehensive OpenGraph and Twitter card metadata configured in `layout.tsx` and individual pages.
- **Indexing Files**:
  - `public/robots.txt`: Directs search engine crawlers.
  - `public/sitemap.xml`: XML sitemap containing canonical URLs for all landing, product, feature, blog, and legal pages.
- **Progressive Web App**:
  - `public/manifest.json`: Web application manifest enabling "Add to Home Screen" on mobile devices with high-res icon configurations.

---

## 4. Part III: Setup, Operations & Deployment

### 4.1 Local Development Setup

#### Prerequisites
- Node.js version 18.x or 20.x
- Package manager: `yarn`, `npm`, or `pnpm`

#### Step-by-Step Installation
1. Clone the codebase:
   ```bash
   git clone https://github.com/qbyte-tech/receipters-website.git
   cd receipters-website
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or: npm install
   ```
3. Initialize environment variables:
   - Copy `.env.example` (or configure `.env.local` based on the section below).
4. Run development server (with TurboPack enabled):
   ```bash
   yarn dev
   # or: npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

### 4.2 Environment Variables Reference

Create a `.env.local` file in the project root with the following configuration keys:

```ini
# --- Authentication & NextAuth ---
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# --- OAuth Providers ---
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# --- Firebase Client SDK ---
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# --- Firebase Admin SDK (Server-Side) ---
FIREBASE_ADMIN_PROJECT_ID=your_firebase_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"

# --- Mailer (Nodemailer) ---
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_smtp_app_password
CONTACT_RECEIVER_EMAIL=support@receipters.com

# --- Public Endpoints ---
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

### 4.3 AWS Amplify & Cloud Deployment

The repository is configured for cloud deployment on **AWS Amplify Hosting** using Next.js Server-Side Rendering (SSR).

* **Build Specification (`amplify.yml`)**:
  ```yaml
  version: 1
  frontend:
    phases:
      preBuild:
        commands:
          - yarn install
      build:
        commands:
          - yarn build
    artifacts:
      baseDirectory: .next
      files:
        - '**/*'
    cache:
      paths:
        - node_modules/**/*
        - .next/cache/**/*
  ```
* **Routing Manifest (`deploy-manifest.json`)**:
  - Routes static assets (`/_next/static/*`, `/*.*`) directly through CDN storage with immutable cache headers (`max-age=31536000`).
  - Routes serverless compute targets (`/api/*`, `/_next/data/*`, `/*`) to the Node.js 20.x runtime (`server.js`).

---

### 4.4 Maintenance Scripts & Utilities

| Command | Action |
| :--- | :--- |
| `yarn dev` | Launches local server with Next.js Turbopack |
| `yarn build` | Generates optimized production build in `.next` |
| `yarn start` | Boots production server locally |
| `yarn lint` | Executes ESLint analysis with Next.js rules |
| `yarn sync-i18n` | Runs `node scripts/sync-translations.js` to synchronize all locale files |

---

*Documentation maintained by the Receipters engineering team. For modifications or support, open an issue or reach out to support@receipters.com.*
