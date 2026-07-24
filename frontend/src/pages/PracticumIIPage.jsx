import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import ContactSection from '../components/ContactSection';

const PracticumIIPage = () => {
  const weeks = Array.from({ length: 8 }, (_, i) => ({
    week: `Week ${i + 1}`,
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  }));

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{ background: 'var(--paper)', paddingTop: '120px' }}
      >
        {/* Decorative background glow */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--electric) 0%, transparent 70%)' }}
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
              A longer chapter for sustained legal practice, new responsibilities and reflective learning.
            </p>
          </motion.div>

          {/* Large side number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute right-8 top-32 hidden lg:block font-display font-black text-9xl opacity-5"
            style={{ color: 'var(--ink)' }}
          >
            8<br />weeks
          </motion.div>
        </div>

        {/* Weeks Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {weeks.map((weekData, weekIndex) => (
              <AccordionItem
                key={weekIndex}
                value={`week-${weekIndex}`}
                className="border-2 rounded-lg overflow-hidden"
                style={{ borderColor: 'var(--rule)', background: 'var(--paper)' }}
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6">
                    <span
                      className="font-display font-black text-4xl md:text-5xl"
                      style={{ color: 'var(--electric)' }}
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
                        style={{ borderColor: 'var(--ochre)' }}
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
      <ContactSection />
    </>
  );
};

export default PracticumIIPage;
