export interface ServiceItem {
  id: string;
  category: 'identity' | 'certificates' | 'land' | 'education' | 'banking' | 'cafe';
  nameHi: string;
  nameEn: string;
  taglineHi: string;
  descriptionHi: string;
  descriptionEn: string;
  estimatedTime: string;
  serviceFee: string;
  iconName: string;
  requiredDocsHi: string[];
  requiredDocsEn: string[];
  popular?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Identity & Cards
  {
    id: 'aadhaar-card',
    category: 'identity',
    nameHi: 'आधार कार्ड सेवा',
    nameEn: 'Aadhaar Card Services',
    taglineHi: 'बनवाना / सुधारना / बायोमेट्रिक अपडेट',
    descriptionHi: 'नया आधार कार्ड नामांकन, नाम, पता, जन्मतिथि सुधार, मोबाइल नंबर एवं बायोमेट्रिक अपडेट और ई-आधार डाउनलोड प्रिंट।',
    descriptionEn: 'New Aadhaar enrollment, address/name correction, mobile number update, and official PVC/paper print.',
    estimatedTime: '3-7 दिन (Days)',
    serviceFee: '₹50 - ₹100',
    iconName: 'Fingerprint',
    popular: true,
    requiredDocsHi: ['पहचान पत्र (वोटर आईडी/मार्कशीट/पैन)', 'पते का प्रमाण (राशन कार्ड/बिजली बिल)', 'पुराना आधार (सुधार हेतु)'],
    requiredDocsEn: ['Identity Proof (Voter ID/Marksheet/PAN)', 'Address Proof (Ration Card/Electricity Bill)', 'Old Aadhaar (for correction)']
  },
  {
    id: 'pan-card',
    category: 'identity',
    nameHi: 'पैन कार्ड (PAN Card)',
    nameEn: 'PAN Card Services',
    taglineHi: 'नया बनाना एवं सुधारने की सेवा',
    descriptionHi: 'नया पैन कार्ड मात्र 3 दिन में ई-पैन एवं 7-10 दिन में घर पर प्लास्टिक कार्ड। फोटो/हस्ताक्षर, पिता का नाम सुधार व आधार लिंक।',
    descriptionEn: 'New instant e-PAN within 3 days & physical card at home. Name, photo, DOB correction and Aadhaar linking.',
    estimatedTime: '3 - 10 दिन (Days)',
    serviceFee: '₹120 - ₹150',
    iconName: 'CreditCard',
    popular: true,
    requiredDocsHi: ['आधार कार्ड (Aadhaar Card)', '2 पासपोर्ट साइज फोटो', 'सक्रिय मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', '2 Passport Photos', 'Active Mobile Number']
  },
  {
    id: 'voter-id',
    category: 'identity',
    nameHi: 'वोटर कार्ड (Voter ID)',
    nameEn: 'Voter ID Services',
    taglineHi: 'नया पहचान पत्र / सुधार / e-EPIC',
    descriptionHi: 'नया वोटर लिस्ट में नाम जोड़ना (फॉर्म 6), नाम/पता/उम्र सुधार (फॉर्म 8), नया डिजिटल e-EPIC कार्ड डाउनलोड व पीवीसी प्रिंट।',
    descriptionEn: 'New voter registration (Form 6), correction in name/address/age (Form 8), and instant digital e-EPIC download.',
    estimatedTime: '7 - 15 दिन (Days)',
    serviceFee: '₹50 - ₹80',
    iconName: 'Vote',
    popular: true,
    requiredDocsHi: ['आधार कार्ड या 10वीं मार्कशीट', '1 पासपोर्ट फोटो', 'परिवार के किसी सदस्य का वोटर नंबर'],
    requiredDocsEn: ['Aadhaar or 10th Certificate', '1 Passport Photo', 'Family Member EPIC No.']
  },
  {
    id: 'driving-licence',
    category: 'identity',
    nameHi: 'ड्राइविंग लाइसेंस (DL)',
    nameEn: 'Driving Licence Services',
    taglineHi: 'लर्निंग / पक्का लाइसेंस / नवीनीकरण',
    descriptionHi: 'लर्निंग लाइसेंस (LLR) ऑनलाइन टेस्ट आवेदन, पक्का ड्राइविंग लाइसेंस स्लॉट बुकिंग, एवं लाइसेंस नवीनीकरण / पता परिवर्तन।',
    descriptionEn: 'Learner licence application, driving test slot booking, permanent DL, and licence renewal / address change.',
    estimatedTime: 'तत्काल स्लॉट (Slot Booking)',
    serviceFee: 'सरकारी शुल्क + सेवा शुल्क',
    iconName: 'Car',
    requiredDocsHi: ['आधार कार्ड', '10वीं मार्कशीट या जन्म प्रमाण पत्र', 'ब्लड ग्रुप रिपोर्ट', 'पासपोर्ट फोटो'],
    requiredDocsEn: ['Aadhaar Card', '10th Marksheet or Birth Certificate', 'Blood Group Report', 'Passport Photo']
  },
  {
    id: 'passport',
    category: 'identity',
    nameHi: 'पासपोर्ट आवेदन (Passport)',
    nameEn: 'Passport Online Application',
    taglineHi: 'नया पासपोर्ट / अपॉइंटमेंट बुकिंग',
    descriptionHi: 'भारतीय पासपोर्ट सेवा पोर्टल पर नया साधारण / तत्काल पासपोर्ट फॉर्म भरना एवं पटना/वाराणसी पासपोर्ट सेवा केंद्र का स्लॉट बुक करना।',
    descriptionEn: 'Online passport form filling, payment and appointment slot booking for Patna / Varanasi PSK.',
    estimatedTime: 'अपॉइंटमेंट अनुसार',
    serviceFee: '₹200 (Form & Slot)',
    iconName: 'FileBadge',
    requiredDocsHi: ['आधार कार्ड', 'पैन कार्ड', '10वीं या उच्च शैक्षणिक मार्कशीट', 'बैंक पासबुक'],
    requiredDocsEn: ['Aadhaar Card', 'PAN Card', 'Educational Certificate', 'Bank Passbook']
  },
  {
    id: 'ration-card',
    category: 'identity',
    nameHi: 'राशन कार्ड (Ration Card)',
    nameEn: 'Ration Card Services',
    taglineHi: 'नया राशन कार्ड / सदस्य जोड़ना या हटाना',
    descriptionHi: 'बिहार खाद्य एवं उपभोक्ता संरक्षण विभाग पोर्टल पर नया राशन कार्ड आवेदन, नए सदस्य का नाम जोड़ना, एवं ई-राशन कार्ड प्रिंट।',
    descriptionEn: 'New ration card application (EPDS Bihar), adding new family member names, or downloading e-Ration card.',
    estimatedTime: '15 - 30 दिन (Days)',
    serviceFee: '₹100',
    iconName: 'Layers',
    requiredDocsHi: ['परिवार के सभी सदस्यों का आधार कार्ड', 'मुखिया महिला की फोटो व बैंक खाता', 'आय व आवासीय प्रमाण पत्र'],
    requiredDocsEn: ['Aadhaar cards of all members', 'Family head bank passbook & photo', 'Income & Residential Certificate']
  },

