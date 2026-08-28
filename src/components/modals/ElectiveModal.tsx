import React, { useState } from 'react';

interface ElectiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegistered: (electiveName: string) => void;
}

interface ElectiveOption {
  id: string;
  code: string;
  name: string;
  instructor: string;
  seatsTotal: number;
  seatsLeft: number;
  credits: number;
  description: string;
}

const ELECTIVES: ElectiveOption[] = [
  {
    id: 'elec-1',
    code: 'CSE-604A',
    name: 'Cloud Computing & Distributed Systems',
    instructor: 'Dr. Kavita Joshi',
    seatsTotal: 60,
    seatsLeft: 12,
    credits: 4,
    description: 'Covers Kubernetes orchestration, microservice architectures, AWS/GCP serverless design patterns.'
  },
  {
    id: 'elec-2',
    code: 'CSE-604B',
    name: 'Blockchain Architecture & Web3 Security',
    instructor: 'Prof. S. Kulkarni',
    seatsTotal: 60,
    seatsLeft: 24,
    credits: 4,
    description: 'Deep dive into consensus algorithms, Ethereum smart contracts, zero-knowledge proofs and cryptography.'
  },
  {
    id: 'elec-3',
    code: 'CSE-604C',
    name: 'Edge AI & Embedded IoT Vision',
    instructor: 'Prof. M. Patel',
    seatsTotal: 60,
    seatsLeft: 8,
    credits: 4,
    description: 'TensorFlow Lite on ARM Cortex microcontrollers, edge video analytics, sensor fusion algorithms.'
  }
];

export const ElectiveModal: React.FC<ElectiveModalProps> = ({ isOpen, onClose, onRegistered }) => {
  const [selectedId, setSelectedId] = useState<string>(ELECTIVES[0].id);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRegister = () => {
    const elective = ELECTIVES.find((e) => e.id === selectedId);
    if (!elective) return;

    setSuccess(`Successfully registered for ${elective.name} (${elective.code})!`);
    onRegistered(elective.name);
    setTimeout(() => {
      setSuccess(null);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="add_circle">add_circle</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Elective Course Registration</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Semester 6 Elective Track Selection</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {success ? (
            <div className="p-6 text-center space-y-3 animate-fade-in">
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl" data-icon="check_circle">check_circle</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Registration Approved!</h4>
              <p className="text-xs text-on-surface-variant">{success}</p>
            </div>
          ) : (
            ELECTIVES.map((el) => {
              const isSelected = selectedId === el.id;
              return (
                <div
                  key={el.id}
                  onClick={() => setSelectedId(el.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary/5 border-primary ring-2 ring-primary/20 shadow-xs'
                      : 'bg-surface-container-low border-outline-variant/40 hover:bg-surface-container'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold bg-surface-container-highest px-2 py-0.5 rounded text-primary">
                          {el.code}
                        </span>
                        <span className="text-[10px] font-label-sm font-bold text-outline">
                          {el.credits} Credits
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface mt-1">{el.name}</h4>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-label-sm font-bold text-error">
                        {el.seatsLeft} seats left
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-body-md text-on-surface-variant mb-2 leading-relaxed">
                    {el.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-label-sm text-outline pt-2 border-t border-outline-variant/30">
                    <span>Instructor: <strong className="text-on-surface">{el.instructor}</strong></span>
                    <span className="text-primary font-bold">{isSelected ? '✓ Selected' : 'Click to select'}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {!success && (
          <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-outline-variant rounded-xl text-xs font-label-md hover:bg-surface-container"
            >
              Cancel
            </button>
            <button
              onClick={handleRegister}
              className="px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold hover:bg-primary/90 transition-colors shadow-xs"
            >
              Confirm Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
