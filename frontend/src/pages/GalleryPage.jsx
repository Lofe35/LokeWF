import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Calendar, Book, PenTool } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Mahkamah Tinggi Muar',
      icon: ImageIcon,
      description: 'Exterior view of the court building',
    },
    {
      id: 2,
      title: 'First day',
      icon: Calendar,
      description: 'First impressions and orientation',
    },
    {
      id: 3,
      title: 'Daily notes',
      icon: FileText,
      description: 'Documentation and learning',
    },
    {
      id: 4,
      title: 'Learning in practice',
      icon: Book,
      description: 'Courtroom observations and experience',
    },
    {
      id: 5,
      title: 'Closing reflections',
      icon: PenTool,
      description: 'Final thoughts and takeaways',
    },
  ];

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{ 
          background: 'var(--beige)',
          backgroundImage: 'linear-gradient(rgba(250, 247, 242, 0.95), rgba(250, 247, 242, 0.95)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '120px'
        }}
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-body text-xs uppercase tracking-widest mb-4 text-quiet">
              04 · Gallery
            </div>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              A visual record
            </h2>
            <h2
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8"
              style={{ color: 'var(--ochre)' }}
            >
              of the work.
            </h2>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-quiet">
              Add photographs of the court, your workspace, team activities and important practicum moments here.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 215, 186, 0.3) 0%, rgba(245, 235, 224, 0.5) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(207, 91, 29, 0.2)',
                }}
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon
                      size={64}
                      strokeWidth={1.5}
                      style={{ color: 'var(--ochre)' }}
                      className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                  <h3
                    className="font-display font-semibold text-xl md:text-2xl text-center mb-3"
                    style={{ color: 'var(--ink)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-center text-quiet">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-sm italic text-quiet">
              These are placeholder icons. You can replace them with your actual photographs.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactSection showMap={false} />
    </>
  );
};

export default GalleryPage;