  // 2. Certificates & Schemes (RTPS Bihar)
  {
    id: 'income-cert',
    category: 'certificates',
    nameHi: 'आय प्रमाण पत्र (Income)',
    nameEn: 'Income Certificate (RTPS)',
    taglineHi: 'RTPS बिहार - आय प्रमाण पत्र बनवाना',
    descriptionHi: 'सरकारी नौकरी, छात्रवृत्ति और योजनाओं के लिए अंचल अधिकारी (CO) / अनुमंडल (SDO) स्तर का डिजिटल हस्ताक्षरित आय प्रमाण पत्र।',
    descriptionEn: 'Digital Income Certificate via RTPS Bihar portal for scholarships, college admissions, and welfare schemes.',
    estimatedTime: '10 - 14 कार्य दिवस',
    serviceFee: '₹50',
    iconName: 'FileSpreadsheet',
    popular: true,
    requiredDocsHi: ['आधार कार्ड', 'स्वघोषणा पत्र (हम भरेंगे)', 'मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', 'Self Declaration (filled at cafe)', 'Mobile Number']
  },
  {
    id: 'caste-cert',
    category: 'certificates',
    nameHi: 'जाति प्रमाण पत्र (Caste)',
    nameEn: 'Caste Certificate (RTPS)',
    taglineHi: 'RTPS बिहार - जाति प्रमाण पत्र बनवाना',
    descriptionHi: 'OBC (Non-Creamy Layer), SC, ST, EBC एवं EWS प्रमाण पत्र हेतु ऑनलाइन आवेदन व निर्गत प्रमाण पत्र का डिजिटल प्रिंट।',
    descriptionEn: 'Online issuance of Caste / Category / EWS / OBC Non-Creamy Layer certificates through RTPS Bihar.',
    estimatedTime: '10 - 14 कार्य दिवस',
    serviceFee: '₹50',
    iconName: 'Award',
    popular: true,
    requiredDocsHi: ['आधार कार्ड', 'जमीन का रसीद/खतियान या पिता का जाति प्रमाण', 'पासपोर्ट फोटो'],
    requiredDocsEn: ['Aadhaar Card', 'Land receipt/Khatiyan or Father caste proof', 'Passport Photo']
  },
  {
    id: 'residence-cert',
    category: 'certificates',
    nameHi: 'निवास प्रमाण पत्र (Residential)',
    nameEn: 'Residence Certificate (RTPS)',
    taglineHi: 'RTPS बिहार - आवासीय प्रमाण पत्र',
    descriptionHi: 'बिहार राज्य के स्थाई निवास प्रमाण पत्र (आवासीय प्रमाण पत्र) हेतु ऑनलाइन फॉर्म भरना व तेज डिजिटल अप्रूवल ट्रैकिंग।',
    descriptionEn: 'Official Domicile / Permanent Residence Certificate for Bihar state resident applications.',
    estimatedTime: '10 - 14 कार्य दिवस',
    serviceFee: '₹50',
    iconName: 'Home',
    popular: true,
    requiredDocsHi: ['आधार कार्ड', 'फोटो', 'वार्ड संख्या / ग्राम भदवार विवरण'],
    requiredDocsEn: ['Aadhaar Card', 'Photograph', 'Ward / Village Bhadwar details']
  },
  {
    id: 'birth-death-cert',
    category: 'certificates',
    nameHi: 'जन्म / मृत्यु प्रमाण पत्र',
    nameEn: 'Birth & Death Certificate',
    taglineHi: 'ब्लॉक / नगर परिषद स्तर पर पंजीकरण',
    descriptionHi: 'सीआरएस (CRS) पोर्टल पर नया जन्म प्रमाण पत्र एवं मृत्यु प्रमाण पत्र का ऑनलाइन पंजीकरण व डिजिटल प्रमाण पत्र डाउनलोड।',
    descriptionEn: 'Civil Registration System (CRS) portal applications for official Birth & Death certificates.',
    estimatedTime: '15 - 21 दिन',
    serviceFee: '₹100',
    iconName: 'CalendarHeart',
    requiredDocsHi: ['माता-पिता / मृतक का आधार कार्ड', 'अस्पताल डिस्चार्ज रसीद / मुखिया या वार्ड पार्षद की रिपोर्ट', 'मोबाइल नंबर'],
    requiredDocsEn: ['Parents/Deceased Aadhaar', 'Hospital discharge slip or Panchayat report', 'Mobile number']
  },
  {
    id: 'old-age-pension',
    category: 'certificates',
    nameHi: 'वृद्धा / विधवा / दिव्यांग पेंशन',
    nameEn: 'Social Security Pension',
    taglineHi: 'मुख्यमंत्री वृद्धा पेंशन व समाज कल्याण योजनाएं',
    descriptionHi: '60 वर्ष से अधिक उम्र के बुजुर्गों के लिए वृद्धावस्था पेंशन (SSPMIS), विधवा पेंशन एवं दिव्यांग पेंशन योजना में आवेदन।',
    descriptionEn: 'Bihar Social Welfare SSPMIS old-age, widow, and disability pension registration and DBT verification.',
    estimatedTime: '20 - 30 दिन',
    serviceFee: '₹80',
    iconName: 'UserCheck',
    requiredDocsHi: ['आधार कार्ड', 'बैंक पासबुक (Aadhaar Seeded)', 'मतदाता पहचान पत्र (उम्र सत्यापन)', 'फोटो'],
    requiredDocsEn: ['Aadhaar Card', 'Bank Passbook (DBT linked)', 'Voter ID for age proof', 'Passport Photo']
  },
  {
    id: 'e-shram-card',
    category: 'certificates',
    nameHi: 'ई-श्रम कार्ड (E-Shram)',
    nameEn: 'E-Shram Card Registration',
    taglineHi: 'असंगठित कामगारों के लिए सरकारी योजना',
    descriptionHi: 'मजदूरों, किसानों, कारीगरों व कामगारों का ई-श्रम कार्ड बनाना। ₹2 लाख दुर्घटना बीमा एवं सरकारी सहायता लाभ।',
    descriptionEn: 'E-Shram card registration with 12-digit UAN number and ₹2 Lakh accidental insurance coverage.',
    estimatedTime: 'तुरंत (Instant 10 Min)',
    serviceFee: '₹50 (Laminated Card)',
    iconName: 'ShieldCheck',
    requiredDocsHi: ['आधार कार्ड', 'आधार लिंक मोबाइल नंबर', 'बैंक खाता संख्या एवं IFSC कोड'],
    requiredDocsEn: ['Aadhaar Card', 'Mobile linked with Aadhaar', 'Bank Account details']
  },

