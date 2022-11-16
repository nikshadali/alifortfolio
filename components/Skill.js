import Image from 'next/image';
import Link from 'next/link';
import javaScriptLogo from '../public/image/javascriptLogo.svg';
import reactLogo from '../public/image/reactLogo.svg';
import nodeLogo from '../public/image/node.svg';
import htmllogo from '../public/image/htmlLogo.svg';
import csslogo from '../public/image/csslogo.svg';
import expressLogo from '../public/image/expresslogo.svg';
import mongodbLogo from '../public/image/mogodbLogo.svg';
import wordpressLogo from '../public/image/wordpressLogo.svg';
import bootstrapLogo from '../public/image/bootstrapLogo.svg';

 
 const Skill = () => {
    return (
      <div className="px-8 py-16  sm:max-w-xl md:max-w-full md:px-24 lg:px-20 lg:py-20 border" id='skills'>
         <h5 className="mb-6 pb-8 text-4xl font-extrabold leading-none text-center ">
           MY SKILLS
          </h5>
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3 ">
       
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={javaScriptLogo}  alt="html-logo"  />
          </div>
             <h6 className="font-semibold leading-5 text-purple-700">Java Script</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
             I have great knowledge of Javascript programming language with five years exprience. I am good in Asynchronous Programming, Functional Programming, Efficient Memory Management. 
           </p>
          
         </div>
       </div>
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={reactLogo}  alt="html-logo"  />
             </div>
             <h6 className="font-semibold leading-5 text-purple-700">React Js</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
             I have great knowledge of React JS with five years exprience. I am good in React js, single page application, Next js, server-side rendered application, API integration, Redux Reducer, useState, usEffect and so on... 
           </p>
          
         </div>
       </div>
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={nodeLogo}  alt="html-logo"  />
             </div>
             <h6 className="font-semibold leading-5 text-purple-700">Node Js</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
           I have great knowledge of Node JS with five years exprience . I am good in managing Database and schema creation, Authentication, and Authorisation, Asynchronous Programming, and debugging. 

    
           </p>
          
         </div>
       </div>
     </div>
     <div className="grid gap-8 row-gap-5 lg:grid-cols-3 mt-10">
       
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={expressLogo}  alt="html-logo"  />
          </div>
             <h6 className="font-semibold leading-5 text-purple-700">Express JS</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
           I have great knowledge of Express JS with five years exprience. I am good in managing Database and schema creation, Authentication, and Authorisation, Asynchronous Programming, and debugging. 

           </p>
          
         </div>
       </div>
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={mongodbLogo}  alt="html-logo"  />
             </div>
             <h6 className="font-semibold leading-5 text-purple-700">MondoDB</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
           I have great knowledge of MongoDB JS with five years exprience. I am good in maintaining MongoDB databases
          Keep clear documentation of the database setup and architecture.

           </p>
          
         </div>
       </div>
       <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
         <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
         <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
         <div className="relative p-5 bg-white rounded-sm">
           <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
             <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
             <Image src={wordpressLogo}  alt="html-logo"  />
             </div>
             <h6 className="font-semibold leading-5 text-purple-700">Wordpress</h6>
           </div>
           <p className="mb-2 text-sm text-gray-900">
           I have great knowledge of WordPress with five years exprience. I am good in WordPress theme customization and redesign, building Responsive website Speed optimization,All in one SEO 

           </p>
          
         </div>
       </div>
     </div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3 mt-10">
       
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <Image src={htmllogo}  alt="html-logo"  />
             </div>
                <h2 className="font-semibold leading-5 text-purple-700">HTML5</h2>
              </div>
              <p className="mb-2 text-sm text-gray-900">
              I have great knowledge of HTML with five years exprience. I am good in Custom Website Design,Edit HTML Templates,PSD to HTML, HTML CSS Bug Fixing,Responsive Websites.

              </p>
             
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <Image src={csslogo}  alt="html-logo"  />
                </div>
                <h6 className="font-semibold leading-5 text-purple-700">CSS 3</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
              I have great knowledge of CSS with five years exprience. I am good in a  CSS Grid model and CSS flexbox model, animation, card design, responsive websites, and hover effects.

              </p>
             
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <Image src={bootstrapLogo}  alt="html-logo"  />
                </div>
                <h6 className="font-semibold leading-5 text-purple-700">Bootstrap</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
              I have great knowledge of Bootstrap with five years exprience. I am good in gallery carousel, slider, contact form, Responsive Design, Google map, CSS grid model, Breakpoints, Table


              </p>
            
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Skill;