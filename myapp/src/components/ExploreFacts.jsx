import React from "react";
import './ExploreFacts.css';

function ExploreFacts() {
  // Function to scroll the container left
  const scrollLeft = () => {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({
      left: -750, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  // Function to scroll the container right
  const scrollRight = () => {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({
      left: 750, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center border-y-2 border-white border-opacity-30"
    id="popular">
      <div className="w-full h-1/6 text-[#e3fe59] text-6xl font-medium bg-transparent flex items-center justify-start py-7 px-8">
        Popular Categories
      </div>

      <div className="flex h-5/6 w-full bg-transparent items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="scrollright text-[#e3fe59] w-14 h-full bg-transparent flex flex-col justify-center items-center font-extrabold text-md opacity-60 hover:bg-slate-700 hover:bg-opacity-40 cursor-pointer"
        >
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
          <span><br/></span>
          <span>L</span>
          <span>E</span>
          <span>F</span>
          <span>T</span>
         
        </button>

        {/* Scrollable Container */}
        <div
          id="scrollContainer"
          className="w-full h-full flex flex-row overflow-y-hidden overflow-x-auto gap-x-5 px-2"
        >
          {/* Card 1 */}
          <div className="h-full min-w-[25%] justify-center items-center">
            <div className="rotate-hover w-full h-1/2 bg-gradient-animated bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
              <div className="p-6 w-full h-full rounded-full bg-black">
                <div className="w-full h-full rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover rotate-img  "
                    src="https://i.redd.it/wtf-are-the-ancient-scythians-up-to-now-v0-5zlytir65pia1.jpg?width=1440&format=pjpg&auto=webp&s=2b2ee4f0c0f99af81c374050e100d50c43305da7"
                    alt="ancient"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-col p-2">
              <h1 className="text-[#e3fe59] font-bold text-2xl">
                1. Ancient WTF?!
              </h1>
              <p className="text-white font-medium text-md flex flex-col opacity-65">
                This is for history buffs who like their facts with a twist.
                Dive into ancient myths, bizarre rituals, and jaw-dropping tales
                from a time when the world was still figuring itself out.
              </p>
            </div>
          </div>


          {/* card 2 */}
          <div className="h-full min-w-[25%] justify-center items-center ">
                <div className="rotate-hover  w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img 
                        className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://static.vecteezy.com/system/resources/thumbnails/022/006/626/small_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2  flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">2. Science that Slaps</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Mind-blowing discoveries and theories, served up hot and just a little crazy. From quantum quirks to biology that sounds like fiction, it’s a science with an edge.
 
            </p>
            </div>
            </div>

            {/* card 3 */}
            <div className="h-full min-w-[25%]  justify-center items-center ">
                <div className="rotate-hover  w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" src="https://upload.wikimedia.org/wikipedia/en/b/b8/Legends_%26_Lies_title_card.jpg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">3. Legends & Lies</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Was Bigfoot really spotted again? Are leprechauns just a myth? Find the truth (and some wild theories) behind the world’s strangest legends and urban legends that refuse to die. 
            </p>
            </div>
            </div>

            {/* card 4 */}
            <div className="h-full min-w-[25%]  justify-center items-center ">
                <div className="rotate-hover  w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://cdn.britannica.com/15/255215-050-8262C902/Rapinoe-Polkinghorne-US-Australia-soccer-football-2020-Tokyo-Olympics.jpg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2  flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">4. “You Can’t Make This Up” Sports</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            From outrageous sports records to moments that defy explanation, these facts will leave you scratching your head and wondering if reality checks exist in sports.

            </p>
            </div>
            </div>

            {/* card 5 */}
            <div className="h-full min-w-[25%]  justify-center items-center ">
                <div className="rotate-hover  w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img"
                     src="data:image/jpeg;base64,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" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">5. High-Speed Space Facts
            </h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Facts that are out of this world (literally). From black holes to distant galaxies, these tidbits make astronomy cooler than ever.
            </p>
            </div>
            </div>
        
           {/* card 6 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://www.foodie.com/img/foodie-share-image-1280x720.png" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">6. Foodie Shockers</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            For the curious food lovers. You think you know what you’re eating? Think again. Warning: may lead to lifelong cravings or the urge to never eat certain things again.

            </p>
            </div>
            </div>
        
           {/* card 7 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHdnPddci3v0ezunKkekn7lm3eD7aqJPGgA&s" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">7. Money & Mayhem</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Wildly entertaining facts about money, the economy, and some financial mishaps that make you wonder how we even got here.


            </p>
            </div>
            </div>

           {/* card 8 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full  bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://m.media-amazon.com/images/I/71m8Ieio2cL._UF1000,1000_QL80_.jpg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">8. Animal Antics</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Ever wonder what animals are really up to? These facts reveal the sneaky, adorable, and downright weird world of animals.
            </p>
            </div>
            </div>

           {/* card 9 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://images.mid-day.com/images/images/2016/nov/08deepika-l.jpg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">9. Fashion Faux Pas & Fierceness</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Dive into the crazy world of fashion with facts about historical blunders, cultural trends, and items you’d never believe were once stylish.

            </p>
            </div>
            </div>

           {/* card 10 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://play-lh.googleusercontent.com/MLjOTb4h4VG4FJIvzcWxCPdM_ICeewlAjerEB3tyalmwsUsu22I9U96WHLy3UP6_TMcajjx7H8I=w1296-h2160-rw" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">10. Mind-Bending Mysteries</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            The unexplained, the paranormal, and the just plain strange. These mysteries might keep you up at night.</p>
            </div>
            </div>


           {/* card 11 */}
            <div className="h-full min-w-[25%]   justify-center items-center ">
                <div className="rotate-hover w-full h-1/2 bg-gradient-animated  bg-[length:200%_200%] animate-gradient-move rounded-full p-1">
                <div className="p-6 w-full h-full rounded-full bg-black">
                    <div className=" w-full h-full rounded-full">
                        <img className="w-full h-full rounded-full object-cover rotate-img" 
                        src="https://miro.medium.com/v2/resize:fit:1200/0*MkUuRYfx9-oHW0qH.jpg" alt="acient" /></div></div></div>
            
            <div className="w-full h-1/2   flex flex-col p-2">
            <h1 className="text-[#e3fe59] font-bold text-2xl">11. Iconic Moments & Pop Culture Oddities</h1>
            <p className="text-white font-medium text-md flex flex-col opacity-65">
            Goated facts from movies, music, and pop culture that will make you the ultimate trivia champ.</p>
            </div>
            </div>

          {/* Add the rest of the cards here (Card 2 to Card 5)... */}
          {/* Repeat similar structure for remaining cards */}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="scrollright text-[#e3fe59] w-14 h-full bg-transparent flex flex-col justify-center items-center font-extrabold text-md opacity-60 hover:bg-slate-700 hover:bg-opacity-40 cursor-pointer"
        >
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
          <span> <br/></span>
          <span>R</span>
          <span>I</span>
          <span>G</span>
          <span>H</span>
          <span>T</span>
        </button>
      </div>
    </div>
  );
}

export default ExploreFacts;
