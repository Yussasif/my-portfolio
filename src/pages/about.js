import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import faceFront from "../../public/images/profile/faceFront.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Adetunji | About</title>
        <meta name="description" content="about" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mb-32 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:md-8" />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Adetunji, a frontend developer who specializes in
                building beautiful and functional user interfaces using HTML,
                CSS, JavaScript, Tailwind CSS, and React JS. I'm passionate
                about creating digital experiences that are not only visually
                stunning, but also intuitive and user-friendly.
              </p>

              <p className=" mt-4 mb-2 font-medium">
                My expertise lies in creating responsive designs that look great
                on all devices, as well as ensuring the functionality of the
                frontend is optimized for speed and performance. I have a deep
                understanding of user experience and the ability to design
                interfaces that are both visually appealing and easy to
                navigate.
              </p>

              <p className=" mt-2 mb-4 font-medium">
                In my spare time, I enjoy keeping up with the latest trends in
                frontend development, experimenting with new tools and
                techniques, and contributing to the open-source community. I'm a
                firm believer in the power of collaboration and am always
                looking for opportunities to work with others and share my
                knowledge.
              </p>

              <p className="  font-medium">
                Overall, I'm passionate about creating exceptional user
                experiences and am committed to delivering high-quality frontend
                solutions that exceed expectations. Whether it's a small website
                or a complex web application, I'm always up for a challenge and
                excited to bring my skills to the table.
              </p>
            </div>

            <div className="col-span-3  relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-4 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light xl:col-span-4 md:col-span-8 md:order-1 " />
              <Image
                src={faceFront}
                alt="owoade adetunji"
                className="w-full h-auto rounded-[10px]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
