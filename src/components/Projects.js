import React from "react";
import PT from '../images/Physical-therapy.png'
import LUX from '../images/LUX.png'
import NASA from '../images/NASA.png'
import TravelJournal from '../images/React-travel-journal.png'
import Meme from '../images/Meme-2.png'
import BOOK from '../images/BOOK.png'
import {DiGithubBadge} from 'react-icons/di'
import {GrPersonalComputer} from 'react-icons/gr'

import HTML from '../logos/HTML-logo.png'
import CSS from '../logos/CSS-logo.png'
import JS from '../logos/JS-logo.png'
import REACTLOGO from '../logos/REACT-logo.png'
import BOOTSTRAP from '../logos/BOOTSTRAP-logo.png'

export default function Projects(){

    const myProjects = [
        {
            id: 1, 
            imgs: PT,
            repo: 'https://github.com/Mussina123/Physical-Therapy-Website',
            url: 'https://healing-physical-therapy.netlify.app/',
            logo: HTML,
            logo2: CSS,
            logo3: JS, 
       
        },
        {
            id: 2, 
            imgs: TravelJournal,
            repo: 'https://github.com/Mussina123/React-travel-journal',
            url: 'https://tb-travel-journal.netlify.app/',
            logo: REACTLOGO,
            logo2: JS,
            logo3: HTML,
            logo4: CSS,
     
        },
        {
            id: 3, 
            imgs: Meme,
            repo: 'https://github.com/Mussina123/React-meme-app',
            url: 'https://tb-meme-app.netlify.app/',
            logo: REACTLOGO,
            logo2: JS,
            logo3: HTML,
            logo4: CSS,
          
        },
        {
            id: 4, 
            imgs: LUX,
            repo: 'https://github.com/Mussina123/lux-real-estate-landing-page',
            url: 'https://lux-real-estate-tb-dev.netlify.app/',
            logo: HTML,
            logo2: CSS,
            logo3: JS,  
        },
        {
            id: 5, 
            imgs: NASA,
            repo: 'https://github.com/Mussina123/NASA-API-',
            url: 'https://nasaimageoftheday.netlify.app/',
            logo: HTML,
            logo2: CSS,
            logo3: JS, 
            
        },
        {
            id: 6, 
            imgs: BOOK,
            repo: 'https://github.com/Mussina123/Library-Project',
            url: 'https://my-book-list35.netlify.app/',
            logo: HTML,
            logo2: CSS,
            logo3: JS, 
            logo4: BOOTSTRAP
            
        }
    ]




    return(
     <div
        name="projects"
        className="w-full h-100 pt-10"
        >
      <div className="sm:pr-2 max-w-screen-lg pt-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black ml-10 md:ml-0">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 sm:px-0 ">
            {myProjects.map(({id, imgs, repo, url, logo, logo2, logo3, logo4 }) => (
                <div key={id}>
                    <img
                    src= {imgs}
                    alt="projects"
                    className="rounded-lg duration-200 hover:scale-105 w-full h-72"
                    />
                    <div className="flex justify-center items-center gap-6 pt-6 mb-4">
                      <div className="flex items-center gap-1 text-xl font-medium hover:underline hover:font-bold cursor-pointer" onClick={ () => window.open(repo, '_blank')}><DiGithubBadge size={30}/> Github</div>
                      <div className="flex items-center gap-1 text-xl font-medium hover:underline hover:font-bold cursor-pointer" onClick={ () => window.open(url, '_blank')}><GrPersonalComputer size={30} /> Website </div>
                    </div>
                      <div className="flex justify-center gap-6 mb-1 md:mb-0">
                      <img className="h-6" alt='skills' src={logo}></img>
                      <img className="h-6" alt='skills' src={logo2}></img>
                      <img className="h-6" alt='skills' src={logo3}></img>
                      <img className="h-6" alt='' src={logo4}></img>
                      </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};