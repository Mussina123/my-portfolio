import React from "react";
import HTML from '../logos/HTML-logo.png'
import CSS from '../logos/CSS-logo.png'
import JS from '../logos/JS-logo.png'
import NODE from '../logos/NODE-logo.png'
import EXPRESS from '../logos/EXPRESS-logo.png'
import REACTLOGO from '../logos/REACT-logo.png'
import BOOTSTRAP from '../logos/BOOTSTRAP-logo.png'
import TAILWIND from '../logos/TAILWIND-logo.png'
import GITHUB from '../logos/GITHUB-2.png'
import MONGODB from '../logos/MONGODB-logo.png'

export default function Experiences() {

    const languages = [
        {
            id: 1,
            logo: REACTLOGO,
            title: "React"
        },
        {
            id: 2,
            logo: NODE,
            title: "Node"
        },
        {
            id: 3,
            logo: JS,
            title: "Javascript"
        },
        {
            id: 4,
            logo: MONGODB,
            title: "MongoDB"
        },
        {
            id: 5,
            logo: EXPRESS,
            title: "Express"
        },
        {
            id: 6,
            logo: HTML,
            title: "HTML"
        },
        {
            id: 7,
            logo: BOOTSTRAP,
            title: "Bootstrap"
        },
        {
            id: 8,
            logo: TAILWIND,
            title: "Tailwind"
        },
        {
            id: 9,
            logo: GITHUB,
            title: "Github"
        },
        {
            id: 10,
            logo: CSS,
            title: "CSS"
        },
    ]
    return (
        <div
            name="skills"
            className="w-full h-100 pt-10 pl-10 md:pl-0 sm:pr-2 max-w-screen-lg pt-1 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-2">
                <p className="text-4xl font-bold inline border-b-4 border-white">
                    Skills
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 justify-center align-center justify-self-center">
                {languages.map(({ id, logo, title }) => (
                    <div key={id} className=" ml-0  md:text-center md:justify-self-center mb-8">
                        <img className="h-36 ml-0 hover:scale-105" src={logo} alt=""></img>

                        <div className="ml-6 font-extrabold md:ml-0 mt-5 text-2xl ">{title}</div>
                    </div>
                ))}
            </div>

        </div>

    )
}