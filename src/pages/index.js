import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, Book, Users, Terminal } from 'lucide-react';

// Animated background component
const EnhancedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base Layer */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950 opacity-90"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-${i} ${10 + Math.random() * 20}s infinite linear`,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div 
          className="absolute inset-0"
          style={{
            perspective: '1000px',
            transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: `radial-gradient(circle at center, rgba(220,38,38,0.1) 0%, transparent 70%)`,
                left: `${30 + i * 20}%`,
                top: `${20 + i * 25}%`,
                transform: `translate(${mousePosition.x * (20 + i * 5)}px, ${mousePosition.y * (20 + i * 5)}px)`,
                transition: 'transform 0.4s ease-out',
                animation: `pulse-${i} ${4 + i}s infinite ease-in-out alternate`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"
          style={{
            transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        />
      </div>
      
      {/* Scan Line Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(255,0,0,0.03) 50%)',
          backgroundSize: '100% 4px',
          animation: 'scanline 10s linear infinite'
        }}
      />
      
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        ${[...Array(20)].map((_, i) => `
          @keyframes float-${i} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            100% { transform: translate(0, 0); }
          }
        `).join('')}
        ${[...Array(3)].map((_, i) => `
          @keyframes pulse-${i} {
            0% { transform: scale(1); opacity: 0.3; }
            100% { transform: scale(1.2); opacity: 0.1; }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

// Enhanced StylishButton with more professional look
const StylishButton = ({ href, children, primary = false }) => (
  <a
    href={href}
    className={`
      inline-flex items-center justify-center px-8 py-4 m-2 text-lg font-bold
      rounded-xl transform transition-all duration-300 ease-in-out
      hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2
      ${primary 
        ? 'text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-lg hover:shadow-red-500/30 focus:ring-red-500' 
        : 'text-red-500 bg-gray-900/50 border border-red-500/30 hover:bg-gray-800/50 hover:border-red-500 shadow-lg hover:shadow-red-500/20 focus:ring-red-500/50'}
    `}
  >
    <span className="relative flex items-center gap-2">
      {children}
      <ChevronLeft className="w-5 h-5" />
    </span>
  </a>
);

// Enhanced FeatureCard with more depth and animations
const FeatureCard = ({ Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative flex flex-col items-center p-8 rounded-2xl transition-all duration-500
        bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90
        hover:from-red-950/90 hover:via-gray-800/90 hover:to-gray-900/90
        border border-gray-700/50 hover:border-red-500/50
        backdrop-blur-lg transform hover:scale-105 cursor-pointer
        ${isHovered ? 'shadow-2xl shadow-red-500/20' : 'shadow-xl shadow-black/20'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500" />
      
      {/* Icon container with enhanced animation */}
      <div className="relative mb-6 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Icon className="w-8 h-8 text-red-500 relative z-10" />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white tracking-wide relative z-10 transition-colors duration-500 group-hover:text-red-400">
        {title}
      </h3>

      <p className="text-gray-300 text-center relative z-10 transition-colors duration-500 group-hover:text-gray-200 leading-relaxed">
        {description}
      </p>

      {/* Enhanced animated border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-xl opacity-0 group-hover:opacity-100 transform rotate-180 transition-all duration-1000 group-hover:rotate-0" />
      </div>
    </div>
  );
};

// Enhanced GlowingLogo with more professional animation
const GlowingLogo = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src="/img/warrior-shield.png"
        alt="مُقاتِل"
        className="relative w-48 h-auto mb-4 rounded-full shadow-5xl transition-transform duration-700 scale-125"
        style={{
          filter: isGlowing 
            ? 'drop-shadow(0 0 20px rgba(255,0,0,1))' 
            : 'drop-shadow(0 0 10px rgba(255,0,0,0.3))',
          transition: 'filter 1s ease-in-out',
        }}
      />
    </div>
  );
};
// Main HomePage component
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" dir="rtl">
      <EnhancedBackground />
      
      {/* Top gradient overlay */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10" />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-20">
        <div className={`
          flex flex-col items-center justify-center text-center mb-16 
          transition-all duration-1000 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <GlowingLogo />
          
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6 mt-8 transition-all duration-500">
            مُقاتِل
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
          دليل عربي شامل لتعلم أساسيات وتقنيات اختبار الاختراق
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            <StylishButton href="/docs/intro" primary>
              ابدأ رحلة التعلم
            </StylishButton>
            <StylishButton href="/blog">
              استكشف المدونة
            </StylishButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
          <FeatureCard
            Icon={Shield}
            title="اختبار الاختراق"
            description="تعلم كل شيء عن اختبار الاخترق و Penetration Testing"
          />
          <FeatureCard
            Icon={Book}
            title="محتوى عربي"
            description="كل المواضيع هنا يتم اصدارها بالغة العربية "
          />
          <FeatureCard
            Icon={Terminal}
            title="مصادر تعليمية"
            description= "دروس وموارد تعليمية شاملة باللغة العربية"
          />
          <FeatureCard
            Icon={Users}
            title="مجتمع تفاعلي"
            description="انضم إلى مجتمع المخترقين الأخلاقيين العرب"
          />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </div>
  );
};

export default HomePage;