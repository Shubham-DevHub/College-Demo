import React from 'react';
import { NavigationTab } from '../types';

interface BottomNavBarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-1 py-1.5 pb-safe bg-surface-container border-t border-outline-variant/40 shadow-lg rounded-t-xl">
      {/* Home Tab */}
      <button
        id="nav-tab-home"
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
          activeTab === 'home'
            ? 'bg-secondary-container text-on-secondary-container rounded-full scale-95 shadow-xs font-bold'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          data-icon="home"
          style={{ fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="text-[11px] font-label-sm mt-0.5">Home</span>
      </button>

      {/* Academic Tab */}
      <button
        id="nav-tab-academic"
        onClick={() => onTabChange('academic')}
        className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
          activeTab === 'academic'
            ? 'bg-secondary-container text-on-secondary-container rounded-full scale-95 shadow-xs font-bold'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          data-icon="school"
          style={{ fontVariationSettings: activeTab === 'academic' ? "'FILL' 1" : "'FILL' 0" }}
        >
          school
        </span>
        <span className="text-[11px] font-label-sm mt-0.5">Academic</span>
      </button>

      {/* Campus Tab */}
      <button
        id="nav-tab-campus"
        onClick={() => onTabChange('campus')}
        className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
          activeTab === 'campus'
            ? 'bg-secondary-container text-on-secondary-container rounded-full scale-95 shadow-xs font-bold'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          data-icon="account_balance"
          style={{ fontVariationSettings: activeTab === 'campus' ? "'FILL' 1" : "'FILL' 0" }}
        >
          account_balance
        </span>
        <span className="text-[11px] font-label-sm mt-0.5">Campus</span>
      </button>

      {/* Support Tab */}
      <button
        id="nav-tab-support"
        onClick={() => onTabChange('support')}
        className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
          activeTab === 'support'
            ? 'bg-secondary-container text-on-secondary-container rounded-full scale-95 shadow-xs font-bold'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          data-icon="handshake"
          style={{ fontVariationSettings: activeTab === 'support' ? "'FILL' 1" : "'FILL' 0" }}
        >
          handshake
        </span>
        <span className="text-[11px] font-label-sm mt-0.5">Support</span>
      </button>

      {/* AI Help Tab */}
      <button
        id="nav-tab-aihelp"
        onClick={() => onTabChange('ai-help')}
        className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ${
          activeTab === 'ai-help'
            ? 'bg-secondary-container text-on-secondary-container rounded-full scale-95 shadow-xs font-bold'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          data-icon="psychology"
          style={{ fontVariationSettings: activeTab === 'ai-help' ? "'FILL' 1" : "'FILL' 0" }}
        >
          psychology
        </span>
        <span className="text-[11px] font-label-sm mt-0.5">AI Help</span>
      </button>
    </nav>
  );
};
