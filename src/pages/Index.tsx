import { useState, useEffect } from "react";
import { Camera } from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 2500);
    const hideTimer = setTimeout(() => setShowSplash(false), 3300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0b0d14" }}>
      {showSplash ? (
        <div
          className={`flex flex-col items-center gap-8 transition-opacity duration-700 ${
            splashFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Icon */}
          <div className="splash-icon relative">
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #4f8fff, #2563eb)",
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.35), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <Camera size={48} color="#fff" strokeWidth={1.8} />
            </div>
          </div>

          {/* Text */}
          <div className="flex items-baseline gap-2.5 text-[2rem] font-semibold tracking-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <span className="splash-text" style={{ color: "#4f8fff", animationDelay: "0.15s" }}>
              sakn's
            </span>
            <span className="splash-text" style={{ color: "rgba(255,255,255,0.9)", animationDelay: "0.3s" }}>
              edits
            </span>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Coming Soon
          </h1>
        </div>
      )}
    </div>
  );
};

export default Index;
