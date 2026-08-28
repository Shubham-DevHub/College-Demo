import React from 'react';

interface AdminDashboardProps {
  onOpenAiHelp: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm font-semibold uppercase tracking-wider bg-surface-variant text-on-surface mb-2 shadow-xs">
          <span className="material-symbols-outlined text-sm" data-icon="admin_panel_settings">admin_panel_settings</span>
          SSGM Central Administration
        </div>
        <h1 className="text-2xl md:text-4xl font-headline-lg font-bold text-on-surface tracking-tight">
          Campus Oversight &amp; Analytics
        </h1>
        <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-1">
          Monitor institutional KPIs, department enrollments, NIRF compliance metrics, and broadcast campus circulars.
        </p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs">
          <span className="text-xs font-label-sm text-outline">Total Students Enrolled</span>
          <h3 className="text-2xl font-bold text-primary mt-1">3,420</h3>
          <span className="text-[11px] text-secondary font-semibold">↑ 4.2% from 2023</span>
        </div>

        <div className="p-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs">
          <span className="text-xs font-label-sm text-outline">Teaching Faculty</span>
          <h3 className="text-2xl font-bold text-on-surface mt-1">184</h3>
          <span className="text-[11px] text-outline font-semibold">1:18 Faculty-Student Ratio</span>
        </div>

        <div className="p-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs">
          <span className="text-xs font-label-sm text-outline">Campus Placements 2024</span>
          <h3 className="text-2xl font-bold text-secondary mt-1">94.8%</h3>
          <span className="text-[11px] text-primary font-semibold">Avg CTC: ₹8.4 LPA</span>
        </div>

        <div className="p-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs">
          <span className="text-xs font-label-sm text-outline">Help Desk Resolution</span>
          <h3 className="text-2xl font-bold text-tertiary mt-1">98.2%</h3>
          <span className="text-[11px] text-outline font-semibold">Avg turnaround &lt; 18h</span>
        </div>
      </div>

      {/* Admin Actions Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Broadcast Circular Banner (8 cols) */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-xs">
          <h3 className="text-base font-title-lg font-bold text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" data-icon="campaign">campaign</span>
            Broadcast Institutional Announcement
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Circular Title (e.g. Innovate 2024 Techfest Holiday Schedule)"
              className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows={3}
              placeholder="Notice body text to push to all student & faculty smart connect apps..."
              className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-surface-container text-xs font-label-sm rounded text-on-surface-variant">
                  Target: All Students (UG + PG)
                </span>
              </div>
              <button
                onClick={() => alert('Campus broadcast circular published successfully!')}
                className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold hover:bg-primary/90 transition-colors shadow-xs"
              >
                Publish Circular
              </button>
            </div>
          </div>
        </div>

        {/* System Health (4 cols) */}
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-title-lg font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" data-icon="dns">dns</span>
              Campus IT Infrastructure
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Cloud ERP Portal</span>
                <span className="text-secondary font-bold">● Operational</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Campus Mesh Wi-Fi</span>
                <span className="text-secondary font-bold">● Operational</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">AI Smart Assistant Gateway</span>
                <span className="text-secondary font-bold">● Operational</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert('Running full system diagnostic sweep...')}
            className="w-full mt-4 py-2 border border-outline-variant/60 rounded-xl text-xs font-label-md font-bold hover:bg-surface-container transition-colors"
          >
            Run System Diagnostics
          </button>
        </div>
      </div>
    </div>
  );
};
