import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const AboutPage = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden min-h-screen"
        style={{ background: 'var(--paper)', paddingTop: '120px' }}
      >
        {/* Decorative background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--lilac) 0%, transparent 70%)' }}
        />

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="font-body text-xs uppercase tracking-widest text-quiet mb-4">
            01 · About
          </div>
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

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            style={{ opacity }}
            className="space-y-8 md:space-y-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-center"
              style={{ color: 'var(--ink)' }}
            >
              Hi, I&apos;m <span className="font-semibold">Loke Wei Feng</span>, an undergraduate student of Bachelor of Law with Honours at <span className="font-semibold">Universiti Utara Malaysia</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-lg md:text-xl leading-relaxed text-center text-quiet"
            >
              This e-portfolio records my Practicum I and Practicum II experience. I completed <span className="font-medium text-ink">Practicum I at Mahkamah Tinggi Muar, Malaysia</span>, from <span className="font-medium text-ink">3 August 2026 until 27 August 2026</span>. I was placed under{' '}
              <span className="inline-block px-3 py-1 bg-lilac/30 font-medium text-ink">
                [Add court division / officer here]
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-lg md:text-xl leading-relaxed text-center text-quiet"
            >
              My lecturer supervisor is <span className="font-medium text-ink">Dr. Khuzaimah Bt Mat Salleh (986)</span>. Thank you for visiting my e-portfolio.
            </motion.p>
          </motion.div>

          {/* Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {[
              { label: 'Programme', value: 'Bachelor of Law with Honours' },
              { label: 'University', value: 'Universiti Utara Malaysia' },
              { label: 'Practicum Placement', value: 'Mahkamah Tinggi Muar' },
              { label: 'Academic Period', value: '2024—2028' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="border-t-2 pt-4"
                style={{ borderColor: 'var(--rule)' }}
              >
                <div className="font-body text-xs uppercase tracking-widest text-quiet mb-2">
                  {item.label}
                </div>
                <div className="font-display text-xl md:text-2xl font-medium" style={{ color: 'var(--ink)' }}>
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative number */}
        <motion.div
          style={{ y: y1, opacity: 0.05, color: 'var(--ink)' }}
          className="absolute -right-10 top-20 font-display font-black text-[20rem] leading-none pointer-events-none hidden xl:block"
        >
          01
        </motion.div>
      </section>
      <ContactSection />
    </>
  );
};

export default AboutPage;
