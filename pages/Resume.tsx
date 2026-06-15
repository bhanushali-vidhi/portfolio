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
  "Responsive Design", "A11y (Accessibility)", "Information Architecture",
  "HTML/CSS", "React.js"
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
        <Link to="/" className="flex items-center text-pencil hover:text-ink font-hand text-lg group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="sketch-button flex items-center space-x-2 bg-ink text-paper px-5 py-2 font-hand font-bold text-lg shadow-lg"
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



          {/* Header Section */}
          <header className="border-b-2 border-ink pb-8 mb-10 relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Main Column (Experience & Education) */}
            <div className="md:col-span-8 space-y-12 pr-0 md:pr-4">
              
              {/* Experience Section */}
              <section className="relative">
                <div className="relative inline-block mb-8">
                  <h2 className="text-xl font-hand font-bold text-ink uppercase tracking-wider flex items-center">
                    <Briefcase size={20} className="mr-3 text-pencil" strokeWidth={2.5} />
                    Experience
                  </h2>
                  <DoodleUnderline className="absolute -bottom-2.5 left-0 w-[140px] h-3.5 text-blue-500/60 pointer-events-none" />
                </div>
                
                <div className="space-y-10">
                  {experiences.map((exp, idx) => (
                    <motion.div 
                      key={exp.id} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-6 border-l-2 border-dashed border-pencil/30 group py-1"
                    >
                      {/* Timeline Bullet (Hand-drawn Doodle Circle) */}
                      <div className="absolute top-1.5 -left-[10px] w-5 h-5 flex items-center justify-center">
                        <DoodleCircle className="w-5 h-5 text-blue-500 fill-white" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2 gap-2">
                        <h3 className="text-lg font-bold text-ink font-serif hover:text-blue-600 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-hand font-bold text-pencil bg-gray-100/60 print:bg-white border border-gray-200/30 print:border-none px-2.5 py-0.5 rounded shadow-sm print:shadow-none transform rotate-1">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-blue-600 font-serif font-bold italic text-sm mb-4">
                        {exp.company}
                      </p>
                      
                      <ul className="space-y-2.5">
                        {exp.description.map((bullet, bIdx) => {
                          // Make high-craft metrics highlight
                          let highlightedText: React.ReactNode = bullet;
                          if (bullet.includes("40%") || bullet.includes("35%") || bullet.includes("50%") || bullet.includes("40%")) {
                            // Substring and wraps metrics in sketchy circled components
                            highlightedText = (
                              <span>
                                {bullet.split(/(\d+%\s*(?:lower|faster|reduction)?)/i).map((part, pIdx) => {
                                  if (/\d+%/.test(part)) {
                                    return (
                                      <span key={pIdx} className="relative inline-block px-1 mx-0.5 font-bold">
                                        <span className="absolute inset-0 border border-red-400 rounded-full sketch-border rotate-2 scale-11 opacity-70 print:border-none"></span>
                                        <strong className="text-ink font-serif font-bold relative z-10">{part}</strong>
                                      </span>
                                    );
                                  }
                                  return part;
                                })}
                              </span>
                            );
                          }

                          return (
                            <li key={bIdx} className="flex items-start text-xs text-pencil leading-relaxed">
                              <CheckDoodle />
                              <span className="flex-1">{highlightedText}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section className="relative pt-4">
                <div className="relative inline-block mb-8">
                  <h2 className="text-xl font-hand font-bold text-ink uppercase tracking-wider flex items-center">
                    <GraduationCap size={22} className="mr-3 text-pencil" strokeWidth={2.5} />
                    Education
                  </h2>
                  <DoodleUnderline className="absolute -bottom-2.5 left-0 w-[140px] h-3.5 text-red-500/60 pointer-events-none" />
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <motion.div 
                      key={edu.id} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between items-start border-l-2 border-dashed border-red-300/30 pl-6 relative py-1"
                    >
                      <div className="absolute top-1.5 -left-[6px] w-3 h-3 flex items-center justify-center">
                        <DoodleCircle className="w-3.5 h-3.5 text-red-500 fill-white" />
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-ink font-serif">{edu.school}</h3>
                        <p className="text-pencil italic text-xs font-serif">{edu.degree}</p>
                      </div>
                      <span className="text-xs font-hand font-bold text-pencil bg-gray-100/60 print:bg-white border border-gray-200/30 print:border-none px-2.5 py-0.5 rounded shadow-sm print:shadow-none transform -rotate-1 flex-shrink-0">
                        {edu.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column - Styled as rotated Sticky Notes themed matching notebooks on screen */}
            <div className="md:col-span-4 space-y-12">
              
              {/* Expertise / Skills Sticky Note */}
              <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#fffdeb] border-2 border-dashed border-[#e6dfbc] rounded-2xl md:rotate-1 hover:rotate-0 transition-transform duration-300 relative shadow-md print:shadow-none print:bg-white print:border-none print:p-0 print:rotate-0"
              >
                {/* Visual Shredded Tape Piece - top center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 bg-white/45 border-x border-t border-gray-300/40 backdrop-blur-[1px] rotate-[1.5deg] shadow-sm print:hidden" style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' }} />
                
                <h2 className="text-lg font-hand font-bold text-ink uppercase tracking-wider mb-5 flex items-center border-b border-[#ebdca5] pb-2 print:border-gray-100">
                  <Code size={18} className="mr-2 text-pencil" strokeWidth={2.5} />
                  Expertise
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <motion.span 
                      key={skill} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      className="px-2.5 py-1 bg-white/80 border border-gray-200/50 hover:bg-ink hover:text-paper hover:border-ink cursor-default text-ink rounded-lg text-[10px] font-serif font-bold tracking-normal uppercase transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              {/* Interactive Links / Connect Sticky Note */}
              <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#f5f3ff] border-2 border-dashed border-[#ddd8f5] rounded-2xl md:-rotate-1 hover:rotate-0 transition-transform duration-300 relative shadow-md print:shadow-none print:bg-white print:border-none print:p-0 print:rotate-0"
              >
                {/* Scotch Tape strip */}
                <div className="absolute -top-3 left-1/3 w-16 h-5.5 bg-white/45 border-x border-t border-gray-300/40 backdrop-blur-[1px] rotate-[-2deg] shadow-sm print:hidden" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }} />
                
                <h2 className="text-lg font-hand font-bold text-ink uppercase tracking-wider mb-5 flex items-center border-b border-[#cecdf3] pb-2 print:border-gray-100">
                  Connect
                </h2>
                
                <div className="space-y-4 font-serif text-xs">
                  <div className="p-3 bg-white/70 border border-gray-200/20 rounded-xl relative group">
                    <p className="font-bold text-ink mb-1 text-[10px] uppercase tracking-wider opacity-60 font-hand">Portfolio Link</p>
                    <a href="https://vvidhi-bhanushali.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 font-bold">
                      vvidhi-bhanushali.vercel.app
                      <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  
                  <div className="p-3 bg-white/70 border border-gray-200/20 rounded-xl relative group">
                    <p className="font-bold text-ink mb-1 text-[10px] uppercase tracking-wider opacity-60 font-hand">LinkedIn Profile</p>
                    <a href="https://linkedin.com/in/vidhi-bhanushali" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 font-bold">
                      /in/vidhi-bhanushali
                      <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.section>

              {/* Languages Sticky Note */}
              <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#fff1f2] border-2 border-dashed border-[#ffd3d7] rounded-2xl md:rotate-2 hover:rotate-0 transition-transform duration-300 relative shadow-md print:shadow-none print:bg-white print:border-none print:p-0 print:rotate-0"
              >
                {/* Visual Tape strip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 bg-white/45 border-x border-t border-gray-300/40 backdrop-blur-[1px] rotate-[3deg] shadow-sm print:hidden" style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' }} />
                
                <h2 className="text-lg font-hand font-bold text-ink uppercase tracking-wider mb-4 flex items-center border-b border-[#fec5cc] pb-2 print:border-gray-100">
                  Languages
                </h2>
                
                <div className="space-y-3.5 text-xs font-serif text-pencil">
                  <div className="flex justify-between items-center border-b border-rose-100/30 pb-1.5">
                    <span className="font-serif">English</span>
                    <span className="font-hand font-bold text-ink text-sm bg-white/60 px-2.5 py-0.5 rounded border border-gray-100">Professional</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-rose-100/30 pb-1.5">
                    <span className="font-serif">Hindi</span>
                    <span className="font-hand font-bold text-ink text-sm bg-white/60 px-2.5 py-0.5 rounded border border-gray-100">Native</span>
                  </div>
                  <div className="flex justify-between items-center pb-0.5">
                    <span className="font-serif">Gujarati</span>
                    <span className="font-hand font-bold text-ink text-sm bg-white/60 px-2.5 py-0.5 rounded border border-gray-100">Native</span>
                  </div>
                </div>
              </motion.section>

              {/* QR Code Placeholder for Print (Kept Hidden on Web Screen) */}
              {/* <section className="hidden print:block pt-4">
                <div className="border border-dashed border-gray-200 p-4 text-center rounded-xl bg-white">
                   <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2 font-serif font-bold">Scan to view digital portfolio</p>
                   <div className="w-20 h-20 bg-gray-100 mx-auto mb-2 flex items-center justify-center text-[8px] text-gray-300 font-bold border border-gray-200">QR CODE</div>
                   <p className="text-[10px] text-gray-400 font-serif font-bold">vidhibhanushali.design</p>
                </div>
              </section>
            </div>
          </div> */}

          {/* Footer for the PDF page */}
          <footer className="mt-16 pt-8 border-t-2 border-dashed border-gray-200 text-center text-[10px] text-gray-400 uppercase tracking-widest font-serif font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* <span>References available upon request</span> */}
            <span>Designed & Coded by Vidhi Bhanushali</span>
          </footer>
        </motion.div>
      </div>

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
            color: black !important;
            font-size: 11pt !important;
          }
          .min-h-screen {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .bg-paper, .bg-[#faf8f4], .bg-[#fefdfa] {
            background: white !important;
            background-color: white !important;
            background-image: none !important;
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
