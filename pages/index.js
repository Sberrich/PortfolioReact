import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import wave from "../public/wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);



  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section >
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">sberrich</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-cyan-500 text-white dark:bg-gray-900 px-4 py-2 rounded-md ml-8 text-l font-burtons" href="#">
                  Say Hello
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-cyan-600 font-medium dark:text-cyan-400 md:text-6xl font-burtons">
             SAMIR BERRICHI
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl  font-burtons">
              Web Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className=" flex justify-center gap-16 py-3 text-gray-600  md:text-5xl  dark:text-gray-200">
            <Link href="https://www.linkedin.com/in/samirberrichi/">
              <AiFillLinkedin className="cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/SamirBerrichi1">
              <AiFillTwitterCircle className="cursor-pointer"/>
            </Link>
           <Link href="https://github.com/Sberrich">
             <AiFillGithub className="cursor-pointer"/>          
                </Link>
            <Link href="https://instagram.com/berrichi_samir">
              <AiFillInstagram className="cursor-pointer" />
            </Link>
          </div>
            <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-90 md:w-90">
              <Image src={wave} layout="fill" objectFit="cover"  alt="wave"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 dark:text-white font-burtons">Welcome</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-xl"> 
            My name is <span className="text-cyan-500"> Samir Berrichi </span> , I'm a Front-end developer based in khouribga Morocco, i have been developed many types of front-ends from well know Matcha "Matching and chating app", hypetype "streaming app for watching movies"
            </p>
        
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-cyan-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="code" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-cyan-600"> I Use</h4>
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">Next JS </p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">MUI</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="consulting" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
        </section>
      </main>
    </div>
  );
}