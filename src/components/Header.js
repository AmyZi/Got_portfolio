import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = ({ setCurrentSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigation = (sectionIndex) => {
    setCurrentSection(sectionIndex);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: "Home", link: "/Home", index: 0 },
    { title: "About", link: "/About", index: 1 },
    { title: "Skills", link: "/My skills", index: 2 },
    { title: "Education", link: "/Education", index: 3 },
    { title: "Research", link: "/Research", index: 4 }
  ];

  return (
    <div className="bg-primary h-[10vh] relative">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="text-white text-xl font-bold">
            Amina Idris-Abah
          </div>
          
          {isMobile && (
            <button className="text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          )}

          <div className={`${isMobile ? 'hidden' : 'flex items-center'}`}>
            {navLinks.map((item, index) => (
              <React.Fragment key={item.title}>
                <button
                  onClick={() => handleNavigation(item.index)}
                  className="text-white hover:text-gray-300 mr-4"
                >
                  {item.title}
                </button>
                {index < navLinks.length - 1 && (
                  <div className="h-6 border-l border-white/50 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && isMobile && (
        <div className="absolute top-[10vh] left-0 w-full bg-primary z-50">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.index)}
                className="text-white hover:text-gray-300 w-full text-center py-2"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;