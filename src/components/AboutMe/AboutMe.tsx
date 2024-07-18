import { AboutMeCard } from "./AboutMeCard";

export const AboutMe = () => {
  return (
    <div className="h-screen w-screen bg-black opacity-90 flex flex-col items-center justify-evenly font-mono">
      <div className="flex flex-col items-center">
        <h1 className="text-white text text-6xl mb-16">
          About Me
          <div className="bg-red-500 text-red-500 h-5 w-52 mt-[-1.25rem] ml-[5rem]">
            {" "}
          </div>
        </h1>
        <AboutMeCard />
      </div>
      <div className="flex items-start text-white w-1/3 flex-col pl-3">
      <h1 className="text-red-500 font-bold">More about me...</h1>
        Hello! I'm Kevin Chau, a passionate student dedicated to lifelong
        learning and teaching others about my passions. With a solid background in JavaScript,
        React, and all things web development, I thrive on creating innovative
        and efficient web solutions. Beyond programming, I love immersing myself
        in video games, listening to music, weightlifting, and spending quality time with my
        girlfriend. Join me on my journey of continuous growth and discovery in
        the ever-evolving world of technology!
      </div>
    </div>
  );
};
