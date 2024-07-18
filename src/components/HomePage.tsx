import { ReactTyped } from "react-typed";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./NavBar";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-black opacity-95 h-screen w-screen flex flex-col justify-center items-center text-white text-8xl">
      <h1 className="font-mono heading-1">
        Hello, I'm <span className="text-red-500">Kevin.</span>
      </h1>
      <div className="heading-2">
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
      <button className="mt-10 text-2xl p-2 text-red-500"><p><FontAwesomeIcon icon={faArrowDown} bounce  size="2xl"/></p> </button>
    </div>
  );
};
