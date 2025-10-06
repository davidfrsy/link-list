import React from 'react';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import './App.css';

import { CgNotes } from 'react-icons/cg';
import { FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { motion } from 'framer-motion';

const linksData = [
  {
    icon: <CgNotes />,
    title: 'Mission Log',
    subtitle: 'Curriculum Vitae',
    href: 'https://davidfr.my.id/',
  },
  {
    icon: <IoSparkles />,
    title: 'Star Command Updates',
    subtitle: 'Instagram feed',
    href: 'https://www.instagram.com/davidfrsy/',
  },
  {
    icon: <IoSparkles />,
    title: 'Space Dance Moves',
    subtitle: 'TikTok clips',
    href: 'https://www.tiktok.com/@davidfrsy',
  },
  {
    icon: <FaGithub />,
    title: 'Gadget Blueprints',
    subtitle: 'GitHub repositories',
    href: 'https://www.linkedin.com/in/mdavidfrsy/',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 120 } 
};
function App() {
  return (
    <div className="app-container">
      <Profile />

      <motion.div className="links-container" 
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {linksData.map((link, index) => (
          <LinkCard
            key={index}
            icon={link.icon}
            title={link.title}
            subtitle={link.subtitle}
            href={link.href}
            variants={itemVariants} 
          />
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;