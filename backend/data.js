const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika',
    description: 'Fokus pada pengembangan perangkat lunak dan sistem informasi',
    gpa: '4.0',
    logo: '/images/logo_amikom.png'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMA Negeri 1 Singaraja',
    major: 'MIPA',
    description: 'Penjurusan Matematika dan Ilmu Pengetahuan Alam',
    gpa: '92.5',
    logo: '/images/sma1-logo.png'
  }
];

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Hackathon Nasional',
    year: '2023',
    description: 'Memenangkan kompetisi pengembangan aplikasi dengan solusi inovatif',
    organizer: 'Kementerian Pendidikan',
    certificateLink: '/certificates/hackathon-2023.pdf',
    skillsGained: ['Vue.js', 'Teamwork', 'Problem Solving']
  },
  {
    id: 2,
    title: 'Beasiswa Prestasi',
    year: '2022',
    description: 'Mendapatkan beasiswa akademik selama 2 semester berturut-turut',
    organizer: 'Universitas Gadjah Mada',
    certificateLink: '/certificates/beasiswa-2022.pdf',
    skillsGained: ['Academic Excellence']
  }
];

const experiences = [
  {
    id: 1,
    position: 'Frontend Developer Intern',
    company: 'PT. Teknologi Maju',
    period: 'Jun 2023 - Sep 2023',
    description: 'Mengembangkan antarmuka pengguna menggunakan Vue.js dan Tailwind CSS',
    responsibilities: [
      'Membangun komponen UI reusable',
      'Optimasi performa aplikasi',
      'Kolaborasi dengan tim backend'
    ],
    skills: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Git'],
    companyLogo: '/images/teknologi-maju-logo.png'
  },
  {
    id: 2,
    position: 'Asisten Laboratorium Komputer',
    company: 'Universitas Gadjah Mada',
    period: 'Feb 2023 - Sekarang',
    description: 'Membantu praktikum pemrograman dan troubleshooting perangkat',
    responsibilities: [
      'Membimbing mahasiswa dalam praktikum',
      'Memelihara perangkat laboratorium',
      'Membantu penelitian dosen'
    ],
    skills: ['Python', 'Java', 'Hardware Maintenance', 'Teaching'],
    companyLogo: '/images/ugm-logo.png'
  }
];

const skills = [
  { 
    id: 1,
    name: 'Vue.js', 
    level: 'Mahir', 
    icon: '/images/vue.png', 
    color: 'bg-green-100 text-green-800',
    description: 'Framework JavaScript untuk membangun antarmuka pengguna',
    category: 'Frontend',
    yearsOfExperience: 2,
    projectsUsed: 5
  },
  { 
    id: 2,
    name: 'JavaScript', 
    level: 'Mahir', 
    icon: '/images/js-icon.png', 
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Bahasa pemrograman untuk pengembangan web',
    category: 'Frontend',
    yearsOfExperience: 3,
    projectsUsed: 10
  },
  { 
    id: 3,
    name: 'Node.js', 
    level: 'Menengah', 
    icon: '/images/node-icon.png', 
    color: 'bg-green-100 text-green-800',
    description: 'Runtime JavaScript untuk pengembangan backend',
    category: 'Backend',
    yearsOfExperience: 1,
    projectsUsed: 3
  },
  { 
    id: 4,
    name: 'PostgreSQL', 
    level: 'Menengah', 
    icon: '/images/postgresql-icon.png', 
    color: 'bg-blue-100 text-blue-800',
    description: 'Sistem manajemen basis data relasional',
    category: 'Database',
    yearsOfExperience: 1,
    projectsUsed: 2
  },
  { 
    id: 5,
    name: 'Git', 
    level: 'Mahir', 
    icon: '/images/git-icon.png', 
    color: 'bg-orange-100 text-orange-800',
    description: 'Sistem kontrol versi untuk kolaborasi pengembangan',
    category: 'Tools',
    yearsOfExperience: 2,
    projectsUsed: 8
  }
];

const projects = [
  {
    id: 1,
    title: 'Website Toko Online',
    image: '/images/project-ecommerce.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan pembayaran online',
    detailedDescription: 'Membangun platform e-commerce dari awal dengan fitur lengkap termasuk manajemen produk, keranjang belanja, dan integrasi pembayaran.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: 'https://contoh-toko-online.com',
    githubLink: 'https://github.com/username/toko-online',
    category: 'E-Commerce',
    year: 2023,
    features: [
      'Manajemen produk',
      'Keranjang belanja',
      'Sistem pembayaran',
      'Dashboard admin'
    ],
    screenshots: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg'
    ]
  },
  {
    id: 2,
    title: 'Aplikasi Manajemen Tugas',
    image: '/images/project-taskmanager.jpg',
    description: 'Aplikasi untuk melacak progres tugas harian dengan reminder',
    detailedDescription: 'Aplikasi produktivitas dengan fitur reminder, kolaborasi tim, dan pelacakan progres tugas.',
    tech: ['React', 'Firebase'],
    link: 'https://manajemen-tugas-app.com',
    githubLink: 'https://github.com/username/task-manager',
    category: 'Productivity',
    year: 2022,
    features: [
      'Manajemen tugas',
      'Reminder otomatis',
      'Kolaborasi tim',
      'Statistik produktivitas'
    ],
    screenshots: [
      '/images/project2-1.jpg',
      '/images/project2-2.jpg'
    ]
  }
];

module.exports = {
  educationHistory,
  achievements,
  experiences,
  skills,
  projects
};
