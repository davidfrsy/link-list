import React from 'react';
import './Profile.css';
import profilePic from '../assets/profile-pic.png';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const Profile = () => {
  return (
    <motion.div
        className="profile-container"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.9 }} 
    >
        <img src={profilePic} alt="profilepict" className="profile-pic" />
        <h1 className="profile-name">Muhammad David Firmansyah</h1>
        <p className="profile-motto">To Infinity and Beyond!</p>
        <div className="social-icons">
            <a href="https://instagram.com/davidfrsy" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            <a href="https://tiktok.com/davidfrsy" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
            </a>
            <a href="https://linkedin/in/davidfrsy" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
        </div>
    </motion.div>
  );
};

export default Profile;