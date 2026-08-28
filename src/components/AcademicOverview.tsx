import React, { useState } from 'react';
import { Course, ExamInfo, FacultyMember } from '../types';

interface AcademicOverviewProps {
  courses: Course[];
  exams: ExamInfo[];
  faculty: FacultyMember[];
  onOpenTimetable: () => void;
  onOpenSyllabus: () => void;
  onOpenElectiveRegister: () => void;
  onOpenCourseDetails: (course: Course) => void;
  onOpenFullSchedule: () => void;
  onEmailFaculty: (faculty: FacultyMember) => void;
  onChatFaculty: (faculty: FacultyMember) => void;
  onOpenFacultyDirectory: () => void;
  onOpenQuickNote: () => void;
}

export const AcademicOverview: React.FC<AcademicOverviewProps> = ({
  courses,
  exams,
  faculty,
  onOpenTimetable,
  onOpenSyllabus,
  onOpenElectiveRegister,
  onOpenCourseDetails,
  onOpenFullSchedule,
  onEmailFaculty,
  onChatFaculty,
  onOpenFacultyDirectory,
  onOpenQuickNote,
}) => {
  const [facultySearch, setFacultySearch] = useState('');

  const filteredFaculty = faculty.filter(
    (f) =>
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.specialization.toLowerCase().includes(facultySearch.toLowerCase())
  );

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-6 overflow-y-auto">
      {/* Contextual Header & Mode Indicator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-xs font-bold tracking-wide uppercase shadow-xs">
              Student Mode
            </span>
            <span className="text-outline-variant font-bold">•</span>
            <span className="font-label-md text-xs font-semibold text-on-surface-variant">
              Semester 6
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-headline-lg font-bold text-on-background tracking-tight">
            Academic Overview
          </h1>
          <p className="text-sm md:text-base font-body-md text-on-surface-variant mt-1 max-w-2xl">
            Manage your courses, track assignments, and access study materials.
          </p>
        </div>

        <div className="flex gap-2.5">
          <button
            id="btn-timetable"
            onClick={onOpenTimetable}
            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-colors flex items-center gap-1.5 border border-outline-variant/40 shadow-xs"
          >
            <span className="material-symbols-outlined text-base" data-icon="calendar_month">calendar_month</span>
            Timetable
          </button>

          <button
            id="btn-syllabus"
            onClick={onOpenSyllabus}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-xs font-bold transition-colors shadow-xs flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base" data-icon="download">download</span>
            Syllabus
          </button>
        </div>
      </div>

      {/* Bento Grid Layout for Academic Content */}
      <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6">
        {/* Current Courses Module (Spans 8 cols on desktop) */}
        <div className="col-span-4 md:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs p-5 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-title-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="library_books">library_books</span>
              Active Courses
            </h2>
            <button
              onClick={() => onOpenCourseDetails(courses[0])}
              className="text-primary font-label-md text-xs font-bold hover:underline flex items-center gap-0.5"
            >
              View All <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => onOpenCourseDetails(course)}
                className="bg-surface hover:bg-surface-container-low transition-all rounded-xl border border-surface-variant p-4 flex flex-col gap-3 group cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`font-label-sm text-xs font-semibold px-2.5 py-0.5 rounded ${
                      course.type === 'Core'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-tertiary-container text-on-tertiary-container'
                    }`}
                  >
                    {course.type}
                  </span>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-lg" data-icon="open_in_new">
                    open_in_new
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-body-lg font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-label-md text-on-surface-variant mt-0.5">
                    {course.instructor}
                  </p>
                </div>

                <div className="mt-auto pt-2 flex items-center gap-3">
                  <div className="h-1.5 flex-1 bg-surface-variant rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-label-sm text-outline font-bold">{course.progress}%</span>
                </div>
              </div>
            ))}

            {/* Course Card 4: Register for Elective */}
            <div
              id="card-register-elective"
              onClick={onOpenElectiveRegister}
              className="bg-surface hover:bg-surface-container-low transition-all rounded-xl border border-dashed border-outline-variant/60 p-4 flex flex-col gap-2 group cursor-pointer items-center justify-center text-center min-h-[130px]"
            >
              <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary group-hover:scale-110 transition-all" data-icon="add_circle">
                add_circle
              </span>
              <span className="text-xs font-label-md font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                Register for Elective
              </span>
            </div>
          </div>
        </div>

        {/* Smart Reminders & Exam Info Module (Spans 4 cols on desktop) */}
        <div className="col-span-4 md:col-span-4 flex flex-col gap-4 h-full">
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs p-5 flex-1 relative overflow-hidden group">
            {/* Decorative gradient blob */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-error-container rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none"></div>

            <div className="flex items-center gap-2 mb-4 relative z-10">
              <span className="material-symbols-outlined text-error" data-icon="event_upcoming">event_upcoming</span>
              <h2 className="text-lg font-title-lg font-bold text-on-surface">Exam Info</h2>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              {/* Mid-Term 2 Exam */}
              <div className="border-l-4 border-error pl-3 py-1">
                <p className="text-[11px] font-label-sm text-error font-bold mb-0.5 uppercase tracking-wider">
                  Mid-Term 2
                </p>
                <h3 className="text-sm font-body-md text-on-surface font-bold">
                  DBMS Practical Exam
                </h3>
                <p className="text-xs font-label-md text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> Oct 15 • 10:00 AM
                </p>
              </div>

              <hr className="border-t border-outline-variant/40" />

              {/* Assignment Due */}
              <div className="border-l-4 border-outline-variant pl-3 py-1">
                <p className="text-[11px] font-label-sm text-outline font-bold mb-0.5 uppercase tracking-wider">
                  Assignment Due
                </p>
                <h3 className="text-sm font-body-md text-on-surface font-bold">
                  DSA Graph Theory Paper
                </h3>
                <p className="text-xs font-label-md text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> Oct 18 • 11:59 PM
                </p>
              </div>
            </div>

            <button
              id="btn-view-full-schedule"
              onClick={onOpenFullSchedule}
              className="w-full mt-4 py-2 border border-outline-variant/60 rounded-lg text-xs font-label-md text-on-surface font-bold hover:bg-surface-container-low transition-colors relative z-10 shadow-xs"
            >
              View Full Schedule
            </button>
          </div>
        </div>

        {/* Faculty Directory Module (Spans 12 cols) */}
        <div className="col-span-4 md:col-span-12 bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xs p-5 mt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 className="text-lg md:text-xl font-title-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="groups">groups</span>
              Faculty Directory
            </h2>

            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg" data-icon="search">
                search
              </span>
              <input
                id="input-faculty-search"
                type="text"
                value={facultySearch}
                onChange={(e) => setFacultySearch(e.target.value)}
                placeholder="Search faculty..."
                className="w-full pl-9 pr-3 py-1.5 bg-surface border border-outline-variant/60 rounded-lg text-xs font-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredFaculty.slice(0, 3).map((prof) => (
              <div
                key={prof.id}
                className="flex items-center gap-3 p-3 bg-surface-container-low border border-surface-variant rounded-xl hover:shadow-md hover:border-primary/40 transition-all cursor-pointer group"
              >
                <img
                  src={prof.avatarUrl}
                  alt={prof.name}
                  className="w-13 h-13 rounded-full object-cover border border-outline-variant shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-sm font-body-md font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                    {prof.name}
                  </h4>
                  <p className="text-[11px] font-label-sm text-on-surface-variant truncate">
                    {prof.specialization}
                  </p>
                  <div className="flex gap-1.5 mt-1.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); onEmailFaculty(prof); }}
                      className="p-1 bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-on-surface rounded text-xs transition-colors"
                      title={`Email ${prof.name}`}
                    >
                      <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onChatFaculty(prof); }}
                      className="p-1 bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-on-surface rounded text-xs transition-colors"
                      title={`Message ${prof.name}`}
                    >
                      <span className="material-symbols-outlined text-sm" data-icon="forum">forum</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* View Entire Directory Card */}
            <div
              id="card-view-entire-directory"
              onClick={onOpenFacultyDirectory}
              className="flex items-center justify-center p-3 bg-surface border border-outline-variant/50 border-dashed rounded-xl hover:bg-surface-container-low transition-all cursor-pointer group h-full min-h-[76px]"
            >
              <span className="text-xs font-label-md text-primary font-bold flex items-center gap-1.5">
                View Entire Directory <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Quick Note / Query) */}
      <button
        id="fab-quick-query"
        onClick={onOpenQuickNote}
        className="fixed bottom-20 md:bottom-10 right-4 md:right-10 z-40 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl p-4 shadow-lg flex items-center justify-center hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-primary/30"
        title="Quick Query or Academic Note"
      >
        <span className="material-symbols-outlined text-2xl" data-icon="edit_square">edit_square</span>
      </button>
    </div>
  );
};
