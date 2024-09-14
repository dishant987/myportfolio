import {  GithubIcon, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <Instagram/>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/dishant-tank-25a421224/" target="_blank">

            <Linkedin />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/dishant987" target="_blank">
            <GithubIcon/>
          </a>
        </div>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Dishant Tank. All rights reserved.</p>
    </footer>
  );
};

export default Footer;