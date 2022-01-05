import Head from "next/head";

import banner from "../images/bannerArtwork.png";
// Importing next image
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  // return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`;
  return `../images/${src}`;
};

export default function Home() {
  return (
    <>
      <section className="herobanner">
        <div className="flex bg-[#EAE9E5] h-screen w-full pl-[12rem] py-8 z-10">
          <h1 className="text-8xl text-gray-800 text-left z-10">
            Art of <br /> Awadh and <br /> something
          </h1>
          {/* <Image
            // loader={myLoader}
            src="/images/banner-artwork.png"
            alt="Picture of some pretty artwork"
            width={500}
            height={500}
          /> */}
          <div className="w-full h-1/2 bg-slate-400 -ml-[5rem] z-0 ">
            <Image src={banner} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
