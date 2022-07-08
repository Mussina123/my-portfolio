// import React from "react";
// import {Link} from 'react-scroll'

// export default function RightNavBar() {

// const [navigations, setNavigations] = React.useState(false);


// const urls = [
//     {
//         id: 1, 
//         url: 'home',
//     }, 
//     {
//         id: 2, 
//         url: 'about',
//     },
//     {
//         id: 3, 
//         url: 'projects',
//     },
//     {
//         id: 4, 
//         url: 'skills'
//     },
//     {
//         id: 5, 
//         url: 'contact'
//     },
// ];

//     return(
//         <div className="sm:flex-none md:flex justify-center items-center w-full h-25 px-4 text-black bg-green-400 fixed nav">
//             <div>
//                 <h1 className="font-bold text-6xl font-signature ml-4 mt-4 "><a className="link-underline link-underline-black hover:underline underline-offset-8 transition ease-in-out delay-150" href= "https://tylerbeck-webdev.netlify.app" target="_blank" rel='noreferrer'>Tyler</a></h1>
//             </div>

//             <ul className="hidden md:flex flex flex-row justify-center lg:flex lg:flex-col lg:top-[35%] lg:right-0 lg:fixed" >
//                 {urls.map(({id, url}) => (
//                     <li
//                         key= {id}
//                         className="px-4 text-2xl text-black hover:text-3xl cursor-pointer mt-6  duration-150 "
//                     >
//                         <Link to={url} smooth duration={500}>
//                          {url}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>



//             return(
//         <div className="container">
//             <div className="flex flex-row justify-center lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
//                 {socials.map(({id, child, href, download})=> (
//                     <ul key={id} className=''>
//                         <a href={href} download={download} target='_blank'>
//                         <li className="pt-5 pr-4 pl-4 hover:scale-110">
//                             {child} 
//                         </li>
//                         </a>
//                     </ul>
//                 )
//                 )}
//             </div>
//         </div>
//     )

//             {/* <div 
//             onClick={() => setNavigation(!navigation)}
//             className="cursor-pointer pr-10 z-10 text-black-500 flex-none md:hidden"
//             >
//                 {navigation ? <FaTimes size={35} /> : <FaBars size={35} className="cursor-pointer p- mt-6 ml-5" />}
//             </div> */}

//             {navigation && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-600 text-white">
//           {urls.map(({ id, url }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl hover:underline hover:font-bold"
//             >
//               <Link
//                 onClick={() => setNavigation(!navigation)}
//                 to={url}
//                 smooth
//                 duration={500}
//               >
//                 {url}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//         </div>
//     )
// }
