import React, { useState, useEffect } from 'react';
import { Shield, Languages, Book, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixBackground from '../components/MatrixBackground'

const FeatureCard = ({ imgSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative flex flex-col items-center p-8 rounded-xl transition-all duration-500
        bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90
        hover:from-red-950/90 hover:via-gray-800/90 hover:to-gray-900/90
        border border-gray-700/50 hover:border-red-500/50
        backdrop-blur-lg transform hover:scale-105
        ${isHovered ? 'shadow-2xl shadow-red-500/20' : 'shadow-xl shadow-black/20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500" />

      {/* Image Container */}
      <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img src={imgSrc} alt={title} className="w-12 h-12 relative z-10 transform transition-transform duration-500 group-hover:rotate-12" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-white tracking-wide relative z-10 transition-colors duration-500 group-hover:text-red-400">
        {title}
      </h3>

      <p className="text-gray-300 text-center relative z-10 transition-colors duration-500 group-hover:text-gray-200 leading-relaxed">
        {description}
      </p>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 rounded-xl border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-xl opacity-0 group-hover:opacity-100 transform rotate-180 transition-all duration-1000 group-hover:rotate-0" />
      </div>
    </div>
  );
};


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

      
      {/* الشعار */}
      <img
  src="/img/warrior-shield.png"
  alt="Logo"
  className="relative md:w-68 md:h-48 rounded-full shadow-5xl transform scale-125 transition-transform duration-700 hover:scale-125"

  style={{
    filter: isGlowing ? 'drop-shadow(0 0 20px rgba(255,0,0,1))' : 'drop-shadow(0 0 10px rgba(255,0,0,0.3))',
    transition: 'filter 1s ease-in-out' // إضافة انتقال سلس للتصفية
  }}
/>

    </div>
  );
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (


    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center overflow-hidden" dir="rtl">
      
      
      {/* إضافة تأثير الضباب */}
      <MatrixBackground />
      <div className="fixed inset-0 backdrop-blur-[1px]" />
      
      
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10" />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-20">
        <div className={`flex flex-col items-center justify-center text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="sticky top-4">
            <GlowingLogo />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6 mt-8 transition-all duration-500">
           مُقاتِل 
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            دليل عربي  لتعلم أساسيات وتقنيات اختبار الاختراق
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
          <Link to="/docs/intro" className="px-8 py-4 bg-red-600 text-white rounded-lg text-lg font-bold transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
        ابدأ الآن
        </Link>
        <Link to="/blog" className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 rounded-lg text-lg font-bold transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
        المدونة
        </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          <FeatureCard
             imgSrc="/img/hacker_6019262.png"
            title="اختبار الاختراق"
            description="تعلم كل شيء عن اختبار الاخترق و Penetration Testing "
          />
          <FeatureCard
            imgSrc="/img/translation_16744674.png"
            title="بالغة العربية"
            description="كل المواضيع هنا يتم اصدارها بالغة العربية "
          />
          <FeatureCard
            imgSrc="/img/search-file_17139312.png"
            title="مصادر تعليمية"
            description="دروس وموارد تعليمية شاملة باللغة العربية"
          />
          <FeatureCard
            imgSrc="/img/people_9968747.png"
            title="مجتمع تفاعلي"
            description="انضم إلى مجتمع المخترقين الأخلاقيين العرب"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
     
    </div>
  );
};

export default HomePage;
