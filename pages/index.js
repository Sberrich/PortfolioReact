import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsSun, BsArrowDownCircle } from "react-icons/bs";
import { PiFigmaLogoFill } from "react-icons/bi";

import wave from "../public/profile2.png";
import sberrich from "../public/wave4.png";
import code from "../public/code.png";
import design from "../public/design.png";
import Subject from "../public/Subject.png";
import Subject2 from "../public/Subject2.png";
import consulting from "../public/consulting.png";
import cardweb from "../public/card-hello-background.webp";
import Figma from "../public/assets/figma.png";
import js from "../public/assets/javascript.png";
import git from "../public/assets/git.png";
import typescript from "../public/assets/typescript.png";
import mu5 from "../public/assets/mu5.png";
import redux from "../public/assets/redux.png";
import react from "../public/assets/react.png";
// import react from "../public/assets/react.png";
// import tail from "../public/assets/tail.png";
import belsamiq from "../public/assets/belsamiq.png";
import ai from "../public/assets/ai.png";
import canva from "../public/assets/canva.png";
import SplashScreen from "../components/splashpage";

//! Card Component
const Card = ({
  imageSrc,
  title,
  subtitle,
  Desc,
  children,
  imgH,
  imgW,
  borderlights,
}) => (
  <div
    className={`bg-white dark:bg-primary-black min-w-[300px] rounded-[32px] mt-10 flex flex-col justify-between relative w-full xl:w-1/2 min-h-[300px] p-[32px] dark:bg-primary-black border-2 dark:bg-gray-800 overflow-hidden ${borderlights}`}
  >
    <div className="flex justify-between max-w-full">
      <div className="flex flex-row items-center gap-5">
        <div className="max-w-fit">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[50px] h-[50px] bg-[#b5e3fd]/75 rounded-full flex items-center justify-center blur-md"></div>
            <Image
              src={imageSrc}
              width={imgW}
              height={imgH}
              decoding="async"
              className="w-22 h-22 relative top-[-4px] left-[-2px]"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p>
            {title}
            <span className="font-[Moranga] font-semibold text-xl ml-2">
              {subtitle}
            </span>
          </p>
          <p className="text-sm text-gray-400">{Desc}</p>
        </div>
      </div>
    </div>
    <div>{children}</div>
  </div>
);

//! LanguageSection Component
const LanguageSection = ({ languages, languageIndex }) => (
  <div className="hidden md:block">
    <div>
      <h2 className="font-tahu text-4xl">{languages[languageIndex]}</h2>
    </div>
    <Image src={wave} width={700} height={700} objectFit="contain" alt="wave" />
  </div>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ["Hello", "Hola", "Bonjour", "ⴰⵣⵓⵍ ⴼⵍⴰⵡⵏ", "你好", "مرحبا"];

  useEffect(() => {
    const timer = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [languages.length]);

  return (
    <div className={`bg-gray-200 ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>SamirBerrichi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <SplashScreen/>
      <main className="bg-gray-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40 duration-300 select-none animate-fade-in">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white relative">
            {/* Background Image with Spin Animation */}

            <div className="flex ml-4 relative items-center justify-center">
              <div className="absolute bg-[#b5e3fd]/30 w-[130px] h-[20px] blur-md"></div>
              <div className="rounded-full flex items-center justify-between">
                <span className="text-2xl font-bold tracking-wide font-['Tahu']">
                  S<span className="opacity-100">a</span>
                  <span className="opacity-100">m</span>
                  <span className="opacity-100">i</span>
                  <span className="opacity-100">r</span>
                </span>
                <Image
                  src={Subject}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt="sberrich"
                  className=" animate-pulse"
                />
                <span className="text-xl font-bold tracking-wide font-['Tahu'] ">
                  B<span className="opacity-100">e</span>
                  <span className="opacity-100">r</span>
                  <span className="opacity-100">r</span>
                  <span className="opacity-100">i</span>
                  <span className="opacity-100">c</span>
                  <span className="opacity-100">h</span>
                  <span className="opacity-100">i</span>
                  <span className="opacity-100">.</span>
                </span>
              </div>
            </div>
            <ul className="flex items-center justify-between">
              <li>
                <BsSun
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl animate-pulse"
                />
              </li>
              <li>
                <BsArrowDownCircle className="cursor-pointer text-2xl ml-12 animate-pulse" />
              </li>
            </ul>
          </nav>
      
          <div className="flex flex-col md:flex-row items-center justify-around dark:text-white">
            {/* Left Side with Four Cards */}

            <Card
              imageSrc={sberrich}
              imgH={75}
              imgW={75}
              title={"Hello, I’m"}
              subtitle={"Samir Berrichi."}
              Desc={"FrontEnd Enginer"}
              borderlights="light-border"
            >
              <p className=" font-Moranga text-md font-semibold ">
                Also known as sberrich, a self-taught
                <span className="font-[Moranga] text-2xl font-semibold m-2">
                  frontend developer
                </span>
                originally from Morocco and residing in Khouribga at the moment.
                Currently available for freelance work or full-time jobs. When
                I&rsquo;m not coding or designing, I enjoy reading books,
                playing football, playing video games, or watching movies.
                Lately, II&rsquo;ve started hitting the gym to build some
                strength, burn calories, and II&rsquo;m enjoying it so far.
              </p>
            </Card>

            {/* Right Side with Image */}
            <LanguageSection
              languages={languages}
              languageIndex={languageIndex}
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center text-center gap-8 py-3 text-gray-600 md:text-5xl dark:text-gray-200"></div>
          <div className="lg:flex gap-20 mt-6  dark:text-white">
            <Card
              imageSrc={design}
              subtitle="Beautiful Designs"
              imgH={75}
              imgW={75}
              borderlights="react-border"
            >
              <p className="py-2 font-Moranga">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className="py-4 font-Moranga text-teal-500">
                Design Tools I Use
              </h4>
              <div className="flex items-center justify-between m-10">
                <div className="ball-image">
                  <Image
                    src={Figma}
                    width={50}
                    height={50}
                    decoding="async"
                    className="w-22 h-22"
                    loading="lazy"
                  />
                </div>
                <div className="ball-image">
                  <Image
                    src={canva}
                    width={50}
                    height={50}
                    decoding="async"
                    className="w-22 h-22"
                    loading="lazy"
                  />
                </div>
                <div className="ball-image">
                  <Image
                    src={ai}
                    width={70}
                    height={70}
                    decoding="async"
                    className="w-22 h-22"
                    loading="lazy"
                  />
                </div>
                <div className="ball-image">
                  <Image
                    src={belsamiq}
                    width={50}
                    height={50}
                    decoding="async"
                    className="w-22 h-22"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>

            <Card
              imageSrc={code}
              subtitle="Code your dream project"
              imgH={75}
              imgW={75}
              borderlights="spotify-border"
            >
              {" "}
              <div className="flex items-center justify-between m-10">
                <Image
                  src={js}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
                <Image
                  src={redux}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
                <Image
                  src={mu5}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
                <Image
                  src={typescript}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
                <Image
                  src={git}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
                <Image
                  src={react}
                  width={50}
                  height={50}
                  decoding="async"
                  className="w-22 h-22 relative top-[-4px] left-[-2px]"
                  loading="lazy"
                />
              </div>
            </Card>
            <Card
              imageSrc={consulting}
              subtitle="Consulting Services"
              imgH={75}
              imgW={75}
              borderlights="youtube-border"
            />
          </div>
          <div className="lg:flex gap-10 mt-28 dark:text-white">
            <Card imageSrc={Subject2} subtitle="About Me" imgH={75} imgW={75}>
              <p className=" font-Moranga text-md font-semibold ">
                Hello! I&rsquo;m a passionate web developer with a love for
                React.js, Next.js, and Tailwind CSS. With 1 year of frontend
                development experience, I enjoy solving complex problems and
                creating impactful solutions. When I&rsquo;m not coding, I
                explore new technologies, work on side projects, and contribute
                to open-source communities. Let&rsquo;s connect and build
                something amazing together!
              </p>
            </Card>

            <Card
              imageSrc={consulting}
              subtitle="Consulting Services"
              imgH={75}
              imgW={75}
            />
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
