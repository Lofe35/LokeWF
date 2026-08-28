import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactSection = ({ showMap = false }) => {
  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-10"
      style={{ background: 'var(--beige)' }}
    >
      {/* Google Maps - Only show if showMap is true */}
      {showMap && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full h-[340px] mb-16 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0847582344976!2d102.5690177!3d2.0444223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKompleks%20Mahkamah%20Muar!5e0!3m2!1sen!2smy!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahkamah Tinggi Muar Location"
          />
        </motion.div>
      )}

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
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 mb-16 flex-wrap"
        >
          {/* Email */}
          <motion.a
            href="mailto:weifeng603@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 border-2 rounded-full font-body font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-ochre hover:text-paper hover:border-ochre"
            style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)' }}
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
            className="flex items-center gap-3 px-8 py-4 border-2 rounded-full font-body font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-ochre hover:text-paper hover:border-ochre"
            style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)' }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/60173773094"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 border-2 rounded-full font-body font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:bg-ochre hover:text-paper hover:border-ochre"
            style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)' }}
          >
            <Phone size={20} />
            WhatsApp
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
          <p className="font-body text-sm text-quiet mb-2">
            Loke Wei Feng · Practicum e-portfolio · {new Date().getFullYear()}
          </p>
          <p className="font-body text-xs text-quiet mb-2">
            Universiti Utara Malaysia · Bachelor of Law with Honours
          </p>
          <p className="font-body text-xs text-quiet mt-4">
            © {new Date().getFullYear()} Loke Wei Feng. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
