import React, { useEffect, useState } from "react";

// Define interfaces for Star and Meteor properties for TypeScript
interface StarProps {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface MeteorProps {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
  angle: number;
}

export const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    // Function to generate stars based on window size
    const generateStars = () => {
      // Use a fixed number of stars based on screen size
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 8000
      );
      const newStars: StarProps[] = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2.5 + 0.5,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.4 + 0.3,
          animationDuration: Math.random() * 5 + 3,
        });
      }
      setStars(newStars);
    };

    // Function to generate meteors
    const generateMeteors = () => {
      const numberOfMeteors = 5;
      const newMeteors: MeteorProps[] = [];
      
      for (let i = 0; i < numberOfMeteors; i++) {
        // Generate random starting position
        const x = Math.random() * 100; // Random x position (0-100%)
        const y = Math.random() * 100; // Random y position (0-100%)
        
        // Generate random angle between 0 and 360 degrees
        const angle = Math.random() * 360;
        
        newMeteors.push({
          id: i,
          size: Math.random() * 1.5 + 0.5,
          x,
          y,
          delay: Math.random() * 20,
          animationDuration: Math.random() * 2 + 2.5,
          angle,
        });
      }
      setMeteors(newMeteors);
    };

    // Generate stars only once at component mount
    generateStars();
    generateMeteors();

    // Periodically regenerate only meteors for continuous effect
    const meteorInterval = setInterval(generateMeteors, 15000);

    // Cleanup function to remove interval
    return () => {
      clearInterval(meteorInterval);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Render stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            position: 'fixed', // Ensure stars stay fixed in place
          }}
        />
      ))}
      {/* Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 70}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            '--meteor-duration': `${meteor.animationDuration}s`,
            '--meteor-angle': `${meteor.angle}deg`,
            position: 'fixed', // Ensure meteors stay fixed in place
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};