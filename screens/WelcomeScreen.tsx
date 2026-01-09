import React from 'react';
import { View } from '../types';

interface WelcomeScreenProps {
  onNavigate: (view: View) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background text-white h-full w-full overflow-hidden font-mono flex flex-col items-center justify-center relative">
        {/* Grid Background Effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>

      <div className="w-full max-w-md h-full flex flex-col p-6 relative z-10 border-x-2 border-neutral-900 bg-background/90 backdrop-blur-sm animate-fade-in">
        <div className="mt-8 mb-12">
          <h1 className="font-display text-8xl text-white uppercase leading-[0.8] tracking-tighter mb-6">
            3AM
          </h1>
          <div className="border-l-4 border-primary pl-4 py-1">
            <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest leading-relaxed">
              Say what you can't<br />during the day.
            </p>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-start w-full space-y-0">
          <div className="w-full border-2 border-neutral-800 bg-surface p-5 flex items-start gap-5 hover:bg-neutral-900 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">nights_stay</span>
            <div className="flex flex-col items-start space-y-1">
              <span className="text-white font-bold uppercase tracking-wider text-sm">No Likes</span>
              <span className="text-neutral-500 text-xs">Zero social pressure</span>
            </div>
          </div>
          <div className="w-full border-x-2 border-b-2 border-neutral-800 bg-surface p-5 flex items-start gap-5 hover:bg-neutral-900 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
            <div className="flex flex-col items-start space-y-1">
              <span className="text-white font-bold uppercase tracking-wider text-sm">Just Thoughts</span>
              <span className="text-neutral-500 text-xs">Pure text expression</span>
            </div>
          </div>
          <div className="w-full border-x-2 border-b-2 border-neutral-800 bg-surface p-5 flex items-start gap-5 hover:bg-neutral-900 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">visibility_off</span>
            <div className="flex flex-col items-start space-y-1">
              <span className="text-white font-bold uppercase tracking-wider text-sm">Anonymous</span>
              <span className="text-neutral-500 text-xs">Hidden by default</span>
            </div>
          </div>
        </div>

        <div className="pb-10 w-full space-y-6">
          <button 
            onClick={() => onNavigate(View.FEED)}
            className="w-full relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-white translate-x-1.5 translate-y-1.5 transition-transform group-active:translate-x-0 group-active:translate-y-0"></div>
            <div className="relative w-full py-5 bg-primary border-[3px] border-black flex items-center justify-center transition-transform group-active:translate-x-1.5 group-active:translate-y-1.5">
              <span className="font-display text-white tracking-widest uppercase text-xl z-10">Enter 3AM</span>
            </div>
          </button>
          
          <div className="flex justify-between items-center border-t-2 border-neutral-900 pt-4">
            <span className="text-[10px] text-neutral-600 uppercase tracking-widest">v2.0.4 // Build 8892</span>
            <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};
