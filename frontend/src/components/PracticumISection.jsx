import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const PracticumISection = () => {
  const weeks = [
    { week: 'Week 1', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 2', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 3', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { week: 'Week 4', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  ];

  return (
    <section
      id="practicum-i"
      className="relative py-32 md:py-48 px-6 md:px-10"
      style={{ background: 'var(--midnight)' }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--lilac)' }}>
            02 · Practicum I · 3—27 August 2026
          </div>
          <h2
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
            style={{ color: 'var(--paper)' }}
          >
            The first
          </h2>
          <h2
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8"
            style={{ color: 'var(--ochre)' }}
          >
            four weeks.
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: 'var(--lilac)' }}>
            A record of the first month at Mahkamah Tinggi Muar. Open each week to update the five working-day entries.
          </p>
        </motion.div>

        {/* Large side number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-8 top-32 hidden lg:block font-display font-black text-9xl opacity-10"
          style={{ color: 'var(--paper)' }}
        >
          4<br />weeks
        </motion.div>
      </div>

      {/* Weeks Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {weeks.map((weekData, weekIndex) => (
            <AccordionItem
              key={weekIndex}
              value={`week-${weekIndex}`}
              className="border-2 rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--lilac)', background: 'var(--paper)' }}
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
                      style={{ borderColor: 'var(--electric)' }}
                    >
                      <div className="font-body font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                        {day}
                      </div>
                      <div
                        className="font-body text-base leading-relaxed p-4 rounded"
                        style={{ background: 'var(--lilac)/20', color: 'var(--quiet)' }}
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
  );
};

export default PracticumISection;
