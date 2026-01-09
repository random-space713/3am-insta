import React from 'react';
import { MOODS } from '../constants';
import { MoodType, View } from '../types';

interface MoodsScreenProps {
  onSelectMood: (mood: MoodType) => void;
  onNavigate: (view: View) => void;
}

export const MoodsScreen: React.FC<MoodsScreenProps> = ({ onSelectMood, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background animate-fade-in">
        <header className="w-full border-b border-border bg-background p-4 flex justify-between items-end z-20 shrink-0">
            <h1 className="font-display text-2xl text-white uppercase tracking-tighter leading-none">ALL MOODS</h1>
        </header>

        <main className="flex-grow overflow-y-auto no-scrollbar p-4 pb-24">
            <div className="grid grid-cols-2 gap-4 h-full content-start">
                {Object.values(MOODS).map((mood) => {
                    // Extract color class for hover state logic (simplified mapping)
                    const hoverBorderClass = `hover:${mood.colorClass.split(' ')[1]}`; 
                    const hoverTextClass = `group-hover:${mood.colorClass.split(' ')[0].replace('text-', 'text-')}`;
                    const iconColorClass = `group-hover:${mood.colorClass.split(' ')[0]}`;

                    return (
                        <button 
                            key={mood.id}
                            onClick={() => {
                                // In a real app, this might filter the feed. 
                                // For now, we just go back to feed (simulating selection)
                                onNavigate(View.FEED);
                            }}
                            className={`w-full aspect-square border border-neutral-800 bg-black p-4 flex flex-col justify-between ${hoverBorderClass} hover:bg-neutral-900 transition-all duration-300 group relative overflow-hidden`}
                        >
                            <span className={`text-sm font-bold uppercase text-neutral-400 ${hoverTextClass} z-10 transition-colors`}>
                                {mood.label}
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                <mood.icon className={`w-20 h-20 text-neutral-600 ${iconColorClass} transition-colors`} />
                            </div>
                        </button>
                    );
                })}
            </div>
        </main>
    </div>
  );
};
