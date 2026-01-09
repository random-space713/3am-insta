import React from 'react';

export const AnxiousIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M4 12c0-4 2-6 3-6s2 3 4 3 4-4 6-4 3 2 3 7"></path>
    <path d="M4 12c-1 3 1 6 4 6s3-2 5-2 3 3 7 3 4-5 4-5"></path>
    <path d="M9 9l1 2"></path>
    <path d="M15 8l-1 2"></path>
  </svg>
);

export const EmptyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8"></circle>
  </svg>
);

export const AwakeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export const LonelyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
    <circle cx="12" cy="12" fill="currentColor" r="1.5"></circle>
  </svg>
);

export const PeacefulIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M2 12h20"></path>
    <path d="M2 16h20" opacity="0.5"></path>
    <path d="M2 8h20" opacity="0.5"></path>
  </svg>
);

export const CreativeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    <path d="M12 2v16"></path>
    <path d="M2 9.27h20"></path>
  </svg>
);

export const NostalgiaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <path d="M3 3v5h5"></path>
    <path d="M12 7v5l4 2"></path>
  </svg>
);

export const LostIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 19v-2"></path>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 12a2 2 0 1 0-2-2"></path>
    <path d="M10 16a6 6 0 0 1 6-6"></path>
  </svg>
);
