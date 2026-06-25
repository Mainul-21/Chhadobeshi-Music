'use client';

import { Music, Award, Users, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import { channelData } from '@/lib/channelData';

interface ChannelInfo {
  name: string;
  description: string;
  image: string;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export default function AboutSection() {
  const [realChannelData, setRealChannelData] = useState<ChannelInfo | null>(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(`/api/channel?channelId=${channelData.channel.youtubeChannelId}`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setRealChannelData(data.channel);
        }
      } catch (error) {
        // Silently fail - use static data
      }
    };

    fetchChannelData();
  }, []);
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Music size={16} className="text-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest">THE ARTIST</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">{channelData.owner.name}</h2>
          <p className="text-xl text-accent font-semibold">{channelData.owner.role}</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div className="space-y-6">
            
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sudhanshu Barman is a song writer and music creator known for blending romantic melodies, emotional sad songs, and modern musical styles. His work focuses on expressing real feelings and stories through music that connects deeply with listeners. <br /> <br />From soulful romantic tracks to heartfelt emotional songs, he creates a unique sound that mixes tradition with a modern touch. Through original compositions, covers, and creative music content, Sudhanshu continues to explore and share meaningful musical experiences.
              </p>
            

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent rounded"></div>
                <span className="text-foreground font-semibold">Original compositions and heartfelt storytelling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent rounded"></div>
                <span className="text-foreground font-semibold">Professional production and mixing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent rounded"></div>
                <span className="text-foreground font-semibold">Collaborative projects with other artists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent rounded"></div>
                <span className="text-foreground font-semibold">Community-focused content and engagement</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Music size={64} className="mx-auto text-accent" />
                <p className="text-2xl font-black">INDEPENDENT</p>
                <p className="text-sm text-muted-foreground">Authentic Music Creation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-secondary/50 border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <Music className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Original Compositions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unique Bengali songs blending traditional heritage with modern sounds.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/50 border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Professional Quality</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Studio-grade mixing and mastering for every release.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/50 border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Global Community</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connect with music lovers worldwide and fellow creators.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/50 border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Continuous Growth</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Always evolving and improving with new releases and collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
