import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-blue-700 text-white p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Estpital International Agency</h1>
        <div className="flex items-center space-x-4">
          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          {/* Menü Öğeleri */}
          <ul className={`sm:flex sm:space-x-6 text-sm sm:text-base ${isMenuOpen ? 'block' : 'hidden'} sm:block absolute sm:static top-16 left-0 right-0 bg-blue-700 sm:bg-transparent p-4 sm:p-0 z-10`}>
            <li className="py-2 sm:py-0"><a href="/" className="hover:underline">{t('navbar.home')}</a></li>
            <li className="py-2 sm:py-0"><a href="/hizmetler" className="hover:underline">{t('navbar.services')}</a></li>
            <li className="py-2 sm:py-0"><a href="/doktorlarimiz" className="hover:underline">{t('navbar.doctors')}</a></li>
            <li className="py-2 sm:py-0"><a href="/iletisim" className="hover:underline">{t('navbar.contact')}</a></li>
            <li className="py-2 sm:py-0"><a href="/randevu" className="hover:underline">{t('navbar.appointment')}</a></li>
          </ul>
          {/* Dil Navigatörü (Dropdown) */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 text-sm sm:text-base bg-blue-600 px-2 py-1 rounded hover:bg-blue-800 transition"
            >
              <span>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-20">
                <button
                  onClick={() => changeLanguage('tr')}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  <span role="img" aria-label="Turkish Flag">🇹🇷</span>
                  <span>TR</span>
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  <span role="img" aria-label="English Flag">🇬🇧</span>
                  <span>EN</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
