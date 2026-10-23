import React, { useState, useMemo } from 'react';
import {
  Search,
  Fingerprint,
  CreditCard,
  Vote,
  Car,
  FileBadge,
  Layers,
  FileSpreadsheet,
  Award,
  Home,
  CalendarHeart,
  UserCheck,
  ShieldCheck,
  MapPin,
  Receipt,
  GraduationCap,
  BookOpen,
  FileCheck,
  Landmark,
  Send,
  Wallet,
  Train,
  Zap,
  Printer,
  Keyboard,
  ScanLine,
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { ServiceItem, SERVICES_DATA } from '../data/servicesData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesCatalogProps {
  lang: 'hi' | 'en';
  onSelectForApply: (service: ServiceItem) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  lang,
  onSelectForApply
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', labelHi: 'सभी सेवाएं (24)', labelEn: 'All Services (24)' },
    { id: 'identity', labelHi: 'पहचान व कार्ड (Aadhaar/PAN/Voter)', labelEn: 'Cards & Identity' },
    { id: 'certificates', labelHi: 'प्रमाण पत्र (RTPS Bihar)', labelEn: 'Certificates (RTPS)' },
    { id: 'land', labelHi: 'भूमि रिकॉर्ड (खतियान/रसीद)', labelEn: 'Land Records' },
    { id: 'education', labelHi: 'सरकारी नौकरी व छात्रवृत्ति', labelEn: 'Govt Jobs & Forms' },
    { id: 'banking', labelHi: 'AEPS बैंकिंग व टिकट', labelEn: 'Banking & Travel' },
    { id: 'cafe', labelHi: 'साइबर कैफे व प्रिंट', labelEn: 'Cafe & Print Desk' }
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.nameHi.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.taglineHi.toLowerCase().includes(q) ||
        item.descriptionHi.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Fingerprint': return <Fingerprint {...props} className="w-6 h-6 text-orange-600" />;
      case 'CreditCard': return <CreditCard {...props} className="w-6 h-6 text-blue-600" />;
      case 'Vote': return <Vote {...props} className="w-6 h-6 text-emerald-600" />;
      case 'Car': return <Car {...props} className="w-6 h-6 text-indigo-600" />;
      case 'FileBadge': return <FileBadge {...props} className="w-6 h-6 text-purple-600" />;
      case 'Layers': return <Layers {...props} className="w-6 h-6 text-amber-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} className="w-6 h-6 text-emerald-700" />;
      case 'Award': return <Award {...props} className="w-6 h-6 text-cyan-600" />;
      case 'Home': return <Home {...props} className="w-6 h-6 text-blue-700" />;
      case 'CalendarHeart': return <CalendarHeart {...props} className="w-6 h-6 text-rose-600" />;
      case 'UserCheck': return <UserCheck {...props} className="w-6 h-6 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck {...props} className="w-6 h-6 text-emerald-600" />;
      case 'MapPin': return <MapPin {...props} className="w-6 h-6 text-red-600" />;
      case 'Receipt': return <Receipt {...props} className="w-6 h-6 text-amber-700" />;
      case 'GraduationCap': return <GraduationCap {...props} className="w-6 h-6 text-blue-600" />;
      case 'BookOpen': return <BookOpen {...props} className="w-6 h-6 text-violet-600" />;
      case 'FileCheck': return <FileCheck {...props} className="w-6 h-6 text-teal-600" />;
      case 'Landmark': return <Landmark {...props} className="w-6 h-6 text-amber-600" />;
      case 'Send': return <Send {...props} className="w-6 h-6 text-emerald-600" />;
      case 'Wallet': return <Wallet {...props} className="w-6 h-6 text-blue-600" />;
      case 'Train': return <Train {...props} className="w-6 h-6 text-red-600" />;
      case 'Zap': return <Zap {...props} className="w-6 h-6 text-amber-500" />;
      case 'Printer': return <Printer {...props} className="w-6 h-6 text-slate-700" />;
      case 'Keyboard': return <Keyboard {...props} className="w-6 h-6 text-slate-700" />;
      case 'ScanLine': return <ScanLine {...props} className="w-6 h-6 text-slate-700" />;
      default: return <FileCheck {...props} className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
            {lang === 'hi' ? 'Cyber Cafe में जो-जो काम होता है' : 'Comprehensive Digital Services'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'हमारी प्रमुख ऑनलाइन एवं सरकारी सेवाएं' : 'Government & Cyber Cafe Service Directory'}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {lang === 'hi'
              ? 'किसी भी सेवा का विवरण, जरूरी कागजात (दस्तावेज) और शुल्क जानने के लिए कार्ड पर क्लिक करें अथवा तुरंत आवेदन करें।'
              : 'Click any service to view required documents, turnaround times, and submit an online application or inquiry.'}
          </p>
        </div>

        {/* Search Bar & Category Navigation Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'सेवा खोजें: पैन, आधार, वोटर, जाति, खतियान, पेंशन, प्रिंट...'
                  : 'Search services: PAN, Aadhaar, Voter, Land Records, RTPS...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Functional Category Filter Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  {lang === 'hi' ? cat.labelHi : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter - Clean unboxed text metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <span>{lang === 'hi' ? 'कुल उपलब्ध सेवाएं' : 'Services found'}: {filteredServices.length}</span>
          <span aria-hidden="true">·</span>
          <span>भदवार (बक्सर) केंद्र</span>
        </div>

        {/* Services Grid (Clean Cards adhering to 60-30-10 & Anti-Slop) */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">
              {lang === 'hi' ? 'कोई सेवा नहीं मिली' : 'No services found'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {lang === 'hi'
                ? 'कृपया दूसरा शब्द खोजें अथवा सीधे सुधीर जी से संपर्क करें।'
                : 'Please try a different search keyword or contact Sudhir Kumar directly.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-medium text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'hi' ? 'सभी सेवाएं पुनः देखें' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-300 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Icon & Popular Tag */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-blue-50/60 transition-colors">
                      {renderIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {lang === 'hi' ? 'लोकप्रिय सेवा' : 'Popular'}
                      </span>
                    )}
                  </div>

                  {/* Card Titles */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {lang === 'hi' ? service.nameHi : service.nameEn}
                  </h3>
                  <div className="text-xs font-medium text-blue-700 mt-0.5">
                    {service.taglineHi}
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {lang === 'hi' ? service.descriptionHi : service.descriptionEn}
                  </p>
                </div>

                {/* Card Footer: Metadata & Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{service.estimatedTime}</span>
                    </span>
                    <span className="font-semibold text-slate-800">
                      {service.serviceFee}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lang === 'hi' ? 'दस्तावेज देखें' : 'Checklist'}</span>
                    </button>

                    <button
                      onClick={() => onSelectForApply(service)}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-2xs cursor-pointer"
                    >
                      <span>{lang === 'hi' ? 'आवेदन करें' : 'Apply'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForApply={onSelectForApply}
        lang={lang}
      />
    </section>
  );
};
