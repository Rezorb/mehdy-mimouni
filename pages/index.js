/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Header from "../components/Header";
// import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
// import Button from "../components/Button";
// import Link from "next/link";
import Cursor from "../components/Cursor";
import Skills from "../components/Skills";
import Filter from "../components/Filter";

// Local Data
import data from "../data/portfolio copy.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // State for filter
  const [filter, setFilter] = useState("TOUS");

  const categories = ["TOUS", "HTML - CSS", "JAVASCRIPT", "REACT", "NODEJS"];
  const filteredProjects =
    filter === "TOUS"
      ? data.projects
      : data.projects.filter((project) => project.category === filter);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillScroll = () => {
    window.scrollTo({
      top: skillRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleSkillScroll={handleSkillScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-5" />
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="mb-5 tablet:m-10 text-3xl tablet:text-4xl laptop:text-5xl font-bold">
            À PROPOS
          </h1>
          <div className="flex flex-col laptop:flex-row items-center justify-center tablet:m-10">
            <p className="mt-2 text-2xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara}
              <br></br>
              {data.aboutpara2}
            </p>
            <img
              className="myself laptop:ml-10 mt-5 laptop:mt-0 rounded-[10px]"
              src="https://i.imgur.com/ySAOyan.png"
              alt="ngMoi"
              style={{ maxHeight: "450px" }}
            ></img>
          </div>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-3xl tablet:text-4xl laptop:text-5xl font-bold">
            MES PROJETS
          </h1>

          <Filter
            categories={categories}
            filter={filter}
            setFilter={setFilter}
          />

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={skillRef}>
          <h1 className="tablet:m-10 text-3xl tablet:text-4xl laptop:text-5xl font-bold pb-10">
            MES COMPÉTENCES
          </h1>
          <Skills />
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            {/* <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link> */}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
