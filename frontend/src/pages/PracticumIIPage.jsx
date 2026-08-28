import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, FileText, ChevronRight, BookOpen, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const PracticumIIPage = () => {
  const weeks = Array.from({ length: 8 }, (_, i) => ({
    week: i + 1,
  }));

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #f5ebe0 0%, #faf7f2 50%, #ffd7ba 100%)',
          paddingTop: '120px',
        }}
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute top-40 left-10 w-56 h-56 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-40 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--ochre) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-body text-xs uppercase tracking-widest text-quiet mb-4">
              03 · Practicum II
            </div>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              The next
            </h2>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8"
              style={{ color: 'var(--ochre)' }}
            >
              eight weeks.
            </h2>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl text-quiet">
              A longer chapter for sustained legal practice, new responsibilities and reflective learning. Click each week to open its dedicated journal.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: Calendar, label: 'Duration', value: '8 Weeks' },
              { icon: FileText, label: 'Journal Days', value: '40 Days' },
              { icon: BookOpen, label: 'Chapter', value: 'Part II' },
              { icon: Clock, label: 'Status', value: 'Forthcoming' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="p-4 md:p-5 rounded-xl shadow-md"
                style={{
                  background: 'rgba(250, 247, 242, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(244, 164, 96, 0.2)',
                }}
              >
                <stat.icon size={24} style={{ color: 'var(--orange)' }} className="mb-2" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeks.map((weekData, index) => (
              <Link key={weekData.week} to={`/practicum-ii/week/${weekData.week}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden shadow-lg"
                  style={{
                    background: 'rgba(250, 247, 242, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(244, 164, 96, 0.25)',
                    aspectRatio: '1',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 164, 96, 0.08) 0%, rgba(207, 91, 29, 0.08) 100%)',
                    }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="font-body text-xs uppercase tracking-widest text-quiet mb-2">
                        Week
                      </div>
                      <div
                        className="font-display font-black text-7xl md:text-8xl leading-none"
                        style={{ color: 'var(--orange)' }}
                      >
                        {String(weekData.week).padStart(2, '0')}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center gap-1 mb-4">
                        {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-body text-xs font-medium"
                            style={{
                              background: 'rgba(244, 164, 96, 0.15)',
                              color: 'var(--orange)',
                            }}
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 font-body font-medium uppercase tracking-widest text-xs"
                        style={{ color: 'var(--orange)' }}
                      >
                        Open
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight size={14} />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection showMap={false} />
    </>
  );
};

export default PracticumIIPage;
