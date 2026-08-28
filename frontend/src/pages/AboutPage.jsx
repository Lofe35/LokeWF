import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const AboutPage = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden min-h-screen"
        style={{ 
          background: 'linear-gradient(135deg, #faf7f2 0%, #f5ebe0 100%)',
          paddingTop: '120px'
        }}
      >
        {/* Decorative animated background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, var(--ochre) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }}
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="font-body text-xs uppercase tracking-widest text-quiet mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            01 · About
          </motion.div>
          <h2
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            style={{ color: 'var(--ink)' }}
          >
            Learning the law
          </h2>
          <h2
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            style={{ color: 'var(--ochre)' }}
          >
            with care.
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left Column - Photo and Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Professional Photo */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  border: '4px solid var(--ochre)',
                  maxWidth: '500px',
                  margin: '0 auto',
                }}
              >
                <img 
                  src="https://customer-assets-lqy194kg.emergentagent.net/job_mahkamah-experience/artifacts/7vy87dvp_image.png"
                  alt="Loke Wei Feng - Professional Photo"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20" style={{ background: 'linear-gradient(135deg, var(--ochre) 0%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 w-20 h-20" style={{ background: 'linear-gradient(315deg, var(--ochre) 0%, transparent 100%)' }} />
              </motion.div>

              {/* Quick Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl shadow-lg"
                  style={{ background: 'rgba(255, 215, 186, 0.3)', border: '1px solid var(--rule)' }}
                >
                  <GraduationCap size={32} style={{ color: 'var(--ochre)' }} className="mb-3" />
                  <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Programme</div>
                  <div className="font-display text-sm font-semibold" style={{ color: 'var(--ink)' }}>Bachelor of Law</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl shadow-lg"
                  style={{ background: 'rgba(255, 215, 186, 0.3)', border: '1px solid var(--rule)' }}
                >
                  <Award size={32} style={{ color: 'var(--ochre)' }} className="mb-3" />
                  <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Period</div>
                  <div className="font-display text-sm font-semibold" style={{ color: 'var(--ink)' }}>2024—2028</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--ink)' }}>
                  Hi, I'm <span style={{ color: 'var(--ochre)' }}>Loke Wei Feng</span>
                </h3>
                <p className="font-body text-lg md:text-xl leading-relaxed text-quiet">
                  An undergraduate student pursuing a <span className="font-semibold text-ink">Bachelor of Law with Honours</span> at <span className="font-semibold text-ink">Universiti Utara Malaysia</span>.
                </p>
              </motion.div>

              {/* Practicum Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 md:p-8 rounded-2xl shadow-lg"
                style={{ background: 'rgba(207, 91, 29, 0.08)', border: '2px solid rgba(207, 91, 29, 0.2)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase size={28} style={{ color: 'var(--ochre)', flexShrink: 0 }} />
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--ink)' }}>
                      Practicum Experience
                    </h4>
                    <p className="font-body text-base md:text-lg leading-relaxed text-quiet">
                      This e-portfolio documents my journey through <span className="font-medium text-ink">Practicum I and Practicum II</span>, providing insights into practical legal education and professional development.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Placement Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 md:p-8 rounded-2xl shadow-lg"
                style={{ background: 'rgba(244, 164, 96, 0.15)', border: '2px solid rgba(244, 164, 96, 0.3)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <MapPin size={28} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                  <div>
                    <h4 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--ink)' }}>
                      Practicum I Placement
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Location</div>
                        <div className="font-body text-base font-semibold" style={{ color: 'var(--ink)' }}>
                          Mahkamah Tinggi Muar, Malaysia
                        </div>
                      </div>
                      <div>
                        <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Duration</div>
                        <div className="font-body text-base font-semibold" style={{ color: 'var(--ink)' }}>
                          3 August 2026 — 28 August 2026
                        </div>
                      </div>
                      <div>
                        <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Court Division</div>
                        <div className="font-body text-base font-semibold" style={{ color: 'var(--ink)' }}>
                          Muar High Court
                        </div>
                      </div>
                      <div>
                        <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">Court Supervisor</div>
                        <div className="font-body text-base font-semibold" style={{ color: 'var(--ink)' }}>
                          Puan Suhaili binti Sapun
                        </div>
                        <div className="font-body text-sm text-quiet italic">
                          Deputy Registrar (Timbalan Pendaftar)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Academic Supervisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255, 215, 186, 0.2)' }}
              >
                <div className="font-body text-xs uppercase tracking-widest text-quiet mb-2">
                  Lecturer Supervisor
                </div>
                <div className="font-display text-lg font-bold" style={{ color: 'var(--ink)' }}>
                  Dr. Khuzaimah Bt Mat Salleh (986)
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--quiet)' }}>
                  I'm passionate about understanding the practical applications of legal theory and developing professional skills in a real-world court environment. This portfolio reflects my commitment to excellence in legal education.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative number with rotation */}
        <motion.div
          style={{ 
            y: y1, 
            rotate,
            opacity: 0.03, 
            color: 'var(--ochre)' 
          }}
          className="absolute -right-10 top-20 font-display font-black text-[20rem] leading-none pointer-events-none hidden xl:block"
        >
          01
        </motion.div>
      </section>
      <ContactSection showMap={false} />
    </>
  );
};

export default AboutPage;
