import React from 'react';
import { UserProfile, UserRole, NavigationTab } from '../types';

interface NavigationDrawerProps {
  user: UserProfile;
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onOpenReminders: () => void;
  onOpenAiHelp: () => void;
  onOpenProfile: () => void;
  onOpenCareerHub: () => void;
  onOpenCompetitiveExams: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  user,
  activeTab,
  onTabChange,
  currentRole,
  onRoleChange,
  isOpenMobile,
  onCloseMobile,
  onOpenReminders,
  onOpenAiHelp,
  onOpenProfile,
  onOpenCareerHub,
  onOpenCompetitiveExams,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden animate-fade-in"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed md:sticky top-16 left-0 z-50 md:z-20 h-[calc(100vh-64px)] w-72 md:w-80 bg-surface border-r border-outline-variant/40 shadow-xl md:shadow-none flex flex-col p-4 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Profile Card Header */}
        <div 
          onClick={() => { onOpenProfile(); onCloseMobile(); }}
          className="flex items-center gap-3 p-3 bg-surface-container-low hover:bg-surface-container transition-colors rounded-xl border border-outline-variant/40 mb-4 cursor-pointer group"
        >
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary-container group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-base font-headline-md font-bold text-primary truncate">
              {currentRole === 'student' ? 'Apex Student' : currentRole === 'teacher' ? 'Apex Faculty' : 'Apex Admin'}
            </span>
            <span className="text-xs font-body-md text-on-surface-variant truncate">
              {user.department}
            </span>
            <span className="text-[11px] font-label-sm text-outline mt-0.5">
              ID: {user.studentId}
            </span>
          </div>
        </div>

        {/* Primary Navigation Links */}
        <nav className="flex flex-col gap-1">
          <button
            onClick={() => { onOpenProfile(); onCloseMobile(); }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-xs font-label-md text-left group"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors" data-icon="person">
              person
            </span>
            <span>My Profile</span>
          </button>

          <button
            onClick={() => { onOpenReminders(); onCloseMobile(); }}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-xs font-label-md text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg text-tertiary group-hover:text-tertiary-container transition-colors" data-icon="notifications_active">
                notifications_active
              </span>
              <span>Smart Reminders</span>
            </div>
            <span className="bg-tertiary text-on-tertiary text-[10px] font-label-sm font-bold px-2 py-0.5 rounded-full">
              2 Due
            </span>
          </button>

          <button
            onClick={() => { onOpenCareerHub(); onCloseMobile(); }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-xs font-label-md text-left group"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors" data-icon="work">
              work
            </span>
            <span>Career & Placement Hub</span>
          </button>

          <button
            onClick={() => { onOpenCompetitiveExams(); onCloseMobile(); }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-xs font-label-md text-left group"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors" data-icon="auto_stories">
              auto_stories
            </span>
            <span>Competitive Exams & GATE</span>
          </button>

          <div className="h-px bg-outline-variant/40 my-2"></div>

          {/* Quick Tab Switches for Desktop */}
          <button
            onClick={() => { onTabChange('home'); onCloseMobile(); }}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-label-md text-left transition-colors ${
              activeTab === 'home'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg" data-icon="home">home</span>
            <span>Home Dashboard</span>
          </button>

          <button
            onClick={() => { onTabChange('academic'); onCloseMobile(); }}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-label-md text-left transition-colors ${
              activeTab === 'academic'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg" data-icon="school">school</span>
            <span>Academic Overview</span>
          </button>

          <button
            onClick={() => { onTabChange('campus'); onCloseMobile(); }}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-label-md text-left transition-colors ${
              activeTab === 'campus'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg" data-icon="account_balance">account_balance</span>
            <span>Campus Overview</span>
          </button>

          <button
            onClick={() => { onTabChange('support'); onCloseMobile(); }}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-label-md text-left transition-colors ${
              activeTab === 'support'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg" data-icon="handshake">handshake</span>
            <span>Support & Help Desk</span>
          </button>

          <div className="h-px bg-outline-variant/40 my-2"></div>

          {/* Role Mode Switcher Trigger */}
          <div className="px-3 py-1">
            <span className="text-[10px] font-label-sm uppercase font-bold text-outline">Current Mode</span>
            <div className="mt-1.5 grid grid-cols-3 gap-1 bg-surface-container p-1 rounded-lg">
              <button
                onClick={() => onRoleChange('student')}
                className={`py-1 text-[11px] font-label-sm font-semibold rounded-md transition-all ${
                  currentRole === 'student' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => onRoleChange('teacher')}
                className={`py-1 text-[11px] font-label-sm font-semibold rounded-md transition-all ${
                  currentRole === 'teacher' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => onRoleChange('admin')}
                className={`py-1 text-[11px] font-label-sm font-semibold rounded-md transition-all ${
                  currentRole === 'admin' ? 'bg-inverse-surface text-inverse-on-surface shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Admin
              </button>
            </div>
          </div>
        </nav>

        {/* AI Help Promo Widget at bottom */}
        <div
          onClick={() => { onOpenAiHelp(); onCloseMobile(); }}
          className="mt-auto p-3.5 bg-surface-container-highest rounded-xl border border-primary-fixed-dim/40 relative overflow-hidden group hover:shadow-md transition-all cursor-pointer"
        >
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/25 transition-all"></div>
          <div className="flex items-center gap-2 mb-1.5 relative z-10">
            <span className="material-symbols-outlined text-primary text-xl" data-icon="psychology">psychology</span>
            <span className="font-headline-sm text-sm font-bold text-on-surface">Ask AI Assistant</span>
          </div>
          <p className="text-[11px] font-body-md text-on-surface-variant relative z-10 leading-relaxed">
            Stuck on a topic? Get instant explanations tailored to your syllabus.
          </p>
          <div className="mt-2 flex items-center gap-1 text-primary text-xs font-label-sm font-bold">
            Start Chat <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </div>
        </div>
      </aside>
    </>
  );
};
