'use client';

import { useVideoModal } from '@/context/VideoModalContext';

export default function VideoModal() {
  const { isOpen, videoSrc, closeModal } = useVideoModal();

  if (!isOpen) return null;

  return (
    <div
      id="videoModal"
      className="custom-modal active"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-dialog max-w-4xl p-4 bg-black relative">
        <button
          id="closeVideoModal"
          onClick={closeModal}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center hover:bg-goldPrimary transition-colors z-20 shadow-lg"
          aria-label="Fermer la vidéo"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
          <video
            id="modalVideoPlayer"
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          ></video>
        </div>
      </div>
    </div>
  );
}
