import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import headr8 from '../public/image/header8.webp'
import Link from 'next/link';
import { useEffect, useState } from 'react';



 const Header = () => {
 
  const path = 'https://alifortfolio.vercel.app//pdf/myCV.pdf'
 const [myCV, setmyCV] = useState(path)


 
  // Function will execute on click of button
    const onButtonClick = () => {
     
    
  //  // using Java Script method to get PDF file
  //  fetch(myCv).then(response => {
  //  response.blob().then(blob => {
  //  // Creating new object of PDF file
  //   const fileURL = window.URL.createObjectURL(blob);
  //   // Setting various property values
  //   let alink = document.createElement('a');
  //   alink.href = fileURL;
  //   alink.download = myCv;
  //   alink.click();
  //  })
  //  })
      // setMyCV(path)

   }
 

    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 border" id='home'>
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg  className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor"  preserveAspectRatio="none slice">
          <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>  
          <Image  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"  src={headr8}  alt=""  />
          
         
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
           
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none" id="auto_type"> I am  <span className="inline-block text-deep-purple-accent-400 text-purple-700"><Typewriter
  options={{
    strings: ['Nikshad Ali', 'Web Developer', 'Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>   </span></h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Skilled and motivated web developer looking for a challenging role in a reputable organization to utilize my technical, database, programming, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
            </p>
            <div className="flex items-center">
            <Link href={myCV} target= "_blank" className="inline-flex items-center justify-center h-12 px-10 mr-6 font-medium tracking-wide text-white transition duration-500 rounded-3xl shadow-md bg-purple-700 hover:-translate-y-2 hover:drop-shadow-2xl focus:shadow-outline focus:outline-none" onClick={onButtonClick} > Download CV </Link>
           
       
            </div>
          </div>
        </div>
      </div>
    );
  };     
  
  export default Header;        
           
            
             
            
           
                
           
            
            
          
             
               
               
             
               
              
            
               
                
              
             
              
            
            
