import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Upload, Image as ImageIcon, X, Save } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const WeekDetailPage = ({ practicumType }) => {
  const { weekNumber } = useParams();
  const navigate = useNavigate();
  const week = parseInt(weekNumber);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  // Load saved entries from localStorage
  const storageKey = `practicum-${practicumType}-week-${week}`;
  const [entries, setEntries] = useState({});
  const [images, setImages] = useState({});
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const data = JSON.parse(saved);
      setEntries(data.entries || {});
      setImages(data.images || {});
    }
  }, [storageKey]);

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(entries).length > 0 || Object.keys(images).length > 0) {
        localStorage.setItem(storageKey, JSON.stringify({ entries, images }));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [entries, images, storageKey]);

  const handleEntryChange = (day, value) => {
    setEntries(prev => ({ ...prev, [day]: value }));
  };

  const handleImageUpload = (day, event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImages(prev => ({
        ...prev,
        [day]: [...(prev[day] || []), e.target.result]
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (day, index) => {
    setImages(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    localStorage.setItem(storageKey, JSON.stringify({ entries, images }));
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2000);
  };

  const practicumName = practicumType === 'i' ? 'Practicum I' : 'Practicum II';
  const backPath = practicumType === 'i' ? '/practicum-i' : '/practicum-ii';
  const totalWeeks = practicumType === 'i' ? 4 : 8;
  const accentColor = practicumType === 'i' ? 'var(--ochre)' : 'var(--orange)';

  return (
    <>
      <section
        className="relative py-32 md:py-48 px-6 md:px-10 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #faf7f2 0%, #f5ebe0 100%)',
          paddingTop: '120px',
        }}
      >
        {/* Save Notification */}
        <AnimatePresence>
          {savedNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 right-6 z-50 px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              style={{ background: 'var(--ochre)', color: 'var(--paper)' }}
            >
              <Save size={16} />
              <span className="font-body text-sm font-medium">Saved!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to={backPath}>
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 font-body text-sm uppercase tracking-widest text-quiet hover:text-ochre transition-colors"
              >
                <ArrowLeft size={18} />
                Back to {practicumName}
              </motion.button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: accentColor }}>
              {practicumName} · Week {week} of {totalWeeks}
            </div>
            <h1
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Week{' '}
              <span style={{ color: accentColor }}>{String(week).padStart(2, '0')}</span>
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl text-quiet">
              Document your five working days. Write reflections, add photographs, and capture the essence of each day.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12 relative h-2 rounded-full overflow-hidden"
            style={{ background: 'rgba(207, 91, 29, 0.1)', transformOrigin: 'left' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${(week / totalWeeks) * 100}%` }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: accentColor }}
            />
          </motion.div>

          {/* Days Grid */}
          <div className="space-y-8">
            {days.map((day, index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-2xl shadow-lg overflow-hidden"
                style={{
                  background: 'rgba(250, 247, 242, 0.95)',
                  border: `2px solid ${accentColor === 'var(--ochre)' ? 'rgba(207, 91, 29, 0.2)' : 'rgba(244, 164, 96, 0.3)'}`,
                }}
              >
                <div className="p-6 md:p-8">
                  {/* Day Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-xl"
                        style={{ background: accentColor, color: 'var(--paper)' }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl" style={{ color: 'var(--ink)' }}>
                          {day}
                        </h3>
                        <div className="font-body text-xs uppercase tracking-widest text-quiet">
                          Day {index + 1} of Week {week}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diary Entry Textarea */}
                  <div className="mb-6">
                    <label className="font-body text-xs uppercase tracking-widest text-quiet mb-2 block">
                      Journal Entry
                    </label>
                    <textarea
                      value={entries[day] || ''}
                      onChange={(e) => handleEntryChange(day, e.target.value)}
                      placeholder="Write what you did, what you learned, and any important reflection here..."
                      rows={6}
                      className="w-full p-4 rounded-lg font-body text-base leading-relaxed resize-none focus:outline-none focus:ring-2 transition-all"
                      style={{
                        background: 'rgba(255, 215, 186, 0.15)',
                        border: '1px solid var(--rule)',
                        color: 'var(--ink)',
                      }}
                      data-testid={`journal-entry-${day.toLowerCase()}`}
                    />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-quiet mb-3 block">
                      Photos
                    </label>
                    
                    {/* Existing Images */}
                    {images[day] && images[day].length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {images[day].map((img, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square rounded-lg overflow-hidden group"
                          >
                            <img
                              src={img}
                              alt={`${day} entry ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => removeImage(day, i)}
                              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ background: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
                            >
                              <X size={14} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Upload Button */}
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium transition-all hover:shadow-md"
                      style={{
                        background: 'rgba(207, 91, 29, 0.1)',
                        border: `1px dashed ${accentColor}`,
                        color: accentColor,
                      }}
                    >
                      <Upload size={16} />
                      <span>Add Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(day, e)}
                        data-testid={`upload-photo-${day.toLowerCase()}`}
                      />
                    </label>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={handleSave}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full font-body font-medium uppercase tracking-widest text-sm shadow-lg"
              style={{ background: accentColor, color: 'var(--paper)' }}
              data-testid="save-week-entries"
            >
              <span className="flex items-center gap-2">
                <Save size={18} />
                Save All Entries
              </span>
            </motion.button>
            <p className="font-body text-xs text-quiet mt-4 italic">
              Auto-saves as you type · All entries stored on your device
            </p>
          </motion.div>

          {/* Week Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex flex-col sm:flex-row justify-between gap-4"
          >
            {week > 1 ? (
              <Link to={`/practicum-${practicumType}/week/${week - 1}`}>
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-2 font-body text-sm uppercase tracking-widest text-quiet hover:text-ochre transition-colors"
                >
                  <ArrowLeft size={18} />
                  Previous Week
                </motion.button>
              </Link>
            ) : <div />}

            {week < totalWeeks ? (
              <Link to={`/practicum-${practicumType}/week/${week + 1}`}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 font-body text-sm uppercase tracking-widest transition-colors"
                  style={{ color: accentColor }}
                >
                  Next Week
                  <ArrowLeft size={18} className="rotate-180" />
                </motion.button>
              </Link>
            ) : <div />}
          </motion.div>
        </div>
      </section>
      <ContactSection showMap={practicumType === 'i'} />
    </>
  );
};

export default WeekDetailPage;
