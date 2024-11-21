import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";




function BlogsHeading() {
  const [blogs, setBlogs] = useState([]);
  const letterRefs = useRef([]);
  const lineRef = useRef(null);
  const lineContainerRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = [
        {
          id: 1,
          title:
            "Did Leo Really Have to Eat Bear Flesh to Win an Oscar? Not Exactly… But It Sure Helped!",
          description:
            "If you thought you needed to chow down on bear flesh to snag an Oscar, well, think again! Today’s “goated” tea is all about Leonardo DiCaprio and the extremely wild choice he made for his role in The Revenant. Spoiler: This was no ordinary method acting!",
          photoUrl:
            "https://i2-prod.themirror.com/incoming/article1185.ece/ALTERNATES/s1200b/0_bear_main.jpg",
          content: "The Scene That Made Every Viewer Cringe (Including Leo)...",
        },
        {
          id: 2,
          title: "The “Goated” Origin Story of Nickelodeon...",
          description:
            "Here at GOATTEAZ, we’re all about serving up the hottest tea...",
          photoUrl:
            "https://i.scdn.co/image/ab6761610000e5eb48c209065ea0afd328c8d43e",
          content: "",
        },
        {
          id: 3,
          title:
            "Why Wait for a Fortune Teller When You Can Be Christopher Nolan?",
          description:
            "“You think you need this guy to predict the future?”...",
          photoUrl:
            "https://pyxis.nymag.com/v1/imgs/b97/838/9575952d6e4aaa9424ba7ce1b38485b97d-nolan-movies-ranked.1x.rsquare.w1400.jpg",
          content: "",
        },
        {
          id: 4,
          title:
            "How Discipline Turned Akshay Kumar from “Flop Actor” to Bollywood’s Ultimate Khiladi",
          description:
            "Think it takes only blockbuster hits to make a Bollywood legend? Think again...",
          photoUrl:
            "https://hoor72.com/_next/image?url=https%3A%2F%2Fh72.s3.ap-south-1.amazonaws.com%2Fakshay-kumar-phir-hera-pheri-pose.png&w=828&q=75",
          content: "",
        },
        
      ];
      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(letterRefs.current[index], {
      scaleY: 1.6,
      duration: 0.15,
      ease: "expo.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(letterRefs.current[index], {
      scaleY: 1,
      duration: 0.15,
      ease: "expo.in",
    });
  };

  const handleLineMove = (e) => {
    const rect = lineContainerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const curveHeight = 30;
    const curveDirection = offsetX < rect.width / 2 ? 1 : -1;

    const newPath = `M0 40 Q ${offsetX} ${40 + curveDirection * curveHeight} ${
      rect.width
    } 40`;
    gsap.to(lineRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLineLeave = () => {
    const straightPath = `M0 40 Q ${
      lineContainerRef.current.offsetWidth / 2
    } 40 ${lineContainerRef.current.offsetWidth} 40`;
    gsap.to(lineRef.current, {
      attr: { d: straightPath },
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const sliceTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
  };

  const sliceDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 13).join(" ") + (words.length > 13 ? "..." : "");
  };

  const colors = ["#ef20a1", "#e3fe59", "#4acce7", "#f3dc91", "#8c29b6"];

  return (
    <div className="bg-black h-max w-screen flex flex-col justify-center items-center py-2 px-2">
      <div className="bg-transparent pt-4">
        <h1 className="flex justify-center text-8xl font-extrabold">
          {Array.from("BLOGS").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ color: colors[index] }}
              className="inline-block transform origin-center transition-transform mx-0"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Line Container */}
      <div
        ref={lineContainerRef}
        onMouseMove={handleLineMove}
        onMouseLeave={handleLineLeave}
        className="w-[900px] h-[80px] flex justify-center items-center mt-0 opacity-80"
      >
        <svg
          width="100%"
          height="80"
          viewBox="0 0 900 80"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M0 40 Q 450 40 900 40"
            fill="transparent"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="h-[90vh] w-screen flex justify-center items-center">
        {/* Left Section */}
        <div className=" h-full w-1/2   p-2 rounded-3xl ">
          {blogs[0] && ( 
           <div className="group flex felx-col h-full border-2 border-white border-opacity-20 rounded-3xl p-[0.09rem] hover:bg-gradient-animated bg-[length:200%_200%] animate-gradient-move hover:border-transparent   ">
            <div className="flex flex-col h-full overflow-hidden rounded-3xl bg-black p-4">
              
              <div className="relative w-full h-[100rem] flex overflow-hidden rounded-3xl">
                <img
                  src={blogs[0].photoUrl}
                  alt={blogs[0].title}
                  className="w-full h-full rounded-3xl group-hover:scale-110 transition-transform duration-300 "
                />
                 <div className="w-full h-full absolute z-1 bg-gradient-66deg-opacity group-hover:hidden transition-transform duration-300 ease-in-out"></div>
              </div>
              <div className="flex flex-col items-start h-full w-full p-1 pt-3">
                <h2 className="text-xl font-bold group-hover:text-[#e3fe59]">
                  {sliceTitle(blogs[0].title)}
                </h2>
                <p className="opacity-50">
                  {sliceDescription(blogs[0].description)}
                </p>
                <button className="border-2 bg-black border-red-500 text-red-500 rounded-3xl p-2 mt-2 text-sm  group-hover:bg-red-500 group-hover:text-white ">
                  See More
                </button>
              </div>
              </div>
           </div>
         
          )}
          
        </div>

        {/* Right Section */}
        <div className=" rounded-3xl h-full w-1/2 px-3 flex flex-col justify-center items-center gap-y-6 overflow-y-scroll ">
        
          {blogs.slice(1).map((blog, index) => (
          <div className=" group w-full h-[30%] flex flex-row justify-center items-center rounded-3xl border-2 border-white border-opacity-20 p-[0.09rem] group overflow-hidden hover:bg-gradient-animated bg-[length:200%_200%] animate-gradient-move hover:border-transparent      ">  
    <div
              key={blog.id}
              className="w-full h-full bg-black flex flex-row justify-center items-center rounded-3xl  p-4 group overflow-hidden"
            >
                
              <div className="relative w-[30%] h-full flex overflow-hidden rounded-3xl ">
                <img
                  src={blog.photoUrl}
                  alt={blog.title}
                  className="w-full h-full rounded-3xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="w-full h-full absolute z-1 bg-gradient-66deg-opacity  group-hover:hidden transition-transform duration-300 ease-in-out "></div>
              </div>
              <div className="flex flex-col items-start h-full w-[70%] p-0 ps-5">
                <h2 className="text-lg font-bold hover:text-customYellow group-hover:text-[#e3fe59] " >{sliceTitle(blog.title)}</h2>
                <p className="opacity-50">
                  {sliceDescription(blog.description)}
                </p>
                <button className="border-2 border-red-500 text-red-500 rounded-3xl p-2 mt-2 text-sm group-hover:bg-red-500 group-hover:text-white">
                  See More
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
   
  );
}

export default BlogsHeading;
