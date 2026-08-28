import React, { useState } from 'react';

interface TeacherDashboardProps {
  onOpenBookSession: () => void;
  onOpenAiHelp: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onOpenAiHelp }) => {
  const [markedAttendance, setMarkedAttendance] = useState<boolean>(false);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm font-semibold uppercase tracking-wider bg-secondary-container text-on-secondary-container mb-2 shadow-xs">
            <span className="material-symbols-outlined text-sm" data-icon="co_present">co_present</span>
            Faculty Portal • Department of Computer Science
          </div>
          <h1 className="text-2xl md:text-4xl font-headline-lg font-bold text-on-surface tracking-tight">
            Teacher Management Console
          </h1>
          <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-1">
            Manage course syllabi, mark lecture attendance, review assignment submissions, and schedule mentoring sessions.
          </p>
        </div>

        <button
          onClick={onOpenAiHelp}
          className="px-4 py-2 bg-tertiary text-on-tertiary rounded-xl text-xs font-label-md font-bold flex items-center gap-1.5 shadow-xs hover:bg-tertiary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-base" data-icon="psychology">psychology</span>
          Generate Quiz with AI
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Active Class & Attendance (6 cols) */}
        <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-label-sm font-bold text-secondary uppercase tracking-wider">
                Current Class: CSE-601
              </span>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">
                68 Students Enrolled
              </span>
            </div>
            <h3 className="text-lg font-bold text-on-surface">Data Structures &amp; Algorithms</h3>
            <p className="text-xs font-body-md text-on-surface-variant mt-1">
              Topic: Binary Search Trees &amp; AVL Rotations (Room CR-301)
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant">
              {markedAttendance ? '✓ Today\'s attendance logged (62/68 Present)' : 'Attendance pending for today\'s 9:00 AM session'}
            </span>
            <button
              onClick={() => setMarkedAttendance(true)}
              className="px-4 py-2 bg-secondary text-on-secondary hover:bg-secondary/90 rounded-xl text-xs font-label-md font-bold shadow-xs transition-colors"
            >
              {markedAttendance ? 'Edit Attendance' : 'Mark Attendance'}
            </button>
          </div>
        </div>

        {/* Submissions to Evaluate (6 cols) */}
        <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-label-sm font-bold text-primary uppercase tracking-wider">
                Evaluation Queue
              </span>
              <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded-full">
                14 Pending Reviews
              </span>
            </div>
            <h3 className="text-lg font-bold text-on-surface">DSA Graph Theory Paper Submissions</h3>
            <p className="text-xs font-body-md text-on-surface-variant mt-1">
              Due Date: Oct 18 • Automated code plagiarism checks verified.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant">54/68 Submissions received</span>
            <button
              onClick={() => alert('Opening Evaluation Speedgrader for DSA Assignment 3')}
              className="px-4 py-2 bg-primary text-on-primary hover:bg-primary/90 rounded-xl text-xs font-label-md font-bold shadow-xs transition-colors"
            >
              Open Speedgrader
            </button>
          </div>
        </div>

        {/* Mentoring Bookings (12 cols) */}
        <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-title-lg font-bold text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary" data-icon="calendar_month">calendar_month</span>
            Upcoming Student Mentoring Appointments
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm text-outline">Today • 03:30 PM (Room 302)</span>
              <h4 className="text-xs font-bold text-on-surface mt-1">Shubham Shelar (CSE-2024-001)</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Doubt: AVL Tree Double Rotation Cases</p>
            </div>

            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm text-outline">Tomorrow • 10:30 AM (Room 302)</span>
              <h4 className="text-xs font-bold text-on-surface mt-1">Ananya Joshi (CSE-2024-042)</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Topic: Mini-Project Graph Database Selection</p>
            </div>

            <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="text-[10px] font-label-sm text-outline">Thursday • 04:00 PM (Room 302)</span>
              <h4 className="text-xs font-bold text-on-surface mt-1">Rohan Kulkarni (CSE-2024-019)</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Topic: Recommendation Letter for Higher Studies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
