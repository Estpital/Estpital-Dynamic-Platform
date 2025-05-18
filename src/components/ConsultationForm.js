import { useState } from 'react';
import { Check, ChevronRight, Upload, X } from 'lucide-react';

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    operationType: '',
    concerns: '',
    previousTreatments: '',
    images: [],
    expectations: '',
    timeline: '',
    howDidYouHear: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const operationTypes = [
    { id: 'rhinoplasty', name: 'Burun Estetiği (Rinoplasti)' },
    { id: 'breast', name: 'Meme Operasyonları' },
    { id: 'liposuction', name: 'Liposuction' },
    { id: 'facelift', name: 'Yüz Germe' },
    { id: 'eyelid', name: 'Göz Kapağı Estetiği' },
    { id: 'tummy-tuck', name: 'Karın Germe (Abdominoplasti)' },
    { id: 'bbl', name: 'Brezilya Poposu (BBL)' },
    { id: 'other', name: 'Diğer Operasyonlar' }
  ];

  const validateStep = (currentStep) => {
    let stepErrors = {};
    let isValid = true;

    switch (currentStep) {
      case 1:
        if (!formData.fullName.trim()) {
          stepErrors.fullName = 'Ad Soyad alanını doldurunuz';
          isValid = false;
        }
        if (!formData.email.trim()) {
          stepErrors.email = 'E-posta alanını doldurunuz';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          stepErrors.email = 'Geçerli bir e-posta adresi giriniz';
          isValid = false;
        }
        if (!formData.phone.trim()) {
          stepErrors.phone = 'Telefon alanını doldurunuz';
          isValid = false;
        }
        if (!formData.age) {
          stepErrors.age = 'Yaş aralığı seçiniz';
          isValid = false;
        }
        if (!formData.gender) {
          stepErrors.gender = 'Cinsiyet seçiniz';
          isValid = false;
        }
        break;

      case 2:
        if (!formData.operationType) {
          stepErrors.operationType = 'Operasyon türü seçiniz';
          isValid = false;
        }
        if (!formData.concerns.trim()) {
          stepErrors.concerns = 'Endişelerinizi belirtiniz';
          isValid = false;
        }
        break;

      case 4:
        if (!formData.expectations.trim()) {
          stepErrors.expectations = 'Beklentilerinizi belirtiniz';
          isValid = false;
        }
        if (!formData.timeline) {
          stepErrors.timeline = 'Zaman çerçevesi seçiniz';
          isValid = false;
        }
        break;

      case 5:
        if (!formData.consent) {
          stepErrors.consent = 'Devam etmek için onaylamanız gerekmektedir';
          isValid = false;
        }
        break;

      default:
        break;
    }

    setErrors(stepErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Limit to maximum 3 images
    if (formData.images.length + files.length > 3) {
      setErrors({
        ...errors,
        images: 'En fazla 3 resim yükleyebilirsiniz'
      });
      return;
    }

    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));

    setFormData({
      ...formData,
      images: [...formData.images, ...newImages]
    });

    // Clear any image errors
    if (errors.images) {
      setErrors({
        ...errors,
        images: ''
      });
    }
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setFormData({
      ...formData,
      images: newImages
    });
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(5)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the formData to your backend here
      console.log('Form submitted:', formData);
      
      // Show success message
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        ...errors,
        submit: 'Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // FORM COMPLETED SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-teal-600 p-6 text-white">
          <h2 className="text-2xl font-semibold">Talebiniz Alındı!</h2>
        </div>
        
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <Check className="w-8 h-8 text-teal-600" />
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Teşekkür Ederiz, {formData.fullName}</h3>
          
          <p className="text-gray-600 mb-6">
            Konsültasyon talebiniz başarıyla alındı. Uzman doktorlarımız bilgilerinizi inceleyip en kısa sürede sizinle iletişime geçecektir.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-medium mb-3">Sonraki Adımlar</h4>
            <ol className="text-left text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-teal-600 text-white rounded-full text-sm mr-2 mt-0.5">1</span>
                <span>Doktorumuz 24 saat içinde talebinizi değerlendirecek</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-teal-600 text-white rounded-full text-sm mr-2 mt-0.5">2</span>
                <span>Size e-posta veya telefon yoluyla ulaşılacak</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-teal-600 text-white rounded-full text-sm mr-2 mt-0.5">3</span>
                <span>Detaylı kişisel konsültasyon için randevu planlanacak</span>
              </li>
            </ol>
          </div>
          
          <p className="text-gray-500 mb-8">
            Sorularınız için bize <a href="mailto:info@plastikcerrahi.com" className="text-teal-600 font-medium hover:underline">info@plastikcerrahi.com</a> adresinden ulaşabilirsiniz.
          </p>
          
          <button 
            onClick={() => window.location.reload()} 
            className="bg-white border border-teal-600 text-teal-600 py-2 px-6 rounded-lg hover:bg-teal-50 transition duration-200"
          >
            Yeni Konsültasyon Talebi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-teal-600 p-6 text-white">
        <h2 className="text-2xl font-semibold">Ücretsiz Konsültasyon Talebi</h2>
        <p className="mt-1">Uzman doktorlarımız sizinle iletişime geçecektir</p>
      </div>
      
      {/* Progress Bar */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Adım {step}/5</span>
          <span className="text-sm text-gray-500">{step * 20}% Tamamlandı</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-teal-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${step * 20}%` }}
          ></div>
        </div>
      </div>
      
      {/* Form */}
      <form className="p-6 space-y-6">
        
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Kişisel Bilgiler</h3>
            
            <div>
              <label className="block text-gray-700 mb-1">Ad Soyad *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ad Soyad"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">E-posta *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ornek@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Telefon Numarası *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="05XX XXX XX XX"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Yaş Aralığı *</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.age ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Seçiniz</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55+">55+</option>
              </select>
              {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Cinsiyet *</label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                  />
                  <span className="ml-2">Kadın</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                  />
                  <span className="ml-2">Erkek</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                  />
                  <span className="ml-2">Diğer</span>
                </label>
              </div>
              {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
            </div>
          </div>
        )}
        
        {/* Step 2: Operation Information */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Operasyon Bilgileri</h3>
            
            <div>
              <label className="block text-gray-700 mb-2">İlgilendiğiniz Operasyon Türü *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {operationTypes.map((op) => (
                  <label
                    key={op.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.operationType === op.id
                        ? 'bg-teal-50 border-teal-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="operationType"
                      value={op.id}
                      checked={formData.operationType === op.id}
                      onChange={handleChange}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                    />
                    <span className="ml-2">{op.name}</span>
                  </label>
                ))}
              </div>
              {errors.operationType && <p className="mt-1 text-sm text-red-500">{errors.operationType}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Şikayetleriniz ve Endişeleriniz *</label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.concerns ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Lütfen endişelerinizi ve beklentilerinizi detaylı bir şekilde anlatın."
              ></textarea>
              {errors.concerns && <p className="mt-1 text-sm text-red-500">{errors.concerns}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Önceki Tedaviler (Varsa)</label>
              <textarea
                name="previousTreatments"
                value={formData.previousTreatments}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition"
                placeholder="Daha önce bu alanda geçirdiğiniz operasyonlar veya uyguladığınız tedaviler varsa belirtiniz."
              ></textarea>
            </div>
          </div>
        )}
        
        {/* Step 3: Image Upload */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Görsel Yükleme</h3>
            <p className="text-gray-500 mb-4">
              İlgilendiğiniz alanın fotoğraflarını yükleyerek daha doğru bir değerlendirme almanızı sağlayabilirsiniz. 
              Bu adım opsiyoneldir ancak daha detaylı bir değerlendirme için önerilir.
            </p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="space-y-2">
                <Upload className="mx-auto h-10 w-10 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <label htmlFor="file-upload" className="cursor-pointer font-medium text-teal-600 hover:text-teal-500">
                    Dosya yüklemek için tıklayın
                  </label>
                  <input
                    id="file-upload"
                    name="images"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    multiple
                    onChange={handleImageUpload}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG veya JPEG (max. 5MB) - En fazla 3 resim
                  </p>
                </div>
              </div>
            </div>
            
            {errors.images && <p className="mt-1 text-sm text-red-500">{errors.images}</p>}
            
            {formData.images.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Yüklenen Görseller</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative border rounded-lg overflow-hidden">
                      <img
                        src={image.preview}
                        alt={`Yüklenen resim ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                      >
                        <X className="h-4 w-4 text-gray-700" />
                      </button>
                      <div className="p-2 text-xs truncate">{image.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700 mt-4">
              <p className="font-medium">Gizlilik Notu:</p>
              <p>Yüklediğiniz tüm görseller güvenli bir şekilde saklanmakta ve sadece uzman doktorlarımız tarafından değerlendirme amacıyla görüntülenmektedir.</p>
            </div>
          </div>
        )}
        
        {/* Step 4: Expectations */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Beklentiler ve Zaman Çerçevesi</h3>
            
            <div>
              <label className="block text-gray-700 mb-1">Operasyondan Beklentileriniz *</label>
              <textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.expectations ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Operasyondan sonra nasıl bir sonuç hedefliyorsunuz? Detaylı açıklayınız."
              ></textarea>
              {errors.expectations && <p className="mt-1 text-sm text-red-500">{errors.expectations}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Düşündüğünüz Zaman Çerçevesi *</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition ${
                  errors.timeline ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Seçiniz</option>
                <option value="soon">En kısa zamanda (1-3 ay içinde)</option>
                <option value="medium">Yakın zamanda (3-6 ay içinde)</option>
                <option value="later">Gelecekte (6 ay sonra)</option>
                <option value="researching">Sadece bilgi topluyorum</option>
              </select>
              {errors.timeline && <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Bizi nereden duydunuz?</label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none transition"
              >
                <option value="">Seçiniz</option>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="referral">Tavsiye</option>
                <option value="previous-patient">Önceki Hasta</option>
                <option value="other">Diğer</option>
              </select>
            </div>
          </div>
        )}
        
        {/* Step 5: Final Step - Summary and Submit */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Son Adım</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h4 className="font-medium">Bilgilerinizin Özeti</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Ad Soyad:</span>
                  <p className="font-medium">{formData.fullName}</p>
                </div>
                <div>
                  <span className="text-gray-500">E-posta:</span>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Telefon:</span>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Yaş:</span>
                  <p className="font-medium">{formData.age}</p>
                </div>
                <div>
                  <span className="text-gray-500">İlgilenilen Operasyon:</span>
                  <p className="font-medium">
                    {operationTypes.find(op => op.id === formData.operationType)?.name || '-'}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Zaman Çerçevesi:</span>
                  <p className="font-medium">
                    {formData.timeline === 'soon' && 'En kısa zamanda (1-3 ay içinde)'}
                    {formData.timeline === 'medium' && 'Yakın zamanda (3-6 ay içinde)'}
                    {formData.timeline === 'later' && 'Gelecekte (6 ay sonra)'}
                    {formData.timeline === 'researching' && 'Sadece bilgi topluyorum'}
                    {!formData.timeline && '-'}
                  </p>
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-gray-500">Fotoğraf:</span>
                <p className="font-medium">{formData.images.length > 0 ? `${formData.images.length} fotoğraf yüklendi` : 'Fotoğraf yüklenmedi'}</p>
              </div>
            </div>
            
            <div>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded ${
                    errors.consent ? 'border-red-500' : ''
                  }`}
                />
                <span className="text-sm text-gray-600">
                  Verdiğim bilgilerin doğru olduğunu, uzman doktorların değerlendirmesi için paylaştığımı ve tarafıma 
                  ulaşılmasına izin verdiğimi kabul ediyorum. <a href="#" className="text-teal-600 hover:underline">Gizlilik Politikası</a>'nı 
                  okudum ve kabul ediyorum.
                </span>
              </label>
              {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}
            </div>
            
            {errors.submit && (
              <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700">
                <p>{errors.submit}</p>
              </div>
            )}
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t border-gray-200">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="flex items-center text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4 transform rotate-180 mr-1" />
              Geri
            </button>
          )}
          
          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto flex items-center bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700 transition-colors"
            >
              İlerle
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="ml-auto bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          )}
        </div>
      </form>
      
      {/* Benefits Section */}
      <div className="px-6 pb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-3">Değerlendirme sürecinde size sunduklarımız:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mr-2 shrink-0" />
              <span className="text-sm">Uzman plastik cerrahlarımız tarafından kişisel değerlendirme</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mr-2 shrink-0" />
              <span className="text-sm">Özel durumunuza uygun detaylı bilgilendirme</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mr-2 shrink-0" />
              <span className="text-sm">Ücretsiz konsültasyon ve planlama görüşmesi</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mr-2 shrink-0" />
              <span className="text-sm">Gizlilik ve mahremiyete tam saygı</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
