'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface VideoModalContextValue {
  isOpen: boolean;
  videoSrc: string;
  openModal: (src: string) => void;
  closeModal: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = useCallback((src: string) => {
    setVideoSrc(src);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setVideoSrc('');
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closeModal]);

  return (
    <VideoModalContext.Provider value={{ isOpen, videoSrc, openModal, closeModal }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal(): VideoModalContextValue {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error('useVideoModal must be used inside VideoModalProvider');
  return ctx;
}
