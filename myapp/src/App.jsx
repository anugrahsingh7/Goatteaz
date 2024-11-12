import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Home from './components/Home';
import Loader from './components/Loader';

function App() {
  const cursorRef = useRef(null);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        requestAnimationFrame(() => {
          cursorRef.current.style.left = `${x}px`;
          cursorRef.current.style.top = `${y}px`;
        });
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    // Only start modal timer after loading is complete
    if (!isLoading) {
      const modalTimer = setTimeout(() => {
        if (modalRef.current) {
          setIsModalOpen(true);
          
          gsap.fromTo(modalRef.current,
            {
              opacity: 0,
              y: 100,
              scale: 0.8,
              rotateX: -45
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.8)",
              visibility: 'visible'
            }
          );
        }
      }, 5500);

      return () => clearTimeout(modalTimer);
    }

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [isLoading]);

  // Enhanced close animation
  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -30,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => setIsModalOpen(false)
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <main className='w-screen h-screen bg-black text-white'>
          <div 
            ref={cursorRef}
            className="fixed w-5 h-5 bg-white rounded-full pointer-events-none mix-blend-difference z-[9999]"
            style={{ 
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.2s ease-out, top 0.2s ease-out'
            }}
          />
          <Home/>
          
          {/* Updated Modal with initial styles */}
          <div 
            ref={modalRef}
            className="fixed bottom-4 right-4 bg-zinc-900 bg-opacity-70 backdrop-blur-lg p-6 rounded-2xl max-w-sm shadow-lg"
            style={{ 
              opacity: 0,  // Start hidden
              visibility: isModalOpen ? 'visible' : 'hidden',  // Manage visibility
              pointerEvents: isModalOpen ? 'auto' : 'none'    // Disable interactions when hidden
            }}
          >
            <p className="text-md mb-4 leading-relaxed">
              Join over 25,000 fact fanatics who explore the world's most goated facts every day! 
              From ancient mysteries to modern marvels, GoatTeaz has uncovered 10,000+ mind-blowing 
              truths so far—and we're just getting started!
            </p>
            <div className="flex justify-between items-center">
              <button 
                onClick={() => {
                  closeModal();
                  href = "/"; // Replace with your actual link
                }}
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white active:scale-95 transition-colors"
              >
                Join Now
              </button>
              <button 
                onClick={closeModal}
                className="text-red-500 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