  // 3. Land Records (बिहार भूमि)
  {
    id: 'khatiyan-jamabandi',
    category: 'land',
    nameHi: 'भूमि रिकॉर्ड (खतियान / जमीन पंजी)',
    nameEn: 'Bihar Bhumi Land Records',
    taglineHi: 'जमाबंदी पंजी-II, खतियान व दाखिल खारिज',
    descriptionHi: 'बिहार भूमि सुधार पोर्टल पर अपनी जमीन का खतियान देखना, जमाबंदी पंजी-II प्रति निकालना एवं म्यूटेशन (दाखिल-खारिज) आवेदन।',
    descriptionEn: 'Viewing and downloading digitized Khatiyan, Register-II Jamabandi copy, and filing land mutation online.',
    estimatedTime: 'तुरंत प्रिंट / 30 दिन दाखिल खारिज',
    serviceFee: '₹30 - ₹150',
    iconName: 'MapPin',
    popular: true,
    requiredDocsHi: ['खाता संख्या, खेसरा संख्या, जमाबंदी संख्या', 'मौजा / थाना नंबर (भदवार क्षेत्र)', 'जमीन के पुराने दस्तावेज (यदि हों)'],
    requiredDocsEn: ['Khata, Khesra, Jamabandi number', 'Mauja / Thana number', 'Previous sale deed (if applicable)']
  },
  {
    id: 'land-receipt',
    category: 'land',
    nameHi: 'जमीन की लगान रसीद (भू-लगान)',
    nameEn: 'Online Land Tax Receipt (LPC)',
    taglineHi: 'ऑनलाइन रसीद काटना व पिछला बकाया देखना',
    descriptionHi: 'घर बैठे सरकारी जमीन की सालाना लगान रसीद काटना, ऑनलाइन चालान भुगतान व डिजिटल रसीद की लेमिनेटेड कॉपी प्राप्त करना।',
    descriptionEn: 'Online payment of annual land revenue tax (Lagaan) and downloading official digitized rent receipts.',
    estimatedTime: 'तुरंत (Instant)',
    serviceFee: '₹30 + सरकारी लगान',
    iconName: 'Receipt',
    requiredDocsHi: ['पिछली जमीन रसीद या भाग वर्तमान व पृष्ठ संख्या', 'रैयत का नाम'],
    requiredDocsEn: ['Old receipt or Bhag Vartaman/Prisht number', 'Tenant/Owner name']
  },

  // 4. Education & Jobs
  {
    id: 'sarkari-forms',
    category: 'education',
    nameHi: 'ऑनलाइन सरकारी नौकरी फॉर्म',
    nameEn: 'Govt Job & Exam Forms',
    taglineHi: 'BPSC, SSC, Railway, Army, Police, Teacher',
    descriptionHi: 'सभी प्रकार के केंद्र एवं बिहार सरकारी भर्ती फॉर्म (BSSC, BPSC, बिहार पुलिस, रेलवे, सेना) का त्रुटिरहित ऑनलाइन आवेदन।',
    descriptionEn: 'Flawless error-free online application for all Central and State government recruitment exams.',
    estimatedTime: 'उसी समय (Instant)',
    serviceFee: '₹70 - ₹100',
    iconName: 'GraduationCap',
    popular: true,
    requiredDocsHi: ['शैक्षणिक अंकपत्र (10th/12th/Graduation)', 'जाति, आय, निवास प्रमाण पत्र', 'फोटो व हस्ताक्षर'],
    requiredDocsEn: ['Educational Certificates', 'Caste/Domicile certificate', 'Photo & Signature']
  },
  {
    id: 'scholarship-form',
    category: 'education',
    nameHi: 'स्कॉलरशिप फॉर्म भरना',
    nameEn: 'Scholarship Applications',
    taglineHi: 'पोस्ट मैट्रिक, NSP, मेधावृत्ति योजना',
    descriptionHi: 'बिहार पोस्ट मैट्रिक छात्रवृत्ति (PMS), राष्ट्रीय छात्रवृत्ति पोर्टल (NSP), साइकिल-पोशाक योजना व मुख्यमंत्री कन्या उत्थान योजना।',
    descriptionEn: 'Bihar Post-Matric PMS, National Scholarship Portal (NSP), and girl student welfare scholarship forms.',
    estimatedTime: 'उसी समय (Instant)',
    serviceFee: '₹70 - ₹100',
    iconName: 'BookOpen',
    requiredDocsHi: ['कॉलेज बोनाफाइड सर्टिफिकेट व फीस रसीद', 'पिछली कक्षा की मार्कशीट', 'आय/जाति/निवास', 'बैंक पासबुक'],
    requiredDocsEn: ['College Bonafide & Fee Receipt', 'Last Exam Marksheet', 'Income/Caste/Residence', 'Bank Passbook']
  },
  {
    id: 'admit-card-result',
    category: 'education',
    nameHi: 'एडमिट कार्ड व रिजल्ट प्रिंट',
    nameEn: 'Admit Card & Result Download',
    taglineHi: 'परीक्षा प्रवेश पत्र व अंकपत्र रंगीन प्रिंट',
    descriptionHi: 'किसी भी प्रतियोगी परीक्षा या बोर्ड परीक्षा का प्रवेश पत्र (Admit Card) निकालना व रिजल्ट की रंगीन हाई-क्वालिटी प्रिंट।',
    descriptionEn: 'Instant download and crisp color/BW printing of exam admit cards, scorecards, and hall tickets.',
    estimatedTime: '2 मिनट (Instant)',
    serviceFee: '₹10 - ₹20',
    iconName: 'FileCheck',
    requiredDocsHi: ['रजिस्ट्रेशन नंबर / रोल नंबर', 'जन्मतिथि (DOB)'],
    requiredDocsEn: ['Registration Number / Roll No', 'Date of Birth (DOB)']
  },

