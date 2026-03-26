import { useTranslation } from 'react-i18next';

function PageTeste() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>Hello World</h1>
      <p>email: {t('save')}</p>
      <p>email: {t('cancel')}</p>
    </div>
  );
}

export default PageTeste;
