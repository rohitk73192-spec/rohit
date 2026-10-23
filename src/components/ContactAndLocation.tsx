import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Printer, ShieldCheck, Send, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ContactAndLocationProps {
  lang: 'hi' | 'en';
}

export const ContactAndLocation: React.FC<ContactAndLocationProps> = ({ lang }) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickMsg.trim()) return;

    const fullMsg = `नमस्ते सुधीर जी,\nमेरा नाम ${quickName} है (फोन: ${quickPhone || 'Not provided'}).\n\nसंदेश: ${quickMsg}`;
    const url = generateWhatsAppLink({
      phone: CAFE_INFO.phone,
      message: fullMsg
    });

    setSentSuccess(true);
    window.open(url, '_blank');
  };

  const directWhatsAppUrl = generateWhatsAppLink({ phone: CAFE_INFO.phone });

  return (
    <section id="contact" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            {lang === 'hi' ? 'सीधा संपर्क एवं पता' : 'Direct Contact & Center Location'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi'
              ? 'सुधीर ऑनलाइन सर्विस सेंटर पर पधारें'
              : 'Visit Sudhir Online Service Center'}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {lang === 'hi'
              ? 'ग्राम भदवार व आस-पास के सभी ग्रामीण भाई-बहनों का हार्दिक स्वागत है। किसी भी ऑनलाइन कार्य या पूछताछ के लिए सीधे कॉल या व्हाट्सएप करें।'
              : 'Warm welcome to residents of Bhadwar and surrounding villages. Contact Sudhir Kumar directly for any assistance.'}
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Direct Center Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
              
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {lang === 'hi' ? 'प्रोपराइटर' : 'Proprietor'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-0.5">
                  {CAFE_INFO.proprietorHi}
                </h3>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {lang === 'hi' ? 'मोटरसाइकिल संख्या:' : 'Motorcycle:'} {CAFE_INFO.bikeNumber}
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    {lang === 'hi' ? 'केंद्र का पता (Center Address)' : 'Address'}
                  </div>
                  <div className="text-sm font-semibold text-slate-100 mt-0.5">
                    {CAFE_INFO.addressHi}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    पिन कोड: <span className="font-mono text-amber-300">{CAFE_INFO.pincode}</span> • बक्सर, बिहार
                  </div>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    {lang === 'hi' ? 'मोबाइल नंबर (Mobile / Call)' : 'Mobile / Call'}
                  </div>
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-amber-400 font-mono transition-colors block mt-0.5"
                  >
                    +91 {CAFE_INFO.phone}
                  </a>
                  <div className="text-xs text-emerald-400 mt-0.5">
                    {lang === 'hi' ? 'कॉल एवं व्हाट्सएप दोनों उपलब्ध' : 'Call & WhatsApp Available'}
                  </div>
                </div>
              </div>

              {/* Timings item */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    {lang === 'hi' ? 'खुलने का समय (Timings)' : 'Center Timings'}
                  </div>
                  <div className="text-sm font-semibold text-slate-100 mt-0.5">
                    {CAFE_INFO.timingsHi}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'hi' ? 'सप्ताह के सातों दिन खुला (Open 7 Days)' : 'Open All 7 Days'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
                </a>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Col 2: Center Equipment & Assurance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Printer className="w-5 h-5 text-blue-900" />
                  <h4 className="font-bold text-sm text-slate-900">
                    {lang === 'hi' ? 'सेंटर पर उपलब्ध मशीनें' : 'Hardware & Setup'}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  {lang === 'hi'
                    ? 'आधुनिक उपकरणों से सुसज्जित साइबर कैफे सेटअप'
                    : 'Modern computing, printing, and AEPS hardware.'}
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {CAFE_INFO.equipmentListHi.map((eq, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UPI QR Payment hint */}
              <div className="mt-6 pt-4 border-t border-slate-200 bg-white p-3.5 rounded-xl border border-slate-200/60">
                <div className="text-[11px] font-bold text-slate-800 uppercase mb-1">
                  {lang === 'hi' ? 'ऑनलाइन भुगतान (UPI Pay)' : 'Online Payment'}
                </div>
                <div className="text-xs text-slate-600">
                  Google Pay, PhonePe, Paytm द्वारा नकद या ऑनलाइन भुगतान स्वीकार्य है।
                </div>
                <div className="text-xs font-mono font-bold text-blue-900 mt-1">
                  UPI: 8252144645@upi
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Quick Message to Sudhir Kumar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-base text-slate-900">
                  {lang === 'hi' ? 'सुधीर जी को सीधा संदेश भेजें' : 'Direct Message'}
                </h4>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                {lang === 'hi'
                  ? 'अपना सवाल या दस्तावेज विवरण लिखें, यह सीधे सुधीर जी के व्हाट्सएप पर भेजा जाएगा।'
                  : 'Write your query to forward directly to Sudhir Kumar on WhatsApp.'}
              </p>

              <form onSubmit={handleSendInquiry} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {lang === 'hi' ? 'आपका नाम (Your Name) *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="उदा. राहुल कुमार"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर (Phone)' : 'Mobile'}
                  </label>
                  <input
                    type="tel"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 font-mono focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    {lang === 'hi' ? 'क्या काम करवाना है? (Query / Service) *' : 'Message *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    placeholder="उदा. मुझे पैन कार्ड में सुधार करवाना है..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर भेजें' : 'Send via WhatsApp'}</span>
                </button>
              </form>

              {sentSuccess && (
                <div className="mt-3 p-2 bg-emerald-50 text-emerald-800 text-xs rounded border border-emerald-200 text-center font-medium">
                  {lang === 'hi' ? 'संदेश व्हाट्सएप में खुल गया है!' : 'WhatsApp opened with pre-filled message!'}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
