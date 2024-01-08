"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "tab1",
    id: "tab1",
    content: (
      <ul className="list-disc pl-2">
        <li>ELEMENT</li>
        <li>ELEMENT</li>
        <li>ELEMENT</li>
        <li>ELEMENT</li>
        <li>ELEMENT</li>
        <li>ELEMENT</li>
      </ul>
    ),
  },
  {
    title: "tab2",
    id: "tab2",
    content: (
      <ul className="list-disc pl-2">
        <li>ELEMENT</li>
        <li>ELEMENT</li>
      </ul>
    ),
  },
  {
    title: "tab3",
    id: "tab3",
    content: (
      <ul className="list-disc pl-2">
        <li>ELEMENT</li>
        <li>ELEMENT</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("tab1");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Welcome to the heart of our ADHD memecoin movement! Were not just a cryptocurrency; we&apos;re a community redefining the conversation around ADHD with humor and purpose. Our mission is to break stigmas, empower voices, and build a space where every meme contributes to a more inclusive and supportive future. Join us in rewriting the narrative around ADHD - this isn&apos;t just about coins; it&apos;s about a revolution fueled by laughter and unity. Welcome to the forefront of change!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("tab1")}
              active={tab === "tab1"}
            >
              {" "}
              Tab 1{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tab2")}
              active={tab === "tab2"}
            >
              {" "}
              Tab 2{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tab3")}
              active={tab === "tab3"}
            >
              {" "}
              Tab 3{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
