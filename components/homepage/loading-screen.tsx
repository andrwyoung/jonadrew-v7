"use client";

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col justify-center items-center animate-pulse">
        <span className="text-6xl font-logo text-text ">Jonadrew</span>
        <p className="text-sm font-medium tracking-widest">loading images...</p>
      </div>
    </div>
  );
}
