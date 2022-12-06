import React from "react";
// import TB from '../images/TB-headshot.jpg'
import AnimatedAbout from './AnimatedAbout'

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-100 "
    >
      <div className="sm:pr-2 max-w-screen-lg pt-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">

          </p>
        </div>

        {/* <img className="max-w-sm self-center rounded-lg	" alt="Profile" src={TB}></img> */}
        {/* <h1 className="text-6xl font-bold mt-5 ">Tyler Beck </h1>
        <h3 className="text-3xl font-medium mt-6"> Full Stack Software Engineer</h3>
        <p className="text-xl mt-5 ">
          I'm a full-stack developer who is an established learner, analytical, organized, and a team player who has years of professional collaboration experience. I am looking to bring my skills to a tech company with global reach.
        </p> */}
        <AnimatedAbout text='Tyler Beck' title='Front End Software Engineer' />
        <p className="mx-10 md:mx-0 md:max-w-screen-lg mt-4  h-full ">
          I'm a Front End Engineer who is an established learner, analytical, organized, and a team player who has years of professional collaboration experience. I am looking to bring my skills to a tech company with global reach.
        </p>
      </div>

      <div>

      </div>
    </div>
  );
};