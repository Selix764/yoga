# MindfulBalance - Wellness Website

A modern, responsive wellness and psychology website built with Next.js, TypeScript, and Framer Motion animations. This landing page features a clean, airy design with smooth animations and a comprehensive user experience.

## 🖼️ **Adding Your Hero Image**

To add your custom yoga hero image:

1. **Place your image** in the `public/images/` directory
2. **Name it exactly**: `yoga-hero.jpg` (or `.png`, `.webp`)
3. **Refresh the browser** to see your image

### Requirements:
- **Filename**: `yoga-hero.jpg`
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 1920x1080 or higher
- **Aspect ratio**: 16:9 (landscape) works best

### Directory Structure:
```
public/
  images/
    yoga-hero.jpg  ← Your image goes here
    README.md
```

## 🌟 Features

- **Modern Design**: Clean, minimalist layout with plenty of white space
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Dynamic pricing toggle, testimonial carousel, and more
- **Accessibility**: Semantic HTML and good contrast ratios
- **Performance**: Optimized images and efficient Next.js architecture
- **Local Images**: Uses internal image files for better performance

## 🎨 Design Elements

### Visual Style
- Light color palette with whites, cool grays, and soft blues
- Elegant Inter and Poppins font families
- Subtle gradients and transparent overlays
- Rounded, soft buttons and cards
- Transparent navigation bar
- Your custom hero background image

### Layout Structure
1. **Hero Section** - Full-width background with your custom image
2. **Services Section** - Grid of service cards with hover effects
3. **Pricing Section** - Toggle between weekly/monthly pricing
4. **Team Section** - Split layout with image and testimonial
5. **Testimonials** - Automatic carousel with navigation
6. **Gallery** - Image grid with hover zoom effects
7. **Contact Section** - Contact info with embedded map
8. **Newsletter** - Email signup with background image
9. **Footer** - Links and social media

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd yoga
```

2. Install dependencies
```bash
npm install
```

3. **Add your hero image**
```bash
# Place your image in public/images/yoga-hero.jpg
cp /path/to/your/image.jpg public/images/yoga-hero.jpg
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Animations**: Framer Motion
- **Images**: Next.js Image component + Local files
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
yoga/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/
│   └── images/              # Your custom images
│       ├── yoga-hero.jpg    # Hero background image
│       └── README.md        # Image instructions
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── README.md               # Project documentation
```

## 🎯 Key Features

### Interactive Elements
- **Mobile Navigation**: Responsive hamburger menu
- **Pricing Toggle**: Switch between weekly and monthly pricing
- **Testimonial Carousel**: Auto-rotating with manual navigation
- **Hover Effects**: Cards lift and images zoom on interaction
- **Smooth Scrolling**: Animated scroll behavior throughout
- **Transparent Navigation**: Clean overlay navigation

### Animations
- **Hero Section**: Staggered text animations on load
- **Scroll Animations**: Elements fade in as they come into view
- **Hover States**: Smooth transitions on interactive elements
- **Clean Layout**: Removed clutter for minimal aesthetic

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adjusted layouts for medium screens
- **Desktop Enhanced**: Full feature set on large screens
- **Touch-Friendly**: Appropriate touch targets and interactions

## 🎨 Customization

### Adding Your Hero Image
1. **Save your image** as `public/images/yoga-hero.jpg`
2. **Supported formats**: JPG, PNG, WebP
3. **Automatic fallback**: Blue gradient if image not found

### Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --primary-blue: #7dd3fc;
  --secondary-blue: #0ea5e9;
  --light-gray: #f8fafc;
  /* ... */
}
```

### Content
- Update text content directly in `app/page.tsx`
- Replace images by adding files to `public/images/`
- Modify animations by adjusting Framer Motion props

### Styling
- Global styles in `app/globals.css`
- Component-specific styles can be added as CSS modules
- All styles use modern CSS features (Grid, Flexbox, CSS Variables)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Performance Optimizations
- Next.js Image component for optimized loading
- Local image files for faster loading
- CSS optimizations and minimal JavaScript
- Efficient re-renders with React best practices

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ using Next.js and modern web technologies. 