import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t-2 border-dashed border-gray-300 mt-auto bg-paper">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-serif text-pencil">
        <p>© {new Date().getFullYear()} Vidhi Bhanushali. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-hand text-lg">
          <a
            href="mailto:vvidhi.design@gmail.com"
            className="hover:text-ink hover:underline decoration-wavy transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/vidhi-manoj-bhanushali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline decoration-wavy transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bhanushali-vidhi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline decoration-wavy transition-colors"
          >
            GitHub
          </a>
          <a
            href="/Vidhi-Bhanushali-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline decoration-wavy transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
