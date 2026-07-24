import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-6 md:px-10"
      style={{ background: 'var(--paper)' }}
    >
      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="w-full h-[340px] mb-16 rounded-lg overflow-hidden"
        style={{ filter: 'grayscale(30%) sepia(20%)' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.847582344976!2d102.56902!3d2.04442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1ee9d3e1a3e6b%3A0x8e3f5e5e5e5e5e5e!2sMahkamah%20Tinggi%20Muar!5e0!3m2!1sen!2smy!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mahkamah Tinggi Muar Location"
        />
      </motion.div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-light text-4xl md:text-5xl lg:text-6xl mb-2"
          style={{ color: 'var(--ink)' }}
        >
          Let&apos;s stay{' '}
          <span className="font-black" style={{ color: 'var(--ochre)' }}>
            connected.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 mb-16"
        >
          {/* Email */}
          <motion.a
            href="mailto:weifeng603@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 border-2 rounded-none font-body font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-midnight hover:text-paper"
            style={{ borderColor: 'var(--midnight)', color: 'var(--midnight)' }}
          >
            <Mail size={20} />
            Email
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/loke-wei-feng-129513303"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 border-2 rounded-none font-body font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-midnight hover:text-paper"
            style={{ borderColor: 'var(--midnight)', color: 'var(--midnight)' }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t"
          style={{ borderColor: 'var(--rule)' }}
        >
          <p className="font-body text-sm text-quiet">
            Loke Wei Feng · Practicum e-portfolio · {new Date().getFullYear()}
          </p>
          <p className="font-body text-xs text-quiet mt-2">
            Universiti Utara Malaysia · Bachelor of Law with Honours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
