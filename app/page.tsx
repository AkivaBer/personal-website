'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Microscope,
  FileText
} from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/20 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight text-primary">
            D. Berkowitz <span className="text-sm font-medium text-secondary">MD, MPH</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#clinical" className="hover:text-primary transition-colors">Clinical</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--color-secondary),_transparent_25%),_radial-gradient(circle_at_bottom_left,_var(--color-primary),_transparent_25%)] opacity-10" />
        <motion.div 
          className="max-w-4xl text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-6">
            Pediatric Emergency Medicine Specialist
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Dr. Deena Durst Berkowitz
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Associate Division Chief of Emergency Medicine at Children's National Hospital and 
            Associate Professor of Pediatrics at The George Washington University.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-4">
            <a href="#about" className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105">
              Professional Profile
            </a>
            <a href="https://appointments.childrensnational.org/provider/deena-durst-berkowitz/2359118" target="_blank" className="rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold hover:bg-slate-50 transition-all dark:border-slate-800 dark:hover:bg-slate-900">
              Hospital Bio
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary w-8 h-8" />
                Commitment to Excellence
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Dr. Berkowitz is a board-certified Pediatric Emergency Medicine specialist dedicated to improving clinical quality and operational efficiency. Her leadership at Children's National Hospital focuses on delivering high-acuity care with a focus on safety and patient outcomes.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                As the Medical Director for Fast Track Services and Co-Director of the Acute and Urgent Care Fellowship, she bridges the gap between clinical excellence and medical education, training the next generation of pediatric specialists.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Associate Division Chief</h3>
                    <p className="text-sm text-slate-500">Emergency Medicine, Children's National</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Associate Professor</h3>
                    <p className="text-sm text-slate-500">The George Washington University</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Medical Director</h3>
                    <p className="text-sm text-slate-500">Fast Track Services & EMS Base Station</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical & Leadership */}
      <section id="clinical" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic text-primary">Clinical Leadership & Expertise</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality Improvement",
                desc: "Specializes in QI methodology to reduce practice variation and optimize resource utilization in the ED.",
                icon: Microscope
              },
              {
                title: "Pediatric Urgent Care",
                desc: "Founding member of the Society for Pediatric Urgent Care and pioneer in academic fellowship development.",
                icon: Stethoscope
              },
              {
                title: "Operational Efficiency",
                desc: "Managing high-volume clinical services with a focus on triage accuracy and patient throughput.",
                icon: Zap
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Research & Publications
              </h2>
              <p className="text-blue-100 max-w-xl text-lg">
                Driving equity and efficiency in pediatric care through data-driven research on triage and clinical outcomes.
              </p>
            </div>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Berkowitz+Deena" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors"
            >
              View on PubMed <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="space-y-6">
            {[
              {
                year: "2023",
                title: "Delays in treatment and disposition attributable to undertriage of pediatric emergency medicine patients",
                journal: "American Journal of Emergency Medicine"
              },
              {
                year: "2022",
                title: "Race, ethnicity, and language association with Undertriage in Pediatric emergency medicine",
                journal: "Medical Care Research and Review"
              },
              {
                year: "2020",
                title: "Development of Academic Pediatric Urgent Care Fellowships",
                journal: "Journal of Pediatrics"
              }
            ].map((pub, i) => (
              <div key={i} className="group border-l-2 border-white/30 pl-6 py-2 hover:border-white transition-all cursor-default">
                <span className="text-sm font-mono text-blue-200">{pub.year}</span>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-secondary transition-colors">{pub.title}</h3>
                <p className="text-sm text-blue-100 italic">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="education" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Board Certifications</h2>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <GraduationCap className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Yale University School of Medicine</h3>
                    <p className="text-sm text-slate-500 mb-2">MD & MPH (Health Management)</p>
                    <p className="text-xs text-slate-400 italic">Residency in Pediatrics | Fellowship in Pediatric EM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <GraduationCap className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Columbia University</h3>
                    <p className="text-sm text-slate-500">Bachelor of Arts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  Board Certifications
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    Pediatric Emergency Medicine
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    General Pediatrics
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    American Board of Pediatrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 text-primary">Dr. Deena Berkowitz</h2>
            <p className="text-sm text-slate-500">Children's National Hospital | George Washington University</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/deena-b-648612113/" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-primary transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:dberkowi@childrensnational.org" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-primary transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://appointments.childrensnational.org/provider/deena-durst-berkowitz/2359118" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-primary transition-all hover:scale-110">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Dr. Deena Berkowitz. All professional credentials and clinical roles are affiliated with Children's National Hospital and GWU.
        </div>
      </footer>
    </div>
  );
}
