import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <h1>{t('title')}</h1>
            <div> 
                <button onClick={() => changeLanguage('fr-FR')} type="button">FR</button>
                <button onClick={() => changeLanguage('en-US')} type="button">EN</button>
            </div>
        </div>
    );
}

export default App;
