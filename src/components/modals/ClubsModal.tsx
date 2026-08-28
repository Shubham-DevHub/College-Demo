import React, { useState } from 'react';
import { CLUBS_DATA } from '../../data/mockData';
import { ClubItem } from '../../types';

interface ClubsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClubsModal: React.FC<ClubsModalProps> = ({ isOpen, onClose }) => {
  const [clubs] = useState<ClubItem[]>(CLUBS_DATA);
  const [joinedMsg, setJoinedMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleJoin = (clubName: string) => {
    setJoinedMsg(`Application submitted to ${clubName}! You will receive WhatsApp & email invites.`);
    setTimeout(() => setJoinedMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="groups">groups</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Campus Clubs &amp; Extracurriculars</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Technical societies, cultural troupes, and sports teams</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {joinedMsg && (
          <div className="mx-6 mt-4 p-3 bg-secondary-container text-on-secondary-container rounded-xl text-xs font-label-md flex items-center gap-2 animate-fade-in shadow-xs">
            <span className="material-symbols-outlined text-base" data-icon="check_circle">check_circle</span>
            <span>{joinedMsg}</span>
          </div>
        )}

        {/* List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="p-4 bg-surface-container-low hover:bg-surface-container rounded-xl border border-outline-variant/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <img
                  src={club.avatar}
                  alt={club.name}
                  className="w-16 h-16 rounded-xl object-cover border border-outline-variant shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-label-sm font-bold px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container">
                      {club.category}
                    </span>
                    <span className="text-xs font-label-sm text-outline">
                      {club.members} Members
                    </span>
                  </div>
                  <h4 className="text-base font-title-lg font-bold text-on-surface mt-1">{club.name}</h4>
                  <p className="text-xs font-body-md text-on-surface-variant mt-0.5 leading-relaxed">{club.tagline}</p>
                  <p className="text-[11px] font-label-sm text-primary font-semibold mt-1">
                    Upcoming: {club.upcomingEventTitle} ({club.eventDate})
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleJoin(club.name)}
                className="w-full md:w-auto px-4 py-2 bg-secondary text-on-secondary hover:bg-secondary/90 rounded-xl text-xs font-label-md font-bold shrink-0 transition-colors shadow-xs"
              >
                Join Club
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
