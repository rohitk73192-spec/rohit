import React from 'react';
import { Printer, FileText, Check, ShieldCheck } from 'lucide-react';

interface RateListProps {
  lang: 'hi' | 'en';
}

export const RateList: React.FC<RateListProps> = ({ lang }) => {
  const cafeRates = [
    { itemHi: 'ब्लैक एंड व्हाइट फोटोकॉपी (B/W Xerox)', spec: 'A4 Single Side', price: '₹2' },
    { itemHi: 'ब्लैक एंड व्हाइट दोनों तरफ (Duplex)', spec: 'A4 Both Sides', price: '₹3' },
    { itemHi: 'रंगीन लेजर प्रिंट (Color Laser Print)', spec: 'A4 High Quality', price: '₹10' },
    { itemHi: 'हाई-क्वालिटी डॉक्युमेंट स्कैनिंग (PDF)', spec: 'प्रति पेज (Per Page)', price: '₹5' },
    { itemHi: 'थर्मल पाउच लेमिनेशन (Lamination)', spec: 'A4 साइज वाटरप्रूफ', price: '₹20' },
    { itemHi: 'आईडी कार्ड लेमिनेशन (छोटा)', spec: 'Aadhaar / Voter Size', price: '₹10' },
    { itemHi: 'कंप्यूटर टाइपिंग (हिंदी / अंग्रेजी लिखाई)', spec: 'प्रति पेज (आवेदन/शपथ पत्र)', price: '₹30 - ₹40' },
    { itemHi: 'तत्काल पासपोर्ट साइज फोटो (8 प्रतियां)', spec: 'High Gloss Photo Paper', price: '₹40' }
  ];

  const govtServiceRates = [
    { serviceHi: 'पैन कार्ड (PAN Card UTI/NSDL)', note: 'नया / सुधार + e-PAN + प्लास्टिक कार्ड', fee: '₹150' },
    { serviceHi: 'वोटर कार्ड (Voter ID Form 6/8)', note: 'नया आवेदन / नाम सुधार + e-EPIC', fee: '₹50 - ₹70' },
    { serviceHi: 'RTPS आय/जाति/निवास प्रमाण पत्र', note: 'CO / SDO स्तर ऑनलाइन आवेदन + प्रिंट', fee: '₹50' },
    { serviceHi: 'बिहार भूमि खतियान / जमाबंदी पंजी', note: 'डिजिटल रिकॉर्ड खोज व प्रिंट', fee: '₹30 - ₹50' },
    { serviceHi: 'सरकारी नौकरी भर्ती फॉर्म (BPSC/SSC/Police)', note: 'त्रुटिरहित आवेदन + चालान + प्रिंट', fee: '₹70 - ₹100' },
    { serviceHi: 'स्कॉलरशिप फॉर्म (PMS Bihar / NSP)', note: 'दस्तावेज अपलोड + बोनाफाइड वेरिफिकेशन', fee: '₹70 - ₹100' },
    { serviceHi: 'रेलवे (IRCTC) कन्फर्म टिकट बुकिंग', note: 'स्लीपर / एसी कोच अधिकृत सेवा शुल्क', fee: '₹30 - ₹50' },
    { serviceHi: 'AEPS नकद निकासी / बैलेंस इन्क्वायरी', note: 'आधार कार्ड फिंगरप्रिंट से पैसा निकालना', fee: 'न्यूनतम नियमानुसार' }
  ];

  return (
    <section id="rate-list" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
            {lang === 'hi' ? 'पारदर्शी व उचित दर' : 'Transparent Pricing'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'साइबर कैफे एवं ऑनलाइन सेवा शुल्क दर सूची' : 'Service Rate Card & Pricing'}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {lang === 'hi'
              ? 'सुधीर ऑनलाइन सर्विस सेंटर भदवार में सभी काम तय और उचित दरों पर बिना किसी अतिरिक्त छिपे शुल्क के किए जाते हैं।'
              : 'Official rates for printing, photocopy, computer typing, and government application filing assistance.'}
          </p>
        </div>

        {/* 2 Table Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Table 1: Cafe & Printing Rates */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  {lang === 'hi' ? 'फोटोकॉपी, प्रिंट व लेमिनेशन दरें' : 'Photocopy, Print & Lamination'}
                </h3>
              </div>
              <span className="text-[11px] text-slate-300 font-mono">Cyber Cafe Desk</span>
            </div>

            <div className="divide-y divide-slate-100">
              {cafeRates.map((rate, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">{rate.itemHi}</div>
                    <div className="text-[11px] text-slate-500">{rate.spec}</div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono bg-slate-100 px-2.5 py-1 rounded">
                    {rate.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table 2: Govt Form & Online Services */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-blue-950 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  {lang === 'hi' ? 'सरकारी फॉर्म व ऑनलाइन सेवा शुल्क' : 'Online Govt Application Assistance'}
                </h3>
              </div>
              <span className="text-[11px] text-slate-300 font-mono">ServicePlus Desk</span>
            </div>

            <div className="divide-y divide-slate-100">
              {govtServiceRates.map((rate, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">{rate.serviceHi}</div>
                    <div className="text-[11px] text-slate-500">{rate.note}</div>
                  </div>
                  <div className="text-sm font-bold text-blue-900 font-mono bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                    {rate.fee}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Assurance Note */}
        <div className="mt-8 bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-900">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <p>
            {lang === 'hi'
              ? 'नोट: सरकारी चालान अथवा परीक्षा शुल्क (जैसे BPSC/SSC की परीक्षा फीस) संबंधित आयोग के नियमानुसार अलग से देय होगी। सेवा केंद्र पर केवल सहायता व प्रोसेसिंग शुल्क लिया जाता है।'
              : 'Note: Official government exam application fees/challans are payable as per board rules. Only standard kiosk processing charges are levied.'}
          </p>
        </div>

      </div>
    </section>
  );
};
