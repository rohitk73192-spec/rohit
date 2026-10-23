import React from 'react';

interface GovtLogosBarProps {
  lang: 'hi' | 'en';
}

export const GovtLogosBar: React.FC<GovtLogosBarProps> = ({ lang }) => {
  const logos = [
    { name: 'AADHAAR', sub: 'UIDAI', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' },
    { name: 'PAN CARD', sub: 'Income Tax', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    { name: 'VOTER ID', sub: 'ECI Portal', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'DRIVING LICENCE', sub: 'Parivahan', color: 'text-cyan-700', bg: 'bg-cyan-50 border-cyan-200' },
    { name: 'PASSPORT', sub: 'Govt of India', color: 'text-indigo-700', bg: 'bg-indigo-50 border-indigo-200' },
    { name: 'IRCTC', sub: 'Indian Railways', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
    { name: 'UPI / BHIM', sub: 'NPCI Digital', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'AEPS', sub: 'Aadhaar ATM', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
    { name: 'E-SHRAM', sub: 'Labour Dept', color: 'text-teal-700', bg: 'bg-teal-50 border-teal-200' },
    { name: 'RTPS BIHAR', sub: 'ServicePlus', color: 'text-purple-700', bg: 'bg-purple-50 border-purple-200' },
    { name: 'BIHAR BHUMI', sub: 'Land Records', color: 'text-amber-800', bg: 'bg-amber-50 border-amber-200' }
  ];

  return (
    <div className="bg-slate-100 border-b border-slate-200 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
            <span>
              {lang === 'hi'
                ? 'अधिकृत सरकारी एवं डिजिटल सेवाएं'
                : 'Authorized Government & Banking Portals'}
            </span>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            {lang === 'hi'
              ? 'डिजिटल इंडिया • बिहार सरकार • भारत सरकार अधिकृत'
              : 'Digital India • Govt of Bihar • Govt of India Portals'}
          </div>
        </div>

        {/* Scrollable / wrap list of official portals */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-md border ${logo.bg} shrink-0 whitespace-nowrap shadow-2xs hover:shadow-xs transition-shadow`}
            >
              <span className={`font-bold tracking-tight ${logo.color}`}>{logo.name}</span>
              <span className="text-[10px] text-slate-500">{logo.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
