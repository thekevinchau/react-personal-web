import { ReactTyped } from "react-typed";


export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-black opacity-90 h-screen w-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-7xl font-mono">
        Hello, I'm <span className="text-red-500">Kevin.</span>
      </h1>
      <div className="text-7xl">
        <span className="sticky">I'm a </span>
        <ReactTyped
          className="text-red-500"
          strings={["programmer", "weightlifter", "music enthusiast"]}
          typeSpeed={75}
          loop
          backSpeed={75}
          showCursor={true}
        />
      </div>
      <button className="mt-8 text-2xl border p-3 border-red-500 text-red-500">Get to Know Me!</button>
    </div>
  );
};
