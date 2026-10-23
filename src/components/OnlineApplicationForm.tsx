import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Printer, MessageCircle, ArrowRight, ShieldCheck, FileText, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { ServiceItem, SERVICES_DATA, ApplicationRecord, CAFE_INFO } from '../data/servicesData';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface OnlineApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
  onApplicationCreated: (newApp: ApplicationRecord) => void;
  lang: 'hi' | 'en';
}

export const OnlineApplicationForm: React.FC<OnlineApplicationFormProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  onApplicationCreated,
  lang
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobile, setMobile] = useState('');
  const [village, setVillage] = useState('भदवार (Bhadwar)');
  const [selectedServiceId, setSelectedServiceId] = useState(preSelectedService?.id || SERVICES_DATA[0].id);
  const [subType, setSubType] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [submittedRecord, setSubmittedRecord] = useState<ApplicationRecord | null>(null);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!customerName.trim()) {
      newErrors.customerName = lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Name is required';
    }
    const cleanPhone = mobile.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.mobile = lang === 'hi' ? 'कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें' : 'Valid 10-digit mobile number required';
    }
    if (!village.trim()) {
      newErrors.village = lang === 'hi' ? 'कृपया गांव / टोला का नाम लिखें' : 'Village / Area is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `SOSC-2026-${randomSuffix}`;
    const pin = Math.floor(1000 + Math.random() * 9000).toString();

    const now = new Date();
    const estDate = new Date();
    estDate.setDate(now.getDate() + 7);

    const formattedCreatedAt = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
    const formattedDelivery = `${estDate.getDate()} ${estDate.toLocaleString('default', { month: 'short' })} ${estDate.getFullYear()}`;

    const newRecord: ApplicationRecord = {
      id: newId,
      customerName: customerName.trim(),
      mobile: mobile.trim(),
      village: village.trim(),
      serviceId: currentService.id,
      serviceNameHi: currentService.nameHi,
      subType: subType.trim() || currentService.taglineHi,
      status: 'received',
      statusNoteHi: 'ऑनलाइन आवेदन प्राप्त हुआ। कृपया आवश्यक कागजात सुधीर ऑनलाइन सेंटर पर लाएं या व्हाट्सएप पर भेजें।',
      createdAt: formattedCreatedAt,
      estimatedDelivery: formattedDelivery,
      tokenPin: pin
    };

    onApplicationCreated(newRecord);
    setSubmittedRecord(newRecord);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setCustomerName('');
    setMobile('');
    setSubType('');
    setNotes('');
    setErrors({});
    onClose();
  };

  const whatsappReceiptUrl = submittedRecord
    ? generateWhatsAppLink({
        phone: CAFE_INFO.phone,
        tokenId: submittedRecord.id,
        name: submittedRecord.customerName,
        service: submittedRecord.serviceNameHi
      })
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-xl w-full my-auto overflow-hidden animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
              {lang === 'hi' ? 'सुधीर ऑनलाइन सर्विस सेंटर' : 'Sudhir Online Service Center'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              {submittedRecord
                ? lang === 'hi' ? 'आवेदन पावती / रसीद' : 'Application Slip Generated'
                : lang === 'hi' ? 'नया ऑनलाइन आवेदन फॉर्म' : 'Online Service Request Form'}
            </h3>
          </div>
          <button
            onClick={handleResetForm}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View: When Submitted (Receipt Slip) */}
        {submittedRecord ? (
          <div className="p-5 sm:p-6 space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  {lang === 'hi' ? 'आवेदन सफलतापूर्वक दर्ज हो गया !' : 'Application Successfully Received!'}
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  {lang === 'hi'
                    ? 'आपकी टोकन पर्ची तैयार है। नीचे दिए गए टोकन नंबर से आप कभी भी स्थिति देख सकते हैं।'
                    : 'Your tracking slip has been generated. Use this Token ID to check real-time status.'}
                </p>
              </div>
            </div>

            {/* Printable Digital Receipt Card */}
            <div
              id="printable-slip"
              className="bg-white rounded-lg border-2 border-dashed border-slate-300 p-5 space-y-4 font-sans text-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <div className="font-extrabold text-sm text-slate-900">
                    {CAFE_INFO.centerNameHi}
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    {CAFE_INFO.addressHi} • फोन: {CAFE_INFO.phone}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">
                    DIGITAL RECEIPT
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-slate-700">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">टोकन संख्या (Token ID)</span>
                  <span className="text-sm font-bold text-blue-900 font-mono">{submittedRecord.id}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">आवेदन दिनांक (Date)</span>
                  <span className="font-semibold text-slate-800 font-mono">{submittedRecord.createdAt}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">आवेदक का नाम (Name)</span>
                  <span className="font-semibold text-slate-900">{submittedRecord.customerName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">मोबाइल (Mobile)</span>
                  <span className="font-semibold text-slate-900 font-mono">{submittedRecord.mobile}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">गांव / पता (Village)</span>
                  <span className="font-semibold text-slate-800">{submittedRecord.village}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">अनुमानित पूर्णता (Est. Date)</span>
                  <span className="font-semibold text-emerald-700 font-mono">{submittedRecord.estimatedDelivery}</span>
                </div>
                <div className="col-span-2 bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">आवेदित सेवा (Service)</span>
                  <span className="font-bold text-slate-900 text-xs">{submittedRecord.serviceNameHi}</span>
                  {submittedRecord.subType && (
                    <span className="text-slate-500 block text-[11px] mt-0.5">{submittedRecord.subType}</span>
                  )}
                </div>
              </div>

              {/* Unique QR Code for Shop Scanning */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-4 bg-slate-50/80 p-3 rounded-lg border border-slate-200/60">
                <div className="bg-white p-2 rounded shadow-2xs border border-slate-200 shrink-0">
                  <QRCodeSVG value={submittedRecord.id} size={72} level="M" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <QrCode className="w-3.5 h-3.5 text-blue-800" />
                    <span>{lang === 'hi' ? 'दुकान पर स्कैन करने हेतु QR कोड' : 'Shop Scan QR Code'}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    {lang === 'hi'
                      ? 'सुधीर ऑनलाइन सेंटर पर इस QR कोड को स्कैन करके अपनी स्थिति तुरंत जांचें।'
                      : 'Scan this QR code at Sudhir Online Center for quick status check.'}
                  </p>
                  <div className="font-mono text-xs font-bold text-blue-900">
                    Token: {submittedRecord.id}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span>प्रोपराइटर: सुधीर कुमार</span>
                <span className="font-mono text-slate-400">Security PIN: {submittedRecord.tokenPin}</span>
              </div>
            </div>

            {/* Action Buttons for the Receipt */}
            <div className="space-y-2 pt-2">
              <a
                href={whatsappReceiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>
                  {lang === 'hi'
                    ? 'सुधीर जी को व्हाट्सएप पर रसीद भेजें (WhatsApp Now)'
                    : 'Send Token Receipt to Sudhir Kumar on WhatsApp'}
                </span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>{lang === 'hi' ? 'रसीद प्रिंट करें' : 'Print Slip'}</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{lang === 'hi' ? 'संपन्न / बंद करें' : 'Done & Close'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div className="text-xs text-slate-500 bg-blue-50/80 border border-blue-200/80 p-3 rounded-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'यह फॉर्म भरते ही आपकी टोकन पर्ची बन जाएगी और आप सीधे व्हाट्सएप पर बात कर सकेंगे।'
                  : 'Submit your request to generate an official token slip and connect via WhatsApp.'}
              </span>
            </div>

            {/* Service Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'सेवा का चयन करें (Select Service) *' : 'Service *'}
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.nameHi} ({srv.category.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'आपका पूरा नाम (Applicant Full Name) *' : 'Full Name *'}
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (errors.customerName) setErrors({ ...errors, customerName: '' });
                }}
                placeholder={lang === 'hi' ? 'उदा. राजेश कुमार सिंह' : 'e.g. Rajesh Kumar Singh'}
                className={`w-full px-3 py-2 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                  errors.customerName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                }`}
              />
              {errors.customerName && (
                <span className="text-[11px] text-red-600 mt-1 block font-medium">
                  {errors.customerName}
                </span>
              )}
            </div>

            {/* Mobile & Village row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'मोबाइल नंबर (Mobile) *' : 'Mobile *'}
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value.replace(/[^0-9]/g, ''));
                    if (errors.mobile) setErrors({ ...errors, mobile: '' });
                  }}
                  placeholder="10 अंकों का नंबर"
                  className={`w-full px-3 py-2 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 font-mono focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.mobile ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.mobile && (
                  <span className="text-[11px] text-red-600 mt-1 block font-medium">
                    {errors.mobile}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'गांव / टोला (Village) *' : 'Village / Area *'}
                </label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => {
                    setVillage(e.target.value);
                    if (errors.village) setErrors({ ...errors, village: '' });
                  }}
                  placeholder={lang === 'hi' ? 'उदा. भदवार / उत्तर टोला' : 'e.g. Bhadwar / Uttar Tola'}
                  className={`w-full px-3 py-2 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.village ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.village && (
                  <span className="text-[11px] text-red-600 mt-1 block font-medium">
                    {errors.village}
                  </span>
                )}
              </div>
            </div>

            {/* Specific Requirement Subtype */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'आवश्यकता विवरण (जैसे: नया बनवाना, सुधार या डाउनलोड)' : 'Specific Requirement'}
              </label>
              <input
                type="text"
                value={subType}
                onChange={(e) => setSubType(e.target.value)}
                placeholder={lang === 'hi' ? 'उदा. नाम सुधारना है / नया कार्ड बनवाना है' : 'e.g. Correction / New Application'}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'कोई अतिरिक्त टिप्पणी (Optional Notes)' : 'Notes'}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={lang === 'hi' ? 'कोई विशेष बात जो आप बताना चाहें...' : 'Any details...'}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>{lang === 'hi' ? 'टोकन पर्ची बनाएं व सबमिट करें' : 'Generate Token Slip & Submit'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
