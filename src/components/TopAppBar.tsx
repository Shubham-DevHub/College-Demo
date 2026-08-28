import React, { useState } from 'react';
import { UserProfile, UserRole, NavigationTab } from '../types';

interface TopAppBarProps {
  user: UserProfile;
  activeTab: NavigationTab;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenNotifications: () => void;
  onOpenAiHelp: () => void;
  onToggleDrawer?: () => void;
  onNavigateHome?: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  user,
  currentRole,
  onRoleChange,
  onOpenNotifications,
  onOpenAiHelp,
  onToggleDrawer,
  onNavigateHome,
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-surface shadow-xs fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-8 h-16 border-b border-outline-variant/30">
      <div className="flex items-center gap-3">
        <button
          id="btn-app-menu"
          onClick={onToggleDrawer}
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center focus:outline-none"
          title="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
        
        <div 
          onClick={onNavigateHome} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-105 transition-transform" data-icon="school" style={{ fontVariationSettings: "'FILL' 1" }}>
            school
          </span>
          <h1 className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
            SSGM Smart Connect
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Mode Pill Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm font-semibold uppercase tracking-wider bg-surface-container-high text-primary border border-outline-variant/40">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {currentRole} Mode
        </div>

        {/* AI Quick Sparkle */}
        <button
          id="btn-topbar-ai"
          onClick={onOpenAiHelp}
          className="p-2 rounded-full text-tertiary hover:bg-tertiary-container/20 transition-colors flex items-center justify-center relative"
          title="Open AI College Assistant"
        >
          <span className="material-symbols-outlined text-xl" data-icon="auto_awesome">auto_awesome</span>
        </button>

        {/* Notification Bell */}
        <button
          id="btn-notifications"
          onClick={onOpenNotifications}
          className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center relative"
          title="View Notifications"
        >
          <span className="material-symbols-outlined text-xl" data-icon="notifications">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
        </button>

        {/* Profile Avatar & Dropdown */}
        <div className="relative">
          <button
            id="btn-user-avatar"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden ml-1 border-2 border-transparent hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
            title="User Profile Menu"
          >
            <img
              className="w-full h-full object-cover"
              src={user.avatarUrl}
              alt={user.name}
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/40">
                <img
                  className="w-10 h-10 rounded-full object-cover border border-outline-variant"
                  src={user.avatarUrl}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-on-surface truncate">{user.name}</p>
                  <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                  <span className="inline-block mt-0.5 text-[10px] font-label-sm font-semibold text-primary bg-primary-container/20 px-1.5 py-0.5 rounded">
                    ID: {user.studentId}
                  </span>
                </div>
              </div>

              <div className="py-2 space-y-1">
                <div className="text-[11px] font-label-sm uppercase text-outline px-2 py-1">Switch Portal Mode</div>
                <button
                  onClick={() => { onRoleChange('student'); setShowProfileMenu(false); }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-label-md transition-colors ${currentRole === 'student' ? 'bg-primary-container text-on-primary-container font-bold' : 'hover:bg-surface-container text-on-surface'}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" data-icon="person">person</span> Student Mode
                  </span>
                  {currentRole === 'student' && <span className="material-symbols-outlined text-sm" data-icon="check">check</span>}
                </button>

                <button
                  onClick={() => { onRoleChange('teacher'); setShowProfileMenu(false); }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-label-md transition-colors ${currentRole === 'teacher' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'hover:bg-surface-container text-on-surface'}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" data-icon="co_present">co_present</span> Teacher Mode
                  </span>
                  {currentRole === 'teacher' && <span className="material-symbols-outlined text-sm" data-icon="check">check</span>}
                </button>

                <button
                  onClick={() => { onRoleChange('admin'); setShowProfileMenu(false); }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-label-md transition-colors ${currentRole === 'admin' ? 'bg-surface-variant text-on-surface font-bold' : 'hover:bg-surface-container text-on-surface'}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" data-icon="admin_panel_settings">admin_panel_settings</span> Admin Mode
                  </span>
                  {currentRole === 'admin' && <span className="material-symbols-outlined text-sm" data-icon="check">check</span>}
                </button>
              </div>

              <div className="pt-2 border-t border-outline-variant/40 flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">SSGM v3.2</span>
                <button
                  onClick={() => setShowProfileMenu(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
