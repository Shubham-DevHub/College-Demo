import React from 'react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="history_edu">history_edu</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Apex Tech Legacy &amp; Heritage</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Founded on ideals of engineering excellence, character building, and nation development</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Story Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Heritage Banner Image */}
          <div className="rounded-xl overflow-hidden shadow-md border border-outline-variant/40 relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1myISP7jrzuJgUvflcEnsrF95loODWAvJED0oaiqNDdzsTODPwLFuWCjehhv-eFDzb0ntF9ud4TjFVIeQieopDROTMqBXSEIpgmF7iv2XQ3-v71-xx54XE7SkMlUusVAKCu85sYu37bqsM82sDGOXiI1sIeZzWbzAYmJ0jLdUjobYWPIua1XuLGq_zVfVMxHhusB2cBMebpCbWepd6utxht2H57lJiR2KLSKuGQs0I02z6Cc7o1bS"
              alt="Apex Tech Founding Faculty Historical Archive"
              className="w-full h-56 md:h-72 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-surface-container-high text-[11px] font-label-sm text-on-surface-variant text-center border-t border-outline-variant/40">
              Historical Archive: Founding Faculty &amp; Trustees standing before the original College Hall (circa 1983).
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-on-surface space-y-4">
            <h4 className="text-lg font-title-lg font-bold text-primary">The Vision Behind Apex Institute of Technology</h4>
            <p className="text-xs md:text-sm font-body-md text-on-surface-variant leading-relaxed">
              Established with a noble mission to bring world-class technical education and cutting-edge research to aspiring engineering minds, Apex Institute of Technology began with foundational engineering disciplines and rapidly scaled into one of the country's most respected autonomous institutions.
            </p>

            <h4 className="text-lg font-title-lg font-bold text-primary">Key Institutional Milestones</h4>
            <div className="space-y-3">
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40">
                <span className="text-xs font-label-sm font-bold text-primary">1983 — Foundation Laid</span>
                <p className="text-xs font-body-md text-on-surface-variant mt-0.5">
                  Commencement of academic operations with departments in Mechanical, Civil, and Electrical Engineering.
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40">
                <span className="text-xs font-label-sm font-bold text-secondary">2001 — Information Era &amp; Digital Infrastructure</span>
                <p className="text-xs font-body-md text-on-surface-variant mt-0.5">
                  Launch of modern Computer Engineering &amp; IT wings with gigabit networking and high-performance labs.
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40">
                <span className="text-xs font-label-sm font-bold text-tertiary">2021 — NAAC A++ &amp; NIRF Top 100 Ranking</span>
                <p className="text-xs font-body-md text-on-surface-variant mt-0.5">
                  Awarded the prestigious A++ grade by NAAC with a 3.61 CGPA score, honoring high research output and student placements.
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40">
                <span className="text-xs font-label-sm font-bold text-primary">2024 — AI Smart Connect &amp; Center of Excellence</span>
                <p className="text-xs font-body-md text-on-surface-variant mt-0.5">
                  Deployment of campus-wide AI smart systems for student mentorship, digital research, and patent incubation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold hover:bg-primary/90 transition-colors shadow-xs"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
