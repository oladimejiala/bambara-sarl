import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const whatsappNumber = '+22995954663';
  const defaultMessage = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos services de construction métallique.');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="accent"
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full p-0 shadow-elevated hover:scale-110 transition-transform duration-300 md:h-auto md:w-auto md:rounded-md md:px-6"
      aria-label={t('cta.whatsapp')}
    >
      <MessageCircle className="h-6 w-6 md:mr-2" />
      <span className="hidden md:inline">{t('hero.cta.chat')}</span>
    </Button>
  );
};

export default WhatsAppButton;
