import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('tr')} className="px-2 py-1 bg-gray-200 rounded">TR</button>
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 bg-gray-200 rounded">EN</button>
    </div>
  );
}

export default LanguageSelector;
