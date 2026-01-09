import React from 'react';
import { Thought, View } from '../types';
import { MOODS } from '../constants';

interface SavedScreenProps {
  savedThoughts: Thought[];
  onToggleSave: (id: string) => void;
  onNavigate: (view: View) => void;
}

export const SavedScreen: React.FC<SavedScreenProps> = ({ savedThoughts, onToggleSave, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background animate-fade-in">
        <header className="w-full border-b border-border bg-background p-4 flex justify-between items-end z-20 shrink-0">
            <h1 className="font-display text-2xl text-white uppercase tracking-tighter leading-none">SAVED</h1>
        </header>

        <main className="flex-grow overflow-y-auto no-scrollbar p-4 pb-24">
            <div className="flex flex-col gap-4 h-full content-start">
                {savedThoughts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-neutral-500 gap-4">
                        <span className="material-symbols-outlined text-4xl">bookmark_border</span>
                        <p className="font-mono text-sm uppercase tracking-widest">Nothing saved yet</p>
                    </div>
                ) : (
                    savedThoughts.map((thought) => {
                        const moodConfig = MOODS[thought.mood];
                        const moodColor = moodConfig.colorClass.split(' ')[0];

                        return (
                            <div key={thought.id} className="w-full border border-neutral-800 bg-black p-4 flex flex-col gap-3 relative hover:border-neutral-600 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div className={`flex items-center gap-2 ${moodColor}`}>
                                        <moodConfig.icon className="w-5 h-5" />
                                        <span className="text-xs font-bold uppercase tracking-wider font-mono">{moodConfig.label}</span>
                                    </div>
                                    <button 
                                        onClick={() => onToggleSave(thought.id)}
                                        className="text-white hover:text-neutral-300 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[24px] filled">bookmark</span>
                                    </button>
                                </div>
                                <p className="text-neutral-300 text-sm font-sans leading-relaxed pr-8">
                                    {thought.content}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </main>
    </div>
  );
};
