import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

function Contact() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const subscribeRef = useRef();

  useEffect(() => {
    const letters = subscribeRef.current.querySelectorAll("span");

    // Animate individual letters on hover
    letters.forEach((letter) => {
      gsap.set(letter, { display: "inline-block" });
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scaleY: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Animate the whole word when hovered
    subscribeRef.current.addEventListener("mouseenter", () => {
      gsap.to(letters, {
        scaleY: 2,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    subscribeRef.current.addEventListener("mouseleave", () => {
      gsap.to(letters, {
        scaleY: 2,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, []);

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I submit a fact?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ad voluptas ullam eveniet delectus reiciendis aliquid aperiam, ipsum numquam sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, veritatis!",
    },
    {
      question: "How can I join the community?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ad voluptas ullam eveniet delectus reiciendis aliquid aperiam, ipsum numquam sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, veritatis!",
    },
    {
      question: "How can I contribute to GoatTeaz?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ad voluptas ullam eveniet delectus reiciendis aliquid aperiam, ipsum numquam sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, veritatis!",
    },
  ];

  return (
    <div className="w-full h-full bg-black flex flex-col justify-center p-0 pt-4">
      {/* FAQ Section */}
      <div className="h-2/3 w-full p-3">
        <div className="h-1/4 w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-[#4acce7]">F</span>
            <span className="text-[#9c5bd0]">r</span>
            <span className="text-[#ea89b7]">e</span>
            <span className="text-[#f3dc91]">q</span>
            <span className="text-[#9c5bd0]">u</span>
            <span className="text-[#4acce7]">e</span>
            <span className="text-[#ef37a6]">n</span>
            <span className="text-[#e3ff5a]">t</span>
            <span className="text-[#9c5bd0]">l</span>
            <span className="text-[#ea89b7]">y</span>
            <span> </span>
            <span className="text-[#e3ff5a]">A</span>
            <span className="text-[#ef37a6]">s</span>
            <span className="text-[#f3dc91]">k</span>
            <span className="text-[#9c5bd0]">e</span>
            <span className="text-[#4acce7]">d</span>
          </h1>
          <h2 className="text-5xl font-bold text-white">
          <span className="text-[#f3dc91]">Q</span>
            <span className="text-[#ef37a6]">u</span>
            <span className="text-[#ea89b7]">e</span>
            <span className="text-[#4acce7]">s</span>
            <span className="text-[#9c5bd0]">t</span>
            <span className="text-[#4acce7]">i</span>
            <span className="text-[#ef37a6]">o</span>
            <span className="text-[#e3ff5a]">n</span>
          
          </h2>
        </div>
        <div className="h-3/4 w-full flex flex-col justify-start p-4 gap-y-3 items-center">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group flex-col p-5 w-[32rem] rounded-xl bg-[#1C1C1C] items-between transition-all duration-300  ${
                expandedIndex === index ? "h-48 flex" : "h-14"
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center font-bold  text-white group-hover:text-[#e3ff5a] cursor-pointer">
                <p>{faq.question}</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`transform transition-transform text-[#e3ff5a] ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`content h-full w-full pt-2 transition-opacity duration-300 ${
                  expandedIndex === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <p className="text-md opacity-65 font-light text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full h-1/3 border-y-2 border-white border-opacity-25 flex justify-center items-center p-0 px-4 py-2">
        <div
          ref={subscribeRef}
          className="w-1/2 h-full text-[#e3fe59] text-9xl justify-center items-center font-medium flex ms-6"
        >
          {"SUBSCRIBE".split("").map((letter, index) => (
            <span key={index} className="hover:cursor-pointer">
              {letter}
            </span>
          ))}
        </div>
        <div className="w-1/2 h-full justify-center items-center flex flex-col p-1 ms-5">
          <div className="w-full h-1/3 flex justify-center items-center p-2 px-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-[34%] h-full px-4 py-2 rounded-3xl bg-[#1C1C1C] placeholder:text-[gray] text-white focus:outline-none focus:ring-none me-3"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-[63.2%] h-full px-4 py-2 rounded-3xl bg-[#1C1C1C] placeholder:text-[gray] text-white focus:outline-none focus:ring-none"
            />
          </div>
          <div className="w-full h-1/3 px-4 p-2 flex justify-center">
            <input
              id="message"
              placeholder="Message"
              type="message"
              className="w-full h-full px-4 py-2 rounded-3xl bg-[#1C1C1C] placeholder:text-[gray] text-white focus:outline-none focus:ring-none"
            />
          </div>
          <div className="w-full h-1/3 px-4 py-2">
            <button
              type="submit"
              className="h-full w-full bg-[#e3fe59] hover:bg-[#4acce7] text-black font-bold py-2 px-4 rounded-3xl focus:outline-none active:scale-95"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
