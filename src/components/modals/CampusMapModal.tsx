import React, { useState } from 'react';

interface CampusMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MapPOI {
  id: string;
  name: string;
  category: 'Academic' | 'Lab' | 'Library' | 'Admin' | 'Sports' | 'Food';
  floor: string;
  code: string;
  description: string;
  walkingTime: string;
  position: { top: string; left: string };
}

const POIS: MapPOI[] = [
  {
    id: 'poi-1',
    name: 'Academic Block A & CS Wing',
    category: 'Academic',
    floor: 'Floor 1-3',
    code: 'BLK-A',
    description: 'Home to Computer Science & IT classrooms, seminar halls, and Faculty Chambers (Prof. Sharma, Dr. Desai).',
    walkingTime: '2 min walk',
    position: { top: '35%', left: '42%' }
  },
  {
    id: 'poi-2',
    name: 'Central Digital Library',
    category: 'Library',
    floor: 'Ground & 1st Floor',
    code: 'LIB-01',
    description: '85,000+ volumes, IEEE e-library, individual silent study pods, and 24-hr study hall.',
    walkingTime: '3 min walk',
    position: { top: '22%', left: '60%' }
  },
  {
    id: 'poi-3',
    name: 'Advanced Computing & GPU Lab-3B',
    category: 'Lab',
    floor: 'Floor 2 (Block B)',
    code: 'LAB-3B',
    description: 'DBMS Practical Exam Venue and AI Research GPU workstation clusters.',
    walkingTime: '1 min walk',
    position: { top: '48%', left: '38%' }
  },
  {
    id: 'poi-4',
    name: 'Main Auditorium & Amphitheater',
    category: 'Admin',
    floor: 'Ground',
    code: 'AUD-01',
    description: 'Venue for Innovate 2024 Techfest, guest lectures, and youth cultural festivals.',
    walkingTime: '4 min walk',
    position: { top: '55%', left: '68%' }
  },
  {
    id: 'poi-5',
    name: 'Central Cafeteria & Student Commons',
    category: 'Food',
    floor: 'Ground Floor',
    code: 'CAF-01',
    description: 'Food court serving healthy meals, coffee, and student open co-working tables.',
    walkingTime: '2 min walk',
    position: { top: '70%', left: '50%' }
  },
  {
    id: 'poi-6',
    name: 'Sports Complex & Athletic Track',
    category: 'Sports',
    floor: 'Outdoor Arena',
    code: 'SPT-01',
    description: 'Synthetic running track, basketball pavilion, badminton arena, and indoor gymnasium.',
    walkingTime: '5 min walk',
    position: { top: '25%', left: '20%' }
  }
];

export const CampusMapModal: React.FC<CampusMapModalProps> = ({ isOpen, onClose }) => {
  const [selectedPoi, setSelectedPoi] = useState<MapPOI>(POIS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  if (!isOpen) return null;

  const filteredPois = POIS.filter((poi) => {
    const matchesSearch = poi.name.toLowerCase().includes(searchQuery.toLowerCase()) || poi.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || poi.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="map">map</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Apex Interactive Campus Navigator</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Explore buildings, labs, lecture halls &amp; amenities</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Map Visual Display (7 cols) */}
          <div className="col-span-1 md:col-span-7 bg-surface-variant p-4 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[420px] overflow-hidden">
            {/* 3D Map Background Illustration */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-85 transition-all duration-500 filter contrast-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw348naBzT65k90gJ7_cGFhFz_g8ZljDmf1j9rxv5Yq3xBcoPZysdVq1G7Pu2ucsDMb0J4ss4pLtSB5bxI5-1BlIeutltNXClkhV8v1x23_KKj1iVpB3xBpCw49hSvnNAOfKtg7m_OLlLINjakLS418a3YbW5ofOEZQKQQGDLUNwH1u2PFVkg7VGevSiphj7-Y7D8a7MDeDAnFMmxwuaHKCnhlzhG8z3ue0nP03xi0dueIknZ1sOev')`
              }}
            ></div>

            {/* Interactive Pins Overlay */}
            {POIS.map((poi) => {
              const isSelected = selectedPoi.id === poi.id;
              return (
                <button
                  key={poi.id}
                  onClick={() => setSelectedPoi(poi)}
                  style={{ top: poi.position.top, left: poi.position.left }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all duration-300 z-20 flex items-center justify-center shadow-lg ${
                    isSelected
                      ? 'bg-primary text-on-primary ring-4 ring-primary-container scale-125'
                      : 'bg-surface-container-lowest text-primary hover:scale-115 hover:bg-primary-container hover:text-on-primary-container'
                  }`}
                  title={poi.name}
                >
                  <span className="material-symbols-outlined text-sm font-bold" data-icon="location_on">
                    location_on
                  </span>
                </button>
              );
            })}

            {/* Map Legend Overlay */}
            <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/40 text-[10px] font-label-sm text-on-surface shadow-md">
              <span className="font-bold text-primary">Live Campus View:</span> Click any pin to navigate
            </div>
          </div>

          {/* POI Details & Search Directory (5 cols) */}
          <div className="col-span-1 md:col-span-5 p-4 flex flex-col justify-between bg-surface-container-lowest border-t md:border-t-0 md:border-l border-outline-variant/40 overflow-y-auto">
            <div>
              {/* Search & Category Filter */}
              <div className="space-y-2 mb-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-base" data-icon="search">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search building, lab, hall..."
                    className="w-full pl-8 pr-3 py-1.5 bg-surface border border-outline-variant/60 rounded-lg text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1">
                  {['All', 'Academic', 'Lab', 'Library', 'Food', 'Sports'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-label-sm whitespace-nowrap transition-colors ${
                        filterCategory === cat
                          ? 'bg-primary text-on-primary font-bold'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Location Card */}
              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/40 mb-4">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-label-sm font-bold uppercase">
                    {selectedPoi.code}
                  </span>
                  <span className="text-xs font-label-md text-secondary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" data-icon="directions_walk">directions_walk</span>
                    {selectedPoi.walkingTime}
                  </span>
                </div>

                <h4 className="text-base font-title-lg font-bold text-on-surface mb-1">
                  {selectedPoi.name}
                </h4>
                <p className="text-xs font-body-md text-on-surface-variant mb-2 leading-relaxed">
                  {selectedPoi.description}
                </p>
                <div className="text-[11px] font-label-sm text-outline flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs" data-icon="layers">layers</span>
                  Location: <strong className="text-on-surface">{selectedPoi.floor}</strong>
                </div>
              </div>

              {/* Quick Directory List */}
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {filteredPois.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoi(p)}
                    className={`w-full text-left p-2 rounded-lg flex items-center justify-between transition-colors text-xs font-body-md ${
                      selectedPoi.id === p.id
                        ? 'bg-primary/10 text-primary font-bold border border-primary/30'
                        : 'hover:bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    <span className="truncate">{p.name}</span>
                    <span className="text-[10px] font-label-sm text-outline shrink-0 ml-2">{p.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-outline-variant/40 flex gap-2">
              <button
                onClick={() => alert(`Starting turn-by-turn navigation to ${selectedPoi.name} from current student location (Academic Block A). Expected arrival: ${selectedPoi.walkingTime}.`)}
                className="flex-1 py-2 bg-primary text-on-primary rounded-xl font-label-md text-xs font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span className="material-symbols-outlined text-base" data-icon="navigation">navigation</span>
                Start Navigation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
