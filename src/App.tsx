import React from 'react';
import { StarBackground } from './StarBackground';
// No importamos Card desde './components/Card' porque ahora está definido aquí abajo
import { Youtube, Instagram, Twitter, Linkedin, Mail, type LucideProps, BotIcon } from 'lucide-react';

// --- Definición del componente Card ---
interface CardProps {
  icon: React.ElementType<LucideProps>; // Use ElementType for component icons
  title: string;
  description: string;
  buttonText: string;
  link: string;
  animationDelay?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon, // Rename to Icon for use as a component
  title,
  description,
  buttonText,
  link,
  animationDelay = '0s',
}) => {
  return (
    <div
      className="bg-card/70 dark:bg-card/70 backdrop-blur-md gradient-border animate-fade-in w-full card-hover" // Se eliminó p-5 sm:p-6 porque se aplica en el div interno por gradient-border
      style={{ animationDelay }}
    >
      {/* El div interno ahora tiene el padding y el fondo para que funcione el gradient-border */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        </div>
        <div className="flex-grow mb-4 sm:mb-0">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">{description}</p>
        </div>
        <a
          href={link}
          className="cosmic-button mt-2 sm:mt-0 flex-shrink-0 text-sm px-4 py-2"
          target={link.startsWith('#') ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
// --- Fin de la definición del componente Card ---


// Data for the content cards
const cardData = [
  {
    id: 'newsletter',
    icon: Mail,
    title: 'Newsletter',
    description: 'Receive emails with valuable knowledge.',
    buttonText: 'Sign Up',
    link: '#newsletter-signup', // Placeholder link
    animationDelay: '0.2s',
  },
  {
    id: 'visionai',
    icon: BotIcon,
    title: 'VisionAI',
    description: 'Discover my AI business.',
    buttonText: 'Learn More',
    link: 'https://visionai.es/', // Reemplaza con tu playlist real
    animationDelay: '0.4s',
  },
];

// Social media links data - CORREGIDO: URLs sin formato Markdown
const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    url: '[https://www.youtube.com/@AlThinkTank', // Reemplaza con tu URL real
    username: '@obonhector',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/obonhector/', // Reemplaza con tu URL real
    username: '@obonhector',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/obonhector', // Reemplaza con tu URL real
    username: '@obonhector',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/hector-obon/?originalSubdomain=es', // Reemplaza con tu URL real
    username: '@obonhector',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* StarBackground component for the animated background */}
      <StarBackground />

      {/* Main content container */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 selection:bg-primary/40 selection:text-white">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Header Section */}
          <header className="mb-12 md:mb-16 animate-fade-in">
            <img 
              src="/logohector.png" 
              alt="Hector Obon Logo" 
              className="mx-auto mb-4 md:mb-6 h-12 w-12 md:h-16 md:w-16 animate-float"
            />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-glow mb-3 md:mb-4">
              Hector Obon
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8">
              
            </p>
            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-slate-300 hover:text-primary transition-colors duration-300 group"
                  aria-label={`Hector Obon on ${social.name}`}
                >
                  <social.icon className="h-5 w-5 md:h-6 md:w-6 mr-2 group-hover:scale-110 transition-transform" />
                  {social.username}
                </a>
              ))}
            </div>
          </header>

          {/* Content Sections - Cards */}
          <section className="grid grid-cols-1 gap-6 md:gap-8 w-full">
            {cardData.map((card) => (
              // Usamos el componente Card definido arriba
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                link={card.link}
                animationDelay={card.animationDelay}
              />
            ))}
          </section>

          {/* Footer Section */}
          <footer className="mt-12 md:mt-16 pt-8 text-center text-sm text-slate-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p>© {new Date().getFullYear()} Hector Obon</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;