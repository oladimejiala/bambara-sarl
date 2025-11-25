import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero
  'hero.title': { fr: "Excellence en Construction Métallique", en: 'Excellence in Metal Construction' },
  'hero.subtitle': { fr: 'Qualité, Durabilité, et Innovation pour tous vos projets de construction métallique.', en: 'Quality, Durability, and Innovation for all your metal construction projects.' },
  'hero.cta.quote': { fr: 'Demandez un devis', en: 'Request a Quote' },
  'hero.cta.chat': { fr: 'Chattez avec un Expert Maintenant', en: 'Chat with an Expert Now' },
  
  // Trust badges
  'trust.member': { fr: "Expert en Construction Métallique", en: 'Metal Construction Expert' },
  'trust.experience': { fr: "+10 ans d'expérience", en: '+10 Years Experience' },
  'trust.projects': { fr: '100+ projets réussis', en: '100+ Successful Projects' },
  
  // About
  'about.title': { fr: 'À Propos de Nous', en: 'About Us' },
  'about.mission': { fr: 'Notre mission : construire avec excellence et durabilité.', en: 'Our mission: building with excellence and sustainability.' },
  'about.description': { fr: "NOCOMETAB BTP est une entreprise spécialisée en construction métallique basée à Kindonou, Cotonou, Bénin. Avec plus de 10 ans d'expérience, nous offrons des solutions complètes en structures métalliques, charpentes, et aménagements industriels.", en: 'NOCOMETAB BTP is a metal construction company based in Kindonou, Cotonou, Benin. With over 10 years of experience, we offer comprehensive solutions in metal structures, frameworks, and industrial installations.' },
  'about.values': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.value.integrity': { fr: 'Intégrité', en: 'Integrity' },
  'about.value.accuracy': { fr: 'Précision', en: 'Accuracy' },
  'about.value.innovation': { fr: 'Innovation', en: 'Innovation' },
  'about.value.sustainability': { fr: 'Durabilité', en: 'Sustainability' },
  
  // Services
  'services.title': { fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': { fr: 'Des solutions de construction métallique adaptées à tous vos besoins', en: 'Metal construction solutions tailored to all your needs' },
  'services.learnmore': { fr: 'En savoir plus', en: 'Learn More' },
  
  'service.topo.title': { fr: 'Structures Métalliques', en: 'Metal Structures' },
  'service.topo.desc': { fr: 'Conception et fabrication de structures métalliques sur mesure pour bâtiments industriels et commerciaux.', en: 'Design and fabrication of custom metal structures for industrial and commercial buildings.' },
  
  'service.bornage.title': { fr: 'Charpentes Métalliques', en: 'Metal Frameworks' },
  'service.bornage.desc': { fr: 'Charpentes robustes et durables pour tous types de constructions.', en: 'Robust and durable frameworks for all types of constructions.' },
  
  'service.drone.title': { fr: 'Menuiserie Métallique', en: 'Metal Joinery' },
  'service.drone.desc': { fr: 'Portes, fenêtres, garde-corps et tous travaux de menuiserie métallique.', en: 'Doors, windows, railings and all metal joinery works.' },
  
  'service.urbanisme.title': { fr: 'Hangars & Entrepôts', en: 'Warehouses & Storage' },
  'service.urbanisme.desc': { fr: "Construction de hangars industriels et entrepôts métalliques.", en: 'Construction of industrial warehouses and metal storage facilities.' },
  
  'service.vrd.title': { fr: 'Toiture & Couverture', en: 'Roofing & Coverage' },
  'service.vrd.desc': { fr: "Installation de toitures métalliques et systèmes de couverture.", en: 'Installation of metal roofing and coverage systems.' },
  
  'service.conseil.title': { fr: 'Aménagement & Rénovation', en: 'Renovation & Refurbishment' },
  'service.conseil.desc': { fr: 'Rénovation et aménagement de structures métalliques existantes.', en: 'Renovation and refurbishment of existing metal structures.' },
  
  // Achievements
  'achievements.title': { fr: 'Nos Réalisations', en: 'Our Achievements' },
  'achievements.hectares': { fr: '+50000m² construits', en: '+50000m² Built' },
  'achievements.communes': { fr: '15 villes desservies', en: '15 Cities Served' },
  'achievements.clients': { fr: '100+ clients satisfaits', en: '100+ Satisfied Clients' },
  'achievements.accuracy': { fr: '99.9% de satisfaction', en: '99.9% Satisfaction' },
  
  // Partners
  'partners.title': { fr: 'Nos Partenaires', en: 'Our Partners' },
  'partners.subtitle': { fr: 'Nous collaborons avec les meilleures entreprises', en: 'We collaborate with the best companies' },
  'partners.cta': { fr: 'Rejoignez notre réseau de partenaires', en: 'Join Our Partner Network' },
  
  // Testimonials
  'testimonials.title': { fr: 'Témoignages Clients', en: 'Client Testimonials' },
  
  // Contact
  'contact.title': { fr: 'Contactez-Nous', en: 'Contact Us' },
  'contact.subtitle': { fr: 'Discutons de votre projet', en: "Let's discuss your project" },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.form.project': { fr: 'Type de Projet', en: 'Project Type' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.submit': { fr: 'Envoyer', en: 'Send' },
  'contact.address': { fr: 'Adresse', en: 'Address' },
  'contact.hours': { fr: "Heures d'ouverture", en: 'Business Hours' },
  'contact.hours.weekday': { fr: 'Lun - Ven: 8h00 - 17h00', en: 'Mon - Fri: 8:00 AM - 5:00 PM' },
  'contact.hours.saturday': { fr: 'Sam: 9h00 - 13h00', en: 'Sat: 9:00 AM - 1:00 PM' },
  
  // Footer
  'footer.about': { fr: 'À Propos', en: 'About' },
  'footer.description': { fr: 'Expert en Construction Métallique', en: 'Metal Construction Expert' },
  'footer.quicklinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  
  // CTA
  'cta.callnow': { fr: 'Appelez Maintenant', en: 'Call Now' },
  'cta.whatsapp': { fr: 'WhatsApp', en: 'WhatsApp' },
  'cta.quoterequest': { fr: 'Demande de Devis', en: 'Quote Request' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
