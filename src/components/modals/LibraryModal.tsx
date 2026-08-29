import React, { useState } from 'react';
import { LIBRARY_ITEMS } from '../../data/mockData';
import { LibraryResource } from '../../types';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<LibraryResource[]>(LIBRARY_ITEMS);
  const [filterType, setFilterType] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [previewItem, setPreviewItem] = useState<LibraryResource | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const filtered = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.course.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleDownload = (item: LibraryResource) => {
    setDownloadSuccess(`Downloaded "${item.title}" (${item.size}) to your local study folder.`);
    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, status: 'Saved' } : i))
    );
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[88vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="local_library">local_library</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Personal Academic Library</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Saved notes, question banks, lab manuals &amp; slides</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 border-b border-outline-variant/30 bg-surface flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-base" data-icon="search">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes or course..."
              className="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {['All', 'Lecture Notes', 'Lab Manual', 'Reference Book', 'Question Bank'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 rounded-full text-xs font-label-sm whitespace-nowrap transition-colors ${
                  filterType === type
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Download notification toast */}
        {downloadSuccess && (
          <div className="mx-4 mt-3 p-3 bg-secondary-container text-on-secondary-container rounded-xl text-xs font-label-md flex items-center gap-2 animate-fade-in shadow-xs">
            <span className="material-symbols-outlined text-base" data-icon="check_circle">check_circle</span>
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* List Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-4xl text-outline mb-2" data-icon="folder_open">folder_open</span>
              <p>No resources found matching your search.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-surface-container-low hover:bg-surface-container rounded-xl border border-outline-variant/40 flex items-center justify-between gap-4 transition-all shadow-xs"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl" data-icon="description">
                      description
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs md:text-sm font-bold text-on-surface truncate">{item.title}</h4>
                      <span
                        className={`text-[10px] font-label-sm px-2 py-0.5 rounded-full font-bold shrink-0 ${
                          item.status === 'Saved'
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-error-container text-on-error-container'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs font-label-md text-on-surface-variant mt-0.5 truncate">
                      {item.course} • <span className="text-outline">{item.size}</span> • Last opened {item.lastAccessed}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setPreviewItem(item)}
                    className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg text-xs font-label-sm font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base" data-icon="visibility">visibility</span>
                    <span className="hidden sm:inline">Preview</span>
                  </button>
                  <button
                    onClick={() => handleDownload(item)}
                    className="p-1.5 px-2.5 bg-primary text-on-primary rounded-lg text-xs font-label-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-base" data-icon="download">download</span>
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Preview Sub-modal */}
        {previewItem && (
          <div className="absolute inset-0 bg-surface-container-lowest z-20 flex flex-col p-6 animate-fade-in">
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/40">
              <h4 className="text-base font-bold text-on-surface">{previewItem.title}</h4>
              <button onClick={() => setPreviewItem(null)} className="p-1 rounded-full hover:bg-surface-container text-on-surface-variant">
                <span className="material-symbols-outlined" data-icon="close">close</span>
              </button>
            </div>
            <div className="flex-1 my-4 bg-surface p-4 rounded-xl border border-outline-variant/40 overflow-y-auto text-xs md:text-sm font-mono text-on-surface leading-relaxed">
              <p className="font-bold text-primary mb-2">// Apex Institute of Technology - Official Academic Material</p>
              <p className="mb-2">Course: {previewItem.course}</p>
              <p className="mb-4">Document Type: {previewItem.type} | Size: {previewItem.size}</p>
              <hr className="my-3 border-outline-variant/30" />
              <p className="font-bold mb-1">Key Summary &amp; Chapter Index:</p>
              <p>1. Formal Definitions &amp; Asymptotic Theorems</p>
              <p>2. Detailed Code Implementation and Complexity Bounds</p>
              <p>3. Previous University Examination Questions (2020-2024)</p>
              <p>4. Practical Lab Exercise Verification Checklist</p>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setPreviewItem(null)} className="px-4 py-2 border border-outline-variant rounded-lg text-xs font-label-md">
                Close Preview
              </button>
              <button
                onClick={() => { handleDownload(previewItem); setPreviewItem(null); }}
                className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-label-md font-bold"
              >
                Download PDF ({previewItem.size})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
