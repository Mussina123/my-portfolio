import React from "react";
import PT from '../images/Physical-therapy.png'
import LUX from '../images/LUX.png'
import NASA from '../images/NASA.png'
import TravelJournal from '../images/React-travel-journal.png'
import Meme from '../images/Meme-app.png'
import {DiGithubBadge} from 'react-icons/di'
import {GrPersonalComputer} from 'react-icons/gr'

export default function Projects(){

    const myProjects = [
        {
            id: 1, 
            imgs: PT,
            repo: 'https://github.com/Mussina123/Physical-Therapy-Website',
            url: 'https://healing-physical-therapy.netlify.app/',
       
        },
        {
            id: 2, 
            imgs: TravelJournal,
            repo: 'https://github.com/Mussina123/React-travel-journal',
            url: 'https://tb-travel-journal.netlify.app/',
     
        },
        {
            id: 3, 
            imgs: Meme,
            repo: 'https://github.com/Mussina123/React-meme-app',
            url: 'https://tb-meme-app.netlify.app/',
          
        },
        {
            id: 4, 
            imgs: LUX,
            repo: 'https://github.com/Mussina123/lux-real-estate-landing-page',
            url: 'https://lux-real-estate-tb-dev.netlify.app/',
        
        },
        {
            id: 5, 
            imgs: NASA,
            repo: 'https://github.com/Mussina123/NASA-API-',
            url: 'https://nasaimageoftheday.netlify.app/',
            
        }
    ]




    return(
     <div
        name="projects"
        className="w-full h-100 pt-20"
        >
      <div className="sm:pr-2 max-w-screen-lg pt-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 sm:px-0">
            {myProjects.map(({id, imgs, repo, url }) => (
                <div key={id}>
                    <img
                    src= {imgs}
                    alt="projects"
                    className="rounded hover:scale-105"
                    />
                    <div className="flex justify-center items-center gap-6 pt-3 border-solid">
                      <div className="flex items-center gap-1 text-xl font-medium hover:underline hover:font-bold cursor-pointer" onClick={ () => window.open(repo, '_blank')}><DiGithubBadge size={30}/> Github</div>
                      <div className="flex items-center gap-1 text-xl font-medium hover:underline hover:font-bold cursor-pointer" onClick={ () => window.open(url, '_blank')}><GrPersonalComputer size={30} /> Website </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};