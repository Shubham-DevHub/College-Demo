import React, { useState } from 'react';
import {
  INITIAL_USER,
  COURSES_DATA,
  EXAMS_DATA,
  FACULTY_DATA,
  DEPARTMENTS_DATA,
  FACILITIES_DATA,
  EVENTS_DATA,
} from './data/mockData';
import { NavigationTab, UserRole, Course, FacultyMember } from './types';

// Components
import { TopAppBar } from './components/TopAppBar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BottomNavBar } from './components/BottomNavBar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { AcademicOverview } from './components/AcademicOverview';
import { CampusOverview } from './components/CampusOverview';
import { SupportScreen } from './components/SupportScreen';
import { TeacherDashboard } from './components/TeacherDashboard';
import { AdminDashboard } from './components/AdminDashboard';

// Modals
import { AiChatDrawer } from './components/modals/AiChatDrawer';
import { CampusMapModal } from './components/modals/CampusMapModal';
import { LibraryModal } from './components/modals/LibraryModal';
import { BookSessionModal } from './components/modals/BookSessionModal';
import { HistoryModal } from './components/modals/HistoryModal';
import { HelpDeskModal } from './components/modals/HelpDeskModal';
import { TimetableModal } from './components/modals/TimetableModal';
import { ElectiveModal } from './components/modals/ElectiveModal';
import { CourseDetailModal } from './components/modals/CourseDetailModal';
import { ClubsModal } from './components/modals/ClubsModal';
import { NotificationsModal } from './components/modals/NotificationsModal';
import { ProfileModal } from './components/modals/ProfileModal';
import { CareerHubModal } from './components/modals/CareerHubModal';
import { CompetitiveExamsModal } from './components/modals/CompetitiveExamsModal';

