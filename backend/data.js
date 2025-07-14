// data.js
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika',
    description: 'Fokus pada pengembangan perangkat lunak dan sistem informasi',
    additional: 'Aktif dalam organisasi mahasiswa dan kegiatan kampus',
    gpa: '4.0',
    logo: '/images/logo_amikom.png'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMA Negeri 1 Singaraja',
    major: 'MIPA',
    description: 'Penjurusan Matematika dan Ilmu Pengetahuan Alam',
    additional: 'Juara 1 Lomba Cerdas Cermat Tingkat Provinsi',
    gpa: '92.5',
    logo: '/images/sma1-logo.png'
  }
];

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Hackathon Nasional',
    year: 2023,
    description: 'Memenangkan kompetisi pengembangan aplikasi dengan solusi inovatif',
    category: 'Teknologi',
    organizer: 'Kementerian Pendidikan',
    link: '/certificates/hackathon-2023.pdf',
    skills: ['Vue.js', 'Teamwork', 'Problem Solving']
  },
  {
    id: 2,
    title: 'Beasiswa Prestasi',
    year: 2022,
    description: 'Mendapatkan beasiswa akademik selama 2 semester berturut-turut',
    category: 'Akademik',
    organizer: 'Universitas Gadjah Mada',
    link: '/certificates/beasiswa-2022.pdf',
    skills: ['Academic Excellence']
  }
];

const experiences = [
  {
    id: 1,
    position: 'Frontend Developer Intern',
    company: 'PT. Teknologi Maju',
    period: 'Jun 2023 - Sep 2023',
    location: 'Yogyakarta, Indonesia',
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
    location: 'Yogyakarta, Indonesia',
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
    color: 'from-emerald-500 to-teal-400',
    description: 'Framework JavaScript untuk membangun antarmuka pengguna',
    category: 'Frontend',
    yearsOfExperience: 2,
    projectsUsed: 5
  },
  { 
    id: 2,
    name: 'JavaScript', 
    level: 'Mahir', 
    icon: '/images/javascript.jpeg',
    color: 'from-yellow-500 to-amber-400',
    description: 'Bahasa pemrograman utama dalam pengembangan web modern',
    category: 'Frontend',
    yearsOfExperience: 3,
    projectsUsed: 10
  },
  { 
    id: 3,
    name: 'Tailwind CSS', 
    level: 'Mahir', 
    icon: '/images/tailwind.png',
    color: 'from-blue-500 to-cyan-400',
    description: 'Framework CSS utility-first untuk desain UI yang cepat dan responsif',
    category: 'Styling',
    yearsOfExperience: 2,
    projectsUsed: 6
  },
  { 
    id: 4,
    name: 'Node.js', 
    level: 'Menengah', 
    icon: '/images/node.png',
    color: 'from-green-500 to-emerald-400',
    description: 'JavaScript runtime untuk pengembangan aplikasi server-side',
    category: 'Backend',
    yearsOfExperience: 1,
    projectsUsed: 3
  },
  { 
    id: 5,
    name: 'Express.js', 
    level: 'Menengah', 
    icon: '/images/expressjs.png',
    color: 'from-gray-500 to-gray-400',
    description: 'Framework minimalis untuk membuat REST API di Node.js',
    category: 'Backend',
    yearsOfExperience: 1,
    projectsUsed: 3
  },
  { 
    id: 6,
    name: 'PostgreSQL', 
    level: 'Menengah', 
    icon: '/images/postgresql.png',
    color: 'from-indigo-500 to-violet-400',
    description: 'Sistem basis data relasional open-source yang kuat dan andal',
    category: 'Database',
    yearsOfExperience: 1,
    projectsUsed: 2
  },
  { 
    id: 7,
    name: 'Git', 
    level: 'Mahir', 
    icon: '/images/github.jpeg',
    color: 'from-gray-600 to-gray-500',
    description: 'Version control system untuk kolaborasi dan manajemen kode',
    category: 'Tools',
    yearsOfExperience: 2,
    projectsUsed: 8
  },
  { 
    id: 8,
    name: 'HTML5 & CSS3', 
    level: 'Mahir', 
    icon: '/images/html-css.png',
    color: 'from-orange-500 to-amber-400',
    description: 'Dasar pengembangan web untuk struktur dan tampilan halaman',
    category: 'Frontend',
    yearsOfExperience: 4,
    projectsUsed: 12
  }
];
  
