import { useState, useEffect } from "react";

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
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0f1117" }}>
      {showSplash ? (
        <div
          className={`flex flex-col items-center gap-6 transition-opacity duration-700 ${
            splashFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Icon */}
          <div className="splash-icon" style={{ animationDelay: "0s" }}>
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-mono font-bold"
              style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
            >
              {">"}_
            </div>
          </div>

          {/* Text */}
          <div className="flex items-baseline gap-2 text-3xl font-semibold tracking-tight">
            <span className="splash-text" style={{ color: "#3b82f6", animationDelay: "0.15s" }}>
              sakn's
            </span>
            <span className="splash-text" style={{ color: "#ffffff", animationDelay: "0.3s" }}>
              edits
            </span>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ color: "#ffffff" }}>
            Coming Soon
          </h1>
        </div>
      )}
    </div>
  );
};

export default Index;
