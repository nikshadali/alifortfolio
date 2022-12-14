import React from 'react';
import Image from 'next/image'
import email from '../public/image/email.svg';
import location from '../public/image/location.svg'
import mobile from '../public/image/mobile.svg'
const Contact = () => {
  return (
    <div className="px-8 py-16  sm:max-w-xl md:max-w-full md:px-24 lg:px-20 lg:py-20 border" id='contact'>
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap lg:justify-between">
      <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div class="mb-12 max-w-[570px] lg:mb-0">
          <span class="text-primary mb-4 block text-base font-semibold ">
            Contact Us
          </span>
          <h2
            class="text-dark mb-6 text-purple-700 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            GET IN TOUCH WITH US
          </h2>
          <p class="text-body-color mb-9 text-base leading-relaxed">
          I am Nikshad Ali, web developer from Pakistan(Peshawer), Asia. I have rich experience in web site design and building and customization, also I am good at Html,Css Bootstrap Mvc and many more.
          </p>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <Image src={location} alt="location" className='h-12' />
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Our Location</h4>
              <p class="text-body-color text-base">
              Peshawer(Pakistan)
              </p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
             <Image src={mobile} alt="mobile" className='h-12'/>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Mobile No</h4>
              <p class="text-body-color text-base">(+92)3329991120</p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <Image src={email} alt="location" className='h-10'/>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Email Address</h4>
              <p class="text-body-color text-base">naik_ali@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="relative rounded-lg bg-white p-8 shadow-2xl sm:p-12">
          <form>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="bg-purple-700 rounded-3xl w-full  p-3 text-white transition duration-500 shadow-md hover:-translate-y-2 hover:drop-shadow-2xl "
              >
                Send Message
              </button>
            </div>
          </form>
          <div>
            <span class="absolute -top-10 -right-9 z-[-1]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span class="absolute -right-10 top-[90px] z-[-1]">
              <svg
                width="34"
                height="134"
                viewBox="0 0 34 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
            <span class="absolute -left-7 -bottom-7 z-[-1]">
              <svg
                width="107"
                height="134"
                viewBox="0 0 107 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="104.999"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 104.999 132)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 104.999 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 104.999 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 104.999 88)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 104.999 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 104.999 45)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 104.999 16)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 104.999 59)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 104.999 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 104.999 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 90.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 90.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 90.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 90.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 90.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 90.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 90.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 90.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 90.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 90.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 75.6654 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 75.6654 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 75.6654 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 75.6654 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 75.6654 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 75.6654 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 75.6654 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 75.6654 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 75.6654 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 75.6654 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 60.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 60.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 60.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 60.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 60.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 60.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 60.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 60.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 60.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 60.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 46.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 46.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 46.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 46.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 46.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 46.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 46.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 46.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 46.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 46.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact