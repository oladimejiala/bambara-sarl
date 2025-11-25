import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler, MapPin, Plane, Building2, Construction, Scale, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      path: '/services/structures',
      features: [
        t('language') === 'fr' ? 'Bâtiments industriels sur mesure' : 'Custom industrial buildings',
        t('language') === 'fr' ? 'Structures commerciales' : 'Commercial structures',
        t('language') === 'fr' ? 'Conception et fabrication' : 'Design and fabrication',
      ],
    },
    {
      icon: Construction,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/charpentes',
      features: [
        t('language') === 'fr' ? 'Charpentes métalliques robustes' : 'Robust metal frameworks',
        t('language') === 'fr' ? 'Installation professionnelle' : 'Professional installation',
        t('language') === 'fr' ? 'Solutions durables' : 'Durable solutions',
      ],
    },
    {
      icon: Ruler,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/menuiserie',
      features: [
        t('language') === 'fr' ? 'Portes et fenêtres métalliques' : 'Metal doors and windows',
        t('language') === 'fr' ? 'Garde-corps et balustrades' : 'Railings and balustrades',
        t('language') === 'fr' ? 'Travaux sur mesure' : 'Custom works',
      ],
    },
    {
      icon: Building2,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/hangars',
      features: [
        t('language') === 'fr' ? 'Hangars industriels' : 'Industrial warehouses',
        t('language') === 'fr' ? 'Entrepôts de stockage' : 'Storage facilities',
        t('language') === 'fr' ? 'Solutions clé en main' : 'Turnkey solutions',
      ],
    },
    {
      icon: Construction,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/toiture',
      features: [
        t('language') === 'fr' ? 'Toitures métalliques' : 'Metal roofing',
        t('language') === 'fr' ? 'Systèmes de couverture' : 'Coverage systems',
        t('language') === 'fr' ? 'Étanchéité garantie' : 'Guaranteed waterproofing',
      ],
    },
    {
      icon: Scale,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/renovation',
      features: [
        t('language') === 'fr' ? 'Rénovation de structures' : 'Structure renovation',
        t('language') === 'fr' ? 'Modernisation' : 'Modernization',
        t('language') === 'fr' ? 'Renforcement métallique' : 'Metal reinforcement',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="h-14 w-14 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.path}>
                  <Button variant="default" className="w-full">
                    {t('services.learnmore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
