import React from 'react';
import { ExamInfo } from '../../types';

interface NotificationsModalProps {
  reminders: ExamInfo[];
  isOpen: boolean;
  onClose: () => void;
  onOpenAiHelp: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  reminders,
  isOpen,
  onClose,
  onOpenAiHelp,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="notifications_active">notifications_active</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Smart Notifications &amp; Reminders</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Active academic deadlines and college circulars</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {reminders.map((item) => (
            <div
              key={item.id}
              className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-start gap-3 relative overflow-hidden shadow-xs"
            >
              <div className="w-1.5 absolute left-0 top-0 h-full bg-tertiary"></div>
              
              <div className="p-2 bg-tertiary-container text-on-tertiary-container rounded-full shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-base" data-icon="auto_awesome">auto_awesome</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-label-sm font-bold uppercase text-tertiary">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-label-sm text-outline">
                    {item.date} • {item.time}
                  </span>
                </div>
                <h4 className="text-xs md:text-sm font-bold text-on-surface mt-0.5">{item.title}</h4>
                <p className="text-xs font-body-md text-on-surface-variant mt-1">{item.description}</p>
                <div className="text-[11px] font-label-sm text-outline mt-1.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs" data-icon="place">place</span>
                  Venue / Portal: <strong className="text-on-surface">{item.venue}</strong>
                </div>
              </div>
            </div>
          ))}

          {/* AI Assistance Tip */}
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 flex items-center justify-between gap-2 mt-4">
            <div className="text-xs text-on-surface-variant">
              <strong className="text-primary">Need prep assistance?</strong> Ask AI Assistant to summarize key revision formulas.
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAiHelp();
              }}
              className="px-3 py-1.5 bg-primary text-on-primary rounded-lg text-xs font-label-md font-bold whitespace-nowrap shadow-xs"
            >
              Ask AI
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold"
          >
            Mark All as Read
          </button>
        </div>
      </div>
    </div>
  );
};
