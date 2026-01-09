import React, { useState } from 'react';
import { MOODS } from '../constants';
import { MoodType, View } from '../types';

interface CreateScreenProps {
  onNavigate: (view: View) => void;
  onPost: (content: string, mood: MoodType) => void;
}

export const CreateScreen: React.FC<CreateScreenProps> = ({ onNavigate, onPost }) => {
  const [content, setContent] = useState('');
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handlePost = () => {
    if (content.trim() && selectedMood) {
        onPost(content, selectedMood);
    }
  };

  return (
    <div className="bg-background text-white h-full w-full overflow-hidden font-mono flex flex-col animate-fade-in">
        <header className="w-full bg-background p-6 pb-2 flex justify-between items-center z-20 shrink-0">
            <button 
                onClick={() => onNavigate(View.FEED)}
                className="text-neutral-500 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
                Cancel
            </button>
        </header>

        <main className="flex-grow flex flex-col overflow-y-auto no-scrollbar p-6 pt-4 gap-8">
            <div className="w-full shrink-0">
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full h-64 bg-black border border-border p-4 text-base text-white placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-0 resize-none rounded-none leading-relaxed transition-colors font-mono" 
                    placeholder="What's on your mind at 3AM?"
                ></textarea>
            </div>
            
            <div className="w-full shrink-0">
                <h2 className="font-display text-sm text-neutral-500 mb-4 tracking-wider uppercase">Choose Mood</h2>
                <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar w-full">
                    {Object.values(MOODS).map((mood) => {
                        const isSelected = selectedMood === mood.id;
                        const borderColor = isSelected ? mood.colorClass.split(' ')[1] : 'border-border';
                        const textColor = isSelected ? mood.colorClass.split(' ')[0] : 'text-neutral-400';
                        
                        return (
                            <button 
                                key={mood.id}
                                onClick={() => setSelectedMood(mood.id as MoodType)}
                                className={`shrink-0 w-28 h-28 border ${borderColor} bg-black flex flex-col items-start justify-between p-3 hover:bg-neutral-900 transition-all group`}
                            >
                                <mood.icon className={`w-8 h-8 ${isSelected ? textColor : 'text-neutral-600'} group-hover:${mood.colorClass.split(' ')[0]} transition-colors`} />
                                <span className={`text-xs font-bold uppercase ${textColor} group-hover:${mood.colorClass.split(' ')[0]} transition-colors`}>
                                    {mood.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </main>

        <footer className="p-6 shrink-0 bg-background z-20">
            <button 
                onClick={handlePost}
                disabled={!content.trim() || !selectedMood}
                className={`w-full font-display text-xl py-5 uppercase transition-all rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-1 active:translate-x-1 active:shadow-none ${!content.trim() || !selectedMood ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' : 'bg-primary text-black hover:bg-opacity-90'}`}
            >
                Post
            </button>
        </footer>
    </div>
  );
};
