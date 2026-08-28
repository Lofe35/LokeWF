import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, FileText, BookOpen } from 'lucide-react';
import * as THREE from 'three';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  // Three.js 3D Legal Seal
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    const size = Math.min(window.innerWidth * 0.35, 450);
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.position.z = 8;

    // Create torus knot (legal seal inspired)
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 128, 32, 2, 3);
    const material = new THREE.MeshPhongMaterial({
      color: 0xcf5b1d,
      emissive: 0x8f3f12,
      shininess: 100,
      wireframe: false,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Wireframe companion
    const wireframeGeometry = new THREE.TorusKnotGeometry(1.8, 0.3, 64, 16, 2, 3);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4a460,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xf4a460, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.003;
      torusKnot.rotation.y += 0.005;
      wireframe.rotation.x -= 0.002;
      wireframe.rotation.y -= 0.003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col"
        style={{ 
          background: 'linear-gradient(135deg, #faf7f2 0%, #f5ebe0 50%, #ffd7ba 100%)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--ochre) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-40 left-20 w-40 h-40 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-20 w-36 h-36 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--light-orange) 0%, transparent 70%)' }}
        />

        <motion.div
          style={{ y, opacity }}
          className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-32 relative z-10"
        >
          {/* Eyebrow with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xs md:text-sm uppercase tracking-widest text-quiet mb-6 md:mb-8"
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Loke Wei Feng
            </motion.span>
            {' · Bachelor of Law with Honours · Malaysia'}
          </motion.div>

          {/* Main Heading with Masked Reveal */}
          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-light text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-none tracking-tight"
              style={{ color: 'var(--ink)' }}
            >
              A legal education,
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-none tracking-tight italic"
              style={{ color: 'var(--ochre)' }}
            >
              in practice.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-body text-base md:text-lg lg:text-xl text-center max-w-2xl text-quiet leading-relaxed mb-10 md:mb-12"
          >
            An e-portfolio documenting my Practicum I journey at Mahkamah Tinggi Muar, with Practicum II to follow.
          </motion.p>

          {/* CTA Buttons with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link to="/practicum-i">
              <motion.button
                className="px-8 py-4 font-body font-medium uppercase tracking-widest text-sm rounded-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                style={{ background: 'var(--ochre)', color: 'var(--paper)' }}
                whileHover={{ scale: 1.08, y: -4, boxShadow: '0 15px 35px rgba(207, 91, 29, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(207, 91, 29, 0)', '0 0 0 10px rgba(207, 91, 29, 0)'],
                }}
                transition={{ 
                  boxShadow: { repeat: Infinity, duration: 2, delay: 3 }
                }}
              >
                <span className="relative z-10">Read the journal</span>
                <motion.div
                  className="absolute inset-0 bg-ochre-dark"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="px-8 py-4 border-2 font-body font-medium uppercase tracking-widest text-sm rounded-full transition-all duration-300"
                style={{ borderColor: 'var(--ochre)', color: 'var(--ochre)', background: 'transparent' }}
                whileHover={{ scale: 1.08, y: -4, background: 'var(--ochre)', color: 'var(--paper)' }}
                whileTap={{ scale: 0.95 }}
              >
                About me
              </motion.button>
            </Link>
          </motion.div>

          {/* 3D Legal Seal with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05, rotateY: 15 }}
            className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{ maxWidth: '450px' }}
          >
            <canvas ref={canvasRef} className="drop-shadow-2xl" />
          </motion.div>

          {/* Enhanced Scroll Hint with pulse animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
              style={{ borderColor: 'var(--ochre)' }}
            >
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-1 h-3 rounded-full"
                style={{ background: 'var(--ochre)' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Kinetic Marquee Section - VERY VISIBLE MOTION */}
        <div className="py-16 md:py-24 overflow-hidden relative" style={{ background: 'var(--ink)' }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 pr-16">
                {['Legal Education', 'Court Practice', 'Reflection', 'Growth', 'Discipline', 'Advocacy', 'Justice', 'Precision'].map((word, i) => (
                  <React.Fragment key={i}>
                    <span
                      className="font-display font-black italic text-6xl md:text-8xl lg:text-9xl"
                      style={{ color: i % 2 === 0 ? 'var(--paper)' : 'var(--ochre)' }}
                    >
                      {word}
                    </span>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      className="text-5xl"
                      style={{ color: 'var(--ochre)' }}
                    >
                      ✦
                    </motion.span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Second row reverse direction */}
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className="flex whitespace-nowrap mt-8 opacity-40"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 pr-16">
                {['Mahkamah Tinggi Muar', 'August 2026', 'Practicum Journey', 'Four Weeks'].map((word, i) => (
                  <React.Fragment key={i}>
                    <span
                      className="font-body text-3xl md:text-4xl uppercase tracking-widest"
                      style={{ color: 'var(--lilac)', opacity: 0.7 }}
                    >
                      {word}
                    </span>
                    <span className="text-2xl" style={{ color: 'var(--ochre)' }}>·</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated Transition Line with wave effect */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-1 w-full relative overflow-hidden"
          style={{ transformOrigin: 'center' }}
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, var(--ochre) 50%, transparent 100%)',
              width: '50%',
            }}
          />
        </motion.div>

        {/* Home Intro Band with enhanced background */}
        <div 
          className="py-20 md:py-32 px-6 md:px-10 relative z-20" 
          style={{ 
            background: 'var(--beige)',
            backgroundImage: 'linear-gradient(rgba(245, 235, 224, 0.92), rgba(245, 235, 224, 0.92)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="max-w-6xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-body text-xs uppercase tracking-widest text-quiet mb-8"
              >
                The record
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-display font-light text-3xl md:text-4xl lg:text-5xl leading-relaxed max-w-4xl mx-auto"
                style={{ color: 'var(--ink)' }}
              >
                A considered archive of court experience, legal learning and the daily work that brought the classroom into focus.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Practicum Overview Cards with icons and images */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Practicum I Card with features */}
            <Link to="/practicum-i">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="relative p-10 md:p-12 rounded-2xl cursor-pointer group overflow-hidden shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(244, 164, 96, 0.15) 0%, rgba(207, 91, 29, 0.15) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(207, 91, 29, 0.2)',
                }}
              >
                {/* Court image thumbnail */}
                <div className="mb-6 rounded-xl overflow-hidden h-40">
                  <img
                    src="https://customer-assets-lqy194kg.emergentagent.net/job_mahkamah-experience/artifacts/3qu75vc9_Muar%20High%20Court.jpg"
                    alt="Mahkamah Muar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="font-body text-xs uppercase tracking-widest mb-4 text-quiet">
                    01 · August 2026
                  </div>
                  <h3 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: 'var(--ink)' }}>
                    Practicum I
                  </h3>
                  <p className="font-body text-lg leading-relaxed mb-6 text-quiet">
                    Four weeks at Mahkamah Tinggi Muar, from 3 August to 28 August 2026.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-quiet">
                      <Calendar size={16} style={{ color: 'var(--ochre)' }} />
                      <span>4 Weeks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-quiet">
                      <FileText size={16} style={{ color: 'var(--ochre)' }} />
                      <span>Daily Journal</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 font-body font-medium uppercase tracking-widest text-sm" style={{ color: 'var(--ochre)' }}>
                    Week 1—4 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: 'var(--ochre)' }}
                />
              </motion.div>
            </Link>

            {/* Practicum II Card with features */}
            <Link to="/practicum-ii">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="relative p-10 md:p-12 rounded-2xl cursor-pointer group overflow-hidden shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 215, 186, 0.4) 0%, rgba(245, 235, 224, 0.4) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(244, 164, 96, 0.3)',
                }}
              >
                {/* Law books placeholder */}
                <div className="mb-6 rounded-xl overflow-hidden flex items-center justify-center" style={{ background: 'rgba(207, 91, 29, 0.1)', height: '128px' }}>
                  <BookOpen size={48} style={{ color: 'var(--ochre)', opacity: 0.4 }} />
                </div>
                
                <div className="relative z-10">
                  <div className="font-body text-xs uppercase tracking-widest text-quiet mb-4">
                    02 · Not yet conducted
                  </div>
                  <h3 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: 'var(--ink)' }}>
                    Practicum II
                  </h3>
                  <p className="font-body text-lg leading-relaxed text-quiet mb-6">
                    An eight-week chapter that will be documented after the practicum takes place.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-quiet">
                      <Calendar size={16} style={{ color: 'var(--orange)' }} />
                      <span>8 Weeks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-quiet">
                      <Users size={16} style={{ color: 'var(--orange)' }} />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 font-body font-medium uppercase tracking-widest text-sm" style={{ color: 'var(--orange)' }}>
                    Week 1—8 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: 'var(--orange)' }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      <ContactSection showMap={false} />
    </>
  );
};

export default HomePage;
