# Chhadobeshi Music - Professional Website

A premium, responsive website for the YouTube music channel "Chhadobeshi Music". Built with Next.js 15, React 19, and Tailwind CSS v4.

## ✨ Features

### Design & UX
- **Premium Dark Theme** - Elegant black background with sophisticated gold (#d4af37) accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Professional hover effects and transitions throughout
- **Fast Performance** - Optimized images and lazy loading

### Website Sections
1. **Sticky Navigation** - Fixed header with logo, navigation links, and subscribe button
2. **Hero Section** - Featured artist introduction with profile image and channel statistics
3. **Video Gallery** - Interactive grid of featured videos with hover effects and direct YouTube links
4. **About Section** - Artist biography and key features/values
5. **Social Footer** - Complete footer with social links, contact info, newsletter signup, and quick links

### Key Features
- ✅ Artist profile image integration
- ✅ Real video thumbnails with metadata
- ✅ Channel statistics display (subscribers, videos, views)
- ✅ Social media links for all platforms
- ✅ Responsive video gallery with hover effects
- ✅ Email newsletter subscription form
- ✅ Contact information section
- ✅ Direct YouTube channel linking

## 🚀 Quick Start

### 1. Update Channel Data
Edit `/lib/channelData.ts` with your information:
- Artist name and role
- Channel statistics (subscribers, videos, views)
- Featured video information
- Social media links
- Contact details

### 2. Add Your Images
Place images in `/public/` folder:
- **Profile Image**: `artist-profile.jpg` (1200x1200px)
- **Video Thumbnails**: `video-thumbnail.jpg` (1280x720px)

### 3. Deploy
The website is ready to deploy to Vercel with one click!

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── Navigation.tsx       # Sticky header navigation
│   ├── HeroSection.tsx      # Hero banner with artist intro
│   ├── VideoGallery.tsx     # Featured videos grid
│   ├── AboutSection.tsx     # Artist biography
│   └── SocialFooter.tsx     # Footer with social links
├── lib/
│   └── channelData.ts       # Centralized channel configuration
└── public/
    ├── artist-profile.jpg   # Artist profile image
    └── video-thumbnail.jpg  # Video thumbnail template
```

## 🎨 Design System

### Color Palette
- **Primary**: Gold (#d4af37) - Accents and highlights
- **Background**: Black (#000000) - Main background
- **Secondary**: Dark Gray (#1a1a1a) - Secondary backgrounds
- **Foreground**: White (#ffffff) - Text and primary content
- **Muted**: Gray (#888888) - Secondary text

### Typography
- **Headings**: Bold, large font sizes (up to 7xl)
- **Body**: Regular weight with 1.5-1.6 line height
- **Accents**: Gold color for important elements

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Colors
Edit the color values in `/app/globals.css`:
```css
:root {
  --primary: #d4af37;        /* Gold accents */
  --background: #000000;     /* Black background */
  --secondary: #1a1a1a;      /* Dark gray */
}
```

### Update Content
Edit text directly in component files:
- Hero text: `/components/HeroSection.tsx`
- About text: `/components/AboutSection.tsx`
- Footer text: `/components/SocialFooter.tsx`

### Add Videos
Add entries to the `videos` array in `/lib/channelData.ts`

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Responsive grid layouts
- Mobile navigation menu
- Optimized image loading
- Readable font sizes on small screens

## 🔗 Integration Points

### YouTube
- Direct links to YouTube channel
- Video-specific links (when YouTube IDs provided)
- Subscribe buttons throughout the site

### Social Media
- All major platforms supported
- Streaming platform links (Spotify, Apple Music, etc.)
- Email subscription form

## 📊 SEO Optimized

- Semantic HTML structure
- Proper metadata and descriptions
- Fast loading performance
- Mobile-friendly design
- Structured data ready

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui + Lucide Icons
- **Icons**: Lucide Icons
- **Image Optimization**: Next.js Image component

## 📝 Configuration File

All channel information is managed in `/lib/channelData.ts`:

```typescript
export const channelData = {
  owner: { /* Artist info */ },
  channel: { /* Channel stats */ },
  videos: [ /* Featured videos */ ],
  social: { /* Social links */ },
  contact: { /* Contact info */ }
}
```

## 🎯 Getting Started with Updates

1. **Most Important**: Update `/lib/channelData.ts` with your real data
2. **Add Images**: Place your profile and video images in `/public/`
3. **Deploy**: Push to GitHub and deploy from Vercel dashboard
4. **Share**: Your website is live!

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Setup Guide](./SETUP.md) - Detailed setup instructions

## 💡 Tips

- Keep video thumbnails consistent in style and dimensions
- Use high-quality profile images (at least 1200x1200px)
- Update subscriber count and view count regularly
- Add new videos to keep content fresh
- Test on mobile devices before deploying

## 📧 Support

For any questions or customization needs, refer to the code structure and modify components directly. All files are well-documented and modular.

---

**Built with ❤️ for music artists**

© 2026 Chhadobeshi Music. All rights reserved.

