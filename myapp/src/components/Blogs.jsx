import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

function BlogsHeading() {
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
      const blogData = [
        {
          id: 1,
          title:
            "Did Leo Really Have to Eat Bear Flesh to Win an Oscar? Not Exactly… But It Sure Helped!",
          description:
            `If you thought you needed to chow down on bear flesh to snag an Oscar, well, think 
            again! Today’s “goated” tea is all about Leonardo DiCaprio and the extremely wild 
            choice he made for his role in The Revenant. Spoiler: This was no ordinary method acting!
            `,
          photoUrl:
            "https://i2-prod.themirror.com/incoming/article1185.ece/ALTERNATES/s1200b/0_bear_main.jpg",
          content:
            `The Scene That Made Every Viewer Cringe (Including Leo)
So here’s the setup: In The Revenant, Leo’s character is struggling for survival in the frozen wilderness, and at one point, he needs to eat a bloody piece of bear meat. The prop department, ever so kind, offered him a fake, gelatin-based “bear meat” substitute. Easy, right?
But Leo, being the GOAT he is, thought nah – that’s way too simple. Instead, he opted to go all-in and eat real bison flesh. Yep, actual raw bison meat. And, as you might imagine, his stomach didn’t take kindly to it. What happened next? Well, he puked. But that raw, visceral moment was so authentic that it ended up making the final cut.
       And That’s How He Finally Won the Oscar!
After six nominations and countless meme-worthy losses, The Revenant finally did it for Leo. All the frozen lakes, insane stunts, and, yes, that bison flesh moment paid off. This wasn’t just acting—it was surviving (almost literally) to bring the character to life. The Academy had to hand over the gold!
So, did eating bison flesh singlehandedly win him the Oscar? Probably not. But it sure added a whole new level of commitment that became unforgettable. Here’s to Leo, the guy who went beyond the script, turned his stomach inside out, and finally snagged that much-deserved Oscar—proving that when it comes to acting, he’s in a league of his own.
`,
        },
        {
          id: 2,
          title: "The “Goated” Origin Story of Nickelodeon: How a 5-Cent Fee Became Every Kid’s Dream Channel",
          description: `Here at GOATTEAZ, we’re all about serving up the hottest tea on your favorite shows, movies, and channels – and today, we’re spilling some seriously retro tea on Nickelodeon! Get ready to laugh, gasp, and maybe shed a nostalgic tear as we dive into how a humble 5-cent movie ticket paved the way for one of the most “goated” kids' channels in history.

          `,
          photoUrl:
            "https://i.scdn.co/image/ab6761610000e5eb48c209065ea0afd328c8d43e",
          content: `Nickelodeon’s Name: A “Nickel”-Worthy Start
So, picture this: It’s the early 1900s. People are flocking to little theaters to catch these new-fangled “moving pictures,” and what’s the entry fee? Just one nickel! That’s right – for the price of five cents (or about a third of a latte today), you could escape into a world of cowboy shootouts, dramatic romances, and laughable “special effects.” These tiny theaters, known as “nickelodeons,” were basically the original Netflix… if Netflix cost a nickel and only showed silent films in black and white.
Flash-forward to 1979, when a tiny TV channel for kids decided it needed a brand refresh. The founders thought, “Hey, why not name it after those cheap-o movie theaters everyone loved?” And voila, “Nickelodeon” was born! It was a name that hinted at affordable, wildly entertaining content—perfect for a network that was all about capturing kids’ attention without emptying the piggy bank.
Before Nickelodeon, There Was… Pinwheel?
Yep, believe it or not, Nickelodeon wasn’t always called Nickelodeon! When the channel launched in 1977, it went by the name “Pinwheel,” and let’s just say it was a bit of a snooze-fest compared to the wild ride it would eventually become. Imagine a bunch of puppets, friendly characters, and gentle, educational programming aimed at preschoolers. It was cute, sure, but where was the slime? The pranks? The chaos? The real fun began when the name changed to Nickelodeon, and they realized kids wanted to be entertained, not tucked into bed at 7 p.m.
How Nickelodeon Became the Ultimate “Goat” of Kid’s TV
Once Nickelodeon was officially “Nickelodeon,” it turned up the heat and got serious about being the GOAT of kid-friendly entertainment. Here’s how they did it:
It Was the Kids’ Clubhouse: Nickelodeon was like the secret clubhouse every kid wanted to join. Finally, a channel that got you! Other networks would sneak in kid’s shows here and there, but Nickelodeon was made just for us. Parents might pop in to see what was going on, but they’d probably leave with a confused look while you giggled your head off at the antics of Ren & Stimpy or the sticky stunts on Double Dare.
Original Cartoons that Defined Childhood: In the 90s, Nickelodeon exploded with original animated shows that were equal parts hilarious, weird, and just a little gross (in the best way). Rugrats taught us that even babies have problems. Doug was all about navigating the daily drama of middle school (and maybe having a crush on someone named Patty). And The Ren & Stimpy Show… well, let’s just say it gave us some unforgettable moments we’re still processing.
Going Live and Getting Slimed: Nickelodeon didn’t stop at animation; they went all in on live-action too! Who could forget the wild games of Double Dare and Legends of the Hidden Temple? You didn’t really grow up on Nickelodeon unless you dreamed of diving headfirst into a pool of slime or dodging fake ancient temple guards. For Nickelodeon, the messier the better – because nothing says “fun” like goo flying in all directions.
Unforgettable Game Shows and Awards: Nickelodeon wasn’t just about TV shows; they practically invented the concept of a kid-friendly awards show. The Kids' Choice Awards gave us a chance to vote for our favorite stars, and watching them get slimed was like seeing a rite of passage. Plus, it was a chance for Nickelodeon to remind us that kids’ opinions mattered – even if our votes usually involved who we wanted to see drenched in green goo.
From 5 Cents to Priceless Memories
Nickelodeon’s journey from a “nickel” theater concept to the juggernaut of kids’ television is a lesson in leveling up. They took the idea of cheap, fun entertainment and turned it into a global empire – complete with cartoons, games, awards, and yes, tons of slime. Today, even as adults, we look back at Nickelodeon as the ultimate “goated” network that defined childhood.
So next time you’re feeling nostalgic, just remember: Nickelodeon started as a five-cent experience, and it’s worth way more than that now in all the laughs, memories, and green slime it gave us. Here’s to the “Nickelodeon” that was, the channel that is, and the endless fun that will always be... because, honestly, once you go slime, you never go back. 🧡
`,
        },
        {
          id: 3,
          title: "Why Wait for a Fortune Teller When You Can Be Christopher Nolan?",
          description: `“You think you need this guy to predict the future?” (Cue: iconic fortune-teller parrot). Well, not if you wake up as Christopher Nolan! That’s right – today’s “goated” tea from GOATTEAZ is all about the guy who doesn’t need a parrot to predict the future. In fact, he practically invented his own with some math, a camera, and mind-bending movies.
`,
          photoUrl:
            "https://pyxis.nymag.com/v1/imgs/b97/838/9575952d6e4aaa9424ba7ce1b38485b97d-nolan-movies-ranked.1x.rsquare.w1400.jpg",
          content: `The GOAT Behind the Camera: Who Needs a Parrot When You’ve Got Maths?
Let’s get one thing straight: Christopher Nolan doesn’t dabble in ordinary. You won’t find him looking to crystal balls or asking parrots for advice. Nope, Nolan's magic lies in pure, calculated genius. The same man who gave us unforgettable films like Memento, The Dark Knight, and Inception decided he wanted to show us a black hole, something most people couldn’t even imagine. And he did it before scientists could!
Interstellar: Nolan’s Mind-Bending, Science-Savvy Masterpiece
When Nolan made Interstellar, he didn’t just want to create an epic sci-fi adventure; he wanted it to be scientifically accurate down to the last frame. So, he teamed up with a theoretical physicist, Dr. Kip Thorne, and together, they crunched the numbers and turned mathematical equations into visuals. And thus, they created the now-iconic black hole image in Interstellar.
Fun fact? That black hole was so spot-on that when scientists captured a real image of a black hole in 2019, they used Nolan’s depiction as a reference! This isn’t just movie magic—it’s pure science. In a way, Nolan did something even the best fortune-telling parrot couldn’t predict.
All Because He’s Good at Maths 😔
Yup, apparently, the key to being one of the GOATed filmmakers of our time is not a magic wand or a pet parrot but…maths. Nolan’s films are the perfect blend of cinematic flair and scientific precision. From bending time in Tenet to decoding dreams in Inception, his storytelling is like an equation that only he knows how to solve.
So, next time someone tells you “maths isn’t useful,” remind them of Christopher Nolan, the guy who turned equations into mind-blowing films and left fortune-teller parrots looking for a new job. Here’s to one of the GOATed legends of cinema, who not only challenges our minds but makes us question reality itself—no parrots required.
`,
        },
        {
          id: 4,
          title: "How Discipline Turned Akshay Kumar from “Flop Actor” to Bollywood’s Ultimate Khiladi",
          description:
            `Think it takes only blockbuster hits to make a Bollywood legend? Think again! Today’s “goated” tea is all about how Akshay Kumar bounced back from the brink of career disaster and proved that discipline can be the ultimate comeback weapon.`,
          photoUrl:
            "https://hoor72.com/_next/image?url=https%3A%2F%2Fh72.s3.ap-south-1.amazonaws.com%2Fakshay-kumar-phir-hera-pheri-pose.png&w=828&q=75",
          content: `The Downfall: 14 Flops in a Row
Back in the late '90s, things weren’t looking too bright for Akshay Kumar. With movies like Tarazoo, Aflatoon, and Keemat barely making a ripple at the box office, critics and audiences alike were quick to label him a “flop actor.” Fourteen consecutive flops—imagine the frustration! For many, this would have been the end of the road, but Akshay wasn’t about to throw in the towel.
The “Goated” Game Plan: Becoming the Producer’s Dream
Instead of wallowing in despair, Akshay decided to rewrite the script—literally. How? He transformed himself into the ultimate “producer’s man.” He was on time, every time, setting a new standard for punctuality. But he didn’t stop there! Akshay went above and beyond, covering his own expenses, from phone bills to hotel stays, showing producers that he was serious, professional, and ready to work harder than ever.
This disciplined approach didn’t go unnoticed. Producers, initially hesitant to hire him due to his past flops, were impressed by his commitment. Soon, Akshay became the go-to guy—reliable, hard-working, and willing to do whatever it took to make a movie happen. And just like that, he found himself back on the big screen.
From “Flop Actor” to Bollywood’s Khiladi
With his dedication and “goated” work ethic, Akshay slowly climbed his way back to the top, proving that consistency and discipline can make or break a career in Bollywood. Today, he’s not only known for his action-packed roles but also as one of the most bankable stars in the industry. They don’t call him the Khiladi of Bollywood for nothing!
So, next time you’re feeling down about a few setbacks, take a page from Akshay’s book. Sometimes, all it takes to turn things around is showing up, working hard, and keeping those phone bills in check. Here’s to Akshay, the man who proved that discipline can truly be goated!
`,
        },

        {
          id:5,
          title:"Bollywood’s “GOATed” Flops: When Big Budgets Meet Tiny Box Office Returns",
          description:`Imagine this: you spend a whopping 35 crores on a movie, only to rake in… 60,000 rupees. Impossible? Nope, welcome to the world of Bollywood’s GOATed flops! Today, we’re talking about some recent big-budget movies that, despite famous stars and grand ambitions, crashed and burned at the box office. At the top of our list? Arjun Kapoor’s The Lady Killer, which made headlines (but not profits) with an almost unbelievable 60K return.
`,
          photoUrl:"https://i.ndtvimg.com/mt/movies/2014-02/arjungundaystill.jpg?ver-20241610-01",
          content:`The Anatomy of a Flop: When Budgets Soar and Returns Plummet
It sounds like a movie plot itself—spend crores, lose crores. But these Bollywood flops show us that even with massive budgets and famous faces, there are no guarantees in showbiz. Take Kuttey, another Arjun Kapoor release, which was made on a jaw-dropping 35 crore budget. The box office returns? Just 4.65 crores. Ouch.
Why Do Some Big-Budget Movies Miss the Mark?
So, what gives? Why do some films with all the right ingredients—big stars, massive marketing, high production values—still flop? The truth is, Bollywood’s biggest flops tend to have one thing in common: high hopes, huge budgets, and an audience that just isn’t buying in.
Here’s what we’ve learned from these GOATed flops:
Audience Disconnect: Sometimes, the story just doesn’t resonate. Big budgets and star power can’t make up for a script that doesn’t click with the audience.
Marketing Misfires: The film’s promotion might miss the target, failing to build excitement or convey what the movie is actually about.
Overhyped Expectations: With so much money invested, expectations skyrocket. When a film doesn’t deliver the “wow” factor, the fall is even harder.
Will These “GOATed” Flops Make a Comeback?
In the world of Bollywood, anything’s possible! While The Lady Killer and Kuttey didn’t make the impact they hoped for, there’s always room for a legendary comeback. Some of the biggest names in Bollywood have bounced back after huge flops—proving that, sometimes, one flop doesn’t mean the end. Who knows? Maybe next time, these GOATed flops will rewrite their destiny, reminding us that fame alone isn’t always enough—but resilience sure is.
So here’s to the flops that dared big and lost bigger! Because in Bollywood, even a flop can be GOATed.

`
        },
        // {
        //   id:6,
        //   title:"",
        //   description:``,
        //   photoUrl:"",
        //   content:``
        // },
        
        
        
      ];
      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

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

    const newPath = `M0 40 Q ${offsetX} ${40 + curveDirection * curveHeight} ${rect.width} 40`;
    gsap.to(lineRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLineLeave = () => {
    const straightPath = `M0 40 Q ${lineContainerRef.current.offsetWidth / 2} 40 ${lineContainerRef.current.offsetWidth} 40`;
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
    <div className="bg-black h-max w-screen flex flex-col justify-center items-center py-2 px-2 border-b-2 border-white border-opacity-30 pb-12">
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
                color: [
                  "#ef20a1",
                  "#e3fe59",
                  "#4acce7",
                  "#f3dc91",
                  "#8c29b6",
                ][index],
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
              src={blog.photoUrl}
              alt="photo"
              className="w-full h-full object-cover overflow-hidden rounded-2xl group-hover:scale-125 transition-transform ease-in-out "
            />
                  <div className="w-full h-full absolute z-1  bg-gradient-66deg-opacity group-hover:hidden transition-transform duration-300 ease-in-out group-hover:bg-transparent overflow-hidden"></div>
            </div>

            <div className="p-4  w-[65%] ">
              <h2 className="text-xl text-white font-bold px-1 hover:text-[#e3fe59] ">
                {sliceTitle(blog.title)}
              </h2>
              <p className="text-gray-400 text-sm opacity-80 px-1">{sliceDescription(blog.description)}</p>
              <button className="text-[#e3fe59] hover:bg-gray-600 hover:bg-opacity-30 p-2 rounded-lg active:scale-95 mt-2 ms-[-1%] " onClick={() => openModal(blog)}>See more</button>
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
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 " >
    <div className="bg-black border-2 border-red-500 border-opacity-30 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl p-6 max-h-[80%] overflow-auto">
      <div className="text-red-500 text-3xl font-bold font-mono text-right " onClick={closeModal}>x</div>
      <h2 className="text-3xl text-[#e3fe59] font-bold mb-4">{modalContent.title}</h2>
      <p className="text-white opacity-75 text-xl mb-4 font-medium">{modalContent.description}</p>
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

export default BlogsHeading;
