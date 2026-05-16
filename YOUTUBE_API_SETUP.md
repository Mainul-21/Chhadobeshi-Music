# YouTube API Integration Setup Guide

## Overview
This guide explains how to set up YouTube Data API v3 to dynamically fetch and display the latest videos from your Chhadobeshi Music YouTube channel.

## Prerequisites
- A Google Cloud Project
- YouTube Data API v3 enabled
- A valid API Key
- Your YouTube Channel ID

## Step 1: Get Your YouTube Channel ID

1. Go to your YouTube channel: https://youtube.com/@chhadobeshimusic
2. Click the "About" tab
3. Copy the Channel ID from the URL or channel details
4. Update the `youtubeChannelId` in `/lib/channelData.ts`

## Step 2: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project"
3. Enter project name (e.g., "Chhadobeshi Music")
4. Click "Create"

## Step 3: Enable YouTube Data API v3

1. In the Google Cloud Console, search for "YouTube Data API v3"
2. Click on it and press "Enable"
3. Wait for it to be enabled (usually takes a few seconds)

## Step 4: Create an API Key

1. Go to "Credentials" in the left sidebar
2. Click "Create Credentials" > "API Key"
3. Copy the API Key
4. Click "Restrict Key" and set restrictions to YouTube Data API v3 only

## Step 5: Add API Key to Your Project

### Local Development (VS Code)
1. Create a `.env.local` file in the project root:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```
2. Replace `your_api_key_here` with your actual API key
3. Restart your dev server (Ctrl+C and `npm run dev`)

### Production (Vercel)
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add new variable:
   - Key: `YOUTUBE_API_KEY`
   - Value: Your YouTube API key
4. Redeploy your project

## Step 6: Update Channel ID

1. Open `/lib/channelData.ts`
2. Find the `youtubeChannelId` field
3. Replace the placeholder with your actual YouTube channel ID

## Testing

1. Start your dev server: `npm run dev`
2. Navigate to http://localhost:3000
3. Scroll to the "Latest Releases" section
4. You should see your 6-10 latest YouTube videos loading dynamically

## API Response Format

The `/api/youtube` endpoint returns:
```json
{
  "videos": [
    {
      "id": "video_id",
      "youtubeId": "youtube_video_id",
      "title": "Video Title",
      "description": "Video description",
      "thumbnail": "thumbnail_url",
      "publishedAt": "2024-01-15T10:30:00Z",
      "channelTitle": "Channel Name"
    }
  ]
}
```

## Troubleshooting

### "API key not configured"
- Ensure `YOUTUBE_API_KEY` is set in environment variables
- Restart your dev server after adding the env var

### "Failed to fetch videos"
- Check that YouTube Data API v3 is enabled in Google Cloud Console
- Verify your API key has correct restrictions
- Check channel ID is correct

### Videos not loading
- Wait a few seconds (API may be initializing)
- Check browser console for error messages
- Verify channel has public videos

## Rate Limiting

YouTube Data API v3 has quota limits:
- 10,000 units/day for free tier
- Each search costs 100 units
- Adjust maxResults in `/app/api/youtube/route.ts` if needed

## Security Notes

- Never commit your API key to version control
- Always use environment variables
- The API key is only used server-side in `/app/api/youtube/route.ts`
- Frontend requests go through the backend route for security
Created by Tarik