'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Microscope,
  Gavel,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-1 bg-primary rounded-full" />
            <div className="text-xl font-bold tracking-tight text-slate-900">
              Deena Berkowitz <span className="text-sm font-medium text-slate-500 ml-1">MD, MPH</span>
            </div>
          </div>
          <div className="hidden space-x-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="#legal" className="hover:text-primary transition-colors">Legal</a>
            <a href="#fellowship" className="hover:text-primary transition-colors">Fellowship</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#contact" className="rounded-full bg-slate-900 px-5 py-2 text-white hover:bg-slate-800 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-40" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-8 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Pediatric Emergency Medicine Specialist
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-6xl font-black tracking-tight text-slate-900 sm:text-7xl mb-8 leading-[1.1]"
              >
                Leadership in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clinical Excellence</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Associate Division Chief of Emergency Medicine at <span className="font-semibold text-slate-900">Children&apos;s National Hospital</span> and Associate Professor at <span className="font-semibold text-slate-900">GWU</span>. Bridging clinical mastery with medical-legal expertise and academic leadership.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
                <a href="#legal" className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-1">
                  Medical-Legal Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#fellowship" className="flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">
                  Fellowship Programs
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[450px] aspect-[4/5] mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] rotate-3 opacity-10" />
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
                <Image 
                  src="/berkowitz_d.png" 
                  alt="Dr. Deena Berkowitz" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Stats badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">20+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Expertise Pathways */}
      <section id="expertise" className="py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Dedicated Professional Paths</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Providing top-tier consultation for legal partners and world-class training for future pediatric emergency leaders.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal / Expert Witness */}
            <motion.div 
              id="legal"
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <Gavel className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 italic">Medical-Legal Consultation</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  As Associate Chief of Quality and Safety, Dr. Berkowitz provides authoritative expert witness services, case reviews, and standard-of-care analysis in Pediatric Emergency Medicine.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Standard of Care & Malpractice Review",
                    "Pediatric Triage & Operational Oversight",
                    "Quality Improvement Methodology Expert",
                    "Board Certified PEM Specialist"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="mailto:dberkowi@childrensnational.org" className="text-primary font-bold flex items-center gap-2 group">
                Inquire for Consultation <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Fellowship / Education */}
            <motion.div 
              id="fellowship"
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 italic">Fellowship Leadership</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Co-Director of the nation&apos;s first APA-accredited <span className="font-bold text-slate-900">Pediatric Acute and Urgent Care Fellowship</span>, training the next generation of academic leaders.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Nationally Recognized APA-Accredited Program",
                    "Advanced Clinical & Operational Training",
                    "Mentorship in Quality & Patient Safety",
                    "Leadership in Academic Fellowship Development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <GraduationCap className="w-6 h-6 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://childrensnational.org/healthcare-providers/medical-education/fellowships/pediatric-acute-and-urgent-care-fellowship" target="_blank" className="text-secondary font-bold flex items-center gap-2 group">
                Program Details <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Leadership Grid */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Pioneering Pediatric Care</h2>
              <p className="text-slate-600 text-lg">Leading high-volume clinical services with a focus on triage accuracy, safety, and systemic quality improvement at one of the nation&apos;s top pediatric hospitals.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-400 uppercase">Hospital Affiliation</div>
                <div className="font-bold text-slate-900">Children&apos;s National #5 in Nation</div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality and Safety",
                desc: "Associate Chief dedicated to reducing practice variation and optimizing safety protocols across the division.",
                icon: ShieldCheck,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Operational Strategy",
                desc: "Managing Fast Track Services with 45,000+ annual encounters, optimizing flow and patient experience.",
                icon: Zap,
                color: "bg-amber-50 text-amber-600"
              },
              {
                title: "Founding Leadership",
                desc: "Founding member of the Society for Pediatric Urgent Care, defining the standards for acute care.",
                icon: Microscope,
                color: "bg-teal-50 text-teal-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all group bg-white"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications / Research */}
      <section id="research" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
            <div>
              <h2 className="text-5xl font-black mb-6">Scholarly Impact</h2>
              <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-medium italic">
                Driving equity and efficiency in pediatric emergency medicine through rigorous research on triage accuracy and clinical outcomes.
              </p>
            </div>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Berkowitz+Deena" 
              target="_blank"
              className="flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full text-sm font-black hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              PubMed Bibliography <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid gap-10">
            {[
              {
                year: "2023",
                title: "Delays in treatment and disposition attributable to undertriage of pediatric emergency medicine patients",
                journal: "American Journal of Emergency Medicine",
                tag: "Operational Research"
              },
              {
                year: "2022",
                title: "Race, ethnicity, and language association with Undertriage in Pediatric emergency medicine",
                journal: "Medical Care Research and Review",
                tag: "Health Equity"
              },
              {
                year: "2020",
                title: "Development of Academic Pediatric Urgent Care Fellowships",
                journal: "Journal of Pediatrics",
                tag: "Medical Education"
              }
            ].map((pub, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group border-l-4 border-slate-700 pl-10 py-4 hover:border-primary transition-all cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">{pub.year}</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">{pub.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{pub.title}</h3>
                <p className="text-lg text-slate-400 font-medium italic underline decoration-slate-700 underline-offset-4">{pub.journal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full" />
            <h2 className="text-3xl font-black mb-16 flex items-center gap-4">
              <Award className="w-10 h-10 text-primary" />
              Board Certifications & Education
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 rounded-2xl h-fit">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 italic">Yale School of Medicine</h3>
                    <p className="text-slate-500 font-medium mb-1 uppercase tracking-wider text-xs">MD & MPH (Health Management)</p>
                    <p className="text-sm text-slate-400">Residency in Pediatrics | Fellowship in Pediatric EM</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-slate-50 p-4 rounded-2xl h-fit">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 italic">Columbia College NY</h3>
                    <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Bachelor of Arts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-400 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Certified Expert
                </h3>
                <ul className="space-y-6 text-slate-700 font-bold italic">
                  <li className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Pediatric Emergency Medicine
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    General Pediatrics
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Quality Improvement Specialist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 px-6 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-md">
              <div className="text-3xl font-black text-slate-900 mb-6 italic">Deena Berkowitz <span className="text-primary tracking-tighter">MD</span></div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Associate Division Chief of Emergency Medicine and Medical Director of Fast Track Services. Dedicated to the intersection of clinical excellence, academic training, and medical-legal consulting.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">Navigation</h4>
                <ul className="space-y-4 font-bold text-slate-600">
                  <li><a href="#expertise" className="hover:text-primary">Expertise</a></li>
                  <li><a href="#legal" className="hover:text-primary">Legal Services</a></li>
                  <li><a href="#fellowship" className="hover:text-primary">Fellowship</a></li>
                  <li><a href="#research" className="hover:text-primary">Research</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/deena-b-648612113/" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:dberkowi@childrensnational.org" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Dr. Deena Berkowitz. Professional Digital Profile.
            </div>
            <div className="text-[10px] text-slate-300 max-w-sm text-center md:text-right font-medium">
              Credentials and clinical roles are affiliated with Children&apos;s National Hospital and George Washington University School of Medicine.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
