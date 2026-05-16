# Chhadobeshi Music - Website Setup Guide

## Overview
This is a professional website for the YouTube channel "Chhadobeshi Music". The site is built with Next.js, React, and Tailwind CSS with a premium dark theme and gold accents.

## How to Update with Real Data

All channel data is centralized in `/lib/channelData.ts`. Update this file to customize your website:

### 1. Channel Owner Information
```typescript
owner: {
  name: "Chhadobeshi Music",           // Artist/Channel name
  role: "Independent Music Artist & Producer",  // Your role/title
  bio: "Creating authentic and innovative music...",  // Short bio
  image: "/artist-profile.jpg",        // Path to your profile image (place in /public)
}
```

### 2. Channel Statistics
```typescript
channel: {
  name: "Chhadobeshi Music",
  subscriberCount: "10K+",             // Update with real subscriber count
  videoCount: "50+",                   // Update with real video count
  totalViews: "500K+",                 // Update with real view count
  youtubeUrl: "https://youtube.com/@chhadobeshimusic",  // Your YouTube URL
}
```

### 3. Featured Videos
Update the videos array with your actual videos:
```typescript
{
  id: "video1",
  title: "Your Video Title",
  description: "Video description",
  views: "2.5K",                       // View count
  uploadedDate: "3 days ago",          // Upload date
  duration: "3:45",                    // Video duration
  thumbnail: "/video-thumbnail.jpg",   // Path to thumbnail (place in /public)
  youtubeId: "dQw4w9WgXcQ",            // YouTube video ID (optional, for direct links)
}
```

### 4. Social Media Links
Update all your social media platform URLs:
```typescript
social: {
  youtube: "https://youtube.com/@chhadobeshimusic",
  spotify: "https://open.spotify.com/artist/your-id",
  instagram: "https://instagram.com/your-handle",
  twitter: "https://twitter.com/your-handle",
  tiktok: "https://tiktok.com/@your-handle",
  soundcloud: "https://soundcloud.com/your-handle",
}
```

### 5. Contact Information
```typescript
contact: {
  email: "contact@chhadobeshimusic.com",
  phone: "+1 (555) 123-4567",          // Optional
  location: "City, Country",           // Optional
}
```

## Adding Images

### Profile Image
1. Place your profile/artist image in `/public/artist-profile.jpg`
2. Update `channelData.ts` with the correct path

### Video Thumbnails
1. Place your video thumbnails in `/public/` folder
2. Update each video entry in `channelData.ts` with the thumbnail path

### Recommended Image Specifications
- **Profile Image**: Square (1:1 aspect ratio), 1200x1200px or larger
- **Video Thumbnails**: Landscape (16:9 aspect ratio), 1280x720px or larger
- **Format**: JPG for best performance

## Getting YouTube Video IDs

To link directly to your videos on YouTube:
1. Go to your YouTube video
2. Copy the video ID from the URL: `youtube.com/watch?v={VIDEO_ID}`
3. Add it to the `youtubeId` field in the videos array

## Website Features

### Sections
1. **Navigation** - Sticky header with logo and menu
2. **Hero Section** - Featured artist introduction with profile image
3. **Video Gallery** - Grid of featured videos with hover effects
4. **About Section** - Artist biography and key features
5. **Footer** - Social links, contact info, and newsletter signup

### Design Elements
- **Color Scheme**: Black background (#000000) with gold accents (#d4af37)
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Animations**: Smooth hover effects and transitions throughout
- **Typography**: Professional font combinations for readability

## Customization Tips

### Change Colors
Edit `/app/globals.css` and update the color values:
- Primary: `#d4af37` (gold)
- Background: `#000000` (black)
- Secondary: `#1a1a1a` (dark gray)

### Modify Text Content
Update content directly in the components:
- Hero content: `/components/HeroSection.tsx`
- About content: `/components/AboutSection.tsx`
- Footer content: `/components/SocialFooter.tsx`

### Add More Videos
Simply add new objects to the `videos` array in `channelData.ts`

## Deployment

The website is ready to deploy to Vercel:
1. Connect your GitHub repository
2. Deploy directly from the Vercel dashboard
3. Your website will be live in minutes

## Support

For questions or customization needs, feel free to make changes directly to the code files. All components are modular and can be easily modified.

---

**Website Built With:**
- Next.js 15
- React 19
- Tailwind CSS v4
- Lucide Icons
