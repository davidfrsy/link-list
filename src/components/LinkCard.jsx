import React from 'react';
import './LinkCard.css';
import { motion } from 'framer-motion';

const LinkCard = ({ icon, title, subtitle, href, variants }) => {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" 
        className="link-card" 
        variants={variants} 
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <div className="icon">{icon}</div>
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="arrow">&gt;</div>
    </motion.a>
  );
};

export default LinkCard;