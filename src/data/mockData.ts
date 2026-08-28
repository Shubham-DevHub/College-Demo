import { Course, ExamInfo, FacultyMember, CampusFacility, CollegeDepartment, CampusEvent, LibraryResource, ClubItem, SupportTicket, UserProfile } from '../types';

export const INITIAL_USER: UserProfile = {
  id: 'usr_2024_001',
  name: 'Aarav Sharma',
  role: 'student',
  department: 'Computer Engineering',
  studentId: '2024-001',
  semester: 6,
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhqy6uIQvWCTwjP_6iSPtnrK8b4c9ZQbO3BmW1OMMNLayUxwxLT7hOU7WudSMUfW4Qtrixg7POXn7LoR3gR3Kojn-FAGUgDZF9MB1qAkH13tI7sgU_hkeEOiCg04fNLk7Z1d2UHmlzomLIeN7pBqYGq7K3VsvswlYay5rPuIV7MFi6IF_BqqR7VnmFoJ-xn-idzHhEyQ6fPxYasES6bWjw2RohhgW8JSN5oEB_I69RqNGXv7_XY1Q1',
  email: 'aarav.sharma@ssgm.edu.in',
  cgpa: 8.94,
  attendance: 88,
};

export const COURSES_DATA: Course[] = [
  {
    id: 'cs-301',
    title: 'Data Structures & Algorithms',
    instructor: 'Prof. A. Sharma',
    type: 'Core',
    progress: 75,
    code: 'CS-301',
    credits: 4,
    room: 'LH-204',
    nextLecture: 'Tomorrow at 10:00 AM',
    description: 'Advanced trees, dynamic programming, network flow, asymptotic complexity, and graph algorithms.',
    syllabusTopics: [
      'Asymptotic Notation & Recurrence Relations',
      'Advanced Trees (AVL, Red-Black, B-Trees)',
      'Graph Representations & Shortest Path Algorithms',
      'Dynamic Programming & Greedy Approximations',
      'NP-Completeness & Approximation Algorithms'
    ]
  },
  {
    id: 'cs-302',
    title: 'Database Management Systems',
    instructor: 'Dr. R. Desai',
    type: 'Core',
    progress: 40,
    code: 'CS-302',
    credits: 4,
    room: 'Lab-3B',
    nextLecture: 'Wednesday at 02:00 PM',
    description: 'Relational algebra, SQL tuning, indexing, transactions, ACID properties, and distributed databases.',
    syllabusTopics: [
      'Relational Data Model & Formal Query Languages',
      'Complex SQL, Views, Triggers, & Stored Procedures',
      'Normal Forms (1NF through BCNF & 4NF)',
      'Transaction Concurrency Control & Recovery',
      'NoSQL and Distributed Architecture'
    ]
  },
  {
    id: 'cs-303',
    title: 'Artificial Intelligence',
    instructor: 'Prof. M. Patel',
    type: 'Elective',
    progress: 10,
    code: 'CS-303E',
    credits: 3,
    room: 'Seminar Hall 1',
    nextLecture: 'Thursday at 11:30 AM',
    description: 'State space search, heuristics, probabilistic reasoning, reinforcement learning, and neural architectures.',
    syllabusTopics: [
      'Problem Formulation & Informed Search (A*, IDA*)',
      'Adversarial Search & Minimax Alpha-Beta Pruning',
      'Knowledge Representation & First Order Logic',
      'Probabilistic Reasoning & Bayesian Networks',
      'Introduction to Deep Learning Foundations'
    ]
  }
];

