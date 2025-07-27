import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sun, Moon, MapPin, Calendar, Award, Users } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Django', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'ML', icon: '🤖' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'R', icon: '📈' }
  ];

  const projects = [
    {
      title: 'AI Pose Coach Human Pose Estimation + Exercise Feedback"',
      description: 'This project uses MediaPipe, OpenCV, and Python to analyze human movement from exercise videos (e.g., squats).',
      tech: ["Python", "MediaPipe", "OpenCV", "Matplotlib, Seaborn"],
      github: "https://github.com/Joel-Romail/Computer_Vision_Model",
      demo: "https://github.com/Joel-Romail/Computer_Vision_Model"
    },
    {
      title: "GoalCraft: Your Personal Achievement Dashboard",
      description: 'Meet GoalCraft, a beautifully designed web application that transforms goal setting from a chore into an inspiring journey. I built GoalCraft to provide a simple, yet powerful, tool for anyone looking to organize their ambitions and visualize their progress.',
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/goal-app",
      demo: "https://github.com/Joel-Romail/goal-app"
    },
    {
      title: "EmotiQuote - AI-Powered Motivational Quote Application",
      description: "EmotiQuote is a web app designed to provide a moment of reflection and motivation, tailored to your emotional state. By selecting a mood, you receive a relevant quote, with an AI-powered backend working to ensure the suggestions are fresh and meaningful. I built this project to explore the integration of generative AI within a modern React-based web application, focusing on creating a seamless and personalized user experience. The app features a clean, accessible design, the ability to save your favorite quotes, and a theme switcher for your viewing comfort.",
      tech: ["Next.js (with React)", "TypeScript", "Tailwind CSS", "ShadCN UI", "Genkit with Google's Gemini models"],
      github: "https://github.com/Joel-Romail/my-next-app",
      demo: "https://github.com/Joel-Romail/my-next-app"
    },
    {
      title: "Affirma: Your Daily Dose of Positivity",
      description: "Affirma is a mindful web application designed to bring a moment of positivity and reflection to your day. Each day, users receive a new affirmation to inspire them. They can reflect on this affirmation in a private journal, which automatically saves their thoughts right in their browser. With a clean, calming interface and a dark/light mode toggle, Affirma provides a peaceful digital space for well-being.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/affirmation-app",
      demo: "https://github.com/Joel-Romail/affirmation-app"
    },
    {
      title: "SafePass: A Modern, Secure Password Manager",
      description: "SafePass is a testament to building secure, user-centric applications without compromising on privacy. It's a web-based password vault that runs entirely in your browser, ensuring that sensitive data like passwords never leaves your local machine. One of the standout features is the AI-powered password generator. By leveraging Genkit and the Google Gemini AI model, SafePass can generate incredibly strong and unique passwords tailored to specific security requirements. This project showcases my ability to integrate cutting-edge AI services into a practical, real-world application while prioritizing security and user privacy from the ground up.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      github: "https://github.com/Joel-Romail/safe-pass",
      demo: "https://github.com/Joel-Romail/safe-pass"
    },
    {
      title: "Loan Approval Prediction ML Model",
      description: "Developed a machine learning model to predict credit risk (good vs. bad credit) using the German Credit dataset ( https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data), and apply SHAP (SHapley Additive Explanations) to explain the model's decisions at both global and individual levels. The system will simulate a real-world AI-assisted credit approval scenario where model transparency is critical for fairness, accountability, and trustworthiness.",
      tech: ["Python"],
      github: "https://github.com/Joel-Romail/LoanPredictionModel",
      demo: "https://github.com/Joel-Romail/LoanPredictionModel"
    },
    {
      title: "Student Dropout Prediction ML Model",
      description: "Developed and evaluated explainable machine learning models for predicting student dropout, using real institutional data from my university (LBTU Jelgava, Latvia).",
      tech: ["Python"],
      github: "https://github.com/Joel-Romail/Dropout_Prediction_Model",
      demo: "https://github.com/Joel-Romail/Dropout_Prediction_Model"
    },
  ];

  const testimonials = [];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
              {['hero', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Joial Danyal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
               Crafting Smart Experiences Through Code and Design
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
              I’m a web developer passionate about creating intuitive interfaces and exploring how AI can enhance digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a master's student in Information Technology based in Latvia, with a passion for building modern web applications and exploring how machine learning—especially computer vision—can enhance user experiences. I work with tools like React, Next.js, TypeScript, and Python to bring ideas to life through clean, interactive interfaces. Through personal projects, I’ve combined strong frontend development with smart, data-driven features that push creative and technical boundaries. I'm always learning, experimenting, and looking for new opportunities to grow—feel free to explore my work or reach out to connect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="font-semibold text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating 
              meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  window.location.href = 'mailto:joial.danial@gmail.com?subject=Contact from Portfolio&body=Hello Alex, I would like to discuss a project with you.';
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Joial Danyal</h3>
              <p className="text-gray-400 mb-6">Software Engineer</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/Joel-Romail?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joial-danyal-816aa2b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:joial.danial@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Joial Danyal. All rights reserved. Made with ❤️ using React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;