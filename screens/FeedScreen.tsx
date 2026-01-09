import React from 'react';
import { Thought, View } from '../types';
import { MOODS } from '../constants';

interface FeedScreenProps {
  thoughts: Thought[];
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
  onNavigate: (view: View) => void;
}

export const FeedScreen: React.FC<FeedScreenProps> = ({ thoughts, onToggleLike, onToggleSave, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background animate-fade-in">
        <header className="w-full border-b border-border bg-background p-4 flex justify-between items-end z-20 shrink-0">
            <h1 className="font-display text-2xl text-primary uppercase tracking-tighter leading-none">3AM</h1>
            <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest">03:00 AM</span>
        </header>
        
        <main className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
            {thoughts.map((thought) => {
                const moodConfig = MOODS[thought.mood];
                const borderColor = moodConfig?.id === 'AWAKE' || moodConfig?.id === 'EMPTY' ? 'border-neutral-600' : 'border-neutral-600'; // Default border
                const moodTagClass = moodConfig.id === 'ANXIOUS' ? 'bg-primary text-black border-primary' 
                                   : moodConfig.id === 'EMPTY' ? 'bg-neutral-800 text-neutral-300 border-neutral-600'
                                   : moodConfig.id === 'AWAKE' ? 'bg-white text-black border-white'
                                   : 'bg-neutral-800 text-neutral-300 border-neutral-600'; // Fallback style
                
                return (
                    <article key={thought.id} className={`w-full border ${borderColor} bg-surface p-5 flex flex-col gap-4`}>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-neutral-500 font-bold">{thought.timestamp}</span>
                                <div className={`text-[10px] font-bold uppercase px-2 py-0.5 border ${moodTagClass}`}>
                                    {moodConfig.label}
                                </div>
                            </div>
                            <button 
                                onClick={() => onToggleSave(thought.id)}
                                className={`transition-colors ${thought.isSaved ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
                            >
                                <span className={`material-symbols-outlined text-sm ${thought.isSaved ? 'filled' : ''}`}>bookmark</span>
                            </button>
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-200">
                            {thought.content}
                        </p>
                        <div className="flex justify-between items-end pt-2">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Anonymous</span>
                            <button 
                                onClick={() => onToggleLike(thought.id)}
                                className="group flex items-center gap-2 border border-neutral-800 hover:border-neutral-500 px-3 py-1.5 transition-all bg-black hover:bg-neutral-900 cursor-pointer"
                            >
                                <span className={`material-symbols-outlined text-xs transition-colors ${thought.isLiked ? 'text-primary filled' : 'text-neutral-600 group-hover:text-white'}`}>favorite</span>
                                <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${thought.isLiked ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                                    I feel this {thought.likes > 0 && `(${thought.likes})`}
                                </span>
                            </button>
                        </div>
                    </article>
                );
            })}
             {/* Spacer for bottom nav */}
             <div className="h-20"></div>
        </main>
    </div>
  );
};
