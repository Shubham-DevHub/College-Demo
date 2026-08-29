import React, { useState } from 'react';

interface HelpDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TicketItem {
  id: string;
  category: string;
  subject: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
}

export const HelpDeskModal: React.FC<HelpDeskModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'raise' | 'tickets'>('raise');
  const [tickets, setTickets] = useState<TicketItem[]>([
    {
      id: 'TKT-8841',
      category: 'IT & WiFi',
      subject: 'Slow hostel Wi-Fi speeds during evening peak hours',
      description: 'Hostel 3 Wing B connectivity drops frequently after 8:00 PM.',
      status: 'In Progress',
      date: 'Oct 12, 2024'
    },
    {
      id: 'TKT-7630',
      category: 'Central Library',
      subject: 'Book renewal request for Algorithm Design by Kleinberg',
      description: 'Requesting 7-day loan extension due to internal submissions.',
      status: 'Resolved',
      date: 'Oct 08, 2024'
    }
  ]);

  const [category, setCategory] = useState('IT & Lab Infrastructure');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;

    const newTicket: TicketItem = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      category,
      subject,
      description,
      status: 'Open',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setTickets([newTicket, ...tickets]);
    setSubmittedMessage(`Ticket #${newTicket.id} created successfully! Our campus desk will respond within 24 hours.`);
    setSubject('');
    setDescription('');
    setTimeout(() => {
      setSubmittedMessage(null);
      setActiveTab('tickets');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="support_agent">support_agent</span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Apex Campus Help Desk</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Raise tickets for IT, maintenance, hostel &amp; campus queries</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-outline-variant/40 bg-surface px-4">
          <button
            onClick={() => setActiveTab('raise')}
            className={`py-2.5 px-4 text-xs font-label-md font-bold border-b-2 transition-colors ${
              activeTab === 'raise'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Raise New Ticket
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`py-2.5 px-4 text-xs font-label-md font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'tickets'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>My Active Tickets</span>
            <span className="bg-surface-container-highest px-1.5 py-0.2 rounded-full text-[10px]">
              {tickets.length}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1">
          {submittedMessage && (
            <div className="mb-4 p-3.5 bg-secondary-container text-on-secondary-container rounded-xl text-xs font-label-md flex items-center gap-2 animate-fade-in shadow-xs">
              <span className="material-symbols-outlined text-base" data-icon="check_circle">check_circle</span>
              <span>{submittedMessage}</span>
            </div>
          )}

          {activeTab === 'raise' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Issue Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="IT & Lab Infrastructure">IT &amp; Lab Infrastructure (PC, GPU, WiFi, ERP)</option>
                  <option value="Hostel & Mess Maintenance">Hostel &amp; Mess Maintenance</option>
                  <option value="Academic Records & Marksheets">Academic Records &amp; Marksheets</option>
                  <option value="Central Library & Book Loan">Central Library &amp; Book Loan</option>
                  <option value="Campus Security & Parking">Campus Security &amp; Parking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Subject / Summary</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="e.g. Lab 3B GPU terminal 04 not booting"
                  className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Detailed Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  placeholder="Provide classroom/room number, asset tag, and specific details..."
                  className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-outline-variant rounded-xl text-xs font-label-md hover:bg-surface-container"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold hover:bg-primary/90 transition-colors shadow-xs"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              {tickets.map((t) => (
                <div
                  key={t.id}
                  className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-1.5"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary">{t.id}</span>
                      <span className="text-[10px] font-label-sm px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded">
                        {t.category}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-label-sm font-bold px-2 py-0.5 rounded-full ${
                        t.status === 'Resolved'
                          ? 'bg-secondary-container text-on-secondary-container'
                          : t.status === 'In Progress'
                          ? 'bg-tertiary-container text-on-tertiary-container'
                          : 'bg-error-container text-on-error-container'
                      }`}
                    >
                      {t.status}
                    </span>
                  </div>

                  <h4 className="text-xs md:text-sm font-bold text-on-surface">{t.subject}</h4>
                  <p className="text-xs font-body-md text-on-surface-variant">{t.description}</p>
                  <p className="text-[10px] font-label-sm text-outline pt-1">Logged on: {t.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
