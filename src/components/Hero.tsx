import React from 'react';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, MapPin, Search, Eye } from 'lucide-react';
import { CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  lang: 'hi' | 'en';
  onOpenApplyModal: () => void;
  onOpenPosterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenApplyModal,
  onOpenPosterModal
}) => {
  const whatsappUrl = generateWhatsAppLink({ phone: CAFE_INFO.phone });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker - Clean unboxed text */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-amber-400 font-medium">
              <span className="flex items-center gap-1.5 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                {lang === 'hi' ? 'डिजिटल इंडिया व सरकारी सेवा केंद्र' : 'Digital India & Cyber Cafe Kiosk'}
              </span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-slate-300">
                {lang === 'hi' ? 'काम जल्दी और विश्वसनीय !' : 'Fast and Trustworthy Service!'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              {lang === 'hi' ? (
                <>
                  सुधीर ऑनलाइन <span className="text-amber-400">सर्विस सेंटर</span> भदवार
                </>
              ) : (
                <>
                  Sudhir Online <span className="text-amber-400">Service Center</span> Bhadwar
                </>
              )}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {lang === 'hi' ? (
                <>
                  सरकारी योजनाओं के फॉर्म, RTPS आय-जाति-निवास प्रमाण पत्र, पैन कार्ड, नया वोटर आईडी, 
                  जमीन का खतियान व रसीद, आधार बैंकिंग (AEPS) और साइबर कैफे प्रिंट/स्कैन/फोटोकॉपी की संपूर्ण सुविधा।
                </>
              ) : (
                <>
                  Your complete village digital kiosk for Bihar RTPS certificates, PAN card, Voter ID, 
                  land records (Khatiyan & Jamabandi), AEPS cash withdrawal, and high-speed cyber cafe printing.
                </>
              )}
            </p>

            {/* Direct Location & Contact Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 py-1 border-y border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{lang === 'hi' ? 'उत्तर टोला, भदवार (बक्सर - 802134)' : 'Uttar Tola, Bhadwar (Buxar - 802134)'}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 {CAFE_INFO.phone}</span>
              </div>
              <div className="text-xs text-slate-400">
                {lang === 'hi' ? 'प्रोपराइटर: सुधीर कुमार' : 'Proprietor: Sudhir Kumar'}
              </div>
            </div>

            {/* Interactive Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenApplyModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'नया आवेदन करें / पर्ची बनाएं' : 'Apply Online / Get Slip'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#track"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-sky-400" />
                <span>{lang === 'hi' ? 'आवेदन स्थिति जांचें' : 'Track Status'}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'hi' ? 'व्हाट्सएप संपर्क' : 'WhatsApp Us'}</span>
              </a>
            </div>

            {/* Quick search lead text */}
            <p className="text-xs text-slate-400">
              {lang === 'hi'
                ? '★ सभी प्रकार के ऑनलाइन एवं सरकारी फॉर्म भरने की सुविधा तुरंत उपलब्ध है'
                : '★ Instant online government application & digital print services'}
            </p>
          </div>

          {/* Right Column: Visual Showcase Card & Authentic Banner Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-850 bg-slate-900/90 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative group">
              {/* Header card ribbon */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-wide">
                    {lang === 'hi' ? 'सुधीर ऑनलाइन सेवा केंद्र' : 'Sudhir Online Center'}
                  </span>
                  <span className="text-xs bg-amber-400 text-slate-950 font-bold px-1.5 py-0.5 rounded">
                    Cyber Cafe
                  </span>
                </div>
                <button
                  onClick={onOpenPosterModal}
                  className="flex items-center gap-1 text-xs text-blue-100 hover:text-white underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'मूल बैनर देखें' : 'View Banner'}</span>
                </button>
              </div>

              {/* Poster image preview with interactive zoom hint */}
              <div
                onClick={onOpenPosterModal}
                className="relative cursor-pointer overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center"
              >
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-20_at_05.18.38_1ce0765c.jpeg"
                  alt="सुधीर ऑनलाइन सर्विस सेंटर भदवार पोस्टर"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{lang === 'hi' ? 'प्रोपराइटर: सुधीर कुमार' : 'Proprietor: Sudhir Kumar'}</span>
                  </span>
                  <span className="bg-blue-600/90 backdrop-blur px-2.5 py-1 rounded text-white flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'बड़ा देखें' : 'Zoom'}</span>
                  </span>
                </div>
              </div>

              {/* Quick Center Highlights Box */}
              <div className="p-4 space-y-3 text-xs bg-slate-900/95">
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700/60">
                    <div className="text-amber-400 font-bold text-sm">24+ सेवाएं</div>
                    <div className="text-slate-400 mt-0.5">आधार, पैन, वोटर, RTPS, खतियान</div>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700/60">
                    <div className="text-emerald-400 font-bold text-sm">AEPS बैंकिंग</div>
                    <div className="text-slate-400 mt-0.5">फिंगरप्रिंट नकद निकासी व ATM</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-400 pt-1 border-t border-slate-800">
                  <span>{lang === 'hi' ? 'बाइक पहचान: BR 44 S 9550' : 'Vehicle: BR 44 S 9550'}</span>
                  <span className="text-amber-400 font-medium">
                    {lang === 'hi' ? 'भदवार (बक्सर)' : 'Bhadwar (Buxar)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
