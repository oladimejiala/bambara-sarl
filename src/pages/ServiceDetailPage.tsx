import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { t, language } = useLanguage();

  const serviceDetails: Record<string, any> = {
    topographie: {
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      fullDescription:
        language === 'fr'
          ? "Nos services de topographie et cartographie s'appuient sur des équipements de dernière génération pour vous garantir des relevés d'une précision exceptionnelle. Que ce soit pour un projet de construction, d'aménagement ou de délimitation, nous mettons notre expertise technique au service de vos besoins."
          : 'Our surveying and mapping services rely on state-of-the-art equipment to guarantee exceptionally accurate surveys. Whether for construction, development or delimitation projects, we put our technical expertise at your service.',
      benefits: [
        language === 'fr' ? 'Relevés topographiques au GPS RTK haute précision' : 'High-precision GPS RTK topographic surveys',
        language === 'fr' ? 'Plans topographiques numériques et géoréférencés' : 'Digital and georeferenced topographic plans',
        language === 'fr' ? 'Modélisation numérique de terrain (MNT/MNS)' : 'Digital terrain modeling (DTM/DSM)',
        language === 'fr' ? 'Implantation et piquetage de projet' : 'Project layout and staking',
        language === 'fr' ? 'Intégration SIG et géolocalisation' : 'GIS integration and geolocation',
      ],
      applications: [
        language === 'fr' ? 'Projets de construction et BTP' : 'Construction and public works projects',
        language === 'fr' ? 'Aménagements fonciers et lotissements' : 'Land development and subdivisions',
        language === 'fr' ? 'Infrastructures routières et VRD' : 'Road infrastructure and civil works',
        language === 'fr' ? 'Études environnementales' : 'Environmental studies',
      ],
    },
    bornage: {
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      fullDescription:
        language === 'fr'
          ? "Le bornage est un acte juridique fondamental qui établit les limites exactes d'une propriété. Nos géomètres-experts certifiés réalisent des opérations de bornage conformes à la réglementation, qu'il s'agisse de bornage amiable ou judiciaire."
          : 'Boundary marking is a fundamental legal act that establishes the exact limits of a property. Our certified expert surveyors carry out boundary marking operations in accordance with regulations, whether amicable or judicial.',
      benefits: [
        language === 'fr' ? 'Délimitation légale et officielle des propriétés' : 'Legal and official property delimitation',
        language === 'fr' ? 'Certificats de mesurage et de bornage' : 'Measurement and boundary certificates',
        language === 'fr' ? 'Bornage amiable entre voisins' : 'Amicable boundary marking between neighbors',
        language === 'fr' ? 'Bornage judiciaire en cas de litige' : 'Judicial boundary marking in case of dispute',
        language === 'fr' ? "Plans de division et de lotissement" : 'Division and subdivision plans',
      ],
      applications: [
        language === 'fr' ? 'Achat ou vente de terrain' : 'Land purchase or sale',
        language === 'fr' ? 'Projet de construction' : 'Construction project',
        language === 'fr' ? 'Règlement de litiges fonciers' : 'Settlement of land disputes',
        language === 'fr' ? 'Succession et héritage' : 'Succession and inheritance',
      ],
    },
    drone: {
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      fullDescription:
        language === 'fr'
          ? "La photogrammétrie par drone révolutionne la cartographie et l'acquisition de données terrain. Nous utilisons des drones professionnels équipés de capteurs haute résolution pour réaliser des levés aériens rapides, précis et économiques."
          : 'Drone photogrammetry is revolutionizing mapping and terrain data acquisition. We use professional drones equipped with high-resolution sensors to carry out fast, accurate and economical aerial surveys.',
      benefits: [
        language === 'fr' ? 'Levés aériens rapides de grandes surfaces' : 'Fast aerial surveys of large areas',
        language === 'fr' ? 'Orthophotos haute résolution (jusqu\'à 2 cm/pixel)' : 'High-resolution orthophotos (up to 2 cm/pixel)',
        language === 'fr' ? 'Modèles 3D et nuages de points' : '3D models and point clouds',
        language === 'fr' ? 'Inspection d\'infrastructures et bâtiments' : 'Infrastructure and building inspection',
        language === 'fr' ? 'Suivi de chantier et métrés' : 'Site monitoring and quantity surveying',
      ],
      applications: [
        language === 'fr' ? 'Agriculture de précision' : 'Precision agriculture',
        language === 'fr' ? 'Carrières et mines' : 'Quarries and mines',
        language === 'fr' ? 'Suivi environnemental' : 'Environmental monitoring',
        language === 'fr' ? 'Cartographie urbaine' : 'Urban mapping',
      ],
    },
    urbanisme: {
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      fullDescription:
        language === 'fr'
          ? "L'aménagement du territoire et l'urbanisme requièrent une vision stratégique et une expertise technique approfondie. Nous accompagnons les collectivités, promoteurs et particuliers dans la conception et la réalisation de leurs projets d'aménagement."
          : 'Spatial planning and urbanism require strategic vision and in-depth technical expertise. We support communities, developers and individuals in designing and implementing their development projects.',
      benefits: [
        language === 'fr' ? "Plans directeurs d'urbanisme" : 'Urban master plans',
        language === 'fr' ? 'Études de lotissement et division foncière' : 'Subdivision and land division studies',
        language === 'fr' ? "Schémas d'aménagement communal" : 'Municipal planning schemes',
        language === 'fr' ? 'Zonage et règlements d\'urbanisme' : 'Zoning and urban planning regulations',
        language === 'fr' ? 'Plans d\'occupation des sols' : 'Land use plans',
      ],
      applications: [
        language === 'fr' ? 'Développement urbain' : 'Urban development',
        language === 'fr' ? 'Zones d\'activités économiques' : 'Economic activity zones',
        language === 'fr' ? 'Lotissements résidentiels' : 'Residential subdivisions',
        language === 'fr' ? 'Aménagements touristiques' : 'Tourist developments',
      ],
    },
    vrd: {
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      fullDescription:
        language === 'fr'
          ? "Les études VRD (Voirie et Réseaux Divers) sont essentielles pour tout projet d'aménagement. Nous concevons des solutions d'infrastructure complètes incluant voirie, assainissement, réseaux d'eau et électricité."
          : 'Civil works studies are essential for any development project. We design comprehensive infrastructure solutions including roads, sanitation, water and electricity networks.',
      benefits: [
        language === 'fr' ? 'Études de voirie et tracés routiers' : 'Road studies and road layouts',
        language === 'fr' ? "Plans de réseaux d'eau potable" : 'Drinking water network plans',
        language === 'fr' ? 'Systèmes d\'assainissement et drainage' : 'Sanitation and drainage systems',
        language === 'fr' ? 'Plans de réseaux électriques et télécom' : 'Electrical and telecom network plans',
        language === 'fr' ? 'Plans de récolement et DOE' : 'As-built plans and DOE',
      ],
      applications: [
        language === 'fr' ? 'Lotissements et zones résidentielles' : 'Subdivisions and residential areas',
        language === 'fr' ? 'Zones industrielles' : 'Industrial zones',
        language === 'fr' ? 'Projets routiers' : 'Road projects',
        language === 'fr' ? 'Équipements publics' : 'Public facilities',
      ],
    },
    conseil: {
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      fullDescription:
        language === 'fr'
          ? "Notre expertise foncière et juridique vous permet de sécuriser vos opérations immobilières et de résoudre les litiges complexes. Nous vous accompagnons avec des conseils techniques et stratégiques adaptés à vos enjeux."
          : 'Our land and legal expertise allows you to secure your real estate operations and resolve complex disputes. We support you with technical and strategic advice tailored to your challenges.',
      benefits: [
        language === 'fr' ? 'Expertise technique et juridique foncière' : 'Technical and legal land expertise',
        language === 'fr' ? 'Due diligence immobilière' : 'Real estate due diligence',
        language === 'fr' ? 'Assistance aux litiges fonciers' : 'Assistance with land disputes',
        language === 'fr' ? 'Conseil en stratégie foncière' : 'Land strategy consulting',
        language === 'fr' ? 'Évaluation de biens immobiliers' : 'Real estate valuation',
      ],
      applications: [
        language === 'fr' ? 'Transactions immobilières' : 'Real estate transactions',
        language === 'fr' ? 'Litiges de propriété' : 'Property disputes',
        language === 'fr' ? 'Gestion de patrimoine foncier' : 'Land asset management',
        language === 'fr' ? 'Investissements fonciers' : 'Land investments',
      ],
    },
  };

  const service = serviceDetails[serviceId || 'topographie'];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <Link to="/services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux services' : 'Back to services'}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>

          {/* Full Description */}
          <Card className="mb-8 shadow-soft animate-scale-in">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{service.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Nos Prestations' : 'Our Services'}
            </h2>
            <Card className="shadow-soft">
              <CardContent className="pt-6 pb-6">
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Applications */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Applications' : 'Applications'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.applications.map((app: string, index: number) => (
                <Card key={index} className="shadow-soft hover:shadow-elevated transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-muted-foreground font-medium">{app}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-hero text-white shadow-elevated animate-scale-in">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fr'
                  ? 'Besoin de ce service ?'
                  : 'Need this service?'}
              </h3>
              <p className="mb-6 text-white/90">
                {language === 'fr'
                  ? 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.'
                  : 'Contact us to discuss your project and get a personalized quote.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    {t('cta.quoterequest')}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.location.href = 'tel:01978890901'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('cta.callnow')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
