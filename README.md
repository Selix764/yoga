# 🧘‍♀️ MindfulBalance - Modern Wellness Website

A beautiful, responsive wellness and psychology website built with **Next.js 14**, **TypeScript**, and **Framer Motion**. Features a clean, modern design with smooth animations and comprehensive wellness services.

## ✨ Live Demo

🌐 **[View Live Demo](https://your-demo-url.vercel.app)** *(Deploy to see your live site)*

## 📸 Screenshots

### Hero Section
- Stunning full-screen background with your custom yoga image
- Transparent navbar that transforms on scroll
- Smooth text animations and scroll indicators

### Key Features
- **Responsive Design** - Looks perfect on all devices
- **Scroll-Triggered Navigation** - Dynamic button backgrounds when scrolling
- **Smooth Animations** - Powered by Framer Motion
- **Local Image Support** - Add your own hero images easily
- **Modern UI/UX** - Clean, minimalist aesthetic

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mindful-balance-website.git
cd mindful-balance-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your hero image** (Optional)
```bash
# Place your image in public/images/yoga-hero.jpg
cp /path/to/your/image.jpg public/images/yoga-hero.jpg
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** to view the site

## 🖼️ Customizing Your Hero Image

To add your custom yoga/wellness image:

1. **Save your image** as `public/images/yoga-hero.jpg`
2. **Supported formats**: JPG, PNG, WebP
3. **Recommended size**: 1920x1080 or higher
4. **Aspect ratio**: 16:9 (landscape) works best

The hero section will automatically use your image with a beautiful overlay effect.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, Poppins)

## 🎨 Features

### 🧭 Navigation
- **Fully transparent** navbar on hero section
- **Dynamic backgrounds** appear when scrolling
- **Centered menu** with pill-shaped button effects
- **Smooth hover animations** and underlines

### 🏠 Hero Section
- **Full-screen background** with your custom image
- **Layered typography** with staggered animations
- **Scroll indicators** and page numbering
- **Responsive design** that scales beautifully

### 📋 Content Sections
1. **Services** - Interactive cards with hover effects
2. **Pricing** - Weekly/monthly toggle with animations
3. **Team** - Split layout with testimonials
4. **Client Reviews** - Auto-rotating carousel
5. **Gallery** - Image grid with lightbox effects
6. **Contact** - Info cards with embedded map
7. **Newsletter** - Email signup with background
8. **Footer** - Organized links and social media

### 🎭 Animations & Interactions
- **Scroll-triggered animations** for all sections
- **Hover effects** on cards, buttons, and links
- **Smooth transitions** between states
- **Loading animations** and progressive enhancement

## 📱 Responsive Design

- **Mobile-First** approach
- **Tablet optimizations**
- **Desktop enhancements**
- **Touch-friendly** interactions
- **Consistent experience** across all devices

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (follow the GitHub setup instructions below)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with one click!

### Other Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Configure in repository settings
- **Self-hosted**: Run `npm run build` and serve the `out` folder

## 📁 Project Structure

```
mindful-balance-website/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with all sections
├── public/
│   └── images/              # Your custom images
│       ├── yoga-hero.jpg    # Hero background image
│       └── README.md        # Image instructions
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors
Update CSS variables in `app/globals.css`:
```css
:root {
  --primary-blue: #7dd3fc;
  --secondary-blue: #0ea5e9;
  --light-gray: #f8fafc;
  /* Customize your brand colors */
}
```

### Content
- **Text content**: Edit directly in `app/page.tsx`
- **Images**: Replace files in `public/images/`
- **Animations**: Adjust Framer Motion props
- **Styling**: Modify CSS classes as needed

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Framer Motion** for beautiful animations
- **Unsplash** for placeholder images
- **Font Awesome** for icons
- **Google Fonts** for typography

## 📞 Support

If you have any questions or need help customizing your website:

- **Create an issue** on GitHub
- **Check the documentation** in the `/docs` folder
- **Review the code comments** for guidance

---

**Built with ❤️ for wellness professionals and yoga instructors**

*Transform your online presence with this modern, professional website template.* 