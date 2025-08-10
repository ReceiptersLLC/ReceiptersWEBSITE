# Receipters - Digital Receipt Management Platform

**Instant Digital Receipts, Zero Paper Waste.**

Receipters is a modern, eco-friendly digital receipt management platform that provides secure, paperless solutions for retailers, restaurants, and service providers. Built with Next.js 15 and designed with mobile-first responsiveness.

## 🌟 Features

### For Businesses
- **POS Integration**: Seamless integration with existing point-of-sale systems
- **Instant Delivery**: Automatic digital receipt generation and delivery via email, SMS, or Receipters accounts
- **Vendor Analytics**: Real-time analytics dashboard for transaction insights and customer behavior
- **Offline Functionality**: Generate receipts even when offline and sync when connection is restored

### For Customers
- **Secure Cloud Storage**: Military-grade encryption for all receipt data
- **Multi-Device Sync**: Access receipts across all devices seamlessly
- **Smart Organization**: AI-powered categorization and search functionality
- **Receipt Sharing**: Easy sharing with family, friends, or colleagues for returns and warranties

### Sustainability
- **Paperless Solution**: Eliminate paper waste and reduce environmental impact
- **Digital-First**: Modern approach to receipt management
- **Eco-Friendly**: Each digital receipt helps save resources and reduce carbon footprint

## 🛠 Technology Stack

- **Framework**: Next.js 15.1.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with responsive design
- **Internationalization**: React i18next with support for English, French, German, and Swahili
- **Icons**: Lucide React and Material Symbols
- **State Management**: React Hooks
- **Build Tool**: Webpack with optimizations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qbyte-tech/receipters-website.git
cd receipters-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Responsive Design

The application is built with a mobile-first approach and features:
- **Mobile Optimized**: Responsive CTA buttons with perfect centering
- **Touch-Friendly**: Optimized button sizes and spacing for mobile devices
- **Adaptive Layout**: Seamless experience across mobile, tablet, and desktop
- **Performance**: Optimized for fast loading on all devices

## 🌍 Internationalization

Receipters supports multiple languages:
- **English** (Default)
- **French** (Français)
- **German** (Deutsch)
- **Swahili** (Kiswahili)

Language detection is automatic based on browser settings, with manual switching available.

## 📄 Pages Structure

- **Homepage** (`/`): Landing page with hero section, features, testimonials, and how it works
- **About** (`/about`): Company information, values, team, and mission
- **Product** (`/product`): Detailed product features and benefits
- **Contact** (`/contact`): Contact form and company details
- **Download** (`/download`): App download links and information
- **Legal Pages**: Privacy policy and terms & conditions
- **Authentication**: Login and signup flows with OTP verification

## 🎨 Design System

- **Typography**: Responsive text sizing with Tailwind CSS classes
- **Colors**: Primary brand colors with gradient backgrounds
- **Components**: Reusable Button, TextInput, and layout components
- **Icons**: Consistent iconography using Lucide and Material symbols
- **Spacing**: Systematic padding and margin using responsive utilities

## 🔧 Development

### Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── (legal)/           # Legal pages (privacy, terms)
│   ├── about/             # About page and components
│   ├── contact/           # Contact page and form
│   ├── landing/           # Landing page components
│   ├── login/             # Authentication pages
│   └── product/           # Product showcase page
├── components/            # Reusable UI components
├── public/               # Static assets and translations
├── utils/                # Utility functions
└── styles/               # Global styles
```

### Key Components
- **Button**: Responsive button component with variants
- **TextInput**: Form input component with validation
- **Navigation**: Mobile-responsive navigation bar
- **Footer**: Comprehensive footer with links and social media
- **CTA Components**: Call-to-action sections throughout the site

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deployment Options
- **Vercel** (Recommended): Seamless deployment with automatic optimizations
- **Netlify**: Static site deployment with edge functions
- **Docker**: Containerized deployment for custom hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Next.js Image component with WebP support
- **Font Optimization**: Automatic font optimization and loading
- **SEO**: Meta tags and structured data for search engines
- **Accessibility**: WCAG compliant with keyboard navigation support

## 📞 Support & Contact

- **Website**: [receipters.com](https://receipters.com)
- **Email**: support@receipters.com
- **Office**: 355 Ridgewood Ave, Suite 1, Newark, NJ 07112

## 📄 License

This project is proprietary software owned by Receipters LLC. All rights reserved.

---

Built with ❤️ by the Receipters team - Making the world paperless, one receipt at a time.
