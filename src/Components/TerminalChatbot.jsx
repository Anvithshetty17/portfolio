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
        name: "EcoMerce - Sustainable E-commerce Platform",
        tech: "Next.js, TypeScript, Stripe, MongoDB, AWS",
        description: "Full-stack e-commerce platform focused on eco-friendly products with AI-powered recommendation engine",
        features: ["Payment Gateway Integration", "Real-time Inventory", "AI Product Recommendations", "Admin Dashboard"],
        github: "github.com/anvithshetty/ecomerce",
        live: "ecomerce-demo.vercel.app",
        status: "Production"
      },
      {
        name: "DevCollab - Real-time Collaboration Tool",
        tech: "React, Socket.io, Node.js, PostgreSQL, Redis",
        description: "Real-time collaborative workspace for developers with code sharing, video calls, and project management",
        features: ["Real-time Code Editor", "Video Conferencing", "Project Management", "Team Chat"],
        github: "github.com/anvithshetty/devcollab",
        live: "devcollab-app.herokuapp.com",
        status: "Active Development"
      },
      {
        name: "SmartFinance - Personal Finance Dashboard",
        tech: "React Native, Python, FastAPI, ML Models",
        description: "AI-powered personal finance management app with expense tracking and investment recommendations",
        features: ["Expense Categorization", "Investment Tracking", "AI Insights", "Goal Setting"],
        github: "github.com/anvithshetty/smartfinance",
        status: "Beta Testing"
      },
      {
        name: "WeatherPro - Advanced Weather Analytics",
        tech: "React, D3.js, OpenWeather API, Chart.js",
        description: "Comprehensive weather dashboard with historical data analysis and weather pattern predictions",
        features: ["Interactive Maps", "Historical Analysis", "Weather Alerts", "Pattern Recognition"],
        github: "github.com/anvithshetty/weatherpro",
        live: "weatherpro-analytics.netlify.app",
        status: "Completed"
      }
    ],
    experience: [
      {
        company: "TechNova Solutions Pvt Ltd",
        role: "Senior Full Stack Developer",
        period: "Jan 2023 - Present",
        location: "Bangalore, India",
        description: "Leading development of enterprise-level web applications serving 100K+ users",
        achievements: [
          "Architected and developed 5+ major features increasing user engagement by 40%",
          "Mentored junior developers and established coding standards",
          "Optimized application performance reducing load time by 60%",
          "Implemented CI/CD pipelines improving deployment efficiency by 80%"
        ],
        technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
      },
      {
        company: "InnovateTech Startup",
        role: "Full Stack Developer",
        period: "Jun 2021 - Dec 2022",
        location: "Remote",
        description: "Developed MVPs and scaled applications from concept to production",
        achievements: [
          "Built 3 successful MVP applications that secured funding",
          "Implemented real-time features using WebSocket technology",
          "Collaborated with cross-functional teams of 15+ members",
          "Reduced application bugs by 70% through comprehensive testing"
        ],
        technologies: ["React", "Express.js", "PostgreSQL", "Redis", "Heroku"]
      },
      {
        company: "CodeCraft Solutions",
        role: "Frontend Developer Intern",
        period: "Jan 2021 - May 2021",
        location: "Bangalore, India",
        description: "Focused on creating responsive and interactive user interfaces",
        achievements: [
          "Developed 10+ responsive web pages with pixel-perfect design",
          "Collaborated with UI/UX team to implement design systems",
          "Contributed to open-source projects gaining 200+ GitHub stars"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass"]
      }
    ],
    education: {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Visvesvaraya Technological University",
      college: "RV College of Engineering",
      location: "Bangalore, India",
      year: "2021",
      gpa: "8.7/10.0",
      relevant_courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Machine Learning",
        "Web Technologies"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Winner of Inter-college Web Development Competition",
        "Technical Lead of Computer Science Association"
      ]
    },
    contact: {
      email: "anvith.shetty@gmail.com",
      phone: "+91 9876543210",
      linkedin: "linkedin.com/in/anvithshetty",
      github: "github.com/anvithshetty",
      portfolio: "anvithshetty.dev",
      twitter: "@anvithshetty",
      location: "Bangalore, Karnataka, India",
      availability: "Open to new opportunities"
    },
    achievements: [
      "🏆 Winner - HackBangalore 2022 (Best Web Application)",
      "🌟 Contributed to 15+ open-source projects",
      "📝 Published 12 technical articles on Medium",
      "🎤 Speaker at 3 tech conferences",
      "💼 Freelanced for 25+ clients worldwide",
      "🚀 Launched 2 successful SaaS products"
    ],
    interests: [
      "Artificial Intelligence & Machine Learning",
      "Blockchain & Web3 Technologies",
      "Open Source Contributions",
      "Tech Blogging & Content Creation",
      "Photography & Travel",
      "Chess & Strategy Games"
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
          `🎓 Degree: ${education.degree}`,
          `🏫 Institution: ${education.institution}`,
          `🏛️  College: ${education.college}`,
          `📍 Location: ${education.location}`,
          `📅 Year: ${education.year}`,
          `📊 GPA: ${education.gpa}`,
          "",
          "📚 RELEVANT COURSES:",
          ...education.relevant_courses.map(course => `   • ${course}`),
          "",
          "🏆 ACADEMIC ACHIEVEMENTS:",
          ...education.achievements.map(achievement => `   • ${achievement}`)
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
