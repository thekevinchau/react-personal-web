import { AboutMeCard } from "./AboutMeCard";

export const AboutMe = () => {
  return (
    <div className="h-screen w-screen bg-black opacity-90 flex flex-col items-center justify-evenly border font-mono">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-7xl mb-16">About Me</h1>
        <AboutMeCard />
      </div>
      <div className="flex items-start text-white">lor</div>
    </div>
  );
};
