import Link from 'next/link';
import { Music, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-2xl fade-in-up">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
            <Music size={48} className="text-accent" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-accent mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Oops! Page Not Found</h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          The page you&apos;re looking for seems to have taken a different tune. Let us help you find your way back to the music!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary-foreground rounded-xl hover-lift font-bold text-lg transition-all shadow-lg"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#videos"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-accent text-accent rounded-xl hover:bg-accent/10 transition-all font-bold text-lg"
          >
            <Music size={20} />
            <span>Explore Music</span>
          </Link>
        </div>

        {/* Fun message */}
        <p className="text-muted-foreground mt-12 text-sm italic">
          Error 404: Beat not found 🎵
        </p>
      </div>
    </main>
  );
}
