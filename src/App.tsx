import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GovtLogosBar } from './components/GovtLogosBar';
import { ServicesCatalog } from './components/ServicesCatalog';
import { VoterAndPanHub } from './components/VoterAndPanHub';
import { OnlineApplicationForm } from './components/OnlineApplicationForm';
import { StatusTracker } from './components/StatusTracker';
import { RateList } from './components/RateList';
import { ContactAndLocation } from './components/ContactAndLocation';
import { OriginalPosterModal } from './components/OriginalPosterModal';
import { Footer } from './components/Footer';
import {
  INITIAL_APPLICATIONS,
  ApplicationRecord,
  ServiceItem,
  CAFE_INFO
} from './data/servicesData';
import { generateWhatsAppLink } from './utils/whatsapp';
import { Phone, MessageCircle, FilePlus2 } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedServiceForApply, setSelectedServiceForApply] = useState<ServiceItem | null>(null);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  // Load saved applications or default initial applications
  const [applications, setApplications] = useState<ApplicationRecord[]>(() => {
    try {
      const saved = localStorage.getItem('sosc_applications');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_APPLICATIONS;
  });

  const handleApplicationCreated = (newApp: ApplicationRecord) => {
    const updated = [newApp, ...applications];
    setApplications(updated);
    try {
      localStorage.setItem('sosc_applications', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleOpenApplyModal = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceForApply(service);
    }
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedServiceForApply(null);
  };

  const whatsappDirectUrl = generateWhatsAppLink({ phone: CAFE_INFO.phone });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenApplyModal={() => handleOpenApplyModal()}
        onOpenPosterModal={() => setIsPosterModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenApplyModal={() => handleOpenApplyModal()}
          onOpenPosterModal={() => setIsPosterModalOpen(true)}
        />

        {/* Government Portals & Partner Logos Bar */}
        <GovtLogosBar lang={lang} />

        {/* Voter ID & PAN Express Desk (Dedicated spotlight from poster) */}
        <VoterAndPanHub
          lang={lang}
          onSelectForApply={(srv) => handleOpenApplyModal(srv)}
        />

        {/* Complete 24 Services Directory with Live Search & Category Filter */}
        <ServicesCatalog
          lang={lang}
          onSelectForApply={(srv) => handleOpenApplyModal(srv)}
        />

        {/* Real-time Status Tracker */}
        <StatusTracker
          applications={applications}
          lang={lang}
        />

        {/* Rate List & Service Fees */}
        <RateList lang={lang} />

        {/* Contact, Center Location, Equipment & Proprietor */}
        <ContactAndLocation lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenApplyModal={() => handleOpenApplyModal()}
        onOpenPosterModal={() => setIsPosterModalOpen(true)}
      />

      {/* Online Application Modal Form with Instant Token & Receipt Slip */}
      <OnlineApplicationForm
        isOpen={isApplyModalOpen}
        onClose={handleCloseApplyModal}
        preSelectedService={selectedServiceForApply}
        onApplicationCreated={handleApplicationCreated}
        lang={lang}
      />

      {/* Original Banner High-Definition Modal */}
      <OriginalPosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
        lang={lang}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% mobile viewport cap) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 md:hidden shadow-lg">
        <a
          href={`tel:${CAFE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors font-mono"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>कॉल करें</span>
        </a>

        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>व्हाट्सएप</span>
        </a>

        <button
          onClick={() => handleOpenApplyModal()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
        >
          <FilePlus2 className="w-4 h-4" />
          <span>नया आवेदन</span>
        </button>
      </div>
    </div>
  );
}
