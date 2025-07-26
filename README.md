# Koduri Venkata Swathi - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing AI & Machine Learning projects, skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**: 
  - Hero section with professional photo and social links
  - About me with career objectives
  - Skills showcase with progress indicators
  - Project portfolio with live demos and code links
  - Professional experience timeline
  - Certifications and achievements
  - Contact form with email integration
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email Service**: Resend (for contact form)
- **Deployment**: Vercel (recommended)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables** (Optional - for contact form)
   
   Create a `.env.local` file in the root directory:
   \`\`\`env
   RESEND_API_KEY=your_resend_api_key_here
   \`\`\`

4. **Add your resume**
   
   Place your resume PDF file in the `public` folder as `resume.pdf`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
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
│   ├── skills.tsx        # Skills section
│   └── theme-provider.tsx # Theme context
├── actions/              # Server actions
│   └── send-email.ts     # Contact form handler
├── public/               # Static assets
│   ├── images/           # Project and personal images
│   └── resume.pdf        # Your resume file
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
\`\`\`

## 🎨 Customization

### Personal Information

1. **Update personal details** in `components/hero.tsx`:
   - Name, title, description
   - Social media links (GitHub, LinkedIn)
   - Professional photo

2. **Modify about section** in `components/about.tsx`:
   - Career objectives
   - Personal background

3. **Update skills** in `components/skills.tsx`:
   - Add/remove technical skills
   - Adjust proficiency levels

### Projects

Update your projects in `components/projects.tsx`:
- Project descriptions
- Technologies used
- Live demo links
- GitHub repository links
- Project images

### Experience & Education

Modify `components/experience.tsx` to include:
- Work experience
- Education background
- Internships

### Contact Information

Update contact details in `components/contact.tsx` and `components/footer.tsx`

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Sign up for Resend**
   - Visit [resend.com](https://resend.com)
   - Create an account and get your API key

2. **Add environment variable**
   \`\`\`env
   RESEND_API_KEY=your_actual_api_key_here
   \`\`\`

3. **Update email settings** in `actions/send-email.ts`:
   - Change the recipient email to your email address
   - Customize email templates if needed

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Other Platforms

The portfolio can also be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Core Web Vitals**: Optimized for Google's Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Koduri Venkata Swathi**
- Email: venkataswathi74@gmail.com
- LinkedIn: [venkata-swathi-koduri-74726a299](https://www.linkedin.com/in/venkata-swathi-koduri-74726a299)
- GitHub: [Swathi97054](https://github.com/Swathi97054)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ If you found this portfolio helpful, please give it a star!
