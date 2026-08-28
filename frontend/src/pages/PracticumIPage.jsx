import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import ContactSection from '../components/ContactSection';

const PracticumIPage = () => {
  const weeks = [
    { week: 'Week 1', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 2', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 3', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 4', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  ];

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{ 
          background: 'var(--light-orange)',
          backgroundImage: 'linear-gradient(rgba(255, 215, 186, 0.85), rgba(255, 215, 186, 0.85)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '120px'
        }}
      >
        {/* Mahkamah Muar Court Building Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4a/ea/48/kompleks-mahkamah-muar.jpg?w=1200&h=-1&s=1"
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
              A record of the first month at Mahkamah Tinggi Muar. Open each week to add your five working-day entries.
            </p>
          </motion.div>

          {/* Large side number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute right-8 top-32 hidden lg:block font-display font-black text-9xl opacity-5"
            style={{ color: 'var(--ochre)' }}
          >
            4<br />weeks
          </motion.div>
        </div>

        {/* Weeks Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {weeks.map((weekData, weekIndex) => (
              <AccordionItem
                key={weekIndex}
                value={`week-${weekIndex}`}
                className="border-2 rounded-2xl overflow-hidden shadow-lg"
                style={{ 
                  borderColor: 'var(--ochre)', 
                  background: 'rgba(250, 247, 242, 0.95)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6">
                    <span
                      className="font-display font-black text-4xl md:text-5xl"
                      style={{ color: 'var(--ochre)' }}
                    >
                      {String(weekIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display font-semibold text-2xl md:text-3xl" style={{ color: 'var(--ink)' }}>
                      {weekData.week}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6">
                  <div className="space-y-6 mt-4">
                    {weekData.days.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="border-l-4 pl-6 py-4"
                        style={{ borderColor: 'var(--orange)' }}
                      >
                        <div className="font-body font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                          {day}
                        </div>
                        <div
                          className="font-body text-base leading-relaxed p-4 rounded-lg"
                          style={{ background: 'rgba(255, 215, 186, 0.3)', color: 'var(--quiet)' }}
                        >
                          <em>[Write what you did, what you learned, and any important reflection here.]</em>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
      <ContactSection showMap={true} />
    </>
  );
};

export default PracticumIPage;