  // 5. Banking & Travel
  {
    id: 'aeps-banking',
    category: 'banking',
    nameHi: 'AEPS आधार बैंकिंग सेवा',
    nameEn: 'AEPS Cash Withdrawal & ATM',
    taglineHi: 'अंगूठा लगाकर किसी भी बैंक से पैसा निकालें',
    descriptionHi: 'आधार कार्ड एवं बायोमेट्रिक (फिंगरप्रिंट) से किसी भी बैंक का बैलेंस चेक करें और नकद निकासी प्राप्त करें। माइक्रो एटीएम की सुविधा उपलब्ध।',
    descriptionEn: 'Withdraw cash from any Indian bank using fingerprint Aadhaar authentication (AEPS) and Micro-ATM card swipe.',
    estimatedTime: 'तुरंत (Instant Cash)',
    serviceFee: 'न्यूनतम शुल्क / बैंक नियमानुसार',
    iconName: 'Landmark',
    popular: true,
    requiredDocsHi: ['आधार कार्ड नंबर', 'बैंक का नाम', 'अंगूठे का निशान'],
    requiredDocsEn: ['Aadhaar Number', 'Bank Name', 'Fingerprint Verification']
  },
  {
    id: 'money-transfer',
    category: 'banking',
    nameHi: 'मनी ट्रांसफर (DMT)',
    nameEn: 'Domestic Money Transfer',
    taglineHi: 'भारत के किसी भी बैंक खाते में तुरंत पैसे भेजें',
    descriptionHi: 'IMPS/NEFT के जरिए भारत के किसी भी सरकारी या प्राइवेट बैंक खाते में तुरंत और सुरक्षित पैसे भेजने की सुविधा।',
    descriptionEn: 'Instant domestic money remittance to any bank account in India 24x7 via secure IMPS banking.',
    estimatedTime: 'तत्काल (Instant in 1 Min)',
    serviceFee: '1% (न्यूनतम ₹10)',
    iconName: 'Send',
    requiredDocsHi: ['प्राप्तकर्ता का खाता संख्या एवं IFSC कोड', 'बैंक शाखा का नाम'],
    requiredDocsEn: ['Beneficiary Account Number & IFSC', 'Bank Branch Name']
  },
  {
    id: 'pf-withdrawal',
    category: 'banking',
    nameHi: 'PF निकासी (UAN क्लेम)',
    nameEn: 'EPFO PF Withdrawal',
    taglineHi: 'PF का पैसा ऑनलाइन निकालें / क्लेम करें',
    descriptionHi: 'EPFO पोर्टल पर फॉर्म 19, 10C और 31 (Advance) का ऑनलाइन क्लेम, UAN एक्टिवेशन, पासवर्ड रीसेट व KYC अपडेट।',
    descriptionEn: 'Online PF advance/full withdrawal claim (Form 19, 10C, 31), UAN activation, and KYC seeding.',
    estimatedTime: 'क्लेम फॉर्म सबमिशन (3-7 दिन क्रेडिट)',
    serviceFee: '₹150 - ₹200',
    iconName: 'Wallet',
    requiredDocsHi: ['UAN नंबर व पासवर्ड', 'आधार से लिंक मोबाइल नंबर', 'बैंक पासबुक या कैंसिल चेक'],
    requiredDocsEn: ['UAN Number & Password', 'Aadhaar linked mobile', 'Bank Passbook / Cancelled Cheque']
  },
  {
    id: 'train-air-ticket',
    category: 'banking',
    nameHi: 'रेलवे (IRCTC) व एयर टिकट',
    nameEn: 'IRCTC Train & Flight Booking',
    taglineHi: 'कन्फर्म ट्रेन टिकट व तत्काल टिकट बुकिंग',
    descriptionHi: 'अधिकृत आईआरसीटीसी रेलवे टिकट बुकिंग, तत्काल कोटा, स्लीपर / एसी कोच एवं डोमेस्टिक व इंटरनेशनल फ्लाइट टिकट बुकिंग।',
    descriptionEn: 'Authorized IRCTC railway ticket booking, Tatkal reservations, and domestic/international flight bookings.',
    estimatedTime: 'उसी समय (Instant Ticket)',
    serviceFee: '₹30 - ₹50 प्रति टिकट + रेलवे किराया',
    iconName: 'Train',
    requiredDocsHi: ['यात्री का नाम, उम्र व लिंग', 'यात्रा की तारीख व गंतव्य स्टेशन', 'पहचान पत्र'],
    requiredDocsEn: ['Passenger Name, Age, Gender', 'Travel Date & Destination', 'ID Proof']
  },
  {
    id: 'utility-bills',
    category: 'banking',
    nameHi: 'बिजली बिल व रिचार्ज',
    nameEn: 'Electricity Bill & Recharge',
    taglineHi: 'NBPDCL / SBPDCL बिजली बिल भुगतान',
    descriptionHi: 'दक्षिण बिहार (SBPDCL) एवं उत्तर बिहार बिजली बिल तुरंत जमा करें, रसीद प्राप्त करें, मोबाइल व DTH रिचार्ज सुविधा।',
    descriptionEn: 'Instant Bihar electricity bill payment with receipt generation, mobile prepaid recharge, and DTH top-ups.',
    estimatedTime: 'तुरंत (Instant Bill Receipt)',
    serviceFee: 'निःशुल्क / ₹10 रसीद प्रिंट',
    iconName: 'Zap',
    requiredDocsHi: ['बिजली उपभोक्ता संख्या (CA Number / Consumer ID)'],
    requiredDocsEn: ['Electricity Consumer ID (CA Number)']
  },

