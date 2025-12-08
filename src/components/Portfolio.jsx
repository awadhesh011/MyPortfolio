import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Briefcase, Code, GraduationCap, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "Hotel Booking & Management System",
      description: "Built a full-stack hotel booking system with secure JWT authentication, room management, and Cloudinary-based image handling, featuring a responsive React.js frontend.",
      tech: ["React.js", "Java", "Spring Boot", "Spring Security", "JWT", "Cloudinary"],
      github: "https://github.com/awadhesh011/Hotel-Booking-Management",
      featured: true
    },
    {
      name: "Alumni Connect",
      description: "Developed a platform to bridge the gap between alumni and students by enabling networking, mentorship, and information sharing through a responsive React.js interface and a cloud-based MongoDB Atlas database.",
      tech: ["React.js", "MongoDB Atlas", "JavaScript"],
      github: "https://github.com/awadhesh011/Alumni-Connect",
      featured: true
    },
    {
      name: "MyCollege Website",
      description: "Created a college management website with features for student information, announcements, and department pages, using React.js for the frontend and Java Servlets with MySQL (via JDBC) for backend data handling.",
      tech: ["React.js", "Java Servlets", "MySQL", "JDBC"],
      featured: true
    },
    {
      name: "Ecommerce Website",
      description: "This ecommerce website provides the user to buy things in online mode.",
      tech: ["JavaScript", "React"],
      github: "https://github.com/awadhesh011/Ecommerce-Website"
    },
    {
      name: "Language Translator App",
      description: "This app basically translate English language to any regional language.",
      tech: ["Java"],
      github: "https://github.com/awadhesh011/Language-Translator-App"
    },
    // {
    //   name: "News App",
    //   description: "It is basically a News App for the ones who prefer online mode for reading news.",
    //   tech: ["JavaScript", "React"],
    //   github: "https://github.com/awadhesh011/News-App"
    // },
    {
      name: "TextUtils",
      description: "This is a text Utils app used for performing different task like converting the text to uppercase, lowercase, remove spaces, etc",
      tech: ["JavaScript", "React"],
      github: "https://github.com/awadhesh011/TextUtils"
    }
  ];

  const skills = {
    "Languages": ["C", "C++", "Java", "JavaScript"],
    "Frontend": ["HTML", "CSS", "React.js"],
    "Backend": ["Full Stack Java", "MERN Stack", "REST APIs"],
    "Database": ["SQL", "MySQL"],
    "Tools": ["GitHub"]
  };

  const experience = [
    {
        title: "Java Full Stack – TalentNext Course Completion",
        company: "Wipro (Digital Skills Readiness Program)",
        description: "Successfully completed the TalentNext Java Full Stack course conducted from May to September 2024. Certificate issued on 07-Oct-2024."
    },

    {
        title: "Salesforce Administrator Virtual Internship",
        company: "SmartInternz (in partnership with SmartBridge & AICTE)",
        description: "Completed an 8-week Salesforce Administrator Virtual Internship (May–June 2024), covering Salesforce Fundamentals, Organizational Setup, Sales & Service Cloud."
    },    

    {
      title: "Full Stack Development Internship",
      company: "CipherByte Technologies",
      description: "Worked on full-stack development projects"
    },
    // {
    //   title: "Web Development Internship",
    //   company: "GauravGo Technologies",
    //   description: "Gained experience in web development and hosting"
    // }
  ];

  const certifications = [
    "Java Full Stack – TalentNext (Wipro Digital Skills Readiness Program)",
    "Salesforce Administrator Virtual Internship – SmartInternz",
    "Programming in Modern C++ – NPTEL",
    "Data Analytics using Python from NPTEL",
    "Internet of Things (IoT) Training – GIET University"
  ];

  const achievements = [
    "Awarded Best Player at the 15th National Futsal Championship 2023–2024, Ahmedabad",
    "Represented Odisha State three times at the National-Level Futsal Championship",
    "Participated in University-Level Hackathon & Projectathon 2024",
    "Participated in Water-Tech Hackathon 2024, GIET University",
    "Active member of NCC, GIET University"
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-header">
            <div className="logo">AKM</div>
            
            {/* Desktop Menu */}
            <div className="nav-menu desktop-menu">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="mobile-menu-link"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="fade-in">
            <h1 className="hero-title">Awadhesh Kumar Mahto</h1>
            <p className="hero-subtitle">Computer Science & Engineering</p>
            <p className="hero-description">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
            
            <div className="social-links">
              <a href="https://github.com/awadhesh011" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/awadhesh-kumar-a3494a271" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:21cse529.awadheshkumarmahto@giet.edu" className="social-btn email-btn">
                <Mail size={24} />
              </a>
            </div>

            <div className="scroll-indicator">
              <button onClick={() => scrollToSection('about')} className="bounce">
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="card">
              <h3 className="card-title">Career Objective</h3>
              <p className="card-text">
                To work in an organization that allows me to apply my skills effectively, contribute to organizational success, and achieve continuous professional growth.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">
                <GraduationCap className="icon-inline" /> Education
              </h3>
              <div className="education-list">
                <div className="education-item">
                  <p className="education-degree">B.Tech in Computer Science & Engineering</p>
                  <p className="education-school">GIET University, Gunupur | 2025</p>
                  <p className="education-score">CGPA: 7.92</p>
                </div>
                <div className="education-item">
                  <p className="education-degree">+2 Science (CBSE)</p>
                  <p className="education-school">Holy Cross School, Bokaro | 2021</p>
                  <p className="education-score">Marks: 80.04%</p>
                </div>
                <div className="education-item">
                  <p className="education-degree">10th (CBSE)</p>
                  <p className="education-school">Holy Cross School, Bokaro | 2019</p>
                  <p className="education-score">Marks: 86.8%</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <Award className="icon-inline" /> Achievements
              </h3>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Contact Information</h3>
              <div className="contact-info">
                <p><Mail size={18} className="icon-inline" /> 21cse529.awadheshkumarmahto@giet.edu</p>
                <p><Phone size={18} className="icon-inline" /> +91 6201677486</p>
                <p><MapPin size={18} className="icon-inline" /> Bokaro Steel City, Jharkhand</p>
                <p><Calendar size={18} className="icon-inline" /> 29.09.2002</p>
                <p><Github size={18} className="icon-inline" /> 34 contributions in the last year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h3 className="skill-category">
                  <Code className="icon-inline" size={20} /> {category}
                </h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-card">
            <h3 className="card-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <Award size={18} className="icon-inline" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} className="icon-inline" />
                    View on GitHub
                    <ExternalLink size={14} className="icon-inline" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-content">
                  <Briefcase className="experience-icon" size={24} />
                  <div className="experience-details">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company} {exp.duration && `• ${exp.duration}`}</p>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container contact-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology!
          </p>
          
          <div className="contact-social-links">
            <a href="https://github.com/awadhesh011" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/awadhesh-kumar-a3494a271" target="_blank" rel="noopener noreferrer" className="contact-social-btn linkedin">
              <Linkedin size={28} />
            </a>
            <a href="mailto:21cse529.awadheshkumarmahto@giet.edu" className="contact-social-btn email">
              <Mail size={28} />
            </a>
            <a href="tel:+916201677486" className="contact-social-btn phone">
              <Phone size={28} />
            </a>
          </div>

          <div className="contact-info-box">
            <p>Email: 21cse529.awadheshkumarmahto@giet.edu</p>
            <p>Phone: +91 6201677486 | +91 9262391670</p>
            <p>Location: Bokaro Steel City, Jharkhand, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 Awadhesh Kumar Mahto. Built with React & Pure CSS
          </p>
          <p className="footer-quote">
            "To work in an organization that allows me to apply my skills effectively"
          </p>
        </div>
      </footer>
    </div>
  );
}