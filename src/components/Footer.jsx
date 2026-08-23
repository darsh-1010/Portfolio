import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/shah-darsh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/darsh-1010" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.kaggle.com/darshshah1010"
        target="_blank"
        rel="noopener noreferrer"
        title="5 public datasets: Nifty50 markets & IPL data"
      >
        <SiKaggle size={24} />
      </a>
    </footer>
  );
};

export default Footer;