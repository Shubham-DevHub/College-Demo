export type UserRole = 'student' | 'teacher' | 'admin';

export type NavigationTab = 'home' | 'academic' | 'campus' | 'support' | 'ai-help';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  department: string;
  studentId: string;
  semester: number;
  avatarUrl: string;
  email: string;
  cgpa?: number;
  attendance?: number;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  type: 'Core' | 'Elective';
  progress: number;
  code: string;
  credits: number;
  room: string;
  nextLecture: string;
  description: string;
  syllabusTopics: string[];
}

export interface ExamInfo {
  id: string;
  category: 'Mid-Term 2' | 'Assignment Due' | 'Practical Exam' | 'Final Exam';
  title: string;
  courseCode: string;
  date: string;
  time: string;
  isUrgent?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  email: string;
  avatarUrl: string;
  office: string;
  availableHours: string;
  status: 'Available' | 'In Lecture' | 'Busy';
}

export interface CampusFacility {
  id: string;
  name: string;
  icon: string;
  description: string;
  capacity: string;
  timing: string;
}

export interface CollegeDepartment {
  id: string;
  name: string;
  shortCode: string;
  icon: string;
  description: string;
  intake: number;
  hod: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  tag: string;
  description: string;
  isRegistered?: boolean;
}

export interface LibraryResource {
  id: string;
  title: string;
  course: string;
  type: 'Lecture Notes' | 'Reference Book' | 'Lab Manual' | 'Question Bank';
  size: string;
  downloadUrl?: string;
  status: 'Saved' | 'Pending';
  lastAccessed: string;
}

export interface ClubItem {
  id: string;
  name: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Social';
  tagline: string;
  avatar: string;
  upcomingEventTitle: string;
  eventDate: string;
  members: number;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  category: 'IT Support' | 'Campus Maintenance' | 'Hostel' | 'Academics' | 'Library';
  subject: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sources?: string[];
  suggestedPrompts?: string[];
}
