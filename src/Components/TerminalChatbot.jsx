import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Terminal } from 'lucide-react';
import './TerminalChatbot.css';  
const TerminalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const portfolioData = {
    about: {
      name: "Anvith Shetty",
      title: "Full Web Stack Developer",
      description: "Passionate full-stack developer with experience crafting scalable web applications",
      email: "anvithshetty555@gmail.com",
      age: "22",
      
      motto: "Code with purpose, design with empathy",
      currentFocus: "Building next-gen web applications with AI integration"
    },
    skills: {
      frontend: [
        "React.js",
        "JavaScript ES6+",
        "CSS & Material-UI",
        "Progressive Web Apps (PWA)",
        "Responsive Design & Mobile-First"
      ],
      backend: [
        "Node.js & Express.js",
       "PHP & LAMP Stack",
        "REST APIs",
        "Socket.io ",
       
        "JWT Authentication & OAuth",
      
       
      ],
      database: [
        "MongoDB & Mongoose",
        " MySQL",
        "Database Design & Optimization"
      ],
      tools: [
        "Git & GitHub Actions",
        
        "render & Vercel & Netlify",
        "Webpack & Vite",
        "Website SEO Optimization",
        "Domain Management & DNS Configuration",
      ]
    },
    projects: [
     {
  name: "deliGo – Food Delivery App",
  tech: "React, Node.js, Express, MongoDB",
  description: "A fast and user-friendly food delivery app allowing users to browse restaurants, add items to cart, track orders, and make secure payments. Includes a full admin dashboard for managing orders and menus.",
  features: ["Online Ordering", "Cart & Checkout", "Live Order Tracking", "Admin Dashboard"],
  github: "https://github.com/Anvithshetty17/food-delivery-app",
  live: "https://food-delivery-app-lilac-psi.vercel.app/",
  status: "Production"
},
{
  name: "Real-Time Chat App",
  tech: "React, Node.js, Express, MongoDB, Socket.IO",
  description: "A secure and responsive chat app supporting real-time messaging, typing indicators, online/offline status, and JWT-based authentication. Built using the MERN stack and Socket.IO.",
  features: ["Real-time Messaging", "Typing Indicator", "Auth with JWT", "Status Indicators"],
  github: "https://github.com/Anvithshetty17/chat-app",
  live: "https://chat-app-psi-pink.vercel.app/login",
  status: "Production"
},
{
  name: "Delicious Recipes",
  tech: "React, TheMealDB API, Vite",
  description: "A recipe discovery platform with smart search, detailed meal info, and easy cooking instructions. Built using React and MealDB API.",
  features: ["Smart Search", "Meal Details", "Responsive UI", "API Integration"],
  github: "https://github.com/Anvithshetty17/recipe-website",
  live: "https://recipe-website-swart-zeta.vercel.app/",
  status: "Completed"
},
{
  name: "Tic-Tac-Toe Game",
  tech: "HTML, CSS, JavaScript",
  description: "A classic 2-player Tic-Tac-Toe game with an interactive UI and game logic. Supports winner detection and game resets.",
  features: ["Interactive Grid", "Game State Tracking", "Winner Detection", "Responsive Design"],
  github: "https://github.com/Anvithshetty17/tic-tac-toe1",
  live: "https://tic-tac-toe1-jn2q.vercel.app/",
  status: "Completed"
},
{
  name: "Mini Projects",
  tech: "HTML, CSS, JavaScript",
  description: "Includes a quiz website with real-time scoring and a responsive calculator for basic operations. Built for UI/UX practice.",
  features: ["Quiz System", "Score Tracking", "Basic Calculator", "User-Friendly UI"],
  github: "https://github.com/Anvithshetty17/mini-projects.git",
  live: "https://mini-projects-liart.vercel.app/",
  status: "Completed"
},
{
  name: "Employee Attendance Management System",
  tech: "C",
  description: "A console-based system for managing employee records and daily attendance. Uses file handling and linked lists.",
  features: ["Admin Dashboard", "Attendance Marking", "File-Based Storage", "Search & Edit"],
  github: "https://github.com/Anvithshetty17/Employee-Attendance-Management-Using-C",
  status: "Completed"
},
{
  name: "Interview Preparation Quiz",
  tech: "React, Vite, CSS",
  description: "An interactive quiz platform to prep for tech interviews. Includes critical thinking questions, jokes, motivational quotes, and community-submitted questions.",
  features: ["Multiple Quiz Modes", "Motivational Quotes", "Tech Fun Facts", "User-Submitted Questions"],
  github: "https://github.com/Anvithshetty17/interview-preparation-",
  live: "https://interview-preparation-nine.vercel.app/",
  status: "Production"
},
{
  name: "From Paper to Pixels – Attendance SMS Alert System",
  tech: "PHP, MySQL, HTML, CSS, JavaScript",
  description: "Web-based attendance management with SMS alert capabilities. Designed to digitize traditional attendance systems.",
  features: ["Attendance Logs", "SMS Notification", "Web-based Admin Panel", "MySQL Integration"],
  github: "https://github.com/Anvithshetty17/UGI---attendance-sms-alert-system-",
  live: "https://anvith.byethost7.com/",
  status: "Production"
},
{
  name: "GoText – Instant Text Sharing Tool",
  tech: "React, Node.js, Express, MongoDB",
  description: "A lightweight and responsive text-sharing web app that allows users to instantly share plain text or code snippets with others via unique URLs. Designed for simplicity and speed.",
  features: ["Create & Share Notes", "Unique Shareable Links", "MongoDB Storage", "Clean UI"],
  github: "https://github.com/Anvithshetty17/text-share-website",
  live: "https://gotext.vercel.app/",
  status: "Production"
},
      {
  name: "GoPerdoor – Bus Timings App",
  tech: "React, Node.js, Express, MongoDB, Moment.js",
  description: "A real-time bus schedule app that helps users in Perdoor find upcoming bus timings based on the current time and selected destination. Includes an admin panel to manage bus data dynamically.",
  features: ["Live Bus Time Calculation", "Admin Panel", "MongoDB Integration", "Responsive Design"],
  github: "https://github.com/goperdoor/bus",
  live: "http://goperdoor.tech/",
  status: "Production"
},
      

    ],
    experience: [
     {
  company: "Codelab Systems",
  location: "Mangalore, India",
  description: "Contributed to the development of dynamic web applications using PHP and MySQL during a hands-on internship.",
  achievements: [
    "Developed responsive front-end interfaces using HTML, CSS, and JavaScript",
    "Implemented backend functionality with PHP and integrated MySQL databases",
    "Built dynamic modules with form validations and user-friendly interactions",
    "Collaborated with senior developers and participated in code reviews"
  ],
  technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
},

    ],
    education: [
  {
    degree: "Master of Computer Applications",
    institution: "Nitte University",
    college: "NMAM Institute of Technology",
    location: "Nitte, India",
    year: "2024 – Present",
    cgpa: "8.83 (Pursuing)",
    relevant_courses: [
      "Database Management Systems (DBMS)",
      "C Programming",
      "Java Programming",
      "MongoDB & NoSQL Databases",
      "Data Structures",
      "Software Engineering"
    ],
    
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Mangalore University",
    college: "Udupi College of Professional Studies, Manipal",
    location: "Manipal, India",
    year: "2021 – 2024",
    cgpa: "8.32",
    relevant_courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Operating Systems",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering"
    ],
    
  }
]
,
    contact: {
      email: "anvithshetty555@gmail.com",
      phone: "+91 7204947177",
      linkedin: "https://www.linkedin.com/in/anvith-shetty-b371372b7/",
      github: "https://github.com/Anvithshetty17/",
      portfolio: "anvithshetty.me",
    
      location: "Udupi, Karnataka, India",
      availability: "Open to new opportunities"
    },
    
    interests: [
      "Artificial Intelligence & Machine Learning",
      " Web3 Technologies",
      "Open Source Contributions",
      "Tech Blogging & Content Creation",
    
    ]
  };

  const commands = {
    help: "Show available commands",
    about: "Learn about Anvith Shetty",
    skills: "View technical skills (frontend/backend/database/tools)",
    projects: "See portfolio projects with live links",
    experience: "Work experience and achievements",
    education: "Educational background and achievements",
    contact: "Get contact information and social links",
    achievements: "View awards and accomplishments",
    interests: "Personal interests and hobbies",
    clear: "Clear terminal screen",
    whoami: "Display current user info",
    ls: "List available sections",
    pwd: "Show current directory",
    date: "Show current date and time",
    uname: "System information"
  };

  const welcomeMessage = () => {
    return [
      "╔════════════════════════════════════════════════╗",
      "║  Welcome to Anvith Shetty's Portfolio Terminal! ║",
      "╚════════════════════════════════════════════════╝",
      "",
      "",
      "🚀 Hello! I'm Anvith Shetty — Passionate Web Developer & MCA Graduate  ",
      "📍 Based in Perdoor, Karnataka, India ",
      "",

      "💡 Current Focus: Creating responsive, user-friendly web apps using MERN and LAMP",
      "🎯 Motto: Dream big, work hard, stay focused",
      "",
      "════════════════════════════════════════════════",
      "",
      "📋 Quick Navigation:",
      "   • Type 'help' to see all available commands",
      "   • Type 'about' for detailed information about me",
      "   • Type 'skills' to explore my technical expertise",
      "   • Type 'projects' to see my latest work",
      "   • Type 'clear' to clear the terminal",
     "════════════════════════════════════════════════",
      "",
      "⚡ Pro Tips:",
      "   • Use arrow keys (↑/↓) to navigate command history",
      "   • Commands are case-insensitive",
      "   • Type 'ls' to list all available sections",
      "",
      "Ready to explore my portfolio Let's dive in! 🌟"
    ];
  };

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    
    if (!command) return [""];
    
    switch (command) {
      case 'help':
        return [
          "╔════════════════════╗",
          "║  AVAILABLE COMMANDS  ║",
          "╚════════════════════╝",
          "",
          "📂 PORTFOLIO SECTIONS:",
          ...Object.entries(commands).slice(0, 9).map(([cmd, desc]) => `   ${cmd.padEnd(12)}       → ${desc}`),
          "══════════════════════════════════════",
          "🔧 SYSTEM COMMANDS:",
          ...Object.entries(commands).slice(9).map(([cmd, desc]) => `   ${cmd.padEnd(12)}          → ${desc}`),
          "",
          "💡 USAGE EXAMPLES:",
          "   anvithshetty@portfolio:~$ about",
          "   anvithshetty@portfolio:~$ projects",
          "",
          "📝 Note: Use arrow keys (↑/↓) to navigate through command history!"
        ];
      
      case 'about':
        const { about } = portfolioData;
        return [
          "╔══════════╗",
          "║ ABOUT ME ║",
          "╚══════════╝",
          "",
          `👤 Name: ${about.name}`,
          `💼 Title: ${about.title}`,
          `📍 Location: ${about.location}`,
          `🎂 Age: ${about.age}`,
          `⏱️  Experience: ${about.experience}`,
          `📧 Email: ${about.email}`,
          "",
          "🎯 PROFESSIONAL SUMMARY:",
          about.description,
          "",
          `💡 Current Focus: ${about.currentFocus}`,
          `🌟 Motto: "${about.motto}"`,
          "",
          "Want to know more? Try 'experience', 'skills', or 'projects'!",
          "",
        ];
      
      case 'skills':
        const { skills } = portfolioData;
        return [
          "╔══════════════════╗",
          "║ TECHNICAL SKILLS ║",
          "╚══════════════════╝",
          "",
          "🎨 FRONTEND DEVELOPMENT:",
          ...skills.frontend.map(skill => `   • ${skill}`),
          "",
          "⚙️ BACKEND DEVELOPMENT:",
          ...skills.backend.map(skill => `   • ${skill}`),
          "",
          "🗄️ DATABASE & STORAGE:",
          ...skills.database.map(skill => `   • ${skill}`),
          "",
          "🛠️ TOOLS & TECHNOLOGIES:",
          ...skills.tools.map(skill => `   • ${skill}`),
          "",
          "🚀 Always learning and exploring new technologies!"
        ];
      
      case 'projects':
        return [
          "╔═══════════════════╗",
          "║ FEATURED PROJECTS ║",
          "╚═══════════════════╝",
          "",
          ...portfolioData.projects.flatMap((project, index) => [
            `🚀 ${index + 1}. ${project.name}`,
            `   📱 Status: ${project.status}`,
            `   🔧 Tech Stack: ${project.tech}`,
            `   📝 Description: ${project.description}`,
            "",
            "   ✨ Key Features:",
            ...project.features.map(feature => `      • ${feature}`),
            "",
            ...(project.github ? [`   📂 GitHub: ${project.github}`] : []),
            ...(project.live ? [`   🌐 Live Demo: ${project.live}`] : []),
            "   " + "─".repeat(70),
            ""
          ])
        ];
      
      case 'experience':
        return [
          "╔═════════════════╗",
          "║ WORK EXPERIENCE ║",
          "╚═════════════════╝",
          "",
          ...portfolioData.experience.flatMap((exp, index) => [
            `💼 ${index + 1}. ${exp.role}`,
            `   🏢 Company: ${exp.company}`,
            `   📅 Period: ${exp.period}`,
            `   📍 Location: ${exp.location}`,
            `   📝 Description: ${exp.description}`,
            "",
            "   🏆 Key Achievements:",
            ...exp.achievements.map(achievement => `      • ${achievement}`),
            "",
            "   💻 Technologies Used:",
            `      ${exp.technologies.join(', ')}`,
            "   " + "─".repeat(70),
            ""
          ])
        ];
      
      case 'education':
  const { education } = portfolioData;
  return [
    "╔════════════════════════╗",
    "║ EDUCATIONAL BACKGROUND ║",
    "╚════════════════════════╝",
    "",
    ...education.flatMap((edu, idx) => [
      `🎓 Degree: ${edu.degree}`,
      `🏫 Institution: ${edu.institution}`,
      `🏛️  College: ${edu.college}`,
      `📍 Location: ${edu.location}`,
      `📅 Year: ${edu.year}`,
      `📊 CGPA: ${edu.cgpa}`,
      "",
      "📚 RELEVANT COURSES:",
      ...(edu.relevant_courses || []).map(course => `   • ${course}`),
      "",
      idx < education.length - 1 ? "─".repeat(50) : ""
    ])
  ];
      
      case 'contact':
        const { contact } = portfolioData;
        return [
          "╔═════════════════════╗",
          "║ CONTACT INFORMATION ║",
          "╚═════════════════════╝",
          "",
          "📧 PROFESSIONAL CONTACT:",
          `   Email: ${contact.email}`,
          `   Phone: ${contact.phone}`,
          `   Location: ${contact.location}`,
          "",
          "🌐 ONLINE PRESENCE:",
          `   Portfolio: ${contact.portfolio}`,
          `   LinkedIn: ${contact.linkedin}`,
          `   GitHub: ${contact.github}`,
          `   Twitter: ${contact.twitter}`,
          "",
          `💼 Status: ${contact.availability}`,
          "",
          "🤝 Let's connect! I'm always open to interesting conversations,",
          "   collaboration opportunities, and new challenges!"
        ];
      
      case 'achievements':
        return [
          "╔═══════════════════════╗",
          "║ ACHIEVEMENTS & AWARDS ║",
          "╚═══════════════════════╝",
          "",
          ...portfolioData.achievements.map(achievement => `   ${achievement}`),
          "",
          "🌟 These achievements reflect my commitment to excellence and",
          "   continuous learning in the field of software development!"
        ];
      
      case 'interests':
        return [
          "╔═════════════════════╗",
          "║ INTERESTS & HOBBIES ║",
          "╚═════════════════════╝",
          "",
          "🎯 PROFESSIONAL INTERESTS:",
          ...portfolioData.interests.slice(0, 3).map(interest => `   • ${interest}`),
          "",
          "🎨 PERSONAL INTERESTS:",
          ...portfolioData.interests.slice(3).map(interest => `   • ${interest}`),
          "",
          "💡 I believe in maintaining a healthy work-life balance and",
          "   exploring diverse interests to fuel creativity and innovation!"
        ];
      
      case 'clear':
        return ['clear'];
      
      case 'whoami':
        return [
          "anvithshetty",
          "",
          "👨‍💻 Current User: Anvith Shetty",
          "🎯 Role: Senior Full Stack Developer",
          "📍 Location: Bangalore, India",
          "💼 Status: Available for new opportunities",
          "🚀 Specialization: React.js, Node.js, Full-Stack Development"
        ];
      
      case 'ls':
        return [
          "📁 Available sections in /home/anvithshetty/portfolio/:",
          "",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 about/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 skills/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 projects/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 experience/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 education/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 contact/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 achievements/",
          "drwxr-xr-x  2 anvithshetty anvithshetty  4096 Jul 10 2025 interests/",
          "",
          "💡 Use any section name as a command to explore!"
        ];
      
      case 'pwd':
        return ["/home/anvithshetty/portfolio"];
      
      case 'date':
        return [new Date().toString()];
      
      case 'uname':
        return [
          "AnvithOS 2.0.1 (Portfolio Terminal)",
          "Built with React.js & JavaScript",
          "Powered by passion for development ❤️"
        ];
      
      default:
        return [
          `bash: ${command}: command not found`,
          "",
          "🤔 Hmm, that command doesn't exist in my portfolio terminal.",
          "💡 Try 'help' to see all available commands,",
          "   or 'ls' to list all sections!"
        ];
    }

  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        setCommandHistory(prev => [...prev, command]);
        setHistoryIndex(-1);
        
        const output = executeCommand(command);
        
        if (output[0] === 'clear') {
          setHistory([]);
        } else {
          setHistory(prev => [
            ...prev,
            { type: 'input', content: `anvithshetty@portfolio:~$ ${command}` },
            { type: 'output', content: output }
          ]);
        }
      }
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen && !history.length) {
      const welcome = welcomeMessage();
      setHistory([{ type: 'output', content: welcome }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleTerminal = () => {
    setIsOpen(!isOpen);
  };

return (
  <div id='main' className="fixed bottom-1 right-0 sm:bottom-4 sm:right-6 z-50">

    {/* Terminal Window */}
    {isOpen && (
      <div id='terminal'
        className="mb-4 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 flex flex-col overflow-hidden
                   w-[90vw] ml-4 sm:ml-0 sm:w-[500px] h-[75vh] sm:h-[480px] max-w-screen responsive-hide"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <Terminal className="w-4 h-4 text-green-400 ml-2" />
            <span className="text-sm text-gray-300 font-mono hidden xs:inline">
              anvithshetty@portfolio:~
            </span>
          </div>
          <button
            onClick={toggleTerminal}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 bg-gray-900 font-mono text-xs sm:text-sm
                     px-4 py-3 overflow-y-auto hide-scrollbar"
          style={{
            maxHeight: 'calc(70vh - 48px)', // Fixed height minus header height
          }}
        >
          <style>{`
            /* Hide scrollbar but keep functionality */
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>

          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.type === 'input' ? (
                <div className="text-green-400">{item.content}</div>
              ) : (
                <div className="text-gray-100">
                  {item.content.map((line, lineIndex) => (
                    <div key={lineIndex} className="min-h-[1.25rem]">
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center text-green-400 mt-2">
            <span className="mr-2">anvithshetty@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-green-400 flex-1 font-mono text-sm sm:text-base"
              placeholder="Type a command..."
            />
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    )}

    {/* Floating Action Button */}
    <button
      onClick={toggleTerminal}
      className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 responsive-hide-BUTTON"
    >
      {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
    </button>
  </div>
);






};

export default TerminalChatbot;
