import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, ArrowRight, MessageCircle, FileText, Check } from 'lucide-react';
import { ApplicationRecord, CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface StatusTrackerProps {
  applications: ApplicationRecord[];
  lang: 'hi' | 'en';
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({ applications, lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedRecord, setSearchedRecord] = useState<ApplicationRecord | null>(applications[0] || null);
  const [hasSearched, setHasSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (queryToUse?: string) => {
    const q = (queryToUse !== undefined ? queryToUse : searchQuery).trim().toLowerCase();
    if (!q) return;

    setHasSearched(true);
    const found = applications.find(
      (app) =>
        app.id.toLowerCase() === q ||
        app.mobile.replace(/[^0-9]/g, '').includes(q.replace(/[^0-9]/g, ''))
    );

    if (found) {
      setSearchedRecord(found);
      setNotFound(false);
    } else {
      setSearchedRecord(null);
      setNotFound(true);
    }
  };

  const statusSteps = [
    { key: 'received', labelHi: '1. आवेदन प्राप्त', labelEn: '1. Received' },
    { key: 'verified', labelHi: '2. दस्तावेज़ सत्यापित', labelEn: '2. Verified' },
    { key: 'portal_submitted', labelHi: '3. पोर्टल पर दर्ज', labelEn: '3. Submitted' },
    { key: 'ready', labelHi: '4. कार्ड/प्रमाण पत्र तैयार', labelEn: '4. Ready' },
    { key: 'delivered', labelHi: '5. केंद्र से प्राप्त', labelEn: '5. Delivered' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'received': return 0;
      case 'verified': return 1;
      case 'portal_submitted': return 2;
      case 'ready': return 3;
      case 'delivered': return 4;
      default: return 0;
    }
  };

  const currentStepIdx = searchedRecord ? getStepIndex(searchedRecord.status) : 0;

  const whatsappInquiryUrl = searchedRecord
    ? generateWhatsAppLink({
        phone: CAFE_INFO.phone,
        tokenId: searchedRecord.id,
        name: searchedRecord.customerName,
        service: searchedRecord.serviceNameHi
      })
    : '';

  return (
    <section id="track" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            {lang === 'hi' ? 'लाइव स्टेटस ट्रैकिंग' : 'Real-time Tracking'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {lang === 'hi' ? 'अपने आवेदन की स्थिति जांचें' : 'Track Your Application Status'}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {lang === 'hi'
              ? 'अपनी टोकन संख्या (जैसे SOSC-2026-1042) या पंजीकृत मोबाइल नंबर डालकर प्रगति देखें।'
              : 'Enter your Token ID or registered mobile number to check the current stage of your document.'}
          </p>
        </div>

        {/* Search Bar & Demo Test Chips */}
        <div className="max-w-2xl mb-8 space-y-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'hi'
                    ? 'टोकन संख्या (SOSC-2026-...) या मोबाइल नंबर लिखें'
                    : 'Enter Token ID or Mobile number'
                }
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {lang === 'hi' ? 'स्थिति जांचें' : 'Track Now'}
            </button>
          </form>

          {/* Clean demo tokens for instant testing */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span>{lang === 'hi' ? 'परीक्षण हेतु उदाहरण टोकन:' : 'Demo Tokens:'}</span>
            {applications.slice(0, 3).map((app) => (
              <button
                key={app.id}
                type="button"
                onClick={() => {
                  setSearchQuery(app.id);
                  handleSearch(app.id);
                }}
                className="font-mono text-amber-300 hover:text-amber-200 underline underline-offset-2 cursor-pointer"
              >
                {app.id}
              </button>
            ))}
          </div>
        </div>

        {/* Not Found State */}
        {notFound && (
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center max-w-lg mb-8">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm">
              {lang === 'hi' ? 'इस नंबर का कोई आवेदन नहीं मिला' : 'No application found'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'hi'
                ? 'कृपया टोकन संख्या की जांच करें अथवा सीधे सुधीर जी से संपर्क करें।'
                : 'Please verify the token number or contact Sudhir Kumar directly.'}
            </p>
          </div>
        )}

        {/* Found Record Tracker Card */}
        {searchedRecord && (
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-4xl shadow-xl">
            {/* Top Info Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {searchedRecord.id}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">PIN: {searchedRecord.tokenPin}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {searchedRecord.serviceNameHi}
                </h3>
                <div className="text-xs text-slate-300 mt-0.5">
                  {searchedRecord.customerName} • {searchedRecord.village}
                </div>
              </div>

              <div className="sm:text-right font-mono text-xs text-slate-400 space-y-1">
                <div>
                  {lang === 'hi' ? 'आवेदन तिथि:' : 'Applied Date:'}{' '}
                  <span className="text-white font-semibold">{searchedRecord.createdAt}</span>
                </div>
                <div>
                  {lang === 'hi' ? 'अनुमानित पूर्णता:' : 'Est. Delivery:'}{' '}
                  <span className="text-emerald-400 font-semibold">{searchedRecord.estimatedDelivery}</span>
                </div>
              </div>
            </div>

            {/* Visual Progress Stepper (5 Steps) */}
            <div className="py-8">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
                {statusSteps.map((step, idx) => {
                  const isDone = idx < currentStepIdx;
                  const isCurrent = idx === currentStepIdx;

                  return (
                    <div key={step.key} className="flex flex-col items-center text-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-2 transition-all ${
                          isDone
                            ? 'bg-emerald-500 text-slate-950'
                            : isCurrent
                            ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/20'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {isDone ? <Check className="w-5 h-5 stroke-[3]" /> : idx + 1}
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          isCurrent
                            ? 'text-amber-400'
                            : isDone
                            ? 'text-emerald-300'
                            : 'text-slate-500'
                        }`}
                      >
                        {lang === 'hi' ? step.labelHi : step.labelEn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Status Note Box */}
            <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] uppercase font-bold text-slate-400">
                  {lang === 'hi' ? 'वर्तमान स्थिति व टिप्पणी:' : 'Current Update:'}
                </div>
                <div className="text-sm font-medium text-amber-200">
                  {searchedRecord.statusNoteHi}
                </div>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'hi' ? 'सुधीर जी से पूछें' : 'Ask on WhatsApp'}</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
