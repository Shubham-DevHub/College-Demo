import React from 'react';
import { UserRole } from '../types';

interface WelcomeScreenProps {
  onSelectRole: (role: UserRole) => void;
  onOpenAiHelp: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectRole, onOpenAiHelp }) => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-body-md py-12 px-4">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container via-surface to-background"></div>
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-tertiary-container via-transparent to-transparent"></div>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-16 py-8 z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
        {/* Hero Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary">
            <span
              className="material-symbols-outlined text-5xl md:text-6xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary tracking-tight leading-tight">
            Welcome to<br />
            <span className="text-on-background">SSGM Smart Connect</span>
          </h1>

          <p className="text-lg font-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0 leading-relaxed">
            Your AI-powered college ecosystem. Seamlessly manage academics, collaborate with peers, and access campus resources with intelligent assistance.
          </p>
        </div>

        {/* Login Portals Bento Grid */}
        <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Student Portal (Full width in small grid) */}
          <button
            id="portal-student"
            onClick={() => onSelectRole('student')}
            className="col-span-1 sm:col-span-2 group relative bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="flex items-center justify-between">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-lg inline-flex shadow-xs">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person
                </span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </div>

            <div>
              <h3 className="text-xl font-title-lg font-bold text-on-surface">Student Portal</h3>
              <p className="text-sm font-body-md text-on-surface-variant mt-1">
                Access courses, assignments, and personal library.
              </p>
            </div>
          </button>

          {/* Teacher Portal */}
          <button
            id="portal-teacher"
            onClick={() => onSelectRole('teacher')}
            className="col-span-1 group relative bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 text-left hover:shadow-lg transition-all duration-300 flex flex-col gap-3 justify-between focus:outline-none focus:ring-2 focus:ring-secondary/50"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <div className="flex items-center justify-between">
              <div className="bg-secondary-container text-on-secondary-container p-2.5 rounded-lg inline-flex shadow-xs">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  co_present
                </span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all text-sm">
                chevron_right
              </span>
            </div>

            <div>
              <h3 className="text-lg font-title-lg font-bold text-on-surface">Teacher Portal</h3>
              <p className="text-xs font-label-md text-on-surface-variant mt-1">
                Manage classes & resources.
              </p>
            </div>
          </button>

          {/* Admin Portal */}
          <button
            id="portal-admin"
            onClick={() => onSelectRole('admin')}
            className="col-span-1 group relative bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 text-left hover:shadow-lg transition-all duration-300 flex flex-col gap-3 justify-between focus:outline-none focus:ring-2 focus:ring-inverse-surface/50"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-on-surface-variant transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <div className="flex items-center justify-between">
              <div className="bg-surface-variant text-on-surface-variant p-2.5 rounded-lg inline-flex shadow-xs">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  admin_panel_settings
                </span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-on-surface group-hover:translate-x-1 transition-all text-sm">
                chevron_right
              </span>
            </div>

            <div>
              <h3 className="text-lg font-title-lg font-bold text-on-surface">Admin Portal</h3>
              <p className="text-xs font-label-md text-on-surface-variant mt-1">
                System oversight & management.
              </p>
            </div>
          </button>
        </div>
      </main>

      {/* Floating AI Chatbot Teaser */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50">
        <div className="relative group cursor-pointer" onClick={onOpenAiHelp}>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-52 bg-surface-container-high text-on-surface p-3 rounded-xl shadow-xl border border-outline-variant text-xs font-label-md">
            <p className="font-medium">Need help logging in? Ask the AI Assistant!</p>
          </div>

          {/* FAB */}
          <button
            id="fab-welcome-ai"
            className="w-14 h-14 bg-tertiary text-on-tertiary rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-tertiary/30 relative z-10"
            title="Ask AI Assistant"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              smart_toy
            </span>
          </button>

          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-tertiary rounded-full animate-ping opacity-25 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
