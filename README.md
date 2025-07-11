# Software Engineering Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase software engineering experience, skills, and projects with a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion for elegant transitions
- **Interactive Sections**: Skills filtering, project categorization, contact form
- **SEO Optimized**: Meta tags, structured data, and social sharing
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions
- **Netlify Ready**: Pre-configured for easy deployment

## 📱 Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal story, interests, and values
- **Skills**: Categorized technical skills with proficiency levels
- **Experience**: Professional timeline with achievements
- **Projects**: Filterable project showcase with detailed information
- **Contact**: Contact form with validation and social links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Personal Information

Update your personal information in `src/data/portfolioData.ts`:

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title", 
    tagline: "Your tagline",
    email: "your.email@example.com",
    // ... other fields
  },
  // ... other sections
};
```

### Sections

Each section can be customized by editing the corresponding data in `portfolioData.ts`:

- **About**: Update `about` object with your story and interests
- **Skills**: Modify `skills` array with your technical expertise
- **Experience**: Add your work experience to `experience` array
- **Projects**: Showcase your projects in `projects` array
- **Social Links**: Update `socialLinks` with your profiles

### Styling

The design uses Tailwind CSS with a custom color scheme defined in `tailwind.config.ts`. You can:

- Change the primary color scheme
- Modify spacing and typography
- Add custom animations
- Update the overall theme

### Assets

Replace placeholder images in the `public` folder:
- `favicon.ico`: Your favicon
- `og-image.jpg`: Social sharing image
- `resume.pdf`: Your resume file

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

The repository includes `netlify.toml` with optimized settings for:
- SPA routing
- Security headers
- Caching strategies
- Performance optimization

### Other Platforms

The portfolio can be deployed to any static hosting platform:

- **Vercel**: Zero-config deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static hosting
- **Firebase Hosting**: Google's hosting solution

## 📂 Project Structure

```
src/
├── components/
│   ├── sections/          # Main page sections
│   ├── Icon.tsx           # Icon component
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── Layout.tsx         # Main layout wrapper
├── data/
│   └── portfolioData.ts   # All portfolio content
├── types/
│   └── portfolio.ts       # TypeScript interfaces
├── index.css              # Global styles
└── App.tsx                # Main app component
```

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, hierarchical sizing
- **Body**: Regular weight, optimized line height

### Components

All components are designed with:
- Consistent spacing using Tailwind's scale
- Hover and focus states
- Responsive behavior
- Accessibility features

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

## 🔍 SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Optimized page titles and descriptions
- XML sitemap ready

## 📧 Contact Form

The contact form includes:
- Client-side validation with Zod
- Error handling and success states
- Responsive design
- Accessibility features

**Note**: The form currently uses a mock submission. To implement actual form submission, integrate with:
- Netlify Forms
- Formspree
- EmailJS
- Custom backend API

## 🔄 Updates

To keep your portfolio updated:

1. **Content**: Edit `portfolioData.ts`
2. **Styling**: Modify Tailwind classes or `tailwind.config.ts`
3. **Features**: Add new components or sections
4. **Deploy**: Push changes to trigger automatic deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have questions or need help customizing the portfolio, please open an issue or contact the maintainer.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
