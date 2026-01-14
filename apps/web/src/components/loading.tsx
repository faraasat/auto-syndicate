export function SkeletonCard() {
  return (
    <div className="glass rounded-xl border border-white/10 p-6 animate-pulse">
      <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-white/10 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-white/10 rounded w-2/3"></div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="glass rounded-xl border border-white/10 p-6 h-[300px] flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin mx-auto"></div>
        <div className="text-sm text-muted-foreground animate-pulse">
          Loading chart data...
        </div>
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="glass rounded-lg border border-white/10 p-4 animate-pulse"
        >
          <div className="flex gap-4">
            <div className="h-4 bg-white/10 rounded w-1/4"></div>
            <div className="h-4 bg-white/10 rounded w-1/3"></div>
            <div className="h-4 bg-white/10 rounded w-1/5"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin`}
    ></div>
  );
}

export function LoadingOverlay({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Spinner size="lg" />
        <div className="text-neon-cyan font-mono tracking-wider uppercase animate-pulse">
          {message}
        </div>
      </div>
    </div>
  );
}
