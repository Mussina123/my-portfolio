import React from "react";
import TB from '../images/TB-headshot.jpg'

export default function About(){
    return(
     <div
        name="about"
        className="w-full h-100 pt-10"
        >
      <div className="sm:pr-2 max-w-screen-lg pt-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            
          </p>
        </div>

        <img className="max-w-sm self-center" alt="Profile" src={TB}></img>
        <h1 className="text-6xl font-bold text-center mt-5">Tyler Beck </h1>
        <h3 className="text-3xl font-medium text-center mt-3"> Full Stack Software Engineer</h3>
        <p className="text-xl mt-5 px-6">
        I'm a full-stack developer who is highly flexible, an established learner, and continuously expanding my knowledge to maintain current and upcoming coding best practices to maximize performance and quality. I am looking to bring my skills to a tech company with global reach.
        </p>
      </div>

      <div>
      
      </div>
    </div>
  );
};