import React from 'react';
import { CollegeDepartment, CampusFacility, CampusEvent } from '../types';

interface CampusOverviewProps {
  departments: CollegeDepartment[];
  facilities: CampusFacility[];
  events: CampusEvent[];
  onOpenHistory: () => void;
  onOpenMap: () => void;
  onOpenDepartments: () => void;
  onOpenFacilities: () => void;
  onOpenEvents: () => void;
  onOpenAchievements: () => void;
  onOpenSymposiumRegister: () => void;
}

export const CampusOverview: React.FC<CampusOverviewProps> = ({
  departments,
  facilities,
  events,
  onOpenHistory,
  onOpenMap,
  onOpenDepartments,
  onOpenFacilities,
  onOpenEvents,
  onOpenAchievements,
  onOpenSymposiumRegister,
}) => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6 flex gap-6 md:gap-8">
      {/* Left/Main Column */}
      <div className="flex-1 space-y-6 w-full">
        {/* Contextual Header Area */}
        <div className="relative bg-primary-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 p-6 md:p-8 flex flex-col justify-end min-h-[240px]">
          <div className="absolute inset-0 z-0">
            <div
              className="bg-cover bg-center w-full h-full opacity-60 mix-blend-multiply filter contrast-125 transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5bfHtvSKzmvwc4bs3Mubm-y45lbAB6zZl4wcCvw2KZ8ENs60TIgppoQWC1XFe7tn1FcgSQ9N6NSsGAK55ZwK3tdw4UpfSklSxQYdEgPICxl354NpOpmVRgrKhLaMMG5KH4Dgx1lRwj_2OGTnKlTCCuGScemR01kMAHrtxEsFtuYqvvIBydojHyYZgL_Su9wVn0oFJwBxr5dxZBpGxBJ0zxWNgPd6BPlgYOqonIvLUCbvvX_p3DQeh')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/85 to-transparent"></div>
          </div>

          <div className="relative z-10 text-on-primary-container">
            <div className="inline-flex items-center gap-1.5 bg-primary text-on-primary px-3 py-1 rounded-full mb-3 text-xs font-label-sm uppercase tracking-wider font-semibold shadow-xs">
              <span className="material-symbols-outlined text-sm" data-icon="school">school</span>
              Campus Overview
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-on-primary-container tracking-tight">
              Discover Apex Tech
            </h2>
            <p className="text-sm md:text-base font-body-lg mt-1.5 max-w-2xl text-on-primary-container/90 leading-relaxed">
              Explore the heritage, facilities, and dynamic departments that define our institution's excellence.
            </p>
          </div>
        </div>

        {/* Directory Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* History & Heritage (Large Span) */}
          <div
            id="card-college-history"
            onClick={onOpenHistory}
            className="group col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-4 md:p-6 flex flex-col md:flex-row gap-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            <div className="w-full md:w-2/5 h-48 md:h-full min-h-[160px] bg-surface-variant rounded-lg overflow-hidden shrink-0 relative">
              <div
                className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1myISP7jrzuJgUvflcEnsrF95loODWAvJED0oaiqNDdzsTODPwLFuWCjehhv-eFDzb0ntF9ud4TjFVIeQieopDROTMqBXSEIpgmF7iv2XQ3-v71-xx54XE7SkMlUusVAKCu85sYu37bqsM82sDGOXiI1sIeZzWbzAYmJ0jLdUjobYWPIua1XuLGq_zVfVMxHhusB2cBMebpCbWepd6utxht2H57lJiR2KLSKuGQs0I02z6Cc7o1bS')`
                }}
              ></div>
            </div>

            <div className="flex flex-col justify-center flex-1">
              <div className="text-xs font-label-sm text-primary mb-1 font-bold uppercase tracking-wider">
                Legacy
              </div>
              <h3 className="text-xl md:text-2xl font-headline-md font-bold mb-2 text-on-surface">
                College History
              </h3>
              <p className="text-sm font-body-md text-on-surface-variant mb-4 line-clamp-3 leading-relaxed">
                Established with a vision to impart quality technical education, Apex Institute of Technology has grown from a modest beginning to a premier institution recognized for its academic rigor and innovation.
              </p>
              <div className="mt-auto flex items-center gap-1.5 text-primary font-label-md text-xs font-bold group-hover:translate-x-1 transition-transform">
                Read Full Story <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Achievements (Small Span) */}
          <div
            id="card-achievements"
            onClick={onOpenAchievements}
            className="group col-span-1 md:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-5 md:p-6 flex flex-col hover:shadow-xl transition-all relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <span className="material-symbols-outlined text-8xl" data-icon="emoji_events">emoji_events</span>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-3 shadow-xs">
                  <span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
                </div>
                <h3 className="text-xl font-headline-md font-bold mb-1.5">Achievements</h3>
                <p className="text-xs font-body-md opacity-90 leading-relaxed">
                  NAAC A++ Grade, Top 100 NIRF Ranking, and numerous student accolades.
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-1 font-label-md text-xs font-bold group-hover:translate-x-1 transition-transform">
                View All <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Departments (Small Span) */}
          <div
            id="card-departments"
            onClick={onOpenDepartments}
            className="group col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-lg" data-icon="arrow_outward">
                arrow_outward
              </span>
            </div>
            <h3 className="text-lg font-title-lg font-bold mb-1 text-on-surface">Departments</h3>
            <p className="text-xs font-body-md text-on-surface-variant flex-1 leading-relaxed">
              Explore specialized academic wings, from Computer Science to Mechanical Engineering.
            </p>
          </div>

          {/* Facilities (Small Span) */}
          <div
            id="card-facilities"
            onClick={onOpenFacilities}
            className="group col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined" data-icon="domain">domain</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-lg" data-icon="arrow_outward">
                arrow_outward
              </span>
            </div>
            <h3 className="text-lg font-title-lg font-bold mb-1 text-on-surface">Facilities</h3>
            <p className="text-xs font-body-md text-on-surface-variant flex-1 leading-relaxed">
              State-of-the-art labs, expansive central library, hostels, and sports complexes.
            </p>
          </div>

          {/* Events (Small Span) */}
          <div
            id="card-events"
            onClick={onOpenEvents}
            className="group col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-lg" data-icon="arrow_outward">
                arrow_outward
              </span>
            </div>
            <h3 className="text-lg font-title-lg font-bold mb-1 text-on-surface">Events &amp; Techfests</h3>
            <p className="text-xs font-body-md text-on-surface-variant flex-1 leading-relaxed">
              Stay updated with upcoming cultural programs, guest lectures, and hackathons.
            </p>
          </div>

          {/* Campus Map Link (Large Span Feature) */}
          <div className="col-span-1 md:col-span-12">
            <div
              onClick={onOpenMap}
              className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-3.5 flex items-center gap-4 shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-lg bg-surface-variant overflow-hidden relative shrink-0 shadow-xs">
                <div
                  className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw348naBzT65k90gJ7_cGFhFz_g8ZljDmf1j9rxv5Yq3xBcoPZysdVq1G7Pu2ucsDMb0J4ss4pLtSB5bxI5-1BlIeutltNXClkhV8v1x23_KKj1iVpB3xBpCw49hSvnNAOfKtg7m_OLlLINjakLS418a3YbW5ofOEZQKQQGDLUNwH1u2PFVkg7VGevSiphj7-Y7D8a7MDeDAnFMmxwuaHKCnhlzhG8z3ue0nP03xi0dueIknZ1sOev')`
                  }}
                ></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-title-lg font-bold text-on-surface">Interactive Campus Map</h4>
                <p className="text-xs font-body-md text-on-surface-variant hidden md:block">
                  Find your way around classrooms, cafeterias, and admin offices.
                </p>
              </div>
              <button
                id="btn-navigate-map"
                onClick={(e) => { e.stopPropagation(); onOpenMap(); }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors flex items-center gap-1.5 font-label-md text-xs font-bold whitespace-nowrap shadow-xs"
              >
                <span className="material-symbols-outlined text-base" data-icon="map">map</span> Navigate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Desktop Only) */}
      <aside className="hidden md:flex w-80 flex-col gap-6 shrink-0">
        {/* Features Quick List */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-5 shadow-xs">
          <h3 className="text-lg font-title-lg font-bold mb-4 text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" data-icon="stars">stars</span> Key Features
          </h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={onOpenFacilities}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors group text-xs font-body-md text-on-surface-variant text-left"
              >
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="menu_book">menu_book</span>
                </div>
                Digital Library Access
              </button>
            </li>
            <li>
              <button
                onClick={onOpenAchievements}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors group text-xs font-body-md text-on-surface-variant text-left"
              >
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="work">work</span>
                </div>
                Placement Cell Portal
              </button>
            </li>
            <li>
              <button
                onClick={onOpenHistory}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors group text-xs font-body-md text-on-surface-variant text-left"
              >
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="groups">groups</span>
                </div>
                Alumni Network
              </button>
            </li>
            <li>
              <button
                onClick={onOpenFacilities}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors group text-xs font-body-md text-on-surface-variant text-left"
              >
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="local_hospital">local_hospital</span>
                </div>
                Health &amp; Wellness
              </button>
            </li>
          </ul>
        </div>

        {/* Notice / Smart Reminder Component (AI Suggestion) */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 overflow-hidden shadow-xs flex">
          <div className="w-1.5 bg-tertiary"></div>
          <div className="p-4 flex-1">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="material-symbols-outlined text-tertiary text-sm" data-icon="auto_awesome">auto_awesome</span>
              <span className="text-[11px] font-label-sm text-tertiary font-bold uppercase tracking-wider">AI Suggestion</span>
            </div>
            <p className="text-sm font-body-md text-on-surface font-bold mb-1">Upcoming Tech Symposium</p>
            <p className="text-xs font-label-md text-on-surface-variant leading-relaxed">
              Registrations for 'Innovate 2024' close in 2 days. Based on your interest in IoT, you should register.
            </p>
            <button
              id="btn-register-symposium"
              onClick={onOpenSymposiumRegister}
              className="mt-3 text-primary font-label-md text-xs font-bold hover:underline"
            >
              Register Now →
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
