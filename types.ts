import React from 'react';

export enum View {
  WELCOME = 'WELCOME',
  FEED = 'FEED',
  MOODS = 'MOODS',
  CREATE = 'CREATE',
  SAVED = 'SAVED',
  SETTINGS = 'SETTINGS',
}

export type MoodType = 'ANXIOUS' | 'EMPTY' | 'AWAKE' | 'LONELY' | 'PEACEFUL' | 'CREATIVE' | 'NOSTALGIA' | 'LOST';

export interface MoodConfig {
  id: MoodType;
  label: string;
  colorClass: string;
  icon: React.FC<{ className?: string }>;
}

export interface Thought {
  id: string;
  timestamp: string;
  content: string;
  mood: MoodType;
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
}