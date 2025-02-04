import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4); // State for the number of visible cards
  const letterRefs = useRef([]);
  const lineRef = useRef(null);
  const lineContainerRef = useRef(null);
  const cardRefs = useRef([]);



  useEffect(() => {
    const fetchBlogs = async () => {
       const res=await axios.get("http://127.0.0.1:3000/api/blogs");
      setBlogs(res.data.reverse());
    };


    fetchBlogs();
  }, []);


 async function deleteblog(id){
    await axios.delete(`http://127.0.0.1:3000/api/blogs/${id}`);
    alert("blogs delete");
    window.location.reload();
  }

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Increase by 4 cards each time
  };

  const loadLess = () => {
    setVisibleCards(4); // Reset to 4 cards
  };

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

  const openModal = (blog) => {
    setModalContent(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const sliceTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  const sliceDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
  };

  const colors = ["#ef20a1", "#e3fe59", "#4acce7", "#f3dc91", "#8c29b6"];

  // GSAP animation for cards
  useEffect(() => {
    if (cardRefs.current.length > 0) {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [visibleCards]);

  return (
    <div
      className="bg-black h-max w-screen flex flex-col justify-center items-center py-2 px-2 border-b-2 border-white border-opacity-30 pb-12"
      id="blogs"
    >
      <div className="bg-transparent pt-4">
        <h1 className="flex justify-center text-8xl font-extrabold">
          {Array.from("BLOGS").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="inline-block transform origin-center transition-transform mx-0"
              style={{
                color: ["#ef20a1", "#e3fe59", "#4acce7", "#f3dc91", "#8c29b6"][
                  index
                ],
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div
        ref={lineContainerRef}
        onMouseMove={handleLineMove}
        onMouseLeave={handleLineLeave}
        className="w-screen h-[80px] flex justify-center items-center mt-0 opacity-30"
      >
        <svg
          width="100vw"
          height="80"
          viewBox={`0 0 ${window.innerWidth} 80`}
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d={`M0 40 Q ${window.innerWidth / 2} 40 ${window.innerWidth} 40`}
            fill="transparent"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 w-full max-w-screen-xl px-10 py-4 ">
        {blogs.slice(0, visibleCards).map((blog, index) => (
          <div className="group border-2 border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl p-[0.15rem] hover:border-opacity-0 hover:bg-gradient-animated bg-[length:200%_200%] animate-gradient-move h-[200px] ">
            <div
              key={blog.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className=" flex rounded-3xl overflow-hidden bg-black w-full h-full p-2 "
            >
              <div className="relative flex overflow-hidden w-[35%]  rounded-2xl ">
                <img
                  src={blog.imageUrl}
                  alt="photo"
                  className="w-full h-full object-cover overflow-hidden rounded-2xl group-hover:scale-125 transition-transform ease-in-out "
                />
                <div className="w-full h-full absolute z-1  bg-gradient-66deg-opacity group-hover:hidden transition-transform duration-300 ease-in-out group-hover:bg-transparent overflow-hidden"></div>
              </div>

              <div className="p-4  w-[65%] ">
                <h2 className="text-xl text-white font-bold px-1 hover:text-[#e3fe59] ">
                  {sliceTitle(blog.title)}
                </h2>
                <p className="text-gray-400 text-sm opacity-80 px-1">
                  {sliceDescription(blog.description)}
                </p>
                <div className="flex justify-between items-center w-full ">
                <button
                  className="text-[#e3fe59] hover:bg-gray-600 hover:bg-opacity-30 p-2 rounded-lg active:scale-95 mt-2 ms-[-1%] "
                  onClick={() => openModal(blog)}
                >
                  See more
                </button>
                <button onClick = {()=>deleteblog(blog._id)} className="text-red-500 text-2xl hover:bg-gray-600  hover:bg-opacity-30 p-2  rounded-lg active:scale-95 mt-1"><MdDeleteOutline /></button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More button */}
      <div className="flex justify-center items-center mt-6">
        {visibleCards < blogs.length && (
          <button
            className="text-black font-semibold py-2 px-4 bg-[#e3fe59] hover:opacity-90 active:scale-95 rounded-lg"
            onClick={loadMore}
          >
            Show More
          </button>
        )}
        {visibleCards > 4 && (
          <button
            className="text-black font-semibold py-2 px-4 bg-[#e3fe59] hover:opacity-90 active:scale-95 rounded-lg ml-4"
            onClick={loadLess}
          >
            Show Less
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 ">
          <div className="bg-black border-2 border-red-500 border-opacity-30 w-1/4 sm:w-4/4 md:w-3/4 lg:w-2/4 rounded-2xl p-6 max-h-[80%] overflow-auto">
            <div
              className="text-red-500 text-3xl font-bold font-mono text-right cursor-pointer"
              onClick={closeModal}
            >
              x
            </div>
            <h2 className="text-3xl text-[#e3fe59] font-bold mb-4">
              {modalContent.title}
            </h2>
            <p className="text-white opacity-75 text-xl mb-4 font-medium">
              {modalContent.description}
            </p>
            <div className="text-gray-300 opacity-60 text-md leading-6">
              {modalContent.content || "No additional content available."}
            </div>
            <button
              className="text-red-500 bg-transparent hover:bg-gray-600 hover:bg-opacity-40 font-bold active:scale-95 rounded-lg py-2 px-4 mt-1 "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
