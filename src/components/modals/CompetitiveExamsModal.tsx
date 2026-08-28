import React from 'react';

interface CompetitiveExamsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiHelp: () => void;
}

export const CompetitiveExamsModal: React.FC<CompetitiveExamsModalProps> = ({
  isOpen,
  onClose,
  onOpenAiHelp,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="auto_stories">auto_stories</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Competitive Exams &amp; GATE Cell</h3>
              <p className="text-xs font-body-md text-on-surface-variant">GATE CSE, GRE, CAT, MPSC &amp; Higher Studies Preparation</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          <div className="p-4 bg-tertiary-container/30 rounded-xl border border-tertiary/40 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-on-surface">GATE 2025 Mock Test Series</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Free institutional mock exams every Saturday in Lab 3B.</p>
            </div>
            <button
              onClick={() => alert('Enrolled in Saturday GATE 2025 CS Mock Exam!')}
              className="px-3 py-1.5 bg-tertiary text-on-tertiary text-xs font-bold rounded-lg whitespace-nowrap shadow-xs"
            >
              Enroll Free
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-bold uppercase text-primary">GATE Computer Science</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Previous 15-Year Solved Papers</h4>
              <p className="text-xs text-on-surface-variant mt-1">Algorithms, Discrete Maths, TOC, OS &amp; Networks.</p>
              <button
                onClick={() => {
                  onClose();
                  onOpenAiHelp();
                }}
                className="mt-2 text-xs font-bold text-primary flex items-center gap-1"
              >
                Practice with AI Tutor →
              </button>
            </div>

            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-bold uppercase text-secondary">GRE &amp; TOEFL / IELTS</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Abroad Studies Guidance</h4>
              <p className="text-xs text-on-surface-variant mt-1">SOP reviews, university shortlisting with alumni mentors.</p>
              <button
                onClick={() => alert('Connecting you with SSGM Alumni in USA & Germany.')}
                className="mt-2 text-xs font-bold text-secondary flex items-center gap-1"
              >
                Connect with Alumni →
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
