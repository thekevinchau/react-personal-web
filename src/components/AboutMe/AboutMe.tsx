import { AboutMeCard } from "./AboutMeCard";
import { TechStackList } from "./TechStackList";

export const AboutMe = () => {
  return (
    <div className="h-full w-screen bg-black opacity-95 flex flex-col items-center justify-evenly font-mono AboutMeBg pb-24">
      <div className="flex flex-col items-center mt-20">
        <AboutMeCard />
      </div>
      <div className="flex items-start text-black w-[600px] flex-col p-3 mt-5 mb-5 bg-white border-2 border-black rounded-lg">
        <h1 className="text-red-500 font-bold b">More about me...</h1>
        Hello! I'm Kevin Chau, a passionate student dedicated to lifelong
        learning and teaching others about my passions. With a solid background
        in JavaScript, React, and all things web development, I thrive on
        creating innovative and efficient web solutions. Join me on my journey
        of continuous growth and discovery in the ever-evolving world of
        technology!
      </div>
      <div className="flex items-start w-[600px] flex-col pl-3 mt-5 mb-10 bg-white border-2 border-black rounded-lg text-black p-3">
        <h1 className="text-red-500 font-bold">Hobbies</h1>
        Beyond programming, I love immersing myself in video games, listening to
        music, weightlifting, and spending quality time with my girlfriend. I am a very competitive person so I generally enjoy playing competitive games like VALORANT, CS2, and League of Legends
        <div className="flex">
        </div>
      </div>
      <TechStackList />
    </div>
  );
};
