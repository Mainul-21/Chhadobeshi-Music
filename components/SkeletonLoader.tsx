'use client';

export function ChannelStatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-5 pt-12 border-t border-accent/20">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <div className="h-10 bg-secondary rounded-lg shimmer-loading"></div>
          <div className="h-4 bg-secondary rounded-lg shimmer-loading w-20"></div>
        </div>
      ))}
    </div>
  );
}

export function VideoCardSkeleton() {
  return (
    <div className="group cursor-pointer h-full">
      <div className="relative h-56 md:h-64 bg-secondary rounded-2xl overflow-hidden border-2 border-accent/20">
        <div className="w-full h-full shimmer-loading"></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-5 bg-secondary rounded-lg shimmer-loading w-full"></div>
        <div className="h-4 bg-secondary rounded-lg shimmer-loading w-3/4"></div>
        <div className="flex gap-3 pt-2">
          <div className="h-10 bg-secondary rounded-lg shimmer-loading flex-1"></div>
          <div className="h-10 bg-secondary rounded-lg shimmer-loading flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export function VideoGallerySkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <VideoCardSkeleton key={i} />
      ))}
    </div>
  );
}