export const EXAMS_DATA: ExamInfo[] = [
  {
    id: 'ex-1',
    category: 'Mid-Term 2',
    title: 'DBMS Practical Exam',
    courseCode: 'CS-302',
    date: 'Oct 15',
    time: '10:00 AM',
    isUrgent: true,
  },
  {
    id: 'ex-2',
    category: 'Assignment Due',
    title: 'DSA Graph Theory Paper',
    courseCode: 'CS-301',
    date: 'Oct 18',
    time: '11:59 PM',
    isUrgent: false,
  },
  {
    id: 'ex-3',
    category: 'Practical Exam',
    title: 'AI Mini-Project Demo',
    courseCode: 'CS-303E',
    date: 'Oct 24',
    time: '02:30 PM',
    isUrgent: false,
  },
  {
    id: 'ex-4',
    category: 'Final Exam',
    title: 'Theory End-Semester Exam',
    courseCode: 'CS-301',
    date: 'Nov 12',
    time: '09:30 AM',
    isUrgent: false,
  }
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Prof. A. Sharma',
    designation: 'Associate Professor & HOD',
    specialization: 'DSA, Algorithms',
    email: 'a.sharma@ssgm.edu.in',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtx03TiJO0SR1f882LaMQphs5Y6BEH7wLKO4Lb9ABaAok58P78lXLGNwU_6Kk1RQFa66h-f1JdNLrmF39JPoDdHiQyeGpDmfwExLKlevmTpzIhHE-cKepN2GECiWfd5LOKja2pCttRwvkVKQXENYiVNFd-Pp1MfpfZbp4CWazDc9ABl0C5XicA46oUdp4Xo-dRlUo4vUDMh1xX3iaVL_iy_iYdP0zsjtaC3lrbD-fB2-Z3hzOsHuDN',
    office: 'Academic Block A, Room 302',
    availableHours: 'Mon, Wed: 3:00 PM - 5:00 PM',
    status: 'Available'
  },
  {
    id: 'fac-2',
    name: 'Dr. R. Desai',
    designation: 'Professor',
    specialization: 'DBMS, SQL Lab',
    email: 'r.desai@ssgm.edu.in',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIkxOv01JuayNaD9NTgwWx-aapBlJam8ykjwH6f1aqhb2Tr2nDgm5rdAesvjyVv3JdHxxuxktdYgwKTKGqV_O4bm0abP9fPweJB2PUnAMlFl0fjpsDuxI_iDsA26j9Xi33Ox08NhiDkkR8KkeVgH6rf0lR9xDPTx92u7gmNJrq0LrqCyUcdsJxOHTAtBJZg5MUiXcZAk-_uXPX9D91iuU_kCJDee_UOsRz67X8YnoA-J4x0d8ta9UW',
    office: 'Computer Science Wing, Room 114',
    availableHours: 'Tue, Thu: 10:00 AM - 12:00 PM',
    status: 'Available'
  },
  {
    id: 'fac-3',
    name: 'Prof. M. Patel',
    designation: 'Assistant Professor',
    specialization: 'AI, Machine Learning',
    email: 'm.patel@ssgm.edu.in',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtU_HaCGDq-ySQ7c9SAvJPmQDLO09G_JIAtAulJhmjFJPKGKwYdbpzc_ebi2IurpJiNA6AvaVklREB2n785F_3QkWTAqDnVA9qDgHcBMoE3BiPzb46P9ge8Fmclzeu5LV6WEA97sYjp9IGy05U9gpYh5MphDuZiE3_K37VZs0VgKqIHFty6tq-jfuxpl7I7YCUaj_tHrkgnPFk1u00ZQyJ-NkoKLeVA4fIa_kDrapwqO2jssadCxdY',
    office: 'Innovation Center, Room 205',
    availableHours: 'Daily: 4:00 PM - 5:30 PM',
    status: 'Available'
  },
  {
    id: 'fac-4',
    name: 'Dr. Kavita Joshi',
    designation: 'Associate Professor',
    specialization: 'Cybersecurity & Networks',
    email: 'k.joshi@ssgm.edu.in',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYIeWNfcsF7jvh-J6RRoqL7JbTMkTHKSU4WdMFtJTHww8T4tvBpvsys333EYXzkuWLHeh16MuflQnzVC65lyxeEP6L5XlQvY6zvS3eFwB8e0jaMKHRJC1PHpDhdKt3hu8INPNCx9aVkpCQc2MsM7qSaxw1VZY-hr25eSwM6vRECzcEaArGcH-96olhmdWnW4xQeVyTnYcRBiGMV35KDjzcSY98QUvJgrttGdNYGy2gzZQohqF8laKq',
    office: 'Block C, Room 410',
    availableHours: 'Wed, Fri: 11:00 AM - 1:00 PM',
    status: 'In Lecture'
  }
];

