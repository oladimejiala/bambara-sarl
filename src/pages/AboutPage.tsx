import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Target, Users, TrendingUp, CheckCircle2, Building2, Shield } from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'integrity', icon: Shield, color: 'text-blue-600' },
    { key: 'accuracy', icon: CheckCircle2, color: 'text-green-600' },
    { key: 'innovation', icon: TrendingUp, color: 'text-purple-600' },
    { key: 'sustainability', icon: Building2, color: 'text-emerald-600' },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-primary font-semibold mb-6 italic max-w-3xl mx-auto">
            {t('about.mission')}
          </p>
        </div>

        {/* Company Description */}
        <Card className="max-w-4xl mx-auto mb-16 shadow-elevated animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('language') === 'fr'
                  ? "Experts en construction métallique, nous accompagnons les particuliers, les entreprises et les institutions dans la réalisation de leurs projets de bâtiments industriels, commerciaux et résidentiels."
                  : 'Metal construction experts, we support individuals, companies and institutions in carrying out their industrial, commercial and residential building projects.'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t('about.values')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.key}
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`about.value.${value.key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                   {value.key === 'integrity' &&
                      (t('language') === 'fr'
                        ? "Nous agissons avec transparence et professionnalisme dans tous nos projets."
                        : 'We act with transparency and professionalism in all our projects.')}
                    {value.key === 'accuracy' &&
                      (t('language') === 'fr'
                        ? 'La qualité et la précision sont au cœur de nos réalisations.'
                        : 'Quality and precision are at the heart of our achievements.')}
                    {value.key === 'innovation' &&
                      (t('language') === 'fr'
                        ? "Nous utilisons les techniques les plus modernes de construction métallique."
                        : 'We use the most modern metal construction techniques.')}
                    {value.key === 'sustainability' &&
                      (t('language') === 'fr'
                        ? 'Nous construisons des structures durables et résistantes.'
                        : 'We build durable and resistant structures.')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t('language') === 'fr' ? 'Pourquoi Nous Choisir ?' : 'Why Choose Us?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('language') === 'fr' ? 'Expertise Certifiée' : 'Certified Expertise',
                desc:
                  t('language') === 'fr'
                    ? "Constructeurs qualifiés avec plus de 10 ans d'expérience en métallurgie."
                    : 'Qualified builders with over 10 years of experience in metalwork.',
              },
              {
                icon: Target,
                title: t('language') === 'fr' ? 'Solutions Sur-Mesure' : 'Tailored Solutions',
                desc:
                  t('language') === 'fr'
                    ? 'Approche personnalisée adaptée à chaque projet de construction.'
                    : 'Personalized approach adapted to each construction project.',
              },
              {
                icon: Users,
                title: t('language') === 'fr' ? 'Service Client' : 'Customer Service',
                desc:
                  t('language') === 'fr'
                    ? 'Accompagnement continu du devis à la livraison.'
                    : 'Ongoing support from quote to delivery.',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-soft transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
