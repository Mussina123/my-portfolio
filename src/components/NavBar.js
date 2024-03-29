import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'
import { TbArrowUpCircle } from "react-icons/tb";
import TB from '../images/TB-headshot.jpg'

export default function NavBar() {

    const [navigation, setNavigation] = React.useState(false);


    const urls = [
        // {
        //     id: 1, 
        //     url: 'home',
        // }, 
        {
            id: 2,
            url: 'about',
        },
        {
            id: 3,
            url: 'projects',
        },
        {
            id: 4,
            url: 'skills'
        },
        {
            id: 5,
            url: 'contact'
        },
    ];

    return (
        <div className="sm:flex-none md:flex justify-between items-center w-full h-25 px-4 text-black fixed md:static nav">
            {/* <div>
                <h1 className="font-bold text-6xl font-signature ml-4 mt-4 "><a className="link-underline link-underline-black hover:underline underline-offset-8 transition ease-in-out delay-150" href= "https://tylerbeck-webdev.netlify.app" target="_blank" rel='noreferrer'>Tyler</a></h1>
            </div> */}
            <div className=''>
                <img
                    alt=""
                    src={TB}
                    className='opacity-0 w-0 md:w-24 md:opacity-100 rounded-lg flex mt-6 ml-20'
                    width={50}
                />
            </div>


            <ul className="hidden md:flex self-center md:mr-24" >
                {urls.map(({ id, url }) => (
                    <li
                        key={id}
                        className="px-4 text-2xl text-white hover:text-3xl cursor-pointer mt-6 duration-150 "
                    >
                        <Link to={url} smooth duration={500}>
                            {url}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNavigation(!navigation)}
                className="cursor-pointer pr-10 z-10 text-white flex-none md:hidden"
            >
                {navigation ? <FaTimes size={35} /> : <FaBars size={35} className="cursor-pointer mt-6 ml-1" />}
            </div>

            {
                navigation && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-600 text-white">
                        {urls.map(({ id, url }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:underline hover:font-bold"
                            >
                                <Link
                                    onClick={() => setNavigation(!navigation)}
                                    to={url}
                                    smooth
                                    duration={500}
                                >
                                    {url}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }


            <Link className="bottom-[4%] right-0 fixed lg:bottom-[4%] lg:right-5 lg:fixed hover:scale-110 "
                to='about'
                smooth
                duration={500}>
                <TbArrowUpCircle size={40} className='text-transparent md:text-white' />
            </Link>

        </div >

    )
}