export const DEPARTMENTS_DATA: CollegeDepartment[] = [
  {
    id: 'dept-cse',
    name: 'Computer Engineering',
    shortCode: 'CSE',
    icon: 'code',
    description: 'Focusing on advanced algorithms, cloud architecture, machine intelligence, and software engineering.',
    intake: 180,
    hod: 'Prof. A. Sharma'
  },
  {
    id: 'dept-it',
    name: 'Information Technology',
    shortCode: 'IT',
    icon: 'devices',
    description: 'Empowering students in cyber resilience, full-stack systems, big data analysis, and enterprise networking.',
    intake: 120,
    hod: 'Dr. S. Kulkarni'
  },
  {
    id: 'dept-extc',
    name: 'Electronics & Telecommunication',
    shortCode: 'EXTC',
    icon: 'cell_tower',
    description: 'Pioneering signal processing, IoT micro-controllers, 5G wireless networks, and VLSI circuit design.',
    intake: 120,
    hod: 'Dr. V. N. Bapat'
  },
  {
    id: 'dept-mech',
    name: 'Mechanical Engineering',
    shortCode: 'MECH',
    icon: 'precision_manufacturing',
    description: 'Excellence in robotics, thermal dynamics, CAD/CAM automation, and sustainable renewable energy.',
    intake: 120,
    hod: 'Prof. P. R. Wankhede'
  },
  {
    id: 'dept-civil',
    name: 'Civil Engineering',
    shortCode: 'CIVIL',
    icon: 'apartment',
    description: 'Specializing in smart structural designs, GIS surveying, green building tech, and water hydrology.',
    intake: 60,
    hod: 'Dr. M. S. Joshi'
  }
];

export const FACILITIES_DATA: CampusFacility[] = [
  {
    id: 'fac-lib',
    name: 'Central Digital Library',
    icon: 'local_library',
    description: 'Over 85,000 volumes, IEEE & ACM digital repositories, silent research pods, and 24/7 reading halls.',
    capacity: '800 Students',
    timing: '08:00 AM - 11:00 PM'
  },
  {
    id: 'fac-labs',
    name: 'Advanced Computing Labs',
    icon: 'computer',
    description: '14 high-throughput laboratories equipped with NVIDIA GPU workstations, Apple Silicon clusters, and gigabit fiber.',
    capacity: '600 Terminals',
    timing: '08:30 AM - 08:00 PM'
  },
  {
    id: 'fac-aud',
    name: 'Main Auditorium & Amphitheater',
    icon: 'theater_comedy',
    description: 'Acoustically treated auditorium with 4K projection for international symposiums, TEDx, and techfests.',
    capacity: '1,500 Seats',
    timing: 'Event based'
  },
  {
    id: 'fac-sports',
    name: 'Indoor & Outdoor Sports Arena',
    icon: 'sports_soccer',
    description: 'Olympic-size synthetic athletic track, basketball courts, badminton pavilion, and modern gymnasiums.',
    capacity: 'Open Campus',
    timing: '06:00 AM - 09:00 PM'
  },
  {
    id: 'fac-hostel',
    name: 'Hostel & Residential Quarters',
    icon: 'hotel',
    description: 'Wi-Fi enabled secure hostels with dining mess, study rooms, recreation lounges, and medical dispensary.',
    capacity: '2,200 Residents',
    timing: '24 Hours'
  }
];

export const EVENTS_DATA: CampusEvent[] = [
  {
    id: 'ev-1',
    title: 'Innovate 2024: Annual Technical Symposium',
    date: 'Oct 28 - Oct 30',
    time: '09:00 AM Onwards',
    venue: 'Main Auditorium & CS Labs',
    tag: 'Techfest',
    description: '3-day national flagship hackathon, robotics arena, paper presentations, and venture pitch decks.',
    isRegistered: false
  },
  {
    id: 'ev-2',
    title: 'Guest Lecture: Scalable Generative AI Systems',
    date: 'Nov 04',
    time: '03:30 PM - 05:00 PM',
    venue: 'Seminar Hall 1',
    tag: 'Academic',
    description: 'Keynote by Senior AI Research Scientist on transformer architectures and edge deployment.',
    isRegistered: true
  },
  {
    id: 'ev-3',
    title: 'Goonj: Cultural Youth Festival',
    date: 'Dec 15 - Dec 17',
    time: 'Evening',
    venue: 'Open Air Amphitheatre',
    tag: 'Cultural',
    description: 'Inter-college music competitions, dramatic arts, dance battles, and celebrity guest night.',
    isRegistered: false
  }
];

