import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get('channelId');
    const apiKey = process.env.YOUTUBE_API_KEY;

    // Validate inputs
    if (!apiKey) {
      return NextResponse.json(
        { error: 'YouTube API key not configured' },
        { status: 500 }
      );
    }

    if (!channelId) {
      return NextResponse.json(
        { error: 'Channel ID is required' },
        { status: 400 }
      );
    }

    // Fetch from YouTube Data API v3
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.set('part', 'snippet');
    searchUrl.searchParams.set('channelId', channelId);
    searchUrl.searchParams.set('order', 'date');
    searchUrl.searchParams.set('maxResults', '9');
    searchUrl.searchParams.set('type', 'video');
    searchUrl.searchParams.set('key', apiKey);

    const response = await fetch(searchUrl.toString());

    if (!response.ok) {
      console.error('[v0] YouTube API error:', response.statusText);
      return NextResponse.json(
        { error: 'Failed to fetch YouTube videos' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Check if API returned an error
    if (data.error) {
      console.error('[v0] YouTube API error response:', data.error);
      return NextResponse.json(
        { error: `YouTube API error: ${data.error.message}` },
        { status: 400 }
      );
    }

    // Check if items exist
    if (!data.items || data.items.length === 0) {
      console.warn('[v0] No videos found for channel:', channelId);
      return NextResponse.json({ videos: [] });
    }

    // Transform YouTube API response to our format
    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      youtubeId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.medium?.url || '',
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
    }));

    console.log(`[v0] Successfully fetched ${videos.length} videos`);
    return NextResponse.json({ videos });
  } catch (error) {
    console.error('[v0] API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
