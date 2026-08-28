import React from 'react';
import { UserProfile, ExamInfo } from '../types';

interface HomeDashboardProps {
  user: UserProfile;
  examReminders: ExamInfo[];
  onOpenLibrary: () => void;
  onOpenClubs: () => void;
  onOpenHelpDesk: () => void;
  onOpenBookSession: () => void;
  onOpenReminders: () => void;
  onOpenProfile: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  user,
  examReminders,
  onOpenLibrary,
  onOpenClubs,
  onOpenHelpDesk,
  onOpenBookSession,
  onOpenReminders,
  onOpenProfile,
}) => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6">
      {/* Mobile Top Header Indicator */}
      <div className="md:hidden w-full bg-primary text-on-primary px-4 py-2.5 rounded-xl flex justify-between items-center mb-6 shadow-sm">
        <div className="text-lg font-title-lg font-bold tracking-tight">Student Mode</div>
        <button
          onClick={onOpenProfile}
          className="p-1.5 rounded-full text-on-primary bg-primary-container hover:bg-surface-container-highest transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-sm" data-icon="person">person</span>
        </button>
      </div>

      {/* Greeting Banner */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-on-surface mb-2 hidden md:block">
          Welcome back, {user.name.split(' ')[0]}
        </h1>
        <p className="text-base md:text-lg font-body-lg text-on-surface-variant">
          Here is an overview of your academic resources for today.
        </p>
      </div>

      {/* Bento Grid Layout for Dashboard Cards */}
      <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Personal Library Card (Level 2) */}
        <div
          id="card-personal-library"
          onClick={onOpenLibrary}
          className="col-span-4 md:col-span-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/60 p-5 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="bg-primary-container text-on-primary-container px-2.5 py-1 rounded text-xs font-label-sm font-semibold">
                Academic
              </span>
              <button className="text-primary hover:bg-primary-container/20 p-1 rounded-full transition-colors">
                <span className="material-symbols-outlined text-xl" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>

            <h3 className="text-xl font-title-lg font-bold text-on-surface mb-1.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="local_library">
                local_library
              </span>
              Personal Library
            </h3>

            <p className="text-sm font-body-md text-on-surface-variant z-10 relative">
              Access your saved study materials, notes, and bookmarked lectures.
            </p>
          </div>

          <div className="mt-4 flex gap-2 z-10 relative">
            <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-full text-xs font-label-sm font-medium">
              12 Saved Items
            </span>
            <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-full text-xs font-label-sm font-medium">
              3 Pending
            </span>
          </div>
        </div>

        {/* Club Activities Card (Level 2) */}
        <div
          id="card-club-activities"
          onClick={onOpenClubs}
          className="col-span-4 md:col-span-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/60 p-5 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/25 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded text-xs font-label-sm font-semibold">
                Extracurricular
              </span>
              <button className="text-secondary hover:bg-secondary-container/30 p-1 rounded-full transition-colors">
                <span className="material-symbols-outlined text-xl" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>

            <h3 className="text-xl font-title-lg font-bold text-on-surface mb-1.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" data-icon="groups">
                groups
              </span>
              Club Activities
            </h3>

            <p className="text-sm font-body-md text-on-surface-variant z-10 relative">
              Stay updated with technical and cultural club events on campus.
            </p>
          </div>

          <div className="mt-4 flex items-center -space-x-2 z-10 relative">
            <img
              className="w-8 h-8 rounded-full border-2 border-surface object-cover shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-Vq2bYpNpjsmkBiOYbA_vbvCWHCbXMaYWFSyZ87nMRQj9JEPE5oQhQ7eL43Nu1tywxJ_FJB2Ey9kGgCoYBq4K6J6FptMYRU3PriHreiyHyaaixHnSnp3pFYJxs4Kcyabt2n2ZAAm1C4aaJpA4smj84K4oKguTUC9ofyEqENJVuZH2EONFnQvVepSsjG8JfucFkeh1wvcsHvFtarOagkhlBncMlDOVVCsxiDw93JhjQQOi2GYdjFQ"
              alt="Tech Club Event"
              referrerPolicy="no-referrer"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-surface object-cover shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHzIqGBE-fKQGOQ0WuPOYyFvT2gOo9XzBsRoiEwCJmlBC4jdQwKXZvrGJfRYeSysH3f-v2JnXQPY8p8NaisaU6t3akwsISWADL3EJEYHqr3MHFDoL-Uc_D4IpsBQY00VRcPeDI7qUrujcN5unkcqkl1fkhnZe_IZ-pA6FPFI42Z2pyCFzW-0Kzcw5rnXNTZRE6ZNj2RbJr94mtY2IkRfrzrmk13ZyOZCu1LAm_jBXAGqcpTTpJOaVa"
              alt="Cultural Club"
              referrerPolicy="no-referrer"
            />
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant shadow-xs">
              +2
            </div>
          </div>
        </div>

        {/* Help Desk Card (Level 1) */}
        <div
          id="card-help-desk"
          onClick={onOpenHelpDesk}
          className="col-span-4 md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-5 flex flex-col items-center text-center justify-center hover:bg-surface-container-low transition-all group cursor-pointer shadow-xs"
        >
          <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-on-error-container text-3xl" data-icon="support_agent">
              support_agent
            </span>
          </div>
          <h3 className="text-lg font-title-lg font-bold text-on-surface mb-1">Help Desk</h3>
          <p className="text-xs font-body-md text-on-surface-variant">Raise tickets for IT or campus issues.</p>
        </div>

        {/* Student-Teacher Connect Card (Level 1) */}
        <div
          id="card-teacher-connect"
          className="col-span-4 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-5 flex flex-col md:flex-row gap-4 items-center justify-between hover:bg-surface-container-low transition-all group relative overflow-hidden shadow-xs"
        >
          <div className="absolute left-0 top-0 w-2 h-full bg-tertiary"></div>
          
          <div className="flex-1 pl-2">
            <h3 className="text-lg font-title-lg font-bold text-on-surface mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary" data-icon="connect_without_contact">
                connect_without_contact
              </span>
              Student-Teacher Connect
            </h3>
            <p className="text-sm font-body-md text-on-surface-variant">
              Schedule mentoring sessions or clear doubts directly with your professors.
            </p>
          </div>

          <button
            id="btn-book-session"
            onClick={onOpenBookSession}
            className="bg-transparent border-2 border-primary text-primary px-4 py-2 rounded-lg font-label-md text-xs font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-colors whitespace-nowrap shadow-xs"
          >
            Book Session
          </button>
        </div>
      </div>

      {/* Smart Reminders Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-headline-md font-bold text-on-surface">
            Smart Reminders
          </h2>
          <button
            onClick={onOpenReminders}
            className="text-primary text-xs font-label-md font-bold hover:underline"
          >
            View All ({examReminders.length})
          </button>
        </div>

        <div className="space-y-3">
          {examReminders.slice(0, 2).map((item) => (
            <div
              key={item.id}
              onClick={onOpenReminders}
              className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-3.5 flex items-center gap-3 relative overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="absolute left-0 top-0 w-1.5 h-full bg-tertiary"></div>
              
              <div className="p-2 bg-tertiary-container text-on-tertiary-container rounded-full shrink-0">
                <span className="material-symbols-outlined text-base" data-icon="auto_awesome">
                  auto_awesome
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-label-md font-bold text-on-surface truncate">
                  {item.category}
                </h4>
                <p className="text-xs font-label-sm text-on-surface-variant truncate">
                  {item.title} - Due {item.date} by {item.time}
                </p>
              </div>

              <button className="text-primary group-hover:translate-x-1 p-2 rounded-full transition-transform">
                <span className="material-symbols-outlined text-base" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