export const LIBRARY_ITEMS: LibraryResource[] = [
  {
    id: 'lib-1',
    title: 'CS301 Dynamic Programming & Graph Notes',
    course: 'Data Structures & Algorithms',
    type: 'Lecture Notes',
    size: '4.8 MB',
    status: 'Saved',
    lastAccessed: 'Yesterday'
  },
  {
    id: 'lib-2',
    title: 'Database Normalization & Indexing Cheat Sheet',
    course: 'Database Management Systems',
    type: 'Lab Manual',
    size: '2.1 MB',
    status: 'Saved',
    lastAccessed: '3 days ago'
  },
  {
    id: 'lib-3',
    title: 'AI Search Algorithms: Heuristic Proofs & Code',
    course: 'Artificial Intelligence',
    type: 'Reference Book',
    size: '11.5 MB',
    status: 'Saved',
    lastAccessed: '5 days ago'
  },
  {
    id: 'lib-4',
    title: 'Previous 5 Years Question Papers (Semester 6)',
    course: 'Computer Engineering (All)',
    type: 'Question Bank',
    size: '18.2 MB',
    status: 'Pending',
    lastAccessed: '1 week ago'
  },
  {
    id: 'lib-5',
    title: 'Computer Networks Protocol Stack Architecture',
    course: 'Computer Networks',
    type: 'Lecture Notes',
    size: '6.4 MB',
    status: 'Pending',
    lastAccessed: '2 weeks ago'
  },
  {
    id: 'lib-6',
    title: 'Operating Systems Virtual Memory & Paging',
    course: 'Operating Systems',
    type: 'Lecture Notes',
    size: '3.9 MB',
    status: 'Pending',
    lastAccessed: '2 weeks ago'
  }
];

export const CLUBS_DATA: ClubItem[] = [
  {
    id: 'club-tech',
    name: 'TechWave Innovation Club',
    category: 'Technical',
    tagline: 'Coding, AI Workshops & Hackathons',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-Vq2bYpNpjsmkBiOYbA_vbvCWHCbXMaYWFSyZ87nMRQj9JEPE5oQhQ7eL43Nu1tywxJ_FJB2Ey9kGgCoYBq4K6J6FptMYRU3PriHreiyHyaaixHnSnp3pFYJxs4Kcyabt2n2ZAAm1C4aaJpA4smj84K4oKguTUC9ofyEqENJVuZH2EONFnQvVepSsjG8JfucFkeh1wvcsHvFtarOagkhlBncMlDOVVCsxiDw93JhjQQOi2GYdjFQ',
    upcomingEventTitle: 'NightHack 24-Hour Code Sprint',
    eventDate: 'This Friday • 06:00 PM',
    members: 240
  },
  {
    id: 'club-cultural',
    name: 'Natya & Cultural Society',
    category: 'Cultural',
    tagline: 'Drama, Music, Debate & Fine Arts',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHzIqGBE-fKQGOQ0WuPOYyFvT2gOo9XzBsRoiEwCJmlBC4jdQwKXZvrGJfRYeSysH3f-v2JnXQPY8p8NaisaU6t3akwsISWADL3EJEYHqr3MHFDoL-Uc_D4IpsBQY00VRcPeDI7qUrujcN5unkcqkl1fkhnZe_IZ-pA6FPFI42Z2pyCFzW-0Kzcw5rnXNTZRE6ZNj2RbJr94mtY2IkRfrzrmk13ZyOZCu1LAm_jBXAGqcpTTpJOaVa',
    upcomingEventTitle: 'Annual Drama Stage Auditions',
    eventDate: 'Next Tuesday • 04:30 PM',
    members: 180
  },
  {
    id: 'club-robotics',
    name: 'RoboCraft Guild',
    category: 'Technical',
    tagline: 'Drone Design & Autonomous Bots',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD43PTNtipQ8cr34ZuWM-ToXjwbH_Mf-ToZYLDPRNMH_tJ1hxhPFIFNzKvtL76cCFL7R4cN4ht-ZRnRhJ5tH_zi8VUgINyiJ8KAW7vzcRpNikZfoSKE6CTyedqumUJxEYiFUk79wbqdwHs9BfOa1MMNXAxwQ7f6Wd89xv5_5hV_BAPK-OdhL4_qy3TaE0PKRwq9WDHE7EvBMpEUbnOY-NQGHTsmqS7nGPJCQJRfOtjJVtH8_AGAX-T',
    upcomingEventTitle: 'RoboWars Arena Prep',
    eventDate: 'Saturday • 10:00 AM',
    members: 135
  }
];

export const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: 't-101',
    ticketNumber: 'TKT-8942',
    category: 'IT Support',
    subject: 'Campus Wi-Fi authentication issue in Library Pod 4',
    description: 'Unable to connect to SSGM-Secure student network on Ubuntu laptop.',
    status: 'In Progress',
    priority: 'Medium',
    createdAt: 'Today, 09:15 AM'
  },
  {
    id: 't-102',
    ticketNumber: 'TKT-8910',
    category: 'Academics',
    subject: 'Grade card verification for Semester 5 transcript',
    description: 'Requested duplicate copy of Semester 5 mark memo with college seal for internship.',
    status: 'Open',
    priority: 'High',
    createdAt: 'Yesterday'
  }
];
