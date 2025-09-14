import { useState, useEffect } from "react";
// import {
//   FaLaptopCode,
//   FaBriefcase,
//   FaGraduationCap,
//   FaCode,
//   FaEnvelope,
//   FaBars,
// } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../hooks/useClickOutside";
import { HouseIcon } from "./icons/Home/Home";
import { MenuIcon } from "./icons/Menu/Menu";
import { CodeXmlIcon } from "./icons/code/Code";
import { SwordsIcon } from "./icons/exp/exp";
import { BrainIcon } from "./icons/Education/Edu";
import { BatteryFullIcon } from "./icons/Project/Project"
import { MailsIcon } from "./icons/contact/Contact";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useClickOutside(() => setIsMenuOpen(false));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: HouseIcon, text: "Home", path: "/" },
    { id: "skills", icon: CodeXmlIcon, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: SwordsIcon,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: BrainIcon,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: BatteryFullIcon, text: "Projects", path: "/projects" },
    { id: "contact", icon: MailsIcon, text: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // eslint-disable-next-line react/prop-types
  const NavItem = ({ id, icon: Icon, text, path }) => (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      }}
    >
      <Link
        to={path}
        onClick={() => {
          setActiveLink(id);
          setIsMenuOpen(false);
        }}
        className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
          transition-all duration-300 flex items-center gap-2 relative
          hover:bg-white/10 
          ${
            activeLink === id
              ? "bg-white/15 text-white"
              : "text-gray-300 hover:text-white"
          }
        `}
      >
        <motion.div
          className="absolute inset-0 rounded-lg md:rounded-full bg-gradient-to-r from-emerald-400/20 via-cyan-500/20 to-indigo-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: activeLink === id ? 1 : 0,
            scale: activeLink === id ? 1 : 0.8,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icon
            className={`text-base ${
              activeLink === id ? "text-emerald-400" : ""
            }`}
          />
        </motion.div>
        <motion.span
          className="relative z-10 inline"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {text}
        </motion.span>
      </Link>
    </motion.div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <motion.div
          className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link to="/" className="text-white font-bold">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    My Portfolio
                  </motion.span>
                </Link>
              </motion.div>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                whileHover={{
                  scale: 1.05,
                  rotate: 45,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.1,
                    ease: "easeOut",
                  },
                }}
              >
                <MenuIcon />
              </motion.button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="md:hidden" ref={menuRef}>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="flex flex-col gap-2 py-4"
                  >
                    {navLinks.map((link) => (
                      <motion.div key={link.id} variants={itemVariants}>
                        <NavItem {...link} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <NavItem key={link.id} {...link} />
              ))}
            </div>
          </nav>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
