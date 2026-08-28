import React from 'react';

interface CareerHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JOBS = [
  {
    company: 'Google',
    role: 'Software Engineer - University Graduate 2025',
    ctc: '₹32 LPA',
    location: 'Bengaluru / Hyderabad',
    deadline: 'Oct 25, 2024',
    eligibility: 'B.Tech CSE/IT, CGPA > 8.0'
  },
  {
    company: 'Microsoft',
    role: 'Cloud Solution Architect Trainee',
    ctc: '₹28 LPA',
    location: 'Hyderabad',
    deadline: 'Oct 30, 2024',
    eligibility: 'B.Tech All Branches, CGPA > 7.5'
  },
  {
    company: 'Tata Consultancy Services (TCS Digital)',
    role: 'Systems Engineer & AI Specialist',
    ctc: '₹9.2 LPA',
    location: 'Pune / Mumbai',
    deadline: 'Nov 05, 2024',
    eligibility: 'B.Tech All Branches, No Active Backlogs'
  }
];

export const CareerHubModal: React.FC<CareerHubModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="work">work</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Career &amp; Training Placement Cell</h3>
              <p className="text-xs font-body-md text-on-surface-variant">SSGM Official On-Campus Placement Drives &amp; Internships</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          <div className="p-3.5 bg-primary/5 rounded-xl border border-primary/20 flex items-center justify-between">
            <div className="text-xs">
              <span className="font-bold text-primary">Placement Season 2024-25 Status:</span> Active
              <p className="text-on-surface-variant text-[11px] mt-0.5">Resume Verified by T&amp;P Officer • 8 Drives Open</p>
            </div>
            <button
              onClick={() => alert('Opening Resume Builder & Verification Portal')}
              className="px-3 py-1.5 bg-primary text-on-primary text-xs font-bold rounded-lg"
            >
              Update Resume
            </button>
          </div>

          <h4 className="text-sm font-bold text-on-surface pt-2">Upcoming Campus Recruitment Drives</h4>

          {JOBS.map((job, idx) => (
            <div key={idx} className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{job.company}</h4>
                  <p className="text-xs font-semibold text-primary">{job.role}</p>
                </div>
                <span className="text-xs font-bold font-mono text-secondary bg-secondary-container px-2 py-0.5 rounded">
                  {job.ctc}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Location: {job.location} • Eligibility: {job.eligibility}
              </p>
              <div className="flex justify-between items-center pt-2 border-t border-outline-variant/30 text-xs">
                <span className="text-error font-semibold">Deadline: {job.deadline}</span>
                <button
                  onClick={() => alert(`Application submitted for ${job.company} - ${job.role}!`)}
                  className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  Apply via T&amp;P Portal
                </button>
              </div>
            </div>
          ))}
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
