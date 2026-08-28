import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, Plus, Trash2, ZoomIn } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const GalleryPage = () => {
  const defaultCategories = [
    { id: 1, title: 'Mahkamah Tinggi Muar', description: 'Exterior view of the court building' },
    { id: 2, title: 'First day', description: 'First impressions and orientation' },
    { id: 3, title: 'Daily notes', description: 'Documentation and learning' },
    { id: 4, title: 'Learning in practice', description: 'Courtroom observations and experience' },
    { id: 5, title: 'Closing reflections', description: 'Final thoughts and takeaways' },
  ];

  const [gallery, setGallery] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-gallery');
    if (saved) {
      setGallery(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(gallery).length > 0) {
      localStorage.setItem('portfolio-gallery', JSON.stringify(gallery));
    }
  }, [gallery]);

  const handleImageUpload = (categoryId, event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGallery((prev) => ({
          ...prev,
          [categoryId]: [...(prev[categoryId] || []), e.target.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (categoryId, index) => {
    setGallery((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].filter((_, i) => i !== index),
    }));
  };

  const openLightbox = (image, category) => {
    setSelectedImage(image);
    setSelectedCategory(category);
  };

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #faf7f2 0%, #f5ebe0 100%)',
          paddingTop: '120px',
        }}
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--ochre) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="font-body text-xs uppercase tracking-widest mb-4 text-quiet"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              04 · Gallery
            </motion.div>
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
              Upload and manage photographs of the court, workspace, team activities and important practicum moments.
            </p>
          </motion.div>
        </div>

        {/* Gallery Categories */}
        <div className="max-w-7xl mx-auto space-y-16">
          {defaultCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl shadow-lg overflow-hidden"
              style={{
                background: 'rgba(250, 247, 242, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(207, 91, 29, 0.15)',
              }}
            >
              <div className="p-6 md:p-8">
                {/* Category Header */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-2xl"
                      style={{ background: 'var(--ochre)', color: 'var(--paper)' }}
                    >
                      {String(category.id).padStart(2, '0')}
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold text-2xl md:text-3xl"
                        style={{ color: 'var(--ink)' }}
                      >
                        {category.title}
                      </h3>
                      <p className="font-body text-sm text-quiet">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-full font-body text-sm font-medium transition-all hover:shadow-lg"
                    style={{
                      background: 'var(--ochre)',
                      color: 'var(--paper)',
                    }}
                    data-testid={`upload-gallery-${category.id}`}
                  >
                    <Upload size={16} />
                    Add Photos
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleImageUpload(category.id, e)}
                    />
                  </label>
                </div>

                {/* Images Grid */}
                {gallery[category.id] && gallery[category.id].length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gallery[category.id].map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md"
                        onClick={() => openLightbox(img, category)}
                      >
                        <img
                          src={img}
                          alt={`${category.title} ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage(category.id, i);
                          }}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: 'rgba(220, 38, 38, 0.9)', color: 'white' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="rounded-xl p-12 text-center"
                    style={{
                      background: 'rgba(255, 215, 186, 0.15)',
                      border: '2px dashed rgba(207, 91, 29, 0.3)',
                    }}
                  >
                    <ImageIcon size={48} style={{ color: 'var(--ochre)' }} className="mx-auto mb-4 opacity-40" />
                    <p className="font-body text-sm text-quiet italic">
                      No photos yet. Click "Add Photos" to upload.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 rounded-xl text-center"
            style={{ background: 'rgba(207, 91, 29, 0.08)' }}
          >
            <p className="font-body text-sm text-quiet">
              <strong style={{ color: 'var(--ochre)' }}>Tip:</strong> Your photos are stored on your device. Click any photo to view it in full size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(28, 26, 23, 0.95)' }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform"
              style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              {selectedCategory && (
                <div
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{ background: 'rgba(250, 247, 242, 0.1)' }}
                >
                  <p className="font-display font-bold text-lg text-white">
                    {selectedCategory.title}
                  </p>
                  <p className="font-body text-sm text-white opacity-70 mt-1">
                    {selectedCategory.description}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactSection showMap={false} />
    </>
  );
};

export default GalleryPage;
