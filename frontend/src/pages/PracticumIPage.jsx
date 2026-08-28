import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, FileText, ChevronRight, MapPin, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const PracticumIPage = () => {
  const weeks = [
    { week: 1, dates: '3—7 August 2026', theme: 'Orientation & First Impressions' },
    { week: 2, dates: '10—14 August 2026', theme: 'Court Observations' },
    { week: 3, dates: '17—21 August 2026', theme: 'Case Study & Research' },
    { week: 4, dates: '24—28 August 2026', theme: 'Reflection & Conclusion' },
  ];

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #faf7f2 0%, #ffd7ba 50%, #f5ebe0 100%)',
          paddingTop: '120px',
        }}
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-32 right-20 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--ochre) 0%, transparent 70%)' }}
        />

        {/* Mahkamah Muar Court Building Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://customer-assets-lqy194kg.emergentagent.net/job_mahkamah-experience/artifacts/3qu75vc9_Muar%20High%20Court.jpg"
            alt="Kompleks Mahkamah Muar"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="font-body text-xs uppercase tracking-widest mb-4 text-quiet">
              02 · Practicum I · 3—28 August 2026
            </div>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              The first
            </h2>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8"
              style={{ color: 'var(--ochre)' }}
            >
              four weeks.
            </h2>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl text-quiet">
              A record of the first month at Mahkamah Tinggi Muar. Click each week to add your daily reflections and photographs.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: Calendar, label: 'Duration', value: '4 Weeks' },
              { icon: FileText, label: 'Journal Days', value: '20 Days' },
              { icon: MapPin, label: 'Location', value: 'Muar' },
              { icon: Clock, label: 'Status', value: 'Upcoming' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="p-4 md:p-5 rounded-xl shadow-md"
                style={{
                  background: 'rgba(250, 247, 242, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(207, 91, 29, 0.15)',
                }}
              >
                <stat.icon size={24} style={{ color: 'var(--ochre)' }} className="mb-2" />
                <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">
                  {stat.label}
                </div>
                <div className="font-display font-bold text-lg" style={{ color: 'var(--ink)' }}>
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Weeks Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-xs uppercase tracking-widest text-quiet mb-8 text-center"
          >
            Select a Week to Begin
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((weekData, index) => (
              <Link key={weekData.week} to={`/practicum-i/week/${weekData.week}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 rounded-2xl cursor-pointer overflow-hidden shadow-lg"
                  style={{
                    background: 'rgba(250, 247, 242, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(207, 91, 29, 0.2)',
                  }}
                >
                  {/* Background gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(207, 91, 29, 0.05) 0%, rgba(244, 164, 96, 0.05) 100%)',
                    }}
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span
                          className="font-display font-black text-6xl md:text-7xl leading-none"
                          style={{ color: 'var(--ochre)' }}
                        >
                          {String(weekData.week).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="font-body text-xs uppercase tracking-widest text-quiet mb-1">
                            Week {weekData.week}
                          </div>
                          <div className="font-display font-bold text-xl md:text-2xl" style={{ color: 'var(--ink)' }}>
                            {weekData.theme}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-quiet mt-4">
                        <Calendar size={14} />
                        <span className="font-body">{weekData.dates}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-6 font-body font-medium uppercase tracking-widest text-sm"
                        style={{ color: 'var(--ochre)' }}
                      >
                        Open Journal
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight size={18} />
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Days indicator */}
                  <div className="mt-6 pt-6 border-t flex justify-between" style={{ borderColor: 'var(--rule)' }}>
                    {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-body text-xs font-medium"
                          style={{ background: 'rgba(207, 91, 29, 0.1)', color: 'var(--ochre)' }}
                        >
                          {day}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection showMap={true} />
    </>
  );
};

export default PracticumIPage;
