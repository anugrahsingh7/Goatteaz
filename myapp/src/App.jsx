import { useRef } from 'react';
import Home from './components/Home';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// gsap.registerPlugin(useGSAP);




function App() {
  // useGSAP(() => {
  //   // Your GSAP animations will go here
  //   gsap.to(".box", {
  //     x: 1200,
  //     duration: 1.5,
  //     delay: 1,
  //     ease: "power2.inOut",
  //   });
   
  // });

  return (
    <>
    <main className='w-screen h-screen bg-black text-white'>
      <Home/>
      
    </main>
    </>
  );
}

export default App
