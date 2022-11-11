import Image from 'next/image';
import Link from 'next/link'
import wordpress from '../public/image/wordpress.webp';
import freelance from '../public/image/freelance.webp';
import cisco from '../public/image/cisco.webp';


 
 const Certificate = () => {
    return (
        <div className="px-8 py-16  sm:max-w-xl md:max-w-full md:px-24 lg:px-20 lg:py-20 border  " id='certificate'>
         <h5 className="mb-6 pb-8 text-4xl font-extrabold leading-none text-center  ">
        CERTIFICATES
          </h5>
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3 ">
       
       <div className="relative p-px overflow-hidden h-72 transition  duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <Image src={wordpress}  alt="html-logo" className='h-72'  />
       </div>
       <div className="relative p-px overflow-hidden h-72 transition  duration-300  transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <Image src={freelance}  alt="html-logo" className='h-72'  />
        
       </div>
       <div className="relative p-px overflow-hidden transition cursor-pointer duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
      <Image src={cisco} alt="html-logo" className='h-72 w-full'  />
       </div>
     </div>
    
      
      </div>
    );
  };

  export default Certificate;