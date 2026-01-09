import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="w-full border-t border-border bg-background z-50 shrink-0 relative">
      <div className="flex justify-between items-center h-16 px-6">
        <button 
            onClick={() => onNavigate(View.FEED)}
            className="flex flex-col items-center justify-center gap-1 w-12 h-full group"
        >
          <span className={`material-symbols-outlined text-2xl transition-colors ${currentView === View.FEED ? 'text-white' : 'text-neutral-500 group-hover:text-white'} group-active:scale-95`}>home</span>
        </button>

        <button 
            onClick={() => onNavigate(View.MOODS)}
            className="flex flex-col items-center justify-center gap-1 w-12 h-full group"
        >
          <span className={`material-symbols-outlined text-2xl transition-colors ${currentView === View.MOODS ? 'text-white' : 'text-neutral-500 group-hover:text-white'} group-active:scale-95`}>cloud</span>
        </button>

        <div className="relative -top-6">
          <button 
            onClick={() => onNavigate(View.CREATE)}
            className="w-14 h-14 bg-primary border-2 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-white text-3xl font-bold">add</span>
          </button>
        </div>

        <button 
            onClick={() => onNavigate(View.SAVED)}
            className="flex flex-col items-center justify-center gap-1 w-12 h-full group"
        >
          <span className={`material-symbols-outlined text-2xl transition-colors ${currentView === View.SAVED ? 'text-white filled' : 'text-neutral-500 group-hover:text-white'} group-active:scale-95`}>bookmark</span>
        </button>

        <button 
            onClick={() => onNavigate(View.SETTINGS)}
            className="flex flex-col items-center justify-center gap-1 w-12 h-full group"
        >
          <span className={`material-symbols-outlined text-2xl transition-colors ${currentView === View.SETTINGS ? 'text-white filled' : 'text-neutral-500 group-hover:text-white'} group-active:scale-95`}>settings</span>
        </button>
      </div>
      {/* Safe area padding for iPhone home indicator */}
      <div className="h-6 w-full bg-background"></div>
    </nav>
  );
};
