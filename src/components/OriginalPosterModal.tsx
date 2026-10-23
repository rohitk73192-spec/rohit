import React from 'react';
import { X, Download, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/servicesData';

interface OriginalPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'hi' | 'en';
}

export const OriginalPosterModal: React.FC<OriginalPosterModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const posterPath = '/assets/aistudio/WhatsApp_Image_2026-10-20_at_05.18.38_1ce0765c.jpeg';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-5 py-3.5 flex items-center justify-between border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base text-amber-400">
              {lang === 'hi' ? 'मूल फ्लेक्स पोस्टर एवं प्रमाणिकता' : 'Original Center Banner & Verification'}
            </span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700 hidden sm:inline">
              BR 44 S 9550
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={posterPath}
              download="Sudhir_Online_Service_Center_Poster.jpeg"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'hi' ? 'डाउनलोड' : 'Download'}</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950">
          <img
            src={posterPath}
            alt="सुधीर ऑनलाइन सर्विस सेंटर भदवार पोस्टर"
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-md border border-slate-800"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Bottom Bar with Direct Verification Details */}
        <div className="bg-slate-900 border-t border-slate-800 p-4 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{CAFE_INFO.addressHi}</span>
            </div>
            <div className="text-slate-400">
              प्रोपराइटर: {CAFE_INFO.proprietorHi} • काम जल्दी और विश्वसनीय !
            </div>
          </div>

          <a
            href={`tel:${CAFE_INFO.phone}`}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>कॉल: {CAFE_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
