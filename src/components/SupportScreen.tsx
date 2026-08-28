import React from 'react';

interface SupportScreenProps {
  onOpenHelpDesk: () => void;
  onOpenAiHelp: () => void;
}

export const SupportScreen: React.FC<SupportScreenProps> = ({ onOpenHelpDesk, onOpenAiHelp }) => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm font-semibold uppercase tracking-wider bg-error-container text-on-error-container mb-2 shadow-xs">
          <span className="material-symbols-outlined text-sm" data-icon="handshake">handshake</span>
          Student Support &amp; Welfare
        </div>
        <h1 className="text-2xl md:text-4xl font-headline-lg font-bold text-on-surface tracking-tight">
          Campus Support Desk &amp; Helplines
        </h1>
        <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-1 max-w-2xl">
          Get 24/7 technical assistance, campus grievance redressal, counselor booking, and emergency contacts.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Ticket Raising Portal Banner (8 cols) */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-3xl" data-icon="support_agent">support_agent</span>
            </div>
            <div>
              <h3 className="text-lg font-title-lg font-bold text-on-surface">Official Campus Help Desk</h3>
              <p className="text-xs md:text-sm font-body-md text-on-surface-variant mt-1 leading-relaxed">
                Log tickets for IT problems, hostel maintenance, library books, and exam queries. Track status in real time.
              </p>
            </div>
          </div>

          <button
            id="btn-raise-ticket-support"
            onClick={onOpenHelpDesk}
            className="w-full md:w-auto px-5 py-2.5 bg-primary text-on-primary hover:bg-primary/90 font-label-md text-xs font-bold rounded-xl whitespace-nowrap shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base" data-icon="confirmation_number">confirmation_number</span>
            Raise Ticket
          </button>
        </div>

        {/* AI Instant Assistant (4 cols) */}
        <div className="col-span-1 md:col-span-4 bg-tertiary-container/30 border border-tertiary/40 rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center mb-3 shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="psychology">psychology</span>
            </div>
            <h3 className="text-base font-title-lg font-bold text-on-surface">24/7 AI FAQ Assistant</h3>
            <p className="text-xs font-body-md text-on-surface-variant mt-1">
              Ask questions regarding fees, scholarship eligibility, bus routes, or hostel curfews.
            </p>
          </div>
          <button
            onClick={onOpenAiHelp}
            className="mt-4 px-4 py-2 bg-tertiary text-on-tertiary rounded-xl text-xs font-label-md font-bold hover:bg-tertiary/90 transition-colors shadow-xs"
          >
            Ask AI Now →
          </button>
        </div>

        {/* Emergency Contacts Card (12 cols) */}
        <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 shadow-xs">
          <h3 className="text-lg font-title-lg font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-error" data-icon="emergency">emergency</span>
            Essential Campus Helpline Numbers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm font-bold uppercase text-error">Security Office</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Main Gate Security</h4>
              <p className="text-xs font-mono font-bold text-primary mt-1">+91 7265 252116</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">24/7 Campus Patrol</p>
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm font-bold uppercase text-secondary">Health Center</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Campus Medical Officer</h4>
              <p className="text-xs font-mono font-bold text-primary mt-1">+91 7265 252120</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Ambulance &amp; First Aid</p>
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm font-bold uppercase text-tertiary">Student Welfare</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Anti-Ragging Squad</h4>
              <p className="text-xs font-mono font-bold text-primary mt-1">1800-180-5522</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Toll-Free &amp; Confidential</p>
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm font-bold uppercase text-outline">Academic Registrar</span>
              <h4 className="text-sm font-bold text-on-surface mt-1">Exam &amp; Verification</h4>
              <p className="text-xs font-mono font-bold text-primary mt-1">+91 7265 252118</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Mon - Sat 9:30 AM to 5:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
