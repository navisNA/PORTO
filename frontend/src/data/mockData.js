export const mockData = {
  hero: {
    name: "Muhammad Navis Nasrullah Akbar",
    tagline: "Fresh Graduate Manufacturing Engineer | Multimedia Creator",
    description: "Passionate engineering graduate combining technical expertise in manufacturing with creative multimedia skills. Experienced in CAD design, process analysis, videography, photography, and event production.",
    profileImage: "https://images.unsplash.com/photo-1758266262432-c04d378ba9ab?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%auto=format&fit=crop&w=1000&q=80",
    stats: [
      { value: "3.52", label: "GPA" },
      { value: "5+", label: "Years Experience" },
      { value: "50+", label: "Projects Completed" }
    ]
  },
  
  about: {
    title: "About Me",
    description: "Lulusan Teknik Manufaktur Universitas Negeri Yogyakarta (2025) dengan IPK 3.52. Memiliki passion di bidang multimedia dengan pengalaman sebagai videographer, photographer, video editor, dan event organizer. Menggabungkan analisis teknis manufaktur dengan kreativitas visual untuk menghasilkan solusi yang inovatif.",
    highlights: [
      "Manufacturing Engineering Graduate with 3.52 GPA",
      "5+ years of multimedia production experience",
      "Expert in CAD design and manufacturing processes",
      "Skilled videographer and photographer",
      "Event production and livestream specialist"
    ]
  },

  education: {
    title: "Education",
    degrees: [
      {
        id: 1,
        institution: "Universitas Negeri Yogyakarta",
        degree: "Bachelor of Engineering - Manufacturing Engineering",
        period: "2020 - 2025",
        gpa: "3.52",
        focus: "Design & Analysis of Manufacturing Processes",
        achievements: [
          "Graduated with Honors",
          "Focus on manufacturing process optimization",
          "Completed advanced CAD design coursework"
        ]
      }
    ],
    certifications: [
      {
        id: 1,
        name: "CAD Design Certification",
        issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
        year: "2024",
        credential: "Professional CAD Designer",
        skills: ["3D Modeling", "Technical Drawing", "Design Analysis"]
      }
    ]
  },

  experience: {
    title: "Experience",
    jobs: [
      {
        id: 1,
        title: "Manufacturing Engineering Intern",
        company: "Rumah Mesin",
        period: "2023",
        type: "Internship",
        description: "Supported manufacturing and production activities with focus on process analysis and design implementation.",
        responsibilities: [
          "Assisted in manufacturing process analysis and optimization",
          "Supported product design and implementation projects",
          "Collaborated with engineering team on process improvements",
          "Documented manufacturing procedures and workflows"
        ],
        skills: ["Manufacturing Processes", "Process Analysis", "CAD Design", "Quality Control"]
      },
      {
        id: 2,
        title: "Event Producer & Videographer",
        company: "Wang Sinawang & Lir Ilir Events",
        period: "2024 - Present",
        type: "Freelance",
        description: "Led comprehensive event production including videography and event management for cultural events.",
        responsibilities: [
          "Managed end-to-end event production workflows",
          "Directed videography and photography teams",
          "Coordinated logistics and technical requirements",
          "Delivered high-quality multimedia content"
        ],
        skills: ["Event Management", "Videography", "Team Leadership", "Project Coordination"]
      },
      {
        id: 3,
        title: "Multimedia Specialist",
        company: "Sarasehan Sibakul",
        period: "2024 - Present",
        type: "Contract",
        description: "Provided comprehensive multimedia support including livestream production and event documentation.",
        responsibilities: [
          "Managed livestream production and technical setup",
          "Created event documentation and promotional content",
          "Operated professional video and audio equipment",
          "Ensured high-quality multimedia output for events"
        ],
        skills: ["Livestream Production", "Video Editing", "Audio Production", "Event Documentation"]
      },
      {
        id: 4,
        title: "Freelance Photographer & Videographer",
        company: "Independent",
        period: "2020 - Present",
        type: "Freelance",
        description: "Providing professional photography and videography services for various clients and events.",
        responsibilities: [
          "Captured high-quality photography for events and portraits",
          "Produced promotional videos and creative content",
          "Managed post-production editing and color grading",
          "Built strong client relationships and repeat business"
        ],
        skills: ["Photography", "Video Production", "Post-Production", "Client Management"]
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        category: "Engineering Skills",
        skills: [
          { name: "CAD Design", level: 90, certified: true },
          { name: "Manufacturing Processes", level: 85, certified: false },
          { name: "Process Analysis", level: 80, certified: false },
          { name: "Problem Solving", level: 88, certified: false },
          { name: "Quality Control", level: 75, certified: false }
        ]
      },
      {
        category: "Multimedia Skills",
        skills: [
          { name: "Photography", level: 95, certified: false },
          { name: "Videography", level: 92, certified: false },
          { name: "Video Editing", level: 88, certified: false },
          { name: "Premiere Pro", level: 90, certified: false },
          { name: "After Effects", level: 85, certified: false },
          { name: "Event Organization", level: 87, certified: false },
          { name: "Livestream Production", level: 83, certified: false }
        ]
      },
      {
        category: "Software & Tools",
        skills: [
          { name: "AutoCAD", level: 90, certified: true },
          { name: "SolidWorks", level: 85, certified: false },
          { name: "Adobe Premiere Pro", level: 90, certified: false },
          { name: "Adobe After Effects", level: 50, certified: false },
          { name: "Adobe Photoshop", level: 88, certified: false },
          { name: "DaVinci Resolve", level: 60, certified: false }
        ]
      }
    ]
  },

  portfolio: {
    title: "Portfolio",
    categories: [
      {
        id: "engineering",
        name: "Engineering Projects",
        icon: "⚙️",
        projects: [
          {
            id: 1,
            title: "Advanced CAD Design Project",
            description: "Comprehensive 3D modeling and technical drawing project showcasing advanced CAD skills.",
            image: "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ258ZW58MHx8fHwxNzU4MjAwNTQwfDA&ixlib=rb-4.1.0&q=85",
            technologies: ["AutoCAD", "SolidWorks", "3D Modeling"],
            category: "CAD Design"
          },
          {
            id: 2,
            title: "Manufacturing Process Optimization",
            description: "Process analysis and optimization project implemented during internship at Rumah Mesin.",
            image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc1ODIwMDU0Nnww&ixlib=rb-4.1.0&q=85",
            technologies: ["Process Analysis", "Quality Control", "Manufacturing"],
            category: "Manufacturing"
          },
          {
            id: 3,
            title: "Product Design Specialist",
            description: "Innovative product design project using advanced CAD tools and engineering principles.",
            image: "https://images.unsplash.com/photo-1586868538513-51335a0c5337?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxDQUQlMjBkZXNpZ258ZW58MHx8fHwxNzU4MjAwNTQwfDA&ixlib=rb-4.1.0&q=85",
            technologies: ["CAD Design", "Product Development", "Engineering Analysis"],
            category: "Product Design"
          }
        ]
      },
      {
        id: "multimedia",
        name: "Multimedia Projects",
        icon: "🎥",
        projects: [
          {
            id: 4,
            title: "Professional Studio Photography",
            description: "High-end studio photography setup and portfolio showcasing professional lighting techniques.",
            image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTgyMDA1ODJ8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["Photography", "Studio Lighting", "Portrait Photography"],
            category: "Photography"
          },
          {
            id: 5,
            title: "Professional Videography Production",
            description: "High-end videography project using professional equipment including Ronin gimbal and RED camera systems.",
            image: "https://images.unsplash.com/photo-1575411602736-5e9f24e277d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHx2aWRlb2dyYXBoeXxlbnwwfHx8fDE3NTgyMDA1ODd8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["Videography", "Professional Equipment", "Cinematic Production"],
            category: "Videography"
          },
          {
            id: 6,
            title: "Event Production & Management",
            description: "Comprehensive event production project including Wang Sinawang cultural event management and multimedia coverage.",
            image: "https://images.unsplash.com/photo-1612539466946-88599e8858a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzU4MjAwNTkzfDA&ixlib=rb-4.1.0&q=85",
            technologies: ["Event Management", "Production Coordination", "Multimedia Coverage"],
            category: "Event Production"
          }
        ]
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "Dr. Bambang Setiawan",
      position: "Supervisor, Rumah Mesin",
      content: "Navis menunjukkan dedikasi tinggi selama magang. Kemampuan analisis dan implementasi desainnya sangat mengesankan, terutama dalam mengoptimalkan proses manufaktur.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Sarah Sechan",
      position: "Event Producer, Sarah Sechan Sibakul",
      content: "Navis adalah multimedia specialist yang sangat profesional. Kualitas livestream dan dokumentasi eventnya selalu memuaskan klien kami.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      position: "Event Director, Wang Sinawang",
      content: "Kemampuan Navis dalam mengelola produksi event dan videografi sangat luar biasa. Dia mampu menangani segala aspek teknis dengan sempurna.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ],

  contact: {
    title: "Contact Me",
    subtitle: "Let's work together to bring your ideas to life",
    email: "navis.akbar@email.com",
    phone: "+62 812-3456-7890",
    location: "Yogyakarta, Indonesia",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/muhammad-navis-akbar",
        icon: "linkedin"
      },
      {
        platform: "Behance",
        url: "https://behance.net/navisakbar",
        icon: "behance"
      },
      {
        platform: "YouTube",
        url: "https://youtube.com/@navisakbar",
        icon: "youtube"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/navisakbar",
        icon: "instagram"
      }
    ]
  }
};