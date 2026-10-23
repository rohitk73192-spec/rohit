import React from 'react';
import { X, Clock, FileCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem, CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForApply: (service: ServiceItem) => void;
  lang: 'hi' | 'en';
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectForApply,
  lang
}) => {
  if (!isOpen || !service) return null;

  const whatsappInquiryUrl = generateWhatsAppLink({
    phone: CAFE_INFO.phone,
    service: lang === 'hi' ? service.nameHi : service.nameEn
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="text-xs text-amber-400 font-semibold tracking-wide uppercase mb-1">
              {lang === 'hi' ? 'सेवा विवरण व दस्तावेज़ सूची' : 'Service Details & Documents'}
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'hi' ? service.nameHi : service.nameEn}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {service.taglineHi}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              {lang === 'hi' ? 'सेवा की पूरी जानकारी' : 'Overview'}
            </h4>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              {lang === 'hi' ? service.descriptionHi : service.descriptionEn}
            </p>
          </div>

          {/* Quick Metrics (Timeframe & Fees) */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
              <div className="flex items-center gap-1.5 text-blue-900 text-xs font-semibold mb-1">
                <Clock className="w-4 h-4 text-blue-700" />
                <span>{lang === 'hi' ? 'समय सीमा' : 'Timeframe'}</span>
              </div>
              <div className="text-base font-bold text-blue-950 font-mono">
                {service.estimatedTime}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg">
              <div className="flex items-center gap-1.5 text-emerald-900 text-xs font-semibold mb-1">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'hi' ? 'अनुमानित शुल्क' : 'Service Fee'}</span>
              </div>
              <div className="text-base font-bold text-emerald-950">
                {service.serviceFee}
              </div>
            </div>
          </div>

          {/* Required Documents List */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>{lang === 'hi' ? 'आवश्यक दस्तावेज (Checklist)' : 'Required Documents'}</span>
              <span className="text-[11px] font-normal text-slate-500">
                {lang === 'hi' ? 'ये कागजात साथ लाएं या भेजें' : 'Bring or send these documents'}
              </span>
            </h4>
            <ul className="space-y-2">
              {(lang === 'hi' ? service.requiredDocsHi : service.requiredDocsEn).map((doc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-md border border-slate-200 text-slate-800"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Address Note */}
          <div className="text-xs text-slate-500 bg-amber-50 border border-amber-200/80 p-3 rounded-lg">
            <span className="font-semibold text-amber-900">
              {lang === 'hi' ? 'केंद्र पर संपर्क:' : 'Center Note:'}
            </span>{' '}
            {lang === 'hi'
              ? 'सुधीर ऑनलाइन सर्विस सेंटर, उत्तर टोला, भदवार (बक्सर)। किसी भी भ्रम या सवाल के लिए सीधे सुधीर कुमार जी से संपर्क करें।'
              : 'Visit Sudhir Online Service Center, Uttar Tola, Bhadwar. For inquiries, call or WhatsApp Sudhir Kumar directly.'}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर पूछें' : 'Ask on WhatsApp'}</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'बंद करें' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForApply(service);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>{lang === 'hi' ? 'इस सेवा के लिए आवेदन करें' : 'Apply For This'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
