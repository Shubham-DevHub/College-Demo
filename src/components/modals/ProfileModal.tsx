import React from 'react';
import { UserProfile } from '../../types';

interface ProfileModalProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="badge">badge</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Student Academic Profile</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Apex Institute of Technology Official Digital Identity Card</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* ID Card Front */}
          <div className="p-5 bg-gradient-to-br from-primary-container/90 to-surface-container-high rounded-2xl border border-outline-variant/60 shadow-md relative overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-primary shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-bold text-on-surface">{user.name}</h4>
                  <p className="text-xs font-label-md text-primary font-bold">
                    {user.department}
                  </p>
                  <p className="text-[11px] font-body-md text-on-surface-variant">
                    {user.semester} • Batch 2021-2025
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-2 py-0.5 bg-primary text-on-primary text-[10px] font-mono font-bold rounded">
                  {user.studentId}
                </span>
              </div>
            </div>

            {/* Academic stats row */}
            <div className="mt-4 pt-3 border-t border-outline-variant/40 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-surface-container-lowest/80 rounded-lg">
                <span className="text-[10px] font-label-sm text-outline block">Cumulative CGPA</span>
                <span className="text-base font-bold text-primary">{user.cgpa} / 10.0</span>
              </div>
              <div className="p-2 bg-surface-container-lowest/80 rounded-lg">
                <span className="text-[10px] font-label-sm text-outline block">Class Attendance</span>
                <span className="text-base font-bold text-secondary">{user.attendance}%</span>
              </div>
              <div className="p-2 bg-surface-container-lowest/80 rounded-lg">
                <span className="text-[10px] font-label-sm text-outline block">Credits Earned</span>
                <span className="text-base font-bold text-tertiary">118 / 160</span>
              </div>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Institutional Email</span>
              <span className="font-semibold text-on-surface">{user.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Academic Advisor</span>
              <span className="font-semibold text-on-surface">Prof. A. Sharma (HOD CSE)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Hostel Residence</span>
              <span className="font-semibold text-on-surface">Vivekananda Hostel - Room 314</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Library Membership</span>
              <span className="font-bold text-secondary">Active (Card #LIB-8842)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold hover:bg-primary/90 transition-colors shadow-xs"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