export function App() {
  const [user] = useState(INITIAL_USER);
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(false);

  // Drawer state for mobile
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Modals state
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isCampusMapOpen, setIsCampusMapOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [selectedFacultyForBooking, setSelectedFacultyForBooking] = useState<FacultyMember | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isHelpDeskOpen, setIsHelpDeskOpen] = useState(false);
  const [isTimetableOpen, setIsTimetableOpen] = useState(false);
  const [isElectiveOpen, setIsElectiveOpen] = useState(false);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCareerHubOpen, setIsCareerHubOpen] = useState(false);
  const [isCompetitiveExamsOpen, setIsCompetitiveExamsOpen] = useState(false);

  const handleSelectRoleFromWelcome = (role: UserRole) => {
    setCurrentRole(role);
    setShowWelcomeScreen(false);
  };

  const handleTabChange = (tab: NavigationTab) => {
    if (tab === 'ai-help') {
      setIsAiChatOpen(true);
    } else {
      setActiveTab(tab);
    }
  };

  const handleEmailFaculty = (faculty: FacultyMember) => {
    alert(`Opening email client to contact ${faculty.name} (${faculty.email}).`);
  };

  const handleChatFaculty = (faculty: FacultyMember) => {
    setSelectedFacultyForBooking(faculty);
    setIsBookSessionOpen(true);
  };

  const handleElectiveRegistered = (electiveName: string) => {
    const newCourse: Course = {
      id: `crs-${Date.now()}`,
      code: 'CS-304E',
      title: electiveName,
      instructor: 'Dr. Kavita Joshi',
      progress: 5,
      type: 'Elective',
      credits: 4,
      room: 'LH-302',
      nextLecture: 'Tue & Thu 10:15 AM',
      description: 'Advanced elective curriculum designed with industry partners and laboratory experiments.',
      syllabusTopics: [
        'Architecture & Theoretical Foundations',
        'System Implementation & Frameworks',
        'Security, Scalability & Performance Benchmarking',
        'Capstone Industry Project Review'
      ]
    };
    setCourses((prev) => [...prev, newCourse]);
  };

  if (showWelcomeScreen) {
    return (
      <WelcomeScreen
        onSelectRole={handleSelectRoleFromWelcome}
        onOpenAiHelp={() => setIsAiChatOpen(true)}
      />
    );
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Fixed App Bar */}
      <TopAppBar
        user={user}
        activeTab={activeTab}
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenAiHelp={() => setIsAiChatOpen(true)}
        onToggleDrawer={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
        onNavigateHome={() => {
          setActiveTab('home');
          setCurrentRole('student');
        }}
      />

      {/* Main Content Layout with Sidebar */}
      <div className="flex flex-1 pt-16 pb-20 md:pb-8">
        {/* Left Navigation Sidebar */}
        <NavigationDrawer
          user={user}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          currentRole={currentRole}
          onRoleChange={setCurrentRole}
          isOpenMobile={isMobileDrawerOpen}
          onCloseMobile={() => setIsMobileDrawerOpen(false)}
          onOpenReminders={() => setIsNotificationsOpen(true)}
          onOpenAiHelp={() => setIsAiChatOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
          onOpenCareerHub={() => setIsCareerHubOpen(true)}
          onOpenCompetitiveExams={() => setIsCompetitiveExamsOpen(true)}
        />

        {/* Dynamic Main View based on role & selected tab */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {currentRole === 'teacher' ? (
            <TeacherDashboard
              onOpenBookSession={() => setIsBookSessionOpen(true)}
              onOpenAiHelp={() => setIsAiChatOpen(true)}
            />
          ) : currentRole === 'admin' ? (
            <AdminDashboard
              onOpenAiHelp={() => setIsAiChatOpen(true)}
            />
          ) : (
            <>
              {activeTab === 'home' && (
                <HomeDashboard
                  user={user}
                  examReminders={EXAMS_DATA}
                  onOpenLibrary={() => setIsLibraryOpen(true)}
                  onOpenClubs={() => setIsClubsOpen(true)}
                  onOpenHelpDesk={() => setIsHelpDeskOpen(true)}
                  onOpenBookSession={() => {
                    setSelectedFacultyForBooking(null);
                    setIsBookSessionOpen(true);
                  }}
                  onOpenReminders={() => setIsNotificationsOpen(true)}
                  onOpenProfile={() => setIsProfileOpen(true)}
                />
              )}

              {activeTab === 'academic' && (
                <AcademicOverview
                  courses={courses}
                  exams={EXAMS_DATA}
                  faculty={FACULTY_DATA}
                  onOpenTimetable={() => setIsTimetableOpen(true)}
                  onOpenSyllabus={() => {
                    setSelectedCourseForDetail(courses[0]);
                  }}
                  onOpenElectiveRegister={() => setIsElectiveOpen(true)}
                  onOpenCourseDetails={(course) => setSelectedCourseForDetail(course)}
                  onOpenFullSchedule={() => setIsTimetableOpen(true)}
                  onEmailFaculty={handleEmailFaculty}
                  onChatFaculty={handleChatFaculty}
                  onOpenFacultyDirectory={() => {
                    const el = document.getElementById('input-faculty-search');
                    el?.focus();
                  }}
                  onOpenQuickNote={() => setIsAiChatOpen(true)}
                />
              )}

              {activeTab === 'campus' && (
                <CampusOverview
                  departments={DEPARTMENTS_DATA}
                  facilities={FACILITIES_DATA}
                  events={EVENTS_DATA}
                  onOpenHistory={() => setIsHistoryOpen(true)}
                  onOpenMap={() => setIsCampusMapOpen(true)}
                  onOpenDepartments={() => setActiveTab('academic')}
                  onOpenFacilities={() => setIsCampusMapOpen(true)}
                  onOpenEvents={() => setIsClubsOpen(true)}
                  onOpenAchievements={() => alert('NAAC A++ score of 3.61/4.0 and NIRF Top 100 National Engineering Colleges rank!')}
                  onOpenSymposiumRegister={() => alert('Registration confirmed for Innovate 2024 Techfest! Badge sent to email.')}
                />
              )}

              {activeTab === 'support' && (
                <SupportScreen
                  onOpenHelpDesk={() => setIsHelpDeskOpen(true)}
                  onOpenAiHelp={() => setIsAiChatOpen(true)}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Interactive Feature Modals & Drawers */}
      <AiChatDrawer
        user={user}
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
      />

      <CampusMapModal
        isOpen={isCampusMapOpen}
        onClose={() => setIsCampusMapOpen(false)}
      />

      <LibraryModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
      />

      <BookSessionModal
        facultyList={FACULTY_DATA}
        selectedFaculty={selectedFacultyForBooking}
        isOpen={isBookSessionOpen}
        onClose={() => {
          setIsBookSessionOpen(false);
          setSelectedFacultyForBooking(null);
        }}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />

      <HelpDeskModal
        isOpen={isHelpDeskOpen}
        onClose={() => setIsHelpDeskOpen(false)}
      />

      <TimetableModal
        isOpen={isTimetableOpen}
        onClose={() => setIsTimetableOpen(false)}
      />

      <ElectiveModal
        isOpen={isElectiveOpen}
        onClose={() => setIsElectiveOpen(false)}
        onRegistered={handleElectiveRegistered}
      />

      <CourseDetailModal
        course={selectedCourseForDetail}
        isOpen={!!selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onOpenAiForCourse={() => {
          setIsAiChatOpen(true);
        }}
      />

      <ClubsModal
        isOpen={isClubsOpen}
        onClose={() => setIsClubsOpen(false)}
      />

      <NotificationsModal
        reminders={EXAMS_DATA}
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onOpenAiHelp={() => setIsAiChatOpen(true)}
      />

      <ProfileModal
        user={user}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <CareerHubModal
        isOpen={isCareerHubOpen}
        onClose={() => setIsCareerHubOpen(false)}
      />

      <CompetitiveExamsModal
        isOpen={isCompetitiveExamsOpen}
        onClose={() => setIsCompetitiveExamsOpen(false)}
        onOpenAiHelp={() => setIsAiChatOpen(true)}
      />
    </div>
  );
}

export default App;
