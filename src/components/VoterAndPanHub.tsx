import React from 'react';
import { Vote, CreditCard, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { ServiceItem, SERVICES_DATA } from '../data/servicesData';

interface VoterAndPanHubProps {
  lang: 'hi' | 'en';
  onSelectForApply: (service: ServiceItem) => void;
}

export const VoterAndPanHub: React.FC<VoterAndPanHubProps> = ({
  lang,
  onSelectForApply
}) => {
  const voterService = SERVICES_DATA.find((s) => s.id === 'voter-id') || SERVICES_DATA[2];
  const panService = SERVICES_DATA.find((s) => s.id === 'pan-card') || SERVICES_DATA[1];
  const landService = SERVICES_DATA.find((s) => s.id === 'khatiyan-jamabandi') || SERVICES_DATA[12];

  const voterFeaturesHi = [
    'नया वोटर ID बनवाना (फॉर्म 6 ऑनलाइन)',
    'नाम, पिता/पति का नाम सुधार (फॉर्म 8)',
    'जन्मतिथि (DOB) एवं उम्र सुधार',
    'पता (Address) व विधानसभा परिवर्तन',
    'मोबाइल नंबर एवं ईमेल लिंक करना',
    'डिजिटल e-EPIC वोटर कार्ड डाउनलोड व PVC प्रिंट',
    'ग्राम भदवार व बक्सर वोटर लिस्ट में नाम जांचना'
  ];

  const panFeaturesHi = [
    'नया पैन कार्ड मात्र 3 दिनों में e-PAN प्राप्त करें',
    '7-10 दिनों में स्पीड पोस्ट से मूल प्लास्टिक कार्ड',
    'नाम, जन्मतिथि, फोटो व हस्ताक्षर सुधार',
    'आधार कार्ड से पैन कार्ड लिंक करने की सुविधा',
    'खोया हुआ पैन कार्ड नंबर निकालना व पुनः प्रिंट',
    'नाबालिग (Minor) बच्चों का पैन कार्ड आवेदन'
  ];

  return (
    <section id="voter-pan" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            {lang === 'hi' ? 'विशेष सहायता डेस्क' : 'Dedicated Express Desks'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi'
              ? 'वोटर कार्ड एवं पैन कार्ड विशेष सेवाएं'
              : 'Voter ID & PAN Card Express Desks'}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {lang === 'hi'
              ? 'सुधीर ऑनलाइन सेंटर पर वोटर कार्ड और पैन कार्ड के सभी काम बिना किसी देरी और त्रुटिरहित शुद्धता के साथ किए जाते हैं।'
              : 'Accurate, certified form filling and official government document processing directly at Bhadwar center.'}
          </p>
        </div>

        {/* 2-Column Split: Voter ID Hub vs PAN Card Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Voter ID Hub (Inspired by red box on original poster) */}
          <div className="bg-gradient-to-br from-rose-50/70 via-white to-orange-50/50 rounded-2xl border border-rose-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 bg-rose-600 text-white rounded-xl shadow-xs">
                  <Vote className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/90 px-3 py-1 rounded-full border border-rose-200">
                  {lang === 'hi' ? 'वोटर हेल्पलाइन डेस्क' : 'ECI Voter Desk'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'hi' ? 'Voter ID Card की सभी सेवाएं' : 'Complete Voter ID Solutions'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                {lang === 'hi'
                  ? 'भारत निर्वाचन आयोग (ECI) के अधिकृत नियमों के अनुसार नया वोटर पहचान पत्र व सुधार'
                  : 'Official Election Commission portal registration, updates, and duplicate e-EPIC card downloads.'}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5">
                {voterFeaturesHi.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-rose-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 font-mono">
                <span className="font-semibold text-rose-700">{lang === 'hi' ? 'समय:' : 'Time:'}</span>{' '}
                7-15 दिन में ई-एपिक
              </div>
              <button
                onClick={() => onSelectForApply(voterService)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>{lang === 'hi' ? 'वोटर कार्ड के लिए आवेदन करें' : 'Apply for Voter Card'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Box 2: PAN Card Hub (Inspired by center bottom banner on original poster) */}
          <div className="bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 rounded-2xl border border-blue-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 bg-blue-900 text-white rounded-xl shadow-xs">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200">
                  {lang === 'hi' ? 'UTI / NSDL अधिकृत' : 'Authorized PAN Desk'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'hi' ? 'PAN Card बनाये एवं सुधारने की सेवा' : 'PAN Card Creation & Correction'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                {lang === 'hi'
                  ? 'आयकर विभाग (Income Tax) द्वारा मान्य पैन कार्ड — मात्र 3 दिन में e-PAN प्राप्त करें।'
                  : 'Fast e-PAN generation within 3 working days and physical doorstep delivery via India Post.'}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5">
                {panFeaturesHi.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-blue-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 font-mono">
                <span className="font-semibold text-blue-800">{lang === 'hi' ? 'फीस:' : 'Fee:'}</span>{' '}
                ₹120 - ₹150 (Physical Card)
              </div>
              <button
                onClick={() => onSelectForApply(panService)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>{lang === 'hi' ? 'पैन कार्ड आवेदन करें' : 'Apply for PAN Card'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Third Banner: Bihar Bhumi & Land Records strip */}
        <div className="mt-8 bg-amber-50/80 border border-amber-200/90 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-900 text-sm sm:text-base">
                {lang === 'hi' ? 'बिहार भूमि रिकॉर्ड व राजस्व सेवा (Land Records)' : 'Bihar Bhumi Land Records'}
              </span>
              <span className="text-[11px] font-semibold bg-amber-200/80 text-amber-950 px-2 py-0.5 rounded">
                खतियान व रसीद
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 max-w-2xl">
              {lang === 'hi'
                ? 'जमाबंदी पंजी-II, पुराना व नया खतियान प्रति, ऑनलाइन भू-लगान रसीद काटना, एवं दाखिल-खारिज (Mutation) की स्थिति तुरंत जांचें।'
                : 'Check Jamabandi Register II, download digitized Khatiyan copies, pay annual land rent (Lagaan) and file mutation applications.'}
            </p>
          </div>
          <button
            onClick={() => onSelectForApply(landService)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
          >
            <span>{lang === 'hi' ? 'भूमि रिकॉर्ड सेवा लें' : 'Land Record Assistance'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
