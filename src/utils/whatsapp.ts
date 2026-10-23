export function generateWhatsAppLink(params: {
  phone: string;
  name?: string;
  service?: string;
  tokenId?: string;
  message?: string;
}): string {
  const cleanPhone = params.phone.replace(/[^0-9]/g, '');
  const destinationPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

  let text = '';
  if (params.tokenId) {
    text = `नमस्ते सुधीर जी,\nमैंने ऑनलाइन पोर्टल पर आवेदन किया है:\n\n*टोकन संख्या:* ${params.tokenId}\n*नाम:* ${params.name || 'ग्राहक'}\n*सेवा:* ${params.service || 'ऑनलाइन सेवा'}\n\nकृपया मेरे आवेदन की जांच करें। धन्यवाद!`;
  } else if (params.service) {
    text = `नमस्ते सुधीर जी,\nमुझे आपके सेंटर से *${params.service}* सेवा के बारे में जानकारी / आवेदन करना है।\n\nमेरा नाम: ${params.name || ''}\nकृपया आवश्यक दस्तावेज व प्रक्रिया बताएं।`;
  } else if (params.message) {
    text = params.message;
  } else {
    text = `नमस्ते सुधीर जी, मुझे ऑनलाइन सेवा केंद्र भदवार के संबंध में जानकारी चाहिए।`;
  }

  return `https://wa.me/${destinationPhone}?text=${encodeURIComponent(text)}`;
}
