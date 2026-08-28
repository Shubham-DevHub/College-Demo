import React from 'react';
import { Course } from '../../types';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenAiForCourse: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onOpenAiForCourse,
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 md:p-5 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="menu_book">menu_book</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-primary">{course.code}</span>
                <span className="text-[10px] font-label-sm px-2 py-0.2 bg-surface-container-highest rounded font-bold">
                  {course.type}
                </span>
              </div>
              <h3 className="text-lg font-headline-md font-bold text-on-surface">{course.title}</h3>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Progress Banner */}
          <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
            <div className="flex justify-between items-center mb-1.5 text-xs font-label-md">
              <span className="text-on-surface-variant font-bold">Syllabus Completion</span>
              <span className="font-bold text-primary">{course.progress}%</span>
            </div>
            <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <div className="flex justify-between text-[11px] font-label-sm text-outline mt-2">
              <span>Instructor: <strong className="text-on-surface">{course.instructor}</strong></span>
              <span>{course.nextLecture || course.room}</span>
            </div>
          </div>

          {/* Syllabus Topics */}
          <div>
            <h4 className="text-sm font-title-lg font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base" data-icon="checklist">checklist</span>
              Curriculum Units &amp; Learning Modules
            </h4>
            <div className="space-y-2">
              {(course.syllabusTopics || []).map((unit, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center justify-between text-xs"
                >
                  <span className="font-body-md text-on-surface">{unit}</span>
                  <span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Helper Banner */}
          <div className="p-4 bg-tertiary-container/30 rounded-xl border border-tertiary/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl" data-icon="psychology">psychology</span>
              <div>
                <p className="text-xs font-bold text-on-surface">Need help solving problems for this course?</p>
                <p className="text-[11px] font-body-md text-on-surface-variant">Ask AI Assistant to explain concepts or solve sample questions.</p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAiForCourse(course.title);
              }}
              className="px-3 py-1.5 bg-tertiary text-on-tertiary rounded-lg text-xs font-label-md font-bold whitespace-nowrap shadow-xs hover:bg-tertiary/90"
            >
              Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-label-md font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
