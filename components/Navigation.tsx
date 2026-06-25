'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { channelData } from '@/lib/channelData';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Channel Info */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src=".\logo.png"
                alt={channelData.channel.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-black tracking-tight" style={{
              "fontFamily":"Segoe Print",
              "fontSize":"30px"
            }}>{channelData.channel.name}</p>
            </div>
            <div className="sm:hidden">
              <p className="text-lg font-black tracking-tight" style={{
              "fontFamily":"Segoe Print",
              "fontSize":"20px"
            }}>{channelData.channel.name}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" style={{
              "fontSize":"17px"
            }}>
            <Link href="#home" className="hover:text-accent transition-colors font-medium hover-scale hover-lift">Home</Link>
            <Link href="#videos" className="hover:text-accent transition-colors font-medium hover-scale hover-lift">Videos</Link>
            <Link href="#about" className="hover:text-accent transition-colors font-medium hover-scale hover-lift">About</Link>
            <Link href="#contact" className="hover:text-accent transition-colors font-medium hover-scale hover-lift">Contact</Link>
            <ThemeToggle />
            <a href={channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer" 
              className="px-6 py-2 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold hover-scale">
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="#home" onClick={() => setIsOpen(false)} className="block hover:text-accent transition-colors py-2 font-medium">Home</Link>
            <Link href="#videos" onClick={() => setIsOpen(false)} className="block hover:text-accent transition-colors py-2 font-medium">Videos</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-accent transition-colors py-2 font-medium">About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-accent transition-colors py-2 font-medium">Contact</Link>
            <a href={channelData.channel.youtubeUrl} target="_blank" rel="noopener noreferrer" 
              className="block px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-center">
              Subscribe on YouTube
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