const projects = [
  {
    id: 1,
    title: 'Website Toko Online',
    image: '/images/Website-toko-online.jpeg',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan pembayaran online',
    detailedDescription: 'Membangun platform e-commerce dari awal dengan fitur lengkap termasuk manajemen produk, keranjang belanja, dan integrasi pembayaran.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: 'https://contoh-toko-online.com',
    githubLink: 'https://github.com/GedeBrawidya/toko-online',
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
    image: '/images/website-management-tugas.jpeg',
    description: 'Aplikasi untuk melacak progres tugas harian dengan reminder',
    detailedDescription: 'Aplikasi produktivitas dengan fitur reminder, kolaborasi tim, dan pelacakan progres tugas.',
    tech: ['React', 'Firebase'],
    link: 'https://manajemen-tugas-app.com',
    githubLink: 'https://github.com/GedeBrawidya/task-manager',
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
  },
  {
    id: 3,
    title: 'Website Portofolio Interaktif',
    image: '/images/foto-kampus.jpg',
    description: 'Portofolio pribadi yang menampilkan profil, keterampilan, proyek, dan riwayat pendidikan.',
    detailedDescription: 'Dibangun sebagai final project mata kuliah Pemrograman Web, menggunakan Vue.js, Express, dan Tailwind CSS dengan animasi scroll dan struktur REST API.',
    tech: ['Vue.js', 'Express.js', 'Tailwind CSS'],
    link: 'https://brawidya-portfolio.com',
    githubLink: 'https://github.com/GedeBrawidya/portfolio',
    category: 'Personal',
    year: 2024,
    features: [
      'Profil interaktif',
      'Timeline pengalaman',
      'Animasi scroll & tab',
      'Mobile responsive'
    ],
    screenshots: [
      '/images/project3-1.jpg',
      '/images/project3-2.jpg'
    ]
  },
  {
    id: 4,
    title: 'Manajemen Organisasi Karang Taruna',
    image: '/images/website-karang-taruna.png',
    description: 'Aplikasi web untuk manajemen struktur organisasi, keuangan, dan kegiatan Karang Taruna.',
    detailedDescription: 'Proyek pengabdian masyarakat berbasis Next.js dan Express.js dengan database MySQL serta deployment di Azure VPS. Menyediakan fitur autentikasi, struktur organisasi, kas bulanan, dan rapat rutin.',
    tech: ['Next.js', 'Express.js', 'Tailwind CSS', 'MySQL', 'Azure'],
    link: 'https://karangtaruna.digital',
    githubLink: 'https://github.com/GedeBrawidya/karangtaruna',
    category: 'Community',
    year: 2025,
    features: [
      'Login & Register',
      'Struktur Organisasi Dinamis',
      'Manajemen Kas & Rapat',
      'Integrasi Google Maps & Azure'
    ],
    screenshots: [
      '/images/project4-1.jpg',
      '/images/project4-2.jpg'
    ]
  },
  {
    id: 5,
    title: 'Sistem RACK CLI (C++)',
    image: '/images/rack.jpg',
    description: 'Sistem berbasis CLI untuk manajemen RACK sebagai tugas akhir semester 1.',
    detailedDescription: 'Aplikasi C++ sederhana yang memungkinkan pengguna melakukan input, edit, dan simpan data rak barang melalui antarmuka command-line. Menggunakan file I/O sebagai penyimpanan.',
    tech: ['C++'],
    link: '#',
    githubLink: 'https://github.com/GedeBrawidya/rack-system',
    category: 'CLI Tools',
    year: 2023,
    features: [
      'Input & Tampilkan data rak',
      'Simpan ke file',
      'Navigasi menu CLI',
      'Validasi input'
    ],
    screenshots: [
      '/images/project5-1.jpg',
      '/images/project5-2.jpg'
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