import { TechStackItem } from "./TechStackItem";
import nodejs from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/NodeJS.png";
import css from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/CSSLogo.png";
import html from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/HTML5Logo.png";
import js from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/JavaScriptLogo.png";
import ts from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/TypescriptLogo.png";
import express from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/ExpressLogo.png";
import mdb from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/mongodb.png";
import git from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/GitLogo.png";
import react from "/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/ReactLogo.png";

const renderingArray = [html, css, js, ts, express, nodejs, mdb, react, git];

export const TechStackList = () => {
  return (
    <div className="flex justify-evenly w-4/5 h-full mb-32">
      {renderingArray.map((image: string) => (
        <TechStackItem img={image} />
      ))}
    </div>
  );
};
