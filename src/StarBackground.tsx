
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
}

export const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    // Function to generate stars based on window size
    const generateStars = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 8000 // Adjusted density
      );
      const newStars: StarProps[] = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2.5 + 0.5, // Slightly smaller max size
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.4 + 0.3, // Less bright, more subtle
          animationDuration: Math.random() * 5 + 3, // Slower pulse
        });
      }
      setStars(newStars);
    };

    // Function to generate meteors
    const generateMeteors = () => {
      const numberOfMeteors = 5; // Consistent number of meteors
      const newMeteors: MeteorProps[] = [];
      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 1.5 + 0.5, // Smaller meteors
          x: Math.random() * 100, // Can start from anywhere horizontally
          y: Math.random() * 20 - 10, // Can start slightly off-screen top
          delay: Math.random() * 20, // Longer max delay for more spacing
          animationDuration: Math.random() * 2 + 2.5, // Faster meteors
        });
      }
      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors(); // Initial generation

    // Periodically regenerate meteors for continuous effect
    const meteorInterval = setInterval(generateMeteors, 15000); // Regenerate every 15 seconds

    // Handle window resize to regenerate stars
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener and interval
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

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
          }}
        />
      ))}
      {/* Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 70}px`, // Meteor tail length
            height: `${meteor.size}px`,   // Meteor thickness
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};