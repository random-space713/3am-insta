import React, { useState } from 'react';
import { View, Thought, MoodType } from './types';
import { INITIAL_THOUGHTS } from './constants';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { FeedScreen } from './screens/FeedScreen';
import { MoodsScreen } from './screens/MoodsScreen';
import { CreateScreen } from './screens/CreateScreen';
import { SavedScreen } from './screens/SavedScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomNav } from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);
  const [thoughts, setThoughts] = useState<Thought[]>(INITIAL_THOUGHTS);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  const handleToggleLike = (id: string) => {
    setThoughts(prev => prev.map(t => {
      if (t.id === id) {
        return { 
          ...t, 
          isLiked: !t.isLiked, 
          likes: t.isLiked ? t.likes - 1 : t.likes + 1 
        };
      }
      return t;
    }));
  };

  const handleToggleSave = (id: string) => {
    setThoughts(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, isSaved: !t.isSaved };
      }
      return t;
    }));
  };

  const handlePost = (content: string, mood: MoodType) => {
    const newThought: Thought = {
      id: Date.now().toString(),
      content,
      mood,
      timestamp: '3:00 AM', // In a real app, format Date.now()
      likes: 0,
      isLiked: false,
      isSaved: false,
    };
    setThoughts([newThought, ...thoughts]);
    setCurrentView(View.FEED);
  };

  const renderContent = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case View.FEED:
        return (
          <FeedScreen 
            thoughts={thoughts} 
            onToggleLike={handleToggleLike} 
            onToggleSave={handleToggleSave}
            onNavigate={handleNavigate}
          />
        );
      case View.MOODS:
        return <MoodsScreen onSelectMood={() => {}} onNavigate={handleNavigate} />;
      case View.CREATE:
        return <CreateScreen onNavigate={handleNavigate} onPost={handlePost} />;
      case View.SAVED:
        return (
          <SavedScreen 
            savedThoughts={thoughts.filter(t => t.isSaved)} 
            onToggleSave={handleToggleSave}
            onNavigate={handleNavigate}
          />
        );
      case View.SETTINGS:
        return <SettingsScreen onLogout={() => setCurrentView(View.WELCOME)} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-black flex flex-col shadow-2xl overflow-hidden relative border-x border-neutral-900">
      <div className="flex-grow overflow-hidden relative flex flex-col">
        {renderContent()}
      </div>
      
      {currentView !== View.WELCOME && currentView !== View.CREATE && (
        <BottomNav currentView={currentView} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;
