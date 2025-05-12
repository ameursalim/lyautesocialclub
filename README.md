# Padel Page Magic

![Documentation Status](https://img.shields.io/badge/docs-100%25-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, responsive Next.js application for booking padel courts online. This project provides an intuitive interface for users to browse available courts, select time slots, and make bookings.  

## 🚀 Features

- **Modern UI**: Clean, responsive design built with Tailwind CSS and shadcn/ui components
- **Interactive Booking System**: Calendar-based court reservation system
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **SEO-Friendly**: Built with Next.js for server-side rendering and improved SEO
- **Performance Optimized**: Fast loading and interaction times

## 📋 Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/padel-page-magic.git

# Navigate to project directory
cd padel-page-magic

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## 📦 Project Structure

```
padel-page-magic/
├── public/            # Static files
├── src/
│   ├── app/          # Next.js app directory
│   │   ├── booking/  # Booking page route
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx  # Home page
│   ├── components/   # React components
│   └── lib/          # Utility functions and shared logic
├── .gitignore        # Git ignore file
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies
├── README.md         # Project documentation
└── tsconfig.json     # TypeScript configuration
```

## 🔧 Usage

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## 🚢 Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting service that supports Next.js applications.

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and configure the build settings automatically

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory. This documentation is automatically generated from JSDoc comments in the code.

To generate the documentation locally, run:

```bash
npm run docs
```

## 🧪 Testing

```bash
npm run test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using Conventional Commits format (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
