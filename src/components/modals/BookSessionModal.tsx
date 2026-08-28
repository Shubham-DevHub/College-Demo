import React, { useState } from 'react';
import { FacultyMember } from '../../types';

interface BookSessionModalProps {
  facultyList: FacultyMember[];
  selectedFaculty?: FacultyMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookSessionModal: React.FC<BookSessionModalProps> = ({
  facultyList,
  selectedFaculty,
  isOpen,
  onClose,
}) => {
  const [facultyId, setFacultyId] = useState<string>(selectedFaculty?.id || facultyList[0]?.id || '');
  const [topic, setTopic] = useState<string>('Doubt Clearing on Recent Lecture');
  const [selectedDate, setSelectedDate] = useState<string>('2024-10-16');
  const [selectedSlot, setSelectedSlot] = useState<string>('03:30 PM - 04:00 PM');
  const [notes, setNotes] = useState<string>('');
  const [bookedSuccess, setBookedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentProf = facultyList.find((f) => f.id === facultyId) || facultyList[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="connect_without_contact">
                connect_without_contact
              </span>
            </div>
            <div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">Student-Teacher Connect</h3>
              <p className="text-xs font-body-md text-on-surface-variant">Schedule 1-on-1 mentoring or doubt clearance</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {bookedSuccess ? (
          <div className="p-8 text-center space-y-3 animate-fade-in">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-3xl" data-icon="check_circle">check_circle</span>
            </div>
            <h4 className="text-xl font-headline-md font-bold text-on-surface">Session Confirmed!</h4>
            <p className="text-xs font-body-md text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Your mentoring appointment with <strong className="text-primary">{currentProf?.name}</strong> on <strong className="text-on-surface">{selectedDate}</strong> at <strong className="text-on-surface">{selectedSlot}</strong> in <strong className="text-on-surface">{currentProf?.office}</strong> has been registered in the academic timetable.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBook} className="p-5 space-y-4">
            {/* Faculty Selector */}
            <div>
              <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Select Professor</label>
              <select
                value={facultyId}
                onChange={(e) => setFacultyId(e.target.value)}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {facultyList.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} — {f.specialization} ({f.office})
                  </option>
                ))}
              </select>
            </div>

            {/* Professor Available Hours info banner */}
            {currentProf && (
              <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center gap-3 text-xs">
                <img
                  src={currentProf.avatarUrl}
                  alt={currentProf.name}
                  className="w-10 h-10 rounded-full object-cover border border-outline-variant"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-on-surface">{currentProf.name}</p>
                  <p className="text-on-surface-variant font-label-sm text-[11px]">
                    Office: {currentProf.office} • {currentProf.availableHours}
                  </p>
                </div>
              </div>
            )}

            {/* Topic / Purpose */}
            <div>
              <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Topic / Agenda</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Doubt Clearing on Recent Lecture">Doubt Clearing on Recent Lecture</option>
                <option value="Mini-Project & Research Guidance">Mini-Project & Research Guidance</option>
                <option value="Assignment / Graph Theory Review">Assignment / Graph Theory Review</option>
                <option value="Career & Higher Studies Counseling">Career & Higher Studies Counseling</option>
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Available Slot</label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
                  <option value="03:00 PM - 03:30 PM">03:00 PM - 03:30 PM</option>
                  <option value="03:30 PM - 04:00 PM">03:30 PM - 04:00 PM</option>
                  <option value="04:30 PM - 05:00 PM">04:30 PM - 05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Note */}
            <div>
              <label className="block text-xs font-label-md font-bold text-on-surface mb-1">Optional Specific Query Details</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention specific questions or problem statement..."
                rows={2}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/60 rounded-xl text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-outline-variant/40 flex justify-end gap-2">
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
                Confirm Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
