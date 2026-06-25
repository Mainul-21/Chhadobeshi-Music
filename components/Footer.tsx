'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Youtube, Music, Instagram, Twitter, Facebook, MessageCircleHeartIcon, MessageCircleMoreIcon } from 'lucide-react';
import { channelData } from '@/lib/channelData';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-accent" />
              <span className="text-xl font-black">{channelData.channel.name}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {channelData.channel.description}
            </p>
            {/* ======= */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="#home" className="block text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="#videos" className="block text-muted-foreground hover:text-accent transition-colors">
                Videos
              </Link>
              <Link href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Streaming Platforms */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Streaming</h3>
            <div className="space-y-2">
              <a href={channelData.social.youtube} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Youtube size={18} />
                YouTube
              </a>

              <a href={channelData.social.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={18} />
                Instagram
              </a>

              <a href={channelData.social.facebook} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={18} />
                Facebook
              </a>

              <a href={channelData.social.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <MessageCircleMoreIcon size={18} />
                Whatsapp
              </a>
            </div>
          </div>

          {/* Contact Info */}
           <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{channelData.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${channelData.contact.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                  {channelData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${channelData.contact.email}`} 
                  className="text-muted-foreground hover:text-accent transition-colors">
                  {channelData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-1">
          <div className="text-sm text-muted-foreground cm"><br />
            <p>
              © {new Date().getFullYear()} {channelData.channel.name}. All rights reserved.
            </p> 
          </div>
        </div>
      </div>
    </footer>
  );
}
