import React from "react";
import { motion } from "framer-motion";
import "./DownloadResume.css";

const DownloadResume = () => {
  return (
    <motion.a
      href="/resume.pdf"
      download
      className="download-resume"
      whileHover={{ scale: 1.1 }}
    >
      Download Resume
    </motion.a>
  );
};

export default DownloadResume;
