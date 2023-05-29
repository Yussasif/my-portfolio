import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/crypto-Screener-cover-image.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import hooBank from "../../public/images/projects/HooBank.png";
import queenElizabeth from "../../public/images/projects/queenElizabet.png";
import zuriClone from "../../public/images/projects/zuriClone.png";
import pocketClone from "../../public/images/projects/pocketClone.png";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-sold border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <article className=" w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]  " />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-dark  dark:text-light p-2 text-lg font-semibold underline md:text-base "
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Adetunji | Projects</title>
        <meta name="description" content="projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7x sm:mb-8 sm:!text-6xl xs:!text-4xl "
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Modern Banking UI"}
                img={hooBank}
                summary={
                  " HooBank, a modern banking UI App using Tailwind CSS."
                }
                type={"Featured Project"}
                link={"https://yussasif.github.io/HooBank/"}
                github={"https://github.com/Yussasif/HooBank.git"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Queen Elizabeth Tribute Page"}
                img={queenElizabeth}
                type={"Featured Project"}
                link={"https://yussasif.github.io/Queen-Elizabet-tribute-page/"}
                github={
                  "https://github.com/Yussasif/Queen-Elizabet-tribute-page.git"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Pocket Clone"}
                img={pocketClone}
                type={"Featured Project"}
                link={"https://yussasif.github.io/pocket_clone/"}
                github={"https://github.com/Yussasif/pocket_clone.git"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Zuri Clone"}
                img={zuriClone}
                summary={
                  "3 Pages clone of the zuri website created with vanilla javascript and CSS."
                }
                type={"Featured Project"}
                link={
                  "https://yussasif.github.io/zuri-clone/new_to_industry.html"
                }
                github={"https://github.com/Yussasif/zuri-clone.git"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
