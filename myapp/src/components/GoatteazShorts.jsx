import { useState, useRef, useEffect } from "react";
import { HiArrowUpCircle, HiArrowDownCircle } from "react-icons/hi2";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { GoUnmute, GoMute } from "react-icons/go";

function GoatteazShorts() {
  const [currentShortIndex, setCurrentShortIndex] = useState(4); // Start from last video
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullDescription, setIsFullDescription] = useState(false);

  const videoRef = useRef(null);

  const shorts = [
    { 
      id: 1,
       videoUrl: "/src/assets/movies/short1.mp4", 
       description: `goatteaz Ever wondered what it takes to win an Oscar? Leonardo DiCaprio went all out, even eating raw bison liver in The Revenant, to finally take home his first Academy Award after six nominations!
If you're into jaw-dropping facts and behind-the-scenes stories, hit that follow button and join us at GoatedTea for more!`
       },
    { 
      id: 2, 
      videoUrl: "/src/assets/movies/short2.mp4", 
      description: `goatteaz Did you know Nickelodeon got its name from a *nickel*? $ Back in the day, a "nickelodeon" was an indoor theater where you could watch movies for just 5 cents! l Originally called *Pinwheel*, the channel rebranded to *Nickelodeon* in 1979, evolving with iconic animated series and live-action hits ever since. Talk about being "goated" in every kid's childhood memories! `
     },
    { 
      id: 3, 
      videoUrl: "/src/assets/movies/short3.mp4", 
      description: `goatteaz "Forget the parrot, you don't need predictions when you're Christopher Nolan
* The mastermind behind Memento and The Dark Knight doesn't just make movies-he bends reality with math. • His depiction of black holes in Interstellar was so accurate, scientists used it as a reference for the first black hole image in 2019! Nolan's secret? It's all about the numbers.` 
    },
    { 
      id: 4, 
      videoUrl: "/src/assets/movies/short4.mp4", 
      description: `goatteaz "From flop to top! Akshay Kumar's comeback story is proof that discipline and dedication can turn your career around. * He went from 14 consecutive flops to becoming the Khiladi of Bollywood! • Stay disciplined, stay tocused, and watch success follow.` 
    },
    { 
      id: 5, 
      videoUrl: "/src/assets/movies/short5.mp4", 
      description: `goatteaz "When big budgets meet tiny box office numbers Bollywood's GOATed flops remind us that fame isn't always enough to win over audiences! Will they ever make a comeback? `
    },
  ];

  const slicedDescription = shorts[currentShortIndex].description.split(" ").slice(0, 5).join(" ");
  const fullDescription = shorts[currentShortIndex].description;

  const toggleDescription = () => setIsFullDescription((prev) => !prev);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, currentShortIndex]);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      if (!isDragging && video) setProgress((video.currentTime / video.duration) * 100);
    };
    if (video) video.addEventListener("timeupdate", updateProgress);
    return () => video?.removeEventListener("timeupdate", updateProgress);
  }, [isDragging, currentShortIndex]);

  const handleNextShort = () => {
    if (currentShortIndex > 0) {
      setCurrentShortIndex((prev) => prev - 1); // Decrement index
      setIsPlaying(true);
    }
  };

  const handlePreviousShort = () => {
    if (currentShortIndex < shorts.length - 1) {
      setCurrentShortIndex((prev) => prev + 1); // Increment index
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    videoRef.current.muted = !isMuted;
  };

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <div className="h-[100vh]"
    id="shorts">
      <div className="h-[10vh] flex justify-center items-center mt-8">
        <h1 className="text-7xl font-bold text-white text-center">
          <span className="text-[#4acce7]">G</span>
          <span className="text-[#9c5bd0]">o</span>
          <span className="text-[#ea89b7]">a</span>
          <span className="text-[#f3dc91]">t</span>
          <span className="text-[#9c5bd0]">t</span>
          <span className="text-[#4acce7]">e</span>
          <span className="text-[#ef37a6]">a</span>
          <span className="text-[#e3ff5a]">z</span>
          <span> </span>
          <span className="text-[#f3dc91]">S</span>
          <span className="text-[#9c5bd0]">h</span>
          <span className="text-[#4acce7]">o</span>
          <span className="text-[#f3dc91]">r</span>
          <span className="text-[#e3ff5a]">t</span>
          <span className="text-[#ea89b7]">s</span>
        </h1>
      </div>

      <div className="bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.05),rgba(34,211,238,0.1),rgba(0,0,0,0))] flex justify-center items-center w-screen h-[90vh] gap-x-4 p-8 ps-24">
        <div className="h-full w-[29%] bg-black rounded-md border-black relative shadow-xl">
          {/* Controls */}
          <div className="absolute top-4 left-4 z-50 flex gap-x-5">
            <button
              onClick={togglePlayPause}
              className="text-white text-2xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded-full w-12 h-12 flex justify-center items-center"
            >
              {isPlaying ? <IoMdPause /> : <IoMdPlay />}
            </button>
            <div
              className="text-white text-2xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded-full w-12 h-12 flex justify-center items-center"
              onClick={toggleMute}
            >
              {isMuted ? <GoMute /> : <GoUnmute />}
            </div>
          </div>

          {/* Video Player */}
          <div className="w-full h-full bg-black border-black rounded-md">
            <video
              ref={videoRef}
              key={shorts[currentShortIndex].id}
              className="w-full h-full object-cover bg-black rounded-md border-black"
              loop
              autoPlay
              muted={isMuted}
              src={shorts[currentShortIndex].videoUrl}
            />
          </div>

          {/* Description */}
          <div className="absolute bottom-1 w-full p-0">
            <p className={`text-gray-100 text-sm font-semibold transition-all duration-300 p-2 ${isFullDescription ? 'bg-black bg-opacity-70' : ''}`}>
              {isFullDescription ? fullDescription : slicedDescription}...
              <button
                onClick={toggleDescription}
                className="text-blue-400 hover:text-blue-500 text-sm font-semibold ms-1 underline"
              >
                {isFullDescription ? "see less" : "see more"}
              </button>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-[0.01rem] w-full left-0 right-0 bg-gray-700 h-[0.3rem] cursor-pointer">
            <div className="bg-red-500 h-[0.3rem]" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="bg-transparent flex flex-col h-full justify-center items-center gap-y-3">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePreviousShort}
            disabled={currentShortIndex === shorts.length - 1}
          >
            <HiArrowUpCircle />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNextShort}
            disabled={currentShortIndex === 0}
          >
            <HiArrowDownCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoatteazShorts;
