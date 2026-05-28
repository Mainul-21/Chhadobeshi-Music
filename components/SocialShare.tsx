'use client';

import { Share2, Facebook, Twitter, Link as LinkIcon, Mail } from 'lucide-react';
import { useState } from 'react';


interface SocialShareProps {
  title: string;
  videoId: string;
  description?: string;
}

export default function SocialShare({ title, videoId, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const videoUrl = `https://youtube.com/watch?v=${videoId}`;
  const shareText = `Check out "${title}" on Chhadobeshi Music`;

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(videoUrl)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description || shareText)}`,
      color: 'hover:text-accent'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${link.name}`}
            className={`p-2 rounded-lg transition-all duration-300 hover-lift hover-glow ${link.color}`}
          >
            <Icon size={18} />
          </a>
        );
      })}
      <button
        onClick={copyToClipboard}
        title="Copy link"
        className={`p-2 rounded-lg transition-all duration-300 hover-lift hover-glow ${
          copied ? 'text-accent' : 'hover:text-accent'
        }`}
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
}
