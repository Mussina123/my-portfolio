import React from "react";
import HTML from '../logos/HTML-logo.png'
import CSS from '../logos/CSS-logo.png'
import JS from '../logos/JS-logo.png'
import NODE from '../logos/NODE-logo.png'
import EXPRESS from '../logos/EXPRESS-3-logo.png'
import REACTLOGO from '../logos/REACT-logo.png'
import BOOTSTRAP from '../logos/BOOTSTRAP-logo.png'
import TAILWIND from '../logos/TAILWIND-logo.png'
import GITHUB from '../logos/GITHUB-logo.png'
import MONGODB from '../logos/MONGODB-logo.png'

export default function Experiences(){

const languages = [
    {
        id: 1, 
        logo: HTML, 
        title: "HTML5"
    },
    {
        id: 2, 
        logo: CSS, 
        title: "CSS3"
    },
    {
        id: 3, 
        logo: JS, 
        title: "Javascript"
    },
    {
        id: 4, 
        logo: NODE, 
        title: "Node"
    },
    {
        id: 5, 
        logo: EXPRESS, 
        title: "Express"
    },
    {
        id: 6, 
        logo: REACTLOGO, 
        title: "React"
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
        logo: MONGODB, 
        title: "MongoDB"
    },
]
    return(
    <div    
    name="languages"
    className="w-full h-100 pt-10 pl-12 md:pl-0 sm:pr-2 max-w-screen-lg pt-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Languages
          </p>
         </div>
            <div className="grid grid-cols-2 md:grid-cols-5 justify-center align-center">
                {languages.map(({id, logo, title}) => (
                    <div key={id}> 
                    <img className="w-36 px-auto"  src={logo}></img>
                    
                    {title}
                    </div>
                ))}
            </div>

    </div>

    )
}