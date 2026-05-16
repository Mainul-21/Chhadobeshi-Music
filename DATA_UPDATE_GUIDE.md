# Data Update Guide - Quick Reference

This is your quick reference for updating all channel data. **Everything is in ONE file**: `/lib/channelData.ts`

---

## 🎯 The Main File: `/lib/channelData.ts`

This single file controls ALL data displayed on your website.

### Structure Overview
```typescript
export const channelData = {
  owner: { /* Your artist info */ },
  channel: { /* Channel stats */ },
  videos: [ /* Featured videos */ ],
  social: { /* Social links */ },
  contact: { /* Contact info */ }
}
```

---

## 👤 Section 1: Owner Information

**What it controls**: Hero section, footer branding, about section

```typescript
owner: {
  name: "Chhadobeshi Music",              // Artist name displayed everywhere
  role: "Independent Music Artist & Producer",  // Your title/role
  bio: "Creating authentic and innovative...",  // Short biography
  image: "/artist-profile.jpg",           // Path to your profile pic
}
```

### Example Updates:
```typescript
// BEFORE (default)
owner: {
  name: "Chhadobeshi Music",
  role: "Independent Music Artist & Producer",
  bio: "Creating authentic and innovative music that resonates with audiences worldwide.",
  image: "/artist-profile.jpg",
}

// AFTER (your real data)
owner: {
  name: "Your Artist Name",
  role: "Singer-Songwriter & Producer",
  bio: "Creating soul-stirring melodies with modern production. Indie artist crafting authentic music.",
  image: "/my-profile.jpg",  // Use your own image name
}
```

### Where It Appears
- ✅ Navigation logo
- ✅ Hero section main title
- ✅ Footer branding
- ✅ Profile image display
- ✅ About section content

---

## 📊 Section 2: Channel Information

**What it controls**: Statistics display, YouTube links, navigation

```typescript
channel: {
  name: "Chhadobeshi Music",          // Channel name
  subscriberCount: "10K+",             // Your subscriber count
  videoCount: "50+",                   // Total videos uploaded
  totalViews: "500K+",                 // Total channel views
  youtubeUrl: "https://youtube.com/@chhadobeshimusic",  // Your channel URL
}
```

### Example Updates:
```typescript
// BEFORE
channel: {
  name: "Chhadobeshi Music",
  subscriberCount: "10K+",
  videoCount: "50+",
  totalViews: "500K+",
  youtubeUrl: "https://youtube.com/@chhadobeshimusic",
}

// AFTER (update with your real stats)
channel: {
  name: "Your Artist Name",
  subscriberCount: "25K+",              // Update this regularly!
  videoCount: "75+",
  totalViews: "1.2M+",
  youtubeUrl: "https://youtube.com/@your_channel_id",  // Your actual URL
}
```

### Where It Appears
- ✅ Hero section stats display (3 boxes)
- ✅ All "Subscribe" buttons
- ✅ Navigation subscribe button
- ✅ Footer
- ✅ About section

---

## 🎬 Section 3: Featured Videos

**What it controls**: Video gallery section

```typescript
videos: [
  {
    id: "video1",                       // Unique identifier
    title: "Your Video Title",          // Video name
    description: "Video description",   // Short description
    views: "2.5K",                      // View count
    uploadedDate: "3 days ago",         // When posted
    duration: "3:45",                   // Video length (MM:SS)
    thumbnail: "/video-thumbnail.jpg",  // Image path
    youtubeId: "",                      // YouTube video ID (optional)
  },
  // Add more videos...
]
```

### Complete Example:
```typescript
videos: [
  {
    id: "video1",
    title: "My Latest Single - 'Beautiful Journey'",
    description: "New Release",
    views: "5.2K",
    uploadedDate: "2 days ago",
    duration: "4:12",
    thumbnail: "/latest-single.jpg",
    youtubeId: "dQw4w9WgXcQ",  // Optional: YouTube video ID
  },
  {
    id: "video2",
    title: "Behind The Scenes - Studio Session",
    description: "Making The Track",
    views: "1.8K",
    uploadedDate: "1 week ago",
    duration: "8:20",
    thumbnail: "/bts-studio.jpg",
    youtubeId: "",
  },
  {
    id: "video3",
    title: "Live Performance - City Concert",
    description: "Exclusive Performance",
    views: "3.1K",
    uploadedDate: "3 weeks ago",
    duration: "12:45",
    thumbnail: "/live-performance.jpg",
    youtubeId: "",
  },
  // Add up to 6 featured videos
]
```

### How to Get YouTube Video ID:
When you're on YouTube, the URL looks like:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                   ↑
                            This is the ID!
```
Copy that ID (e.g., `dQw4w9WgXcQ`) and paste it in the `youtubeId` field.

### Where It Appears
- ✅ Main video gallery (3 columns on desktop)
- ✅ Video cards with thumbnails
- ✅ Watch buttons link to YouTube
- ✅ View counts and dates

---

## 📱 Section 4: Social Media Links

**What it controls**: Footer social links section

```typescript
social: {
  youtube: "https://youtube.com/@your_channel",  // YouTube URL
  spotify: "https://open.spotify.com/artist/id", // Spotify profile
  instagram: "https://instagram.com/your_handle", // Instagram profile
  twitter: "https://twitter.com/your_handle",    // Twitter/X profile
  tiktok: "https://tiktok.com/@your_handle",     // TikTok profile
  soundcloud: "https://soundcloud.com/your_name", // SoundCloud profile
}
```

### Example Updates:
```typescript
// BEFORE (placeholder)
social: {
  youtube: "https://youtube.com/@chhadobeshimusic",
  spotify: "https://open.spotify.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  tiktok: "https://tiktok.com",
  soundcloud: "https://soundcloud.com",
}

// AFTER (your real links)
social: {
  youtube: "https://youtube.com/@mayamusic",
  spotify: "https://open.spotify.com/artist/7bJ8d9sA2kL9mN0oP3qR5sT7u",
  instagram: "https://instagram.com/mayamusician",
  twitter: "https://twitter.com/mayamusic",
  tiktok: "https://tiktok.com/@mayamusician",
  soundcloud: "https://soundcloud.com/maya-music",
}
```

### Where It Appears
- ✅ Footer - Streaming Platforms section
- ✅ Footer - Social links icons
- ✅ Footer - Quick links section

---

## 📧 Section 5: Contact Information

**What it controls**: Footer contact section

```typescript
contact: {
  email: "contact@chhadobeshimusic.com",  // Email address
  phone: "+1 (555) 123-4567",             // Phone (optional)
  location: "City, Country",              // Location (optional)
}
```

### Example Updates:
```typescript
// BEFORE
contact: {
  email: "contact@chhadobeshimusic.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
}

// AFTER (your real info)
contact: {
  email: "maya@mayamusic.com",
  phone: "+1 (415) 555-0123",
  location: "San Francisco, USA",
}
```

### Where It Appears
- ✅ Footer - Brand section
- ✅ Contact form submission
- ✅ Email link in footer

---

## 🖼️ Image File Paths

Your images should be placed in `/public/` folder. Update paths in `channelData.ts` to match.

### Profile Image
```
File location: /public/artist-profile.jpg
Data path: owner.image: "/artist-profile.jpg"
Size: 1200x1200px (square)
```

### Video Thumbnails
```
File location: /public/my-video-thumbnail.jpg
Data path: videos[0].thumbnail: "/my-video-thumbnail.jpg"
Size: 1280x720px (16:9 ratio)
```

### Example File Structure:
```
/public/
├── artist-profile.jpg        ← Your profile image
├── latest-single.jpg         ← Video 1 thumbnail
├── bts-studio.jpg           ← Video 2 thumbnail
├── live-performance.jpg     ← Video 3 thumbnail
└── ...more thumbnails
```

---

## ⚡ Common Updates You'll Make

### Update 1: New Video Release
```typescript
// Add to the videos array:
{
  id: "video7",
  title: "My Brand New Single",
  description: "Fresh Release",
  views: "1.2K",                    // Views will grow, update later
  uploadedDate: "Today",            // Update as needed
  duration: "3:50",
  thumbnail: "/new-single.jpg",
  youtubeId: "newVideoID123",
}
```

### Update 2: Subscriber Milestone
```typescript
channel: {
  subscriberCount: "50K+",  // Update when you hit milestone
  // ... rest stays same
}
```

### Update 3: New Social Media Account
```typescript
social: {
  youtube: "https://youtube.com/@yourname",
  // Add new platform:
  youtube_shorts: "https://youtube.com/@yourname/shorts",  // New field
  // ... rest stays same
}
```

---

## 🔄 Update Schedule

### Daily/Weekly
- View counts (optional but nice to keep current)
- New videos added to gallery

### Monthly
- Subscriber count
- Total view count
- Remove old videos from featured list
- Add new featured videos

### Quarterly
- Update social media links (if changed)
- Update contact information
- Update biography if changed
- Check all links still work

---

## 📋 Quick Checklist

Before launching your website:

- [ ] Artist name is correct
- [ ] Artist bio is updated
- [ ] Profile image is added (`/public/artist-profile.jpg`)
- [ ] All statistics are accurate
- [ ] At least 3 videos are added
- [ ] Video thumbnails are in `/public/`
- [ ] YouTube channel URL is correct
- [ ] Social media links are all correct
- [ ] Email address is correct
- [ ] All images are high quality
- [ ] Website tested on phone/tablet/desktop

---

## 🎯 Starting Your Updates

### Step 1: Open the File
```
/lib/channelData.ts
```

### Step 2: Update Each Section
1. Owner info (name, role, bio, image)
2. Channel info (stats, YouTube URL)
3. Videos (titles, descriptions, thumbnails)
4. Social links (all platforms)
5. Contact info (email, phone)

### Step 3: Add Images
```
/public/artist-profile.jpg
/public/video-thumbnail-1.jpg
/public/video-thumbnail-2.jpg
... etc
```

### Step 4: Deploy
Push to GitHub and deploy to Vercel!

---

## 🆘 Need Help?

### "Where do I put my profile image?"
Answer: Save it as `/public/artist-profile.jpg` (or rename to match your filename)

### "How do I update view counts?"
Answer: Change the `views: "X.XK"` in each video object in the `videos` array

### "My social links don't show up"
Answer: Make sure the URLs are complete (include `https://`) and the format is correct

