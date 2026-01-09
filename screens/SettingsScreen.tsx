import React from 'react';
import { View } from '../types';

interface SettingsScreenProps {
    onLogout: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col h-full bg-background animate-fade-in">
        <header className="w-full border-b border-border bg-background p-4 flex justify-between items-end z-20 shrink-0">
            <h1 className="font-display text-2xl text-white uppercase tracking-tighter leading-none">SETTINGS</h1>
        </header>

        <main className="flex-grow overflow-y-auto no-scrollbar p-0">
            <div className="flex flex-col w-full">
                <button className="w-full border-b border-border bg-black p-6 flex items-center justify-start gap-4 hover:bg-neutral-900 transition-colors group">
                    <span className="material-symbols-outlined text-neutral-400 group-hover:text-white transition-colors">person</span>
                    <span className="text-lg font-bold uppercase text-white tracking-wide">ACCOUNT</span>
                </button>
                <button className="w-full border-b border-border bg-black p-6 flex items-center justify-start gap-4 hover:bg-neutral-900 transition-colors group">
                    <span className="material-symbols-outlined text-neutral-400 group-hover:text-white transition-colors">lock</span>
                    <span className="text-lg font-bold uppercase text-white tracking-wide">PRIVACY</span>
                </button>
                <button className="w-full border-b border-border bg-black p-6 flex items-center justify-start gap-4 hover:bg-neutral-900 transition-colors group">
                    <span className="material-symbols-outlined text-neutral-400 group-hover:text-white transition-colors">notifications</span>
                    <span className="text-lg font-bold uppercase text-white tracking-wide">NOTIFICATIONS</span>
                </button>
                <button className="w-full border-b border-border bg-black p-6 flex items-center justify-start gap-4 hover:bg-neutral-900 transition-colors group">
                    <span className="material-symbols-outlined text-neutral-400 group-hover:text-white transition-colors">help</span>
                    <span className="text-lg font-bold uppercase text-white tracking-wide">HELP</span>
                </button>
                
                <div className="p-6 mt-8">
                    <button 
                        onClick={onLogout}
                        className="w-full border-2 border-primary bg-black p-4 flex items-center justify-center gap-4 hover:bg-primary/10 transition-colors group"
                    >
                        <span className="material-symbols-outlined text-primary group-hover:text-primary transition-colors">logout</span>
                        <span className="text-lg font-bold uppercase text-primary tracking-wide">LOGOUT</span>
                    </button>
                </div>
            </div>
        </main>
    </div>
  );
};
