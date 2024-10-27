import React, { useState, useEffect } from 'react';
import PurplePortImg from '../assets/PurplePort.jpg';

const Header = ({ setCurrentSection, currentSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (sectionIndex, hash) => {
    setCurrentSection(sectionIndex);
    setIsMenuOpen(false);
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { title: "Home", link: "#home", index: 0 },
    { title: "About", link: "#about", index: 1 },
    { title: "Skills", link: "#skills", index: 2 },
    { title: "Education", link: "#education", index: 3 },
    { title: "Research", link: "#research", index: 4 }
  ];

  return (
    <div className="bg-primary h-[10vh] fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="text-white text-xl font-bold">
            Amina Idris-Abah
          </div>

          {isMobile && (
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          )}

          <div className={isMobile ? 'hidden' : 'flex items-center'}>
            {navLinks.map((item, index) => (
              <React.Fragment key={item.title}>
                <a
                  href={item.link}
                  className={`text-white hover:text-gray-300 mr-4 transition-colors duration-300 ${currentSection === index ? 'border-b-2' : ''
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.index, item.link);
                  }}
                >
                  {item.title}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-6 border-l border-white/50 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && isMobile && (
        <div className="absolute top-[10vh] left-0 w-full bg-primary shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className={`text-white hover:text-gray-300 w-full text-center py-2 transition-colors duration-300 ${currentSection === item.index ? 'border-b-2' : ''
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.index, item.link);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavigationButtons = ({ currentSection, totalSections, onNavigate }) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center space-x-4">
      {currentSection === totalSections - 1 ? (
        <>
          <button
            onClick={() => onNavigate(currentSection - 1)}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={() => onNavigate(0)}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Return to Start
          </button>
        </>
      ) : currentSection === 0 ? (
        <button
          onClick={() => onNavigate(currentSection + 1)}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full transition-colors duration-300"
        >
          Next
        </button>
      ) : (
        <>
          <button
            onClick={() => onNavigate(currentSection - 1)}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={() => onNavigate(currentSection + 1)}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

const Home = ({ onNavigate }) => (
  <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary/80 text-white">
    <div className="text-center space-y-6 max-w-4xl px-4">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img src={PurplePortImg} alt="Purple Portfolio" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi and Welcome</h1>
      <p className="text-xl md:text-2xl mb-8">Graduate student at Gothenburg University | Frontend Web Developer</p>
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => onNavigate(1)}
          className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-full transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

// Modify About component
const About = ({ onNavigate, currentSection }) => (
  <div className="h-[90vh] bg-white flex items-center px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>
      <div className="space-y-6 text-gray-700">
        <p>
          I am an educator turned software developer, with four years of experience teaching as a public school teacher under Nigeria's Universal Basic Education Commission (UBEC). My journey into technology began unexpectedly at JSS Galadima, where I stepped in as a computer studies teacher. This role sparked my passion for technology and set me on a self-directed learning path in software development.
        </p>
        <p>
          Leveraging my firsthand experience in Nigeria's education system, my future goal is to create customized software solutions that address the specific needs of Nigerian schools, which is also my area of research interest I combine my educational expertise with growing technical skills to bridge the gap between technology and classroom needs.
        </p>
        <p>
        My unique perspective as both an educator and technology enthusiast positions me to develop practical, user-friendly applications that can enhance the Nigerian educational experience.
        </p>
      </div>
      <NavigationButtons currentSection={currentSection} totalSections={5} onNavigate={onNavigate} />
    </div>
  </div>
);

// Modify Skills component
const Skills = ({ onNavigate, currentSection }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "R"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "HTML/CSS", "SQL", "MongoDB"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "Docker", "Command Line", "AWS"]
    }
  ];

  return (
    <div className="h-[90vh] bg-gray-50 flex items-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <NavigationButtons currentSection={currentSection} totalSections={5} onNavigate={onNavigate} />
      </div>
    </div>
  );
};

// Modify Education component
const Education = ({ onNavigate, currentSection }) => (
  <div className="h-[90vh] bg-white flex items-center px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
      <div className="space-y-8">
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-xl font-semibold">International Master Information Technologies and Learning</h3>
          <p className="text-gray-600">Gothenburg University, 2024 - Present</p>
        </div>
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-xl font-semibold">Diploma - Frontend Software Engineering</h3>
          <p className="text-gray-600">ALX(Holberton School), 2023 - 2024</p>
        </div>
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-xl font-semibold">B.Ed English </h3>
          <p className="text-gray-600">Nasarawa State University, 2013 - 2017</p>
        </div>
      </div>
      
      <NavigationButtons currentSection={currentSection} totalSections={5} onNavigate={onNavigate} />
    </div>
  </div>
);

// Modify Research component
const Research = ({ onNavigate, currentSection }) => (
  <div className="h-[90vh] bg-gray-50 flex items-center px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-primary">Research</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-2">Current Research</h3>
          <p className="text-gray-700 mb-4">
            Description of your current research project and its significance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-2">Publications</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <p className="font-medium">Publication Title 1</p>
              <p className="text-sm">Authors, Conference/Journal, Year</p>
            </li>
            <li>
              <p className="font-medium">Publication Title 2</p>
              <p className="text-sm">Authors, Conference/Journal, Year</p>
            </li>
          </ul>
        </div>
      </div>
      <NavigationButtons currentSection={currentSection} totalSections={5} onNavigate={onNavigate} />
    </div>
  </div>
);

// Modify FlipRevealApp component
const FlipRevealApp = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigate = (index) => {
    setCurrentSection(index);
    const sectionId = sections[index].id;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.location.hash = sectionId;
  };

  const sections = [
    { id: 'home', content: <Home onNavigate={handleNavigate} /> },
    { id: 'about', content: <About onNavigate={handleNavigate} currentSection={1} /> },
    { id: 'skills', content: <Skills onNavigate={handleNavigate} currentSection={2} /> },
    { id: 'education', content: <Education onNavigate={handleNavigate} currentSection={3} /> },
    { id: 'research', content: <Research onNavigate={handleNavigate} currentSection={4} /> }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const sectionIndex = sections.findIndex(section => section.id === hash);
      if (sectionIndex !== -1) {
        setCurrentSection(sectionIndex);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <div className="h-[90vh] mt-[10vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            id={section.id}
            className={`h-full transition-opacity duration-300 ${index === currentSection ? 'opacity-100' : 'opacity-0 hidden'
              }`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipRevealApp;