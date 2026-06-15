import React from 'react';
import { motion } from 'motion/react';
import { Download, Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Linkedin, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Experience, Education } from '../types';
import { DoodleUnderline, DoodleStar, DoodleArrow, DoodleCircle, DoodleSparkle, DoodleSpiral } from '../components/Doodles';


const experiences: Experience[] = [
  {
    id: '1',
    role: 'Product Designer Intern',
    company: 'Deloitte India',
    period: 'Sep 2025 – Now',
    description: [
      'Conducted user research and identified pain points to enhance automation products for internal users.',
      'Introduced a "Critical Fields First" layout and auto-flagging features, balancing speed and audit accuracy.',
      'Increased document processing speed by 40%, reduced error rates by up to 35%, and cut operator training time by 50%.',
      'Collaborated with developers and product managers to optimize large-scale system workflows.'
    ]
  },
  {
    id: '2',
    role: 'UI/UX Designer Intern',
    company: 'FashionTV / FTV India Private Limited',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Designed premium user interfaces for FashionTV’s digital platforms, focusing on luxury aesthetics.',
      'Redesigned key website and mobile app sections to improve visual hierarchy and accessibility.',
      'Led design for projects including homepage revamp, FTV+ subscription flow, and event pages.',
      'Collaborated closely with design leads to align design with global brand campaigns.'
    ]
  },
  {
    id: '3',
    role: 'UI/UX Designer Intern',
    company: 'Ocufox Technologies Pvt. Ltd.',
    period: 'Sep 2024 – Jan 2025',
    description: [
      'Led end-to-end redesign of Ocufox company website, improving visual consistency and modernizing brand identity.',
      'Designed the full website for parent company Green-2-Green, ensuring consistent design language.',
      'Improved internal design workflow by establishing component libraries and auto-layout systems in Figma.',
      'Streamlined developer handoff by creating clear specs and annotations, reducing queries by ~40%.',
      'Accelerated design-to-development handoff cycle by 20-30% through organized Figma frameworks.'
    ]
  }
];

const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Computer Engineering',
    school: 'University of Mumbai',
    year: '2022 – 2026 (Expected)'
  },
  {
    id: '2',
    degree: 'HSC - XII (Science)',
    school: 'K. J. Somaiya College of Science and Commerce',
    year: '2020 – 2022'
  }
];

const skills = [
  "Figma", "Adobe Creative Suite", "Wireframing", 
  "Prototyping", "User Research", "Visual Design", "Design Systems",
  "Responsive Design", "A11y (Accessibility)", "Information Architecture"
];

// Hand-sketched check bullet
const CheckDoodle = () => (
  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M3,11 L8,15 L17,4" />
  </svg>
);

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 print:p-0 print:bg-white transition-colors duration-500">
      {/* Action Bar (Hidden on Print) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl mx-auto px-6 mb-6 flex justify-between items-center print:hidden"
      >
        <Link to="/" className="flex items-center text-[#555555] hover:text-[#2c2c2c] font-hand text-lg group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="sketch-button flex items-center space-x-2 bg-[#2c2c2c] text-[#fdfbf7] px-5 py-2 font-hand font-bold text-lg shadow-lg"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </motion.button>
      </motion.div>

      
      {/* Outer Notebook Wire Binder Wrapper for Large Screens */}
      <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
        
        {/* Binder Spiral - Hidden on print and mobile */}
        <div className="absolute left-6 md:left-10 top-12 bottom-12 w-8 flex flex-col justify-between py-12 pointer-events-none print:hidden hidden sm:flex z-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {/* Paper Hole punched in the sheet */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#f1eeeb] border border-ink/20 shadow-inner"></div>
              {/* Wire spiral ring wrapping onto the sheet */}
              <div className="w-7 h-3.5 bg-gradient-to-r from-pencil/10 to-ink/65 rounded-full shadow-sm -ml-[18px] opacity-80 border-t border-white/20 rotate-[12deg]"></div>
            </div>
          ))}
        </div>

        {/* The Sketchbook Theme Resume Sheet */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full bg-[#fefdfa] shadow-xl print:shadow-none min-h-[1100px] rounded-r-2xl border-l-[10px] border-l-[#e8e4db] md:border-l-[14px] border-r border-y border-gray-200/50 p-6 sm:p-10 md:py-14 md:pl-24 md:pr-14 print:px-8 print:py-6 print:border-none print:bg-white print:rounded-none relative overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: 'center'
          }}
        >
          
          {/* Notebook Margin Guidelines - Red Margin Lines on screen, hidden on print */}
          <div className="absolute left-[3rem] top-0 bottom-0 w-[1.5px] bg-red-400/40 print:hidden hidden sm:block"></div>
          <div className="absolute left-[3.2rem] top-0 bottom-0 w-[0.5px] bg-red-400/20 print:hidden hidden sm:block"></div>

          {/* Decorative Corner Stars & Spirals in notebook background */}
          <DoodleSpiral className="absolute top-[350px] right-[-40px] w-28 h-28 text-pencil/5 pointer-events-none print:hidden" />
          <DoodleSpiral className="absolute top-[800px] left-[-30px] w-28 h-28 text-pencil/5 pointer-events-none print:hidden" />
          <DoodleStar className="absolute top-8 right-12 w-12 h-12 text-yellow-400/40 animate-float pointer-events-none print:hidden" />
         
         {/* Subtle Hand-drawn Note near header */}
           <div className="absolute right-14 top-24 font-hand text-blue-500/80 text-base rotate-6 print:hidden hidden lg:block select-none max-w-[170px] leading-tight text-center">
             Currently looking for full-time roles! ✨
             <DoodleArrow className="w-10 h-10 mx-auto text-blue-400/60 -rotate-[120deg] mt-1" />
           </div>
        
        {/* Header Section */}
        <header className="border-b-2 border-[#2c2c2c] pb-8 mb-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="mb-2 md:mb-0 relative inline-block">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink mb-1.5 tracking-tight relative">
                  Vidhi Bhanushali
                </h1>
                <p className="text-2xl font-hand text-blue-600 font-bold tracking-wide relative">
                  Product Designer Intern
                  <DoodleUnderline className="absolute -bottom-2.5 left-0 w-[180px] h-3 text-blue-400/70" />
                </p>
            </div>
            
            <div className="space-y-1.5 text-left md:text-right text-pencil font-serif text-sm w-full md:w-auto">
              <div className="flex items-center md:justify-end space-x-2.5">
                <span className="hover:text-ink transition-colors">vvidhi.design@gmail.com</span>
                <Mail size={15} className="text-pencil" />
              </div>
              <div className="flex items-center md:justify-end space-x-2.5">
                <span>+91 81693 00611</span>
                <Phone size={15} className="text-pencil" />
              </div>
              <div className="flex items-center md:justify-end space-x-2.5">
                <span>Mumbai, India</span>
                <MapPin size={15} className="text-pencil" />
              </div>
              <div className="flex items-center md:justify-end space-x-2.5 text-blue-600 font-bold transition-all hover:translate-x-0.5">
                <a href="https://linkedin.com/in/vidhi-bhanushali" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5">
                  linkedin.com/in/vidhi-bhanushali
                  <ExternalLink size={12} />
                </a>
                <Linkedin size={15} className="text-blue-600" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Main Column (Experience & Education) */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Experience Section (Latest to Oldest) */}
            <section>
              <h2 className="text-lg font-serif font-bold text-[#2c2c2c] uppercase tracking-[0.2em] border-b border-[rgba(44,44,44,0.1)] pb-2 mb-6 flex items-center">
                <Briefcase size={18} className="mr-3 text-blue-600" />
                Experience
              </h2>
              
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-4 border-l border-[rgba(44,44,44,0.1)]"
                  >
                    <div className="absolute top-1.5 -left-[5px] w-2 h-2 rounded-full bg-blue-600"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-[#2c2c2c]">{exp.role}</h3>
                      <span className="text-xs font-hand font-bold text-[#555555] bg-[rgba(253,251,247,0.6)] px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-serif font-bold italic text-sm mb-2">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs text-[#555555] leading-relaxed">
                          <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education Section (Latest to Oldest) */}
            <section>
              <h2 className="text-lg font-serif font-bold text-[#2c2c2c] uppercase tracking-[0.2em] border-b border-[rgba(44,44,44,0.1)] pb-2 mb-6 flex items-center">
                <GraduationCap size={20} className="mr-3 text-blue-600" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={edu.id} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <h3 className="text-md font-bold text-[#2c2c2c]">{edu.school}</h3>
                      <p className="text-[#555555] italic text-xs">{edu.degree}</p>
                    </div>
                    <span className="text-xs font-hand font-bold text-[#555555] bg-[rgba(253,251,247,0.6)] px-2 py-0.5 rounded">{edu.year}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Expertise & Projects) */}
          <div className="space-y-10">
            
            {/* Expertise Section */}
            <section>
              <h2 className="text-lg font-serif font-bold text-[#2c2c2c] uppercase tracking-[0.2em] border-b border-[rgba(44,44,44,0.1)] pb-2 mb-6 flex items-center">
                <Code size={18} className="mr-3 text-blue-600" />
                Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-2 py-1 bg-[rgba(253,251,247,0.6)] border border-[rgba(44,44,44,0.1)] text-[#2c2c2c] rounded text-[10px] font-serif font-bold tracking-tight uppercase"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </section>

            {/* Interactive Links Section */}
            <section>
              <h2 className="text-lg font-serif font-bold text-[#2c2c2c] uppercase tracking-[0.2em] border-b border-[rgba(44,44,44,0.1)] pb-2 mb-6">
                Connect
              </h2>
              <div className="space-y-3 font-serif text-xs">
                <div className="p-3 bg-[rgba(253,251,247,0.3)] border border-[rgba(44,44,44,0.1)] rounded">
                  <p className="font-bold text-[#2c2c2c] mb-1 text-[10px] uppercase tracking-wider opacity-60">Portfolio</p>
                  <a href="https://vvidhi-bhanushali.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center">
                    vvidhi-bhanushali.vercel.app
                    <ExternalLink size={10} className="ml-1" />
                  </a>
                </div>
                <div className="p-3 bg-[rgba(253,251,247,0.3)] border border-[rgba(44,44,44,0.1)] rounded">
                  <p className="font-bold text-[#2c2c2c] mb-1 text-[10px] uppercase tracking-wider opacity-60">LinkedIn</p>
                  <a href="https://linkedin.com/in/vidhi-bhanushali" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center">
                    /in/vidhi-bhanushali
                    <ExternalLink size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
               <h2 className="text-lg font-serif font-bold text-[#2c2c2c] uppercase tracking-[0.2em] border-b border-[rgba(44,44,44,0.1)] pb-2 mb-4">
                Languages
              </h2>
              <div className="space-y-2 text-xs font-serif text-[#555555]">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="font-bold text-[#2c2c2c]">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span>Hindi</span>
                  <span className="font-bold text-[#2c2c2c]">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Gujarati</span>
                  <span className="font-bold text-[#2c2c2c]">Native</span>
                </div>
              </div>
            </section>

            {/* QR Code Placeholder for Print */}
            <section className="hidden print:block pt-6">
              <div className="border border-dashed border-gray-200 p-4 text-center">
                 <p className="text-[8px] uppercase tracking-widest text-gray-400 mb-2">Scan to view digital portfolio</p>
                 <div className="w-16 h-16 bg-gray-100 mx-auto mb-2 flex items-center justify-center text-[6px] text-gray-300">QR CODE</div>
                 <p className="text-[8px] text-gray-400">vvidhi-bhanushali.vercel.app</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer for the PDF page */}
        <footer className="mt-16 pt-6 border-t border-[rgba(44,44,44,0.1)] text-center text-[8px] text-gray-300 uppercase tracking-widest">
          References available upon request • Designed & Coded by Vidhi Bhanushali
        </footer>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          nav, footer:not(.print-only), .print-hidden {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .min-h-screen {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .bg-gray-50 {
            background-color: white !important;
          }
          .sketch-button, button {
             display: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default Resume;
