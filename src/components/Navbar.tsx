import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  lang: 'hi' | 'en';
  setLang: (lang: 'hi' | 'en') => void;
  onOpenApplyModal: () => void;
  onOpenPosterModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenApplyModal,
  onOpenPosterModal
}) => {
  const whatsappUrl = generateWhatsAppLink({ phone: CAFE_INFO.phone });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-bar for village and emergency alert */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400">
              {lang === 'hi' ? 'सुधीर ऑनलाइन सेवा केंद्र भदवार' : 'Sudhir Online Service Center, Bhadwar'}
            </span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-400 hidden sm:inline">
              {lang === 'hi' ? 'उत्तर टोला, भदवार (बक्सर - 802134)' : 'Uttar Tola, Bhadwar (Buxar - 802134)'}
            </span>
            <span className="text-slate-500 hidden md:inline">·</span>
            <span className="text-emerald-400 hidden md:inline">
              {lang === 'hi' ? 'प्रतिदिन 8:00 AM - 8:30 PM' : 'Open Daily 8:00 AM - 8:30 PM'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CAFE_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenPosterModal}
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2 transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'मूल पोस्टर देखें' : 'View Banner'}
            </button>
            <div className="flex items-center border border-slate-700 rounded overflow-hidden">
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 transition-colors cursor-pointer ${
                  lang === 'hi' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-900 transition-colors"
        >
          {lang === 'hi' ? 'सुधीर ऑनलाइन सर्विस सेंटर' : 'Sudhir Online Services'}
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'सभी सेवाएं' : 'All Services'}
          </a>
          <a href="#voter-pan" className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'वोटर व पैन कार्ड' : 'Voter & PAN Desk'}
          </a>
          <a href="#track" className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'आवेदन स्थिति जांचें' : 'Track Application'}
          </a>
          <a href="#rate-list" className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'दर सूची' : 'Rate Card'}
          </a>
          <a href="#contact" className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'संपर्क व पता' : 'Contact & Address'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp'}</span>
          </a>

          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {lang === 'hi' ? 'नया आवेदन करें' : 'Apply Online'}
          </button>
        </div>
      </div>
    </header>
  );
};
