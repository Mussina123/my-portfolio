import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFilePersonFill } from "react-icons/bs";

export default function SideBar(){

const socials = [
    {
        id: 1, 
        child: (
            <>
            Github <AiFillGithub size={30}/>
            </>
        ),
        href: 'https://github.com/Mussina123'
    },
    {
        id: 2, 
        child: (
            <>
            LinkedIn <BsLinkedin size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/tyler-beck-webdev/'
    },
    {
        id: 3, 
        child: (
            <>
            Email <HiOutlineMail size={30} />
            </>
        ) ,
        href: 'mailto:softwaretpd2035@gmail.com'
    },
    {
        id: 4, 
        child: (
            <>
            Resume  < BsFillFilePersonFill size={30}/>
            </>
        ),
        href: 'resume'
    }
]

    return(
        <div className="container">
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                {socials.map(({id, child, href})=> (
                    <ul key={id} className=''>
                        <a href={href}>
                        <li className="flex text-3xl pt-4 pr-4 pl-5 flex justify-between items-center ml-[-132px]">
                            {child} 
                        </li>
                        </a>
                    </ul>
                )
                )}
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}