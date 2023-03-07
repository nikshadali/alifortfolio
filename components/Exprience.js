import Image from "next/image";
import Link from "next/link";
import javaScriptLogo from "../public/image/javascriptLogo.svg";
import reactLogo from "../public/image/reactLogo.svg";
import nodeLogo from "../public/image/node.svg";
import htmllogo from "../public/image/htmlLogo.svg";
import csslogo from "../public/image/csslogo.svg";
import expressLogo from "../public/image/expresslogo.svg";
import mongodbLogo from "../public/image/mogodbLogo.svg";
import wordpressLogo from "../public/image/wordpressLogo.svg";
import bootstrapLogo from "../public/image/bootstrapLogo.svg";
import malakfinancial from "../public/image/malakfinancial.jpg";
import trendily from "../public/image/trendily.jpg";
import motherboard from "../public/image/motherboard.jpg";
import onlineshop from "../public/image/onlineshop.png";
import olxsimple from "../public/image/olxsimple.png";
import stopwatch from "../public/image/stopwatch.png";

const Exprience = () => {
  return (
    <div
      className="px-8 py-16  sm:max-w-xl md:max-w-full md:px-24 lg:px-20 lg:py-20 border"
      id="projects"
    >
      <h5 className="mb-6 pb-8 text-4xl font-extrabold leading-none text-center  ">
        PROJECTS
      </h5>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3 ">
        <div className="relative p-px overflow-hidden h-72 transition cursor-pointer duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://malikfinancials.com/ads/">
            {" "}
            <Image
              className="pro-img"
              src={trendily}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
        <div className="relative p-px overflow-hidden h-72 transition cursor-pointer duration-300  transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://malikfinancials.com/">
            {" "}
            <Image
              className="pro-img"
              src={malakfinancial}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
        <div className="relative p-px overflow-hidden transition cursor-pointer duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://motherboardtoday.com/">
            {" "}
            <Image
              className="pro-img"
              src={motherboard}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3 mt-10 ">
        <div className="relative p-px overflow-hidden h-72 transition  duration-300 transform cursor-pointer border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://onlineshop-4f466.web.app/">
            {" "}
            <Image
              className="pro-img"
              src={onlineshop}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
        <div className="relative p-px overflow-hidden h-72 transition cursor-pointer duration-300  transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://ylxw-3484d.web.app/">
            {" "}
            <Image
              className="pro-img"
              src={olxsimple}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
        <div className="relative p-px overflow-hidden transition cursor-pointer duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <Link href="https://stopwatch-12d9b.web.app/">
            {" "}
            <Image
              className="pro-img"
              src={stopwatch}
              alt="html-logo"
              className="h-72"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