  // 6. Cafe & Desktop Publishing Services
  {
    id: 'print-photocopy',
    category: 'cafe',
    nameHi: 'प्रिंट एवं फोटोकॉपी',
    nameEn: 'Printing & Photocopy',
    taglineHi: 'हाई-स्पीड रंगीन व श्वेत-श्याम फोटोकॉपी',
    descriptionHi: 'A4 / Legal साइज में लेजर प्रिंटर से क्लीयर ब्लैक एंड व्हाइट व कलर प्रिंट, थोक जेरोक्स फोटोकॉपी एवं फ्रंट-बैक डुप्लेक्स।',
    descriptionEn: 'High-speed laser B/W & full-color A4/Legal printing and bulk photocopies with crisp clarity.',
    estimatedTime: 'तुरंत (Instant)',
    serviceFee: '₹2 (B/W) | ₹10 (रंगीन)',
    iconName: 'Printer',
    popular: true,
    requiredDocsHi: ['दस्तावेज या मोबाइल/पेनड्राइव में फाइल'],
    requiredDocsEn: ['Original Document or digital file']
  },
  {
    id: 'typing-services',
    category: 'cafe',
    nameHi: 'टाइपिंग (हिंदी व अंग्रेजी)',
    nameEn: 'Typing (Hindi & English)',
    taglineHi: 'शपथ पत्र, आवेदन पत्र, रिज्यूमे, प्रोजेक्ट',
    descriptionHi: 'कंप्यूटर पर तेज हिंदी (कृतिदेव / मंगल) एवं अंग्रेजी टाइपिंग। कोर्ट एफिडेविट, नौकरी का रिज्यूमे/बायोडाटा एवं आवेदन पत्र लिखाई।',
    descriptionEn: 'Accurate computer typing in Hindi (Mangal/Kruti Dev) & English for affidavits, legal petitions, resumes & letters.',
    estimatedTime: '15 - 30 मिनट',
    serviceFee: '₹30 - ₹50 प्रति पेज',
    iconName: 'Keyboard',
    requiredDocsHi: ['हस्तलिखित मैटर या आवेदन का उद्देश्य'],
    requiredDocsEn: ['Draft notes or topic details']
  },
  {
    id: 'scanning-lamination',
    category: 'cafe',
    nameHi: 'स्कैनिंग एवं लेमिनेशन',
    nameEn: 'Scanning & Lamination',
    taglineHi: 'हाई-डीपीआई स्कैन व थर्मल लेमिनेशन',
    descriptionHi: 'दस्तावेजों को साफ पीडीएफ में स्कैन कर ईमेल/व्हाट्सएप पर भेजना, एवं जरूरी प्रमाण पत्रों को सुरक्षित रखने हेतु वाटरप्रूफ लेमिनेशन।',
    descriptionEn: 'High-res document scanning into multi-page PDF, sending to WhatsApp/Email, and thermal pouch lamination.',
    estimatedTime: 'तुरंत (Instant 5 Min)',
    serviceFee: '₹10 (स्कैन) | ₹20-₹30 (लेमिनेशन)',
    iconName: 'ScanLine',
    requiredDocsHi: ['मूल दस्तावेज (Original Document)'],
    requiredDocsEn: ['Original Document']
  }
];

