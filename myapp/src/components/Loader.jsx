import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Loader = ({ onLoadingComplete }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the loader
        gsap.to('.loader-container', {
          opacity: 0,
          duration: 0.7,
          onComplete: () => {
            if (onLoadingComplete) onLoadingComplete();
          }
        });
      }
    });

    tl.to(textRef.current, {
      duration: 3,
      text: "Goateaz is created with passion and creativity!",
      ease: "none",
    });

  }, [onLoadingComplete]);

  return (
    <div className="loader-container fixed inset-0 bg-black flex items-center justify-center z-50">
      <div 
        ref={textRef}
        className="text-white text-4xl font-bold"
      ></div>
    </div>
  );
};

export default Loader; 