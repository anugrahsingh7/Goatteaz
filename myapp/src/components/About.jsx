function About() {
    return (
        <div className="bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.05),rgba(34,211,238,0.1),rgba(0,0,0,0))] flex  h-full w-full p-5"
        id="about">
          
          <div className="h-full w-1/2 bg-transparent p-28 "><div class="bg-transparent h-full w-full p-1 rounded-[2%] bg-gradient-animated bg-[length:200%_200%] animate-gradient-move ">
            <img src="https://i.postimg.cc/CKBCj935/arjun.jpg" alt="founder photo" class="h-full w-full object-cover rounded-[2%] "/>
            
            </div>
            <div className="w-full h-24 flex justify-center items-center bg-transparent">
            <h1 className="text-2xl font-bold text-[#4acce7]">Arjun Goel - Founder of GoatTeaz</h1>
            
            </div>
            </div>
          <div className="h-full w-1/2 bg-transparent p-3  flex flex-col">
          <div className="w-full h-1/6 flex justify-center items-center ">
          <h1 className="text-[#e3fe59] text-6xl font-bold">ABOUT US</h1>
          </div>
          <div className="w-full h-3/4 flex overflow-x-scroll overflow-y-hidden item-center">
          <div className="min-w-[550px] h-full bg-red-300 bg-opacity-5 rounded-2xl  ms-4 flex flex-col justify-center items-center p-6">
            <h1 className="font-bold text-3xl mb-2 text-red-500 ">Mission Statement</h1>
            <p className=" font-medium opacity-75">At GoatTeaz, we’re on a mission to uncover the most jaw-dropping, mind-blowing, and totally goated facts — because why settle for average when you can know something extraordinary? Our goal? To keep you amazed, amused, and maybe even a little smarter than your friends (no promises, though!). So buckle up, fact lovers, and dive into a world where knowledge isn’t just cool, it’s downright legendary!</p>
            </div>
            <div className="min-w-[550px] h-full bg-red-300 bg-opacity-5 rounded-2xl ms-4 flex flex-col justify-center items-center p-6">
            <h1 className="font-bold text-3xl mb-2 text-red-500">Our Story</h1>
            <p className=" font-medium opacity-75">Imagine this: I’m Arjun—no, not the guy from Mahabharat, but close enough! Instead of fighting with bows and arrows, I’m fighting the age-old question: 'Who knows the most random and mind-blowing facts?' Spoiler alert: It’s me… well, us, actually, because I’ve got an entire squad of teammates with a knack for digging up the coolest, weirdest, and most goated facts out there. We don’t just hit the mark with any old trivia. Oh no. Just like Arjuna’s precision with his bow, we make sure each fact is so sharp, that you’ll be walking away with something to impress your friends (or just your own mind). We’re here to make learning feel like an adventure—no battlefield required—just a whole lot of fun and that’s how GoatTeaz came to life. A bunch of curious minds, throwing arrows of knowledge to create the most epic, entertaining, and ridiculously interesting collection of facts you’ll ever see. No quests, no dragons—just a lot of ‘Wait, seriously?!’ moments.”<br/><p className="text-red-500 text-xl">-Arjun, Founder of GoatTeaz</p>
            </p>
            </div>
            <div className="min-w-[550px] h-full bg-red-300 bg-opacity-5 rounded-2xl ms-4 flex flex-col justify-center items-center p-6">
            <h1 className="font-bold text-3xl mb-2 text-red-500">Introduction</h1>
            <p className=" font-medium opacity-75 mb-2"><span className="font-bold text-red-500">Authenticity:</span>We don’t just throw random facts at you like a cereal aisle on a bad day. Every fact here is 100% verified—because who needs fake news when you can have real facts that make your brain do a happy dance?</p>
            <p className=" font-medium opacity-75 mb-2"><span className="font-bold text-red-500">Engagement:</span>At GoatTeaz, we’re not just a website—we’re a community of fact fanatics, debate enthusiasts, and trivia warriors. We’re like your group chat but with more brain power and fewer memes... Okay, maybe a few memes.</p>
            <p className=" font-medium opacity-75 mb-2"><span className="font-bold text-red-500">Education:</span>Learning should never feel like a homework assignment you forgot about. At GoatTeaz, we make learning so fun, that you’ll forget you’re actually getting smarter. It’s like getting a degree in awesomeness with zero student debt.</p>
            </div>
         
          </div>
          </div> 
        </div>
    )
}

export default About;
