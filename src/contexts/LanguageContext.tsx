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
  'hero.title': { fr: "Excellence en Plans et Dessins Techniques", en: 'Excellence in Blueprints and Technical Drawings' },
  'hero.subtitle': { fr: 'Précision, Professionnalisme, et Innovation pour tous vos projets de construction.', en: 'Precision, Professionalism, and Innovation for all your construction projects.' },
  'hero.cta.quote': { fr: 'Demandez un devis', en: 'Request a Quote' },
  'hero.cta.chat': { fr: 'Chattez avec un Expert Maintenant', en: 'Chat with an Expert Now' },
  
  // Trust badges
  'trust.member': { fr: "Expert en Plans Techniques", en: 'Technical Drawing Expert' },
  'trust.experience': { fr: "+10 ans d'expérience", en: '+10 Years Experience' },
  'trust.projects': { fr: '100+ projets réussis', en: '100+ Successful Projects' },
  
  // About
  'about.title': { fr: 'À Propos de Nous', en: 'About Us' },
  'about.mission': { fr: 'Notre mission : dessiner votre avenir avec précision.', en: 'Our mission: drawing your future with precision.' },
  'about.description': { fr: "Entreprise BTP BAMBARA Sarl est une entreprise spécialisée en plans et dessins techniques basée à Cotonou, Bénin. Avec plus de 10 ans d'expérience, nous offrons des solutions complètes en plans d'architecture, dessins techniques, permis de construire, et plans de site.", en: 'Entreprise BTP BAMBARA Sarl is a technical drawing company based in Cotonou, Benin. With over 10 years of experience, we offer comprehensive solutions in architectural plans, technical drawings, building permits, and site plans.' },
  'about.values': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.value.integrity': { fr: 'Intégrité', en: 'Integrity' },
  'about.value.accuracy': { fr: 'Précision', en: 'Accuracy' },
  'about.value.innovation': { fr: 'Innovation', en: 'Innovation' },
  'about.value.sustainability': { fr: 'Durabilité', en: 'Sustainability' },
  
  // Services
  'services.title': { fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': { fr: 'Des solutions de plans techniques adaptées à tous vos besoins', en: 'Technical drawing solutions tailored to all your needs' },
  'services.learnmore': { fr: 'En savoir plus', en: 'Learn More' },
  
  'service.topo.title': { fr: 'Plans d\'Architecture', en: 'Architectural Plans' },
  'service.topo.desc': { fr: 'Conception de plans architecturaux détaillés pour bâtiments résidentiels et commerciaux.', en: 'Design of detailed architectural plans for residential and commercial buildings.' },
  
  'service.bornage.title': { fr: 'Dessins Techniques', en: 'Technical Drawings' },
  'service.bornage.desc': { fr: 'Dessins techniques précis pour tous types de projets de construction.', en: 'Precise technical drawings for all types of construction projects.' },
  
  'service.drone.title': { fr: 'Permis de Construire', en: 'Building Permits' },
  'service.drone.desc': { fr: 'Préparation de dossiers complets pour permis de construire et autorisations.', en: 'Preparation of complete files for building permits and authorizations.' },
  
  'service.urbanisme.title': { fr: 'Plans de Site', en: 'Site Plans' },
  'service.urbanisme.desc': { fr: "Élaboration de plans de site détaillés et plans d'implantation.", en: 'Development of detailed site plans and layout plans.' },
  
  'service.vrd.title': { fr: 'Modélisation 3D', en: '3D Modeling' },
  'service.vrd.desc': { fr: "Modélisation 3D de vos projets pour une visualisation réaliste.", en: '3D modeling of your projects for realistic visualization.' },
  
  'service.conseil.title': { fr: 'Plans de Rénovation', en: 'Renovation Plans' },
  'service.conseil.desc': { fr: 'Plans détaillés pour projets de rénovation et modification de bâtiments.', en: 'Detailed plans for renovation projects and building modifications.' },
  
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
  'footer.description': { fr: 'Expert en Plans Techniques', en: 'Technical Drawing Expert' },
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
