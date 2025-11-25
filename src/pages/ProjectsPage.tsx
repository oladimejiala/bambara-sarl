import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, Ruler, Building2, Users, TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Building2, value: '+50000m²', label: t('achievements.hectares'), color: 'text-blue-600' },
    { icon: MapPin, value: '15', label: t('achievements.communes'), color: 'text-green-600' },
    { icon: Users, value: '100+', label: t('achievements.clients'), color: 'text-purple-600' },
    { icon: TrendingUp, value: '99.9%', label: t('achievements.accuracy'), color: 'text-amber-600' },
  ];

  const projects = [
    {
      title: t('language') === 'fr' ? 'Hangar Industriel - Zone Portuaire' : 'Industrial Warehouse - Port Area',
      location: 'Port de Cotonou',
      date: '2024',
      type: t('language') === 'fr' ? 'Structure Métallique' : 'Metal Structure',
      description:
        t('language') === 'fr'
          ? "Construction d'un hangar industriel de 2000m² pour stockage de marchandises avec structure métallique complète."
          : 'Construction of a 2000m² industrial warehouse for goods storage with complete metal structure.',
      stats: [
        { label: t('language') === 'fr' ? 'Surface' : 'Area', value: '2000 m²' },
        { label: t('language') === 'fr' ? 'Hauteur' : 'Height', value: '12 mètres' },
      ],
    },
    {
      title: t('language') === 'fr' ? 'Charpente Métallique - Centre Commercial' : 'Metal Framework - Shopping Center',
      location: 'Akpakpa, Cotonou',
      date: '2024',
      type: t('language') === 'fr' ? 'Charpente' : 'Framework',
      description:
        t('language') === 'fr'
          ? "Installation d'une charpente métallique moderne pour un centre commercial avec toiture en bac acier."
          : 'Installation of a modern metal framework for a shopping center with steel deck roofing.',
      stats: [
        { label: t('language') === 'fr' ? 'Surface' : 'Area', value: '1500 m²' },
        { label: t('language') === 'fr' ? 'Portée' : 'Span', value: '25 mètres' },
      ],
    },
    {
      title: t('language') === 'fr' ? 'Menuiserie Métallique - Immeuble Résidentiel' : 'Metal Joinery - Residential Building',
      location: 'Abomey-Calavi',
      date: '2023',
      type: t('language') === 'fr' ? 'Menuiserie' : 'Joinery',
      description:
        t('language') === 'fr'
          ? "Fourniture et installation de portes, fenêtres et garde-corps métalliques pour un immeuble de 5 étages."
          : 'Supply and installation of metal doors, windows and railings for a 5-story building.',
      stats: [
        { label: t('language') === 'fr' ? 'Portes' : 'Doors', value: '60' },
        { label: t('language') === 'fr' ? 'Fenêtres' : 'Windows', value: '120' },
      ],
    },
    {
      title:
        t('language') === 'fr'
          ? 'Toiture Métallique - Complexe Scolaire'
          : 'Metal Roofing - School Complex',
      location: 'Sèmè-Kpodji',
      date: '2023',
      type: t('language') === 'fr' ? 'Couverture' : 'Roofing',
      description:
        t('language') === 'fr'
          ? "Réalisation de la toiture métallique complète d'un complexe scolaire avec système d'étanchéité."
          : 'Complete metal roofing of a school complex with waterproofing system.',
      stats: [
        { label: t('language') === 'fr' ? 'Surface couverte' : 'Covered Area', value: '3000 m²' },
        { label: t('language') === 'fr' ? 'Durée' : 'Duration', value: '3 mois' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('achievements.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('language') === 'fr'
              ? 'Découvrez nos projets réalisés avec succès à travers le Bénin'
              : 'Discover our successfully completed projects across Benin'}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <achievement.icon className={`h-10 w-10 ${achievement.color} mx-auto mb-3`} />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
            {t('language') === 'fr' ? 'Projets Récents' : 'Recent Projects'}
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary">{project.type}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.date}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>

                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="lg:border-l lg:pl-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        {t('language') === 'fr' ? 'Données Clés' : 'Key Data'}
                      </h4>
                      <div className="space-y-3">
                        {project.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
