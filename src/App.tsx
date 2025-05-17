import React from 'react';
import { StarBackground } from './StarBackground';
import { Youtube, Instagram, Twitter, Linkedin, Mail, type LucideProps, BotIcon } from 'lucide-react';

// --- Definición del componente Card ---
interface CardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  link: string;
  animationDelay?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  animationDelay = '0s',
}) => {
  return (
    <div
      className="bg-black/70 backdrop-blur-md rounded-xl animate-fade-in w-full hover:bg-black/80 transition-colors duration-300"
      style={{ animationDelay }}
    >
      <div className="flex items-center p-4">
        <div className="mr-4 flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="flex-grow mr-3">
          <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
          <p className="text-xs text-slate-400">{description}</p>
        </div>
        <a
          href={link}
          className="flex-shrink-0"
          target={link.startsWith('#') ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 bg-black/40 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

// Data for the content cards
const cardData = [
  {
    id: 'newsletter',
    icon: Mail,
    title: 'Newsletter',
    description: 'Receive emails with valuable knowledge.',
    link: '#newsletter-signup',
    animationDelay: '0.2s',
  },
  {
    id: 'visionai',
    icon: BotIcon,
    title: 'VisionAI',
    description: 'Discover my AI business.',
    link: 'https://visionai.es/',
    animationDelay: '0.4s',
  },
];

// Social media links data
const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    url: '#youtube',
    username: '@SOON',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/obonhector/',
    username: '@obonhector',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/obonhector',
    username: '@obonhector',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/hector-obon/?originalSubdomain=es',
    username: '@obonhector',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* StarBackground component for the animated background */}
      <StarBackground />

      {/* Main content container */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="container mx-auto max-w-md">
          {/* Header Section */}
          <header className="mb-8 animate-fade-in text-center">
            <img 
              src="/logohector.png" 
              alt="Hector Obon Logo" 
              className="mx-auto mb-4 md:mb-6 h-12 w-12 md:h-16 md:w-16 animate-float"
            />
            <h1 className="text-4xl font-bold text-white mb-3">
              Hector Obon
            </h1>
            <p className="text-base text-slate-400 mb-6">
              Eyes on the stars. Mind in the game.
            </p>
            
            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 justify-items-center mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-slate-300 hover:text-primary transition-colors duration-300 group px-2 py-1 rounded-md bg-black/30 w-full justify-center"
                  aria-label={`Hector Obon on ${social.name}`}
                >
                  <div className="rounded-lg p-2 flex items-center">
                    <social.icon className="h-4 w-4 text-white" />
                    <span className="text-xs text-white ml-1">{social.username.split('@')[1]}</span>
                  </div>
                </a>
              ))}
            </div>
          </header>

          {/* Content Sections - Cards */}
          <section className="grid grid-cols-1 gap-4 w-full">
            {cardData.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                animationDelay={card.animationDelay}
              />
            ))}
          </section>

          {/* Footer Section */}
          <footer className="mt-8 pt-4 text-center text-xs text-slate-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p>© {new Date().getFullYear()} Hector Obon</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;