import React, { useState } from 'react';

interface TimetableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClassSlot {
  time: string;
  subject: string;
  room: string;
  faculty: string;
  type: 'Lecture' | 'Lab' | 'Tutorial';
}

const SCHEDULE: Record<string, ClassSlot[]> = {
  Monday: [
    { time: '09:00 - 10:00 AM', subject: 'Data Structures & Algorithms', room: 'CR-301', faculty: 'Prof. A. Sharma', type: 'Lecture' },
    { time: '10:15 - 11:15 AM', subject: 'Database Management Systems', room: 'CR-301', faculty: 'Dr. R. Desai', type: 'Lecture' },
    { time: '11:30 - 01:30 PM', subject: 'DBMS Practical Batch A', room: 'Lab-3B', faculty: 'Dr. R. Desai', type: 'Lab' },
    { time: '02:30 - 03:30 PM', subject: 'Artificial Intelligence', room: 'CR-302', faculty: 'Prof. M. Patel', type: 'Lecture' }
  ],
  Tuesday: [
    { time: '09:00 - 10:00 AM', subject: 'Computer Networks', room: 'CR-301', faculty: 'Dr. Kavita Joshi', type: 'Lecture' },
    { time: '10:15 - 11:15 AM', subject: 'Artificial Intelligence', room: 'CR-302', faculty: 'Prof. M. Patel', type: 'Lecture' },
    { time: '11:30 - 01:30 PM', subject: 'DSA Programming Lab', room: 'Lab-1A', faculty: 'Prof. A. Sharma', type: 'Lab' },
    { time: '03:00 - 04:00 PM', subject: 'Competitive Coding Tutorial', room: 'Seminar-1', faculty: 'Faculty Team', type: 'Tutorial' }
  ],
  Wednesday: [
    { time: '09:00 - 10:00 AM', subject: 'Data Structures & Algorithms', room: 'CR-301', faculty: 'Prof. A. Sharma', type: 'Lecture' },
    { time: '10:15 - 11:15 AM', subject: 'Database Management Systems', room: 'CR-301', faculty: 'Dr. R. Desai', type: 'Lecture' },
    { time: '02:00 - 04:00 PM', subject: 'AI & Machine Learning Lab', room: 'GPU-Lab', faculty: 'Prof. M. Patel', type: 'Lab' }
  ],
  Thursday: [
    { time: '09:00 - 10:00 AM', subject: 'Computer Networks', room: 'CR-301', faculty: 'Dr. Kavita Joshi', type: 'Lecture' },
    { time: '10:15 - 11:15 AM', subject: 'Theory of Computation', room: 'CR-302', faculty: 'Prof. S. Kulkarni', type: 'Lecture' },
    { time: '11:30 - 12:30 PM', subject: 'DBMS Tutorial Session', room: 'CR-301', faculty: 'Dr. R. Desai', type: 'Tutorial' }
  ],
  Friday: [
    { time: '09:00 - 11:00 AM', subject: 'Major Project Phase 1 Review', room: 'Project Lab', faculty: 'Mentor Panel', type: 'Lab' },
    { time: '11:30 - 12:30 PM', subject: 'Professional Ethics & IP Rights', room: 'CR-301', faculty: 'Dr. V. Rao', type: 'Lecture' },
    { time: '02:30 - 04:30 PM', subject: 'Campus Club & Sports Activity', room: 'Sports Arena', faculty: 'Activity Dean', type: 'Tutorial' }
  ]
};

export const TimetableModal: React.FC<TimetableModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="calendar_month">calendar_month</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Weekly Academic Timetable</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Computer Engineering • Semester 6 (Room CR-301)</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex bg-surface border-b border-outline-variant/40 overflow-x-auto no-scrollbar p-2 gap-1.5">
          {Object.keys(SCHEDULE).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-1.5 rounded-lg text-xs font-label-md transition-all ${
                selectedDay === day
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {SCHEDULE[selectedDay]?.map((slot, index) => (
            <div
              key={index}
              className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
            >
              <div className="flex items-start gap-3">
                <div className="px-2.5 py-1 bg-surface-container-high rounded-lg text-xs font-mono font-bold text-primary shrink-0">
                  {slot.time}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs md:text-sm font-bold text-on-surface">{slot.subject}</h4>
                    <span
                      className={`text-[10px] font-label-sm font-bold px-2 py-0.2 rounded-full ${
                        slot.type === 'Lab'
                          ? 'bg-tertiary-container text-on-tertiary-container'
                          : slot.type === 'Tutorial'
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {slot.type}
                    </span>
                  </div>
                  <p className="text-xs font-label-md text-on-surface-variant mt-0.5">
                    {slot.faculty} • <span className="font-semibold text-on-surface">Venue: {slot.room}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-between items-center text-xs">
          <span className="text-on-surface-variant">Class Attendance Benchmark: 75% Minimum</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
