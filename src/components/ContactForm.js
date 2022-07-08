import React from "react"
import emailjs from '@emailjs/browser';


// export const ContactUs = () => {
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target .reset()
//     };
  


export default function ContactForm(){
    return (
        <div    
        name="contact"
        className="w-full h-100 flex flex-col pt-10 pl-10 md:pl-0 sm:pr-2 max-w-screen-lg pt-1 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-black">
                Contact Me 
              </p>
             </div>
            <form className="flex flex-col w-full justify-center w-3/4 md:w-1/2">
                <label  className="mb-2 font-medium">Name</label>
                <input type="text" name="user_name" />
                <label className="mb-2 font-medium mt-2">Email</label>
                <input type="email" name="user_email" />
                <label className="mb-2 font-medium mt-2">Message</label>
                <textarea name="message" />
                <input className="mt-2" type="submit" value="Submit" />
            </form>

        </div>
    );
//   };

}

    


