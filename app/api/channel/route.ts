import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get('channelId');

  if (!channelId) {
    return NextResponse.json(
      { error: 'channelId is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error('[v0] YOUTUBE_API_KEY not configured');
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch channel details from YouTube API
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('[v0] YouTube API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch channel data from YouTube API' },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      console.error('[v0] Channel not found:', channelId);
      return NextResponse.json(
        { error: 'Channel not found' },
        { status: 404 }
      );
    }

    const channel = data.items[0];
    const snippet = channel.snippet;
    const statistics = channel.statistics;

    const channelData = {
      name: snippet.title,
      description: snippet.description,
      image: snippet.thumbnails?.high?.url || '',
      subscriberCount: statistics.subscriberCount || '0',
      videoCount: statistics.videoCount || '0',
      viewCount: statistics.viewCount || '0',
    };

    console.log('[v0] Successfully fetched channel data:', channelData.name);
    return NextResponse.json({ channel: channelData });
  } catch (error) {
    console.error('[v0] Error fetching channel:', error);
    return NextResponse.json(
      { error: 'Failed to fetch channel data' },
      { status: 500 }
    );
  }
}
