'use client';

import { useState, useEffect } from 'react';
import { Play, Heart, ExternalLink, Music } from 'lucide-react';
import Image from 'next/image';
import { channelData } from '@/lib/channelData';

interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
}

export default function VideoGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch YouTube videos on mount
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setIsLoadingVideos(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
        
        const response = await fetch(`/api/youtube?channelId=${channelData.channel.youtubeChannelId}`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        setVideos(data.videos || []);
        setError(null);
      } catch (err) {
        // Silently fail - show empty state
        setError(null);
      } finally {
        setIsLoadingVideos(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  // Load likes from localStorage on mount
  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('videoLikes');
      if (savedLikes) {
        setLikes(JSON.parse(savedLikes));
      }
    } catch (error) {
      console.log('[v0] Loading likes from localStorage');
    }
    setIsLoaded(true);
  }, []);

  // Toggle like for a video
  const toggleLike = (videoId: string) => {
    setLikes((prevLikes) => {
      const newLikes = {
        ...prevLikes,
        [videoId]: !prevLikes[videoId],
      };
      // Save to localStorage
      try {
        localStorage.setItem('videoLikes', JSON.stringify(newLikes));
      } catch (error) {
        console.log('[v0] Error saving likes');
      }
      return newLikes;
    });
  };

  return (
    <section id="videos" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Music size={16} className="text-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest">FEATURED SONGS</span>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-black mb-6">Latest Releases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the newest Bengali songs, exclusive music videos, and behind the scenes content from {channelData.channel.name}.
          </p>
        </div>

        {/* Loading State */}
        {isLoadingVideos && (
          <div className="col-span-full text-center py-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <p className="text-muted-foreground">Loading latest songs...</p>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoadingVideos && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">{error}</p>
          </div>
        )}

        {/* Video Grid */}
        {!isLoadingVideos && videos.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer h-full">
              <div 
                className="relative h-56 md:h-64 bg-secondary rounded-2xl overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/30"
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Thumbnail */}
                <Image 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = video.thumbnail;
                  }}
                />
                  
                {/* Overlay */}
                {hoveredId === video.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 transition-all">
                    <a href={video.youtubeId ? `https://youtube.com/watch?v=${video.youtubeId}` : channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <Play size={32} className="text-primary-foreground fill-primary-foreground ml-1" />
                    </a>
                  </div>
                )}

                {/* Duration Badge */}
                
              </div>

              {/* Video Info */}
              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                </div>
                
                {/* <div className="text-sm text-muted-foreground border-t border-border pt-3">
                  <span>{video.publishedAt}</span>
                </div> */}

                {/* Action Buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => toggleLike(video.id)}
                    className={`flex-1 py-3 rounded-lg transition-all text-sm font-bold flex items-center justify-center gap-2 ${
                      isLoaded && likes[video.id]
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                        : 'bg-secondary/80 hover:bg-accent/30 text-foreground'
                    }`}
                  >
                    <Heart size={18} fill={isLoaded && likes[video.id] ? 'currentColor' : 'none'} />
                    {isLoaded && likes[video.id] ? 'Liked' : 'Like'}
                  </button>
                  <a href={video.youtubeId ? `https://youtube.com/watch?v=${video.youtubeId}` : channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-lg bg-accent text-primary-foreground hover:opacity-90 transition-all text-sm font-bold flex items-center justify-center gap-2 shadow-lg">
                    <Play size={16} />
                    Play
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Empty State */}
        {!isLoadingVideos && videos.length === 0 && !error && (
          <div className="col-span-full text-center py-12">
            <Music size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground" id='NOA'>No videos available. Please try to reload this page.</p>
          </div>
        )}

        {videos.length > 0 && (
        <div className="mt-20 text-center">
          <a href={channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-12 py-5 bg-gradient-to-r from-accent to-accent/80 text-primary-foreground rounded-xl hover:opacity-90 transition-all font-bold text-lg shadow-2xl hover:shadow-accent/40 hover:scale-105">
            <Music size={24} />
            <span>Subscribe & Watch All Songs on YouTube</span>
            <ExternalLink size={20} />
          </a>
        </div>
        )}
      </div>
    </section>
  );
}