### "Where do I find my YouTube video ID?"
Answer: Look in the YouTube URL after `v=` parameter

### "Can I have more than 6 videos?"
Answer: Yes! Just add more objects to the `videos` array (though only 6 display nicely in the grid)

---

## 💡 Pro Tips

✨ **Keep videos ordered** - Most recent first makes best impression

📸 **Use high-quality images** - 1200x1200px for profile, 1280x720px for videos

🔗 **Test all links** - Click every social link and YouTube button to verify they work

📊 **Update regularly** - Keep subscriber counts and view counts current

🎯 **Keep descriptions short** - One-liners work best in the gallery

📱 **Test on mobile** - Most visitors use phones!

---

## Example: Complete Real-World Update

Here's what a completed, real website might look like:

```typescript
export const channelData = {
  owner: {
    name: "Maya Chen",
    role: "Singer-Songwriter & Producer",
    bio: "Creating soulful indie music that explores love, identity, and self-discovery. Based in San Francisco.",
    image: "/maya-profile.jpg",
  },

  channel: {
    name: "Maya Chen Music",
    subscriberCount: "42K+",
    videoCount: "87+",
    totalViews: "2.3M+",
    youtubeUrl: "https://youtube.com/@mayachenmusic",
  },

  videos: [
    {
      id: "video1",
      title: "Reflection - Official Music Video",
      description: "Latest Single Out Now",
      views: "15.2K",
      uploadedDate: "5 days ago",
      duration: "4:12",
      thumbnail: "/reflection-video.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "video2",
      title: "Studio Session: Making 'Reflection'",
      description: "Behind The Scenes",
      views: "8.4K",
      uploadedDate: "2 weeks ago",
      duration: "18:35",
      thumbnail: "/studio-session.jpg",
      youtubeId: "jNQXAC9IVRw",
    },
    // ... more videos
  ],

  social: {
    youtube: "https://youtube.com/@mayachenmusic",
    spotify: "https://open.spotify.com/artist/7bJ8d9sA2kL9mN0oP3qR5sT7u",
    instagram: "https://instagram.com/mayachenmusic",
    twitter: "https://twitter.com/mayachenmusic",
    tiktok: "https://tiktok.com/@mayachenmusic",
    soundcloud: "https://soundcloud.com/maya-chen-music",
  },

  contact: {
    email: "hello@mayachenmusic.com",
    phone: "+1 (415) 555-0123",
    location: "San Francisco, California",
  },
}
```

---

**You're ready! Start updating `/lib/channelData.ts` now!** 🚀
