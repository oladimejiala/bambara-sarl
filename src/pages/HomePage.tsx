import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MapPin,
  Ruler,
  Plane,
  Building2,
  Construction,
  Scale,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import heroImage from '@/assets/hero-surveying.jpg';
import servicesImage from '@/assets/services-aerial.jpg';

const HomePage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      path: '/services/structures',
    },
    {
      icon: Construction,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/charpentes',
    },
    {
      icon: Ruler,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/menuiserie',
    },
    {
      icon: Building2,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/hangars',
    },
    {
      icon: Construction,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/toiture',
    },
    {
      icon: Scale,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/renovation',
    },
  ];

  const achievements = [
    { icon: Building2, value: '+50000m²', label: t('achievements.hectares') },
    { icon: MapPin, value: '15', label: t('achievements.communes') },
    { icon: Users, value: '100+', label: t('achievements.clients') },
    { icon: TrendingUp, value: '99.9%', label: t('achievements.accuracy') },
  ];

  const trustBadges = [
    { icon: Award, text: t('trust.member') },
    { icon: CheckCircle2, text: t('trust.experience') },
    { icon: Users, text: t('trust.projects') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            NOCOMETAB BTP
          </h1>
          <p className="text-xl md:text-3xl mb-4 font-semibold">
            {t('hero.title')}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                {t('hero.cta.quote')}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('hero.cta.chat')}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <badge.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary font-semibold mb-6 italic">
              {t('about.mission')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { key: 'integrity', icon: Award },
                { key: 'accuracy', icon: CheckCircle2 },
                { key: 'innovation', icon: TrendingUp },
                { key: 'sustainability', icon: Building2 },
              ].map((value) => (
                <Card key={value.key} className="hover:shadow-elevated transition-shadow duration-300">
                  <CardContent className="pt-6 pb-6 flex flex-col items-center">
                    <value.icon className="h-8 w-8 text-primary mb-3" />
                    <p className="font-semibold text-sm">
                      {t(`about.value.${value.key}`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="h-14 w-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.path}>
                    <Button variant="link" className="p-0 h-auto">
                      {t('services.learnmore')} →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 96, 174, 0.9), rgba(33, 96, 174, 0.9)), url(${servicesImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('achievements.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center text-white animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.value}
                </div>
                <p className="text-sm md:text-base">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elevated">
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('contact.subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <Phone className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                    <a
                      href="tel:01978890901"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      01 97 88 90 01
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:contact@ozoneconseil.bj"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      contact@ozoneconseil.bj
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">{t('contact.hours')}</p>
                    <p className="font-semibold text-foreground text-sm">
                      {t('contact.hours.weekday')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      {t('cta.quoterequest')}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://wa.me/+22997889001', '_blank')}
                  >
                    {t('cta.whatsapp')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