export interface ApplicationRecord {
  id: string; // e.g., SOSC-2026-1042
  customerName: string;
  mobile: string;
  village: string;
  serviceId: string;
  serviceNameHi: string;
  subType?: string;
  status: 'received' | 'verified' | 'portal_submitted' | 'ready' | 'delivered';
  statusNoteHi: string;
  createdAt: string;
  estimatedDelivery: string;
  tokenPin: string;
}

export const INITIAL_APPLICATIONS: ApplicationRecord[] = [
  {
    id: 'SOSC-2026-1042',
    customerName: 'मोहन सिंह (Mohan Singh)',
    mobile: '9876543210',
    village: 'भदवार (Bhadwar, Buxar)',
    serviceId: 'income-cert',
    serviceNameHi: 'आय प्रमाण पत्र (RTPS Bihar)',
    subType: 'सामान्य (CO Level)',
    status: 'portal_submitted',
    statusNoteHi: 'RTPS पोर्टल पर आवेदन संख्या BRCCO/2026/98214 दर्ज। अंचल कार्यालय जांच में है।',
    createdAt: '18 Oct 2026',
    estimatedDelivery: '25 Oct 2026',
    tokenPin: '4412'
  },
  {
    id: 'SOSC-2026-1039',
    customerName: 'सुनीता देवी (Sunita Devi)',
    mobile: '9123456780',
    village: 'उत्तर टोला, भदवार (Uttar Tola)',
    serviceId: 'voter-id',
    serviceNameHi: 'वोटर कार्ड में नाम सुधार (Form 8)',
    subType: 'नाम व जन्मतिथि सुधार',
    status: 'ready',
    statusNoteHi: 'नया e-EPIC कार्ड जारी हो गया है। सुधीर ऑनलाइन सेंटर पर आकर पीवीसी कार्ड ले जाएं।',
    createdAt: '12 Oct 2026',
    estimatedDelivery: '20 Oct 2026',
    tokenPin: '8219'
  },
  {
    id: 'SOSC-2026-1035',
    customerName: 'रमेश कुमार यादव (Ramesh Yadav)',
    mobile: '9988776655',
    village: 'बरुना, बक्सर (Baruna)',
    serviceId: 'pan-card',
    serviceNameHi: 'नया पैन कार्ड (PAN Card UTI)',
    subType: 'Physical & e-PAN',
    status: 'delivered',
    statusNoteHi: 'पैन कार्ड सफलतापूर्वक डिलीवर कर दिया गया। यूटीआई एक्नॉलेजमेंट नंबर 0029384729.',
    createdAt: '08 Oct 2026',
    estimatedDelivery: '16 Oct 2026',
    tokenPin: '3301'
  }
];

