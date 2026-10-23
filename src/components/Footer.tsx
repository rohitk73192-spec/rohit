import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  lang: 'hi' | 'en';
  onOpenApplyModal: () => void;
  onOpenPosterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenApplyModal,
  onOpenPosterModal
}) => {
  const whatsappUrl = generateWhatsAppLink({ phone: CAFE_INFO.phone });

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Red & Green Accent Bottom Bar from the original poster */}
      <div className="bg-rose-700 text-white py-2 px-4 text-center text-xs font-semibold tracking-wide">
        ★ सभी प्रकार के ऑनलाइन एवं सरकारी फॉर्म भरने की सुविधा उपलब्ध है ★
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              {lang === 'hi' ? 'सुधीर ऑनलाइन सर्विस सेंटर भदवार' : 'Sudhir Online Service Center Bhadwar'}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {lang === 'hi'
                ? 'उत्तर टोला, भदवार (जिला बक्सर, बिहार - 802134)। सरकारी योजनाओं के फॉर्म, RTPS प्रमाण पत्र, पैन कार्ड, वोटर आईडी, भूमि रिकॉर्ड एवं साइबर कैफे प्रिंटिंग सेवा केंद्र।'
                : 'Uttar Tola, Bhadwar, District Buxar, Bihar - 802134. Authorized Cyber Cafe for government applications, RTPS certificates, Voter ID, and AEPS banking.'}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono space-y-0.5">
              <div>प्रोपराइटर: सुधीर कुमार • वाहन: BR 44 S 9550</div>
              <div>प्रतिदिन: सुबह 08:00 AM से रात 08:30 PM तक खुला</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'सभी 24 सेवाएं' : 'All 24 Services'}
                </a>
              </li>
              <li>
                <a href="#voter-pan" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'वोटर व पैन कार्ड डेस्क' : 'Voter & PAN Desk'}
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'आवेदन स्थिति जांचें' : 'Track Application'}
                </a>
              </li>
              <li>
                <a href="#rate-list" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'दर सूची व शुल्क' : 'Rate Card'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPosterModal}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {lang === 'hi' ? 'मूल फ्लेक्स पोस्टर देखें' : 'View Original Poster'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'संपर्क सूत्र' : 'Contact Center'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 {CAFE_INFO.phone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {CAFE_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>उत्तर टोला, भदवार (बक्सर) - 802134</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet copyright bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {CAFE_INFO.centerNameHi}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">काम जल्दी और विश्वसनीय !</span>
            <span>·</span>
            <span>Digital India Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
