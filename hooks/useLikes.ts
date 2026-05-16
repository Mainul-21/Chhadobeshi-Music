import { useState, useEffect } from 'react';

export function useLikes() {
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load likes from localStorage on mount
  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('videoLikes');
      if (savedLikes) {
        setLikes(JSON.parse(savedLikes));
      }
    } catch (error) {
      console.error('[v0] Error loading likes:', error);
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
        console.error('[v0] Error saving likes:', error);
      }
      return newLikes;
    });
  };

  return {
    likes,
    isLiked: (videoId: string) => likes[videoId] || false,
    toggleLike,
    isLoaded,
  };
}