export const CAFE_INFO = {
  centerNameHi: 'सुधीर ऑनलाइन सर्विस सेंटर भदवार',
  centerNameEn: 'Sudhir Online Service Center, Bhadwar',
  subHeadingHi: 'साइबर कैफे • ऑनलाइन फॉर्म • सरकारी योजनाएं • डिजिटल सेवा',
  taglineHi: 'काम जल्दी और विश्वसनीय !',
  secondaryTaglineHi: 'आपकी सेवा में हमेशा तत्पर...',
  proprietorHi: 'सुधीर कुमार (प्रोपराइटर)',
  proprietorEn: 'Sudhir Kumar (Proprietor)',
  phone: '8252144645',
  whatsappUrl: 'https://wa.me/918252144645',
  addressHi: 'उत्तर टोला, भदवार, जिला बक्सर, बिहार - 802134',
  addressEn: 'Uttar Tola, Bhadwar, District Buxar, Bihar - 802134',
  pincode: '802134',
  district: 'बक्सर (Buxar)',
  state: 'बिहार (Bihar)',
  bikeNumber: 'BR 44 S 9550',
  timingsHi: 'प्रतिदिन सुबह 08:00 बजे से रात 08:30 बजे तक',
  timingsEn: 'Everyday: 8:00 AM - 8:30 PM',
  equipmentListHi: [
    'हाई-स्पीड लेजर कलर व ब्लैक/व्हाइट प्रिंटर',
    'A4 व लीगल साइज हैवी ड्यूटी स्कैनर',
    'थर्मल पाउच लेमिनेशन मशीन',
    'AEPS फिंगरप्रिंट बायोमेट्रिक स्कैनर',
    'माइक्रो एटीएम स्वाइप डिवाइस',
    'वाईफाई हाई-स्पीड इंटरनेट कनेक्टिविटी'
  ],
  specialFeaturesHi: [
    'सभी प्रकार के ऑनलाइन एवं सरकारी फॉर्म भरने की सुविधा उपलब्ध है',
    'RTPS सेवा (आय, जाति, निवास प्रमाण पत्र)',
    'भूमि रिकॉर्ड (खतियान / जमीन पंजी / दाखिल खारिज / रसीद)',
    'पैन कार्ड बनाना एवं सुधारना (3 दिन में ई-पैन)',
    'वोटर ID कार्ड की सभी सेवाएं व e-EPIC डाउनलोड',
    'आधार बैंकिंग व माइक्रो एटीएम से नकद निकासी (AEPS/DMT)',
    'रेलवे (IRCTC) कन्फर्म टिकट व हवाई जहाज टिकट बुकिंग'
  ]
};
