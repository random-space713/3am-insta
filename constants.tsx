import { MoodConfig, Thought } from './types';
import { 
  AnxiousIcon, 
  EmptyIcon, 
  AwakeIcon, 
  LonelyIcon, 
  PeacefulIcon, 
  CreativeIcon, 
  NostalgiaIcon, 
  LostIcon 
} from './components/Icons';

export const MOODS: Record<string, MoodConfig> = {
  ANXIOUS: { id: 'ANXIOUS', label: 'Anxious', colorClass: 'text-mood_anxious border-mood_anxious', icon: AnxiousIcon },
  EMPTY: { id: 'EMPTY', label: 'Empty', colorClass: 'text-white border-white', icon: EmptyIcon },
  AWAKE: { id: 'AWAKE', label: 'Awake', colorClass: 'text-mood_awake border-mood_awake', icon: AwakeIcon },
  LONELY: { id: 'LONELY', label: 'Lonely', colorClass: 'text-mood_lonely border-mood_lonely', icon: LonelyIcon },
  PEACEFUL: { id: 'PEACEFUL', label: 'Peaceful', colorClass: 'text-mood_peaceful border-mood_peaceful', icon: PeacefulIcon },
  CREATIVE: { id: 'CREATIVE', label: 'Creative', colorClass: 'text-mood_creative border-mood_creative', icon: CreativeIcon },
  NOSTALGIA: { id: 'NOSTALGIA', label: 'Nostalgia', colorClass: 'text-mood_nostalgia border-mood_nostalgia', icon: NostalgiaIcon },
  LOST: { id: 'LOST', label: 'Lost', colorClass: 'text-mood_lost border-mood_lost', icon: LostIcon },
};

export const INITIAL_THOUGHTS: Thought[] = [
  {
    id: '1',
    timestamp: '2:47 AM',
    mood: 'ANXIOUS',
    content: "Can't sleep again. Keep thinking about all the things I should have said differently today. Why does my brain only work perfectly when it's too late?",
    likes: 12,
    isLiked: false,
    isSaved: true,
  },
  {
    id: '2',
    timestamp: '3:12 AM',
    mood: 'EMPTY',
    content: "Sometimes I wonder if anyone else feels this empty at night. Like you're floating in space, untethered from everything real. Just static.",
    likes: 45,
    isLiked: false,
    isSaved: true,
  },
  {
    id: '3',
    timestamp: '1:33 AM',
    mood: 'AWAKE',
    content: "The city sounds different at this hour. It's breathing differently.",
    likes: 8,
    isLiked: false,
    isSaved: false,
  },
  {
    id: '4',
    timestamp: '3:05 AM',
    mood: 'NOSTALGIA',
    content: "Found an old playlist. It hurts to listen but I can't stop.",
    likes: 22,
    isLiked: true,
    isSaved: true,
  },
];
