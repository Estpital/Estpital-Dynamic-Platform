import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLangMenuOpen) setIsLangMenuOpen(false);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl sm:text-2xl font-bold">
          Estpital
        </a>

        {/* Desktop Menü */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 items-center">
          <a href="/" className="text-sm sm:text-base hover:underline">
            {t('navbar.home')}
          </a>
          <a href="/doktorlarimiz" className="text-sm sm:text-base hover:underline">
            {t('navbar.doctors')}
          </a>
          <a href="/sac-ekimi" className="text-sm sm:text-base hover:underline">
            {t('navbar.hair_transplant')}
          </a>
          <a href="/burun-estetigi" className="text-sm sm:text-base hover:underline">
            {t('navbar.rhinoplasty')}
          </a>
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="text-sm sm:text-base hover:underline focus:outline-none flex items-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-9h10v2H7z"/>
              </svg>
              {i18n.language === 'tr' ? 'TR' : 'EN'}
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded-lg shadow-lg">
                <button
                  onClick={() => changeLanguage('tr')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                >
                  Türkçe
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleLangMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-9h10v2H7z"/>
            </svg>
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block text-base hover:underline py-2">
            {t('navbar.home')}
          </a>
          <a href="/doktorlarimiz" className="block text-base hover:underline py-2">
            {t('navbar.doctors')}
          </a>
          <a href="/sac-ekimi" className="block text-base hover:underline py-2">
            {t('navbar.hair_transplant')}
          </a>
          <a href="/burun-estetigi" className="block text-base hover:underline py-2">
            {t('navbar.rhinoplasty')}
          </a>
        </div>
      )}

      {/* Mobil Dil Menüsü */}
      {isLangMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <button
            onClick={() => changeLanguage('tr')}
            className="block w-full text-left text-base hover:underline py-2"
          >
            Türkçe
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left text-base hover:underline py-2"
          >
            English
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
