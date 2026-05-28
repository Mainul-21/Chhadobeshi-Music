'use client';
import { Play, Music } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { channelData } from '@/lib/channelData';
import { formatNumber } from '@/lib/formatters';
import { ChannelStatsSkeleton } from './SkeletonLoader';

interface ChannelInfo {
  name: string;
  description: string;
  image: string;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export default function HeroSection() {
  const [realChannelData, setRealChannelData] = useState<ChannelInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000); // 9 second timeout
        
        const response = await fetch(`/api/channel?channelId=${channelData.channel.youtubeChannelId}`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setRealChannelData(data.channel);
        }
      } catch (error) {
        // Silently fail - use fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchChannelData();
  }, []);

  // Use real data if available, fallback to static data
  const displayName = channelData.channel.name;
  const displaySubscribers = realChannelData ? formatNumber(realChannelData.subscriberCount) : channelData.channel.subscriberCount;
  const displayVideos = realChannelData ? formatNumber(realChannelData.videoCount) : channelData.channel.videoCount;
  const displayViews = realChannelData ? formatNumber(realChannelData.viewCount) : channelData.channel.totalViews;

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-black to-secondary relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      
      {/* Background Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/4 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-3xl fade-in-up">
          {/* Content */}
          <div className="space-y-8">
            {/* Music Icon Badge */}
            {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full w-fit">
              <Music size={18} className="text-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest">Music</span>
            </div> */}

              <p className="text-accent font-semibold text-4xl tracking-widest fade-in-down" id='welcomeT'>WELCOME TO</p>
            {/* Main Heading */}
            <div className="space-y-4 fade-in-up">
              <h1 className="text-6xl md:text-7xl font-black leading-tight text-balance hover-text-accent">
                {displayName}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md fade-in-up">
              {channelData.channel.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8 fade-in-up">
              <a href={channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary-foreground font-bold rounded-xl hover-lift text-lg shadow-lg">
                <Play size={20} />
                <span>Watch Now</span>
              </a>
              <Link href="#videos"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-accent text-accent rounded-xl hover:bg-accent/10 transition-all font-bold text-lg hover-lift hover-glow">
                <Music size={20} />
                <span>Explore Music</span>
              </Link>
            </div>

            {/* Stats Grid */}
            {isLoading ? (
              <ChannelStatsSkeleton />
            ) : (
              <div className="grid grid-cols-3 gap-5 pt-12 border-t border-accent/20 fade-in-up">
                <div className="space-y-2 hover-scale cursor-default">
                  <p className="text-4xl font-black text-accent">{displaySubscribers}</p>
                  <p className="text-muted-foreground text-sm font-semibold">Subscribers</p>
                </div>

                <div className="space-y-2 hover-scale cursor-default">
                  <p className="text-4xl font-black text-accent">{displayVideos}</p>
                  <p className="text-muted-foreground text-sm font-semibold">Songs</p>
                </div>

                <div className="space-y-2 hover-scale cursor-default">
                  <p className="text-4xl font-black text-accent">{displayViews}</p>
                  <p className="text-muted-foreground text-sm font-semibold">Reach</p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
