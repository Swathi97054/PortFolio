# Strong Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing Koduri Venkata Swathi's expertise in Artificial Intelligence and Machine Learning.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**: 
  - Hero section with professional photo and social links
  - About me with career objectives
  - Skills showcase with progress indicators
  - Project portfolio with hover effects and external links
  - Experience timeline
  - Certifications and achievements
  - Contact form with email integration
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email**: Resend API integration
- **Deployment**: Vercel
- **Language**: TypeScript

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── achievements.tsx  # Achievements section
│   ├── certifications.tsx # Certifications section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Experience timeline
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills section
├── actions/              # Server actions
│   └── send-email.ts     # Email sending logic
├── public/               # Static assets
│   ├── images/           # Project and profile images
│   └── resume.pdf        # Resume file
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Swathi97054/PortFolio
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up for a [Resend](https://resend.com) account
2. Get your API key from the Resend dashboard
3. Add the API key to your `.env.local` file
4. Update the email address in `actions/send-email.ts`

## 🎨 Customization

### Personal Information
- Update personal details in `components/hero.tsx`
- Replace the profile photo in `public/images/swathi-photo.jpeg`
- Update the resume file at `public/resume.pdf`

### Projects
- Add project images to `public/images/`
- Update project details in `components/projects.tsx`
- Add GitHub repository links

### Skills & Experience
- Modify skills in `components/skills.tsx`
- Update experience timeline in `components/experience.tsx`
- Add certifications in `components/certifications.tsx`

### Styling
- Customize colors in `tailwind.config.ts`
- Modify component styles in individual component files
- Update global styles in `app/globals.css`

## 📱 Sections Overview

1. **Hero**: Introduction with profile photo and social links
2. **About**: Career objectives and personal introduction
3. **Skills**: Technical skills with proficiency levels
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Professional experience timeline
6. **Certifications**: Academic and professional certifications
7. **Achievements**: Hackathons, research papers, and awards
8. **Contact**: Contact form and information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

