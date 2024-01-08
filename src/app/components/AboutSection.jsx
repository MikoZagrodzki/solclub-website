"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "contract",
    id: "contract",
    content: (
      <ul className="list-disc pl-2">
        <li className="break-all">22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3</li>
      </ul>
    ),
  },
  {
    title: "tokenomics",
    id: "tokenomics",
    content: (
      <ul className="list-disc pl-2 space-y-1 leading-tight">
        <p>Limited Token Supply:</p>
        <li>Experience value appreciation with our finite token supply.</li>
        <li>Secure your share of a scarce resource in the crypto space.</li>
        <p className="mt-1">Staking and Governance:</p>
        <li>Boost network integrity by staking tokens.</li>
        <li>Participate in crucial decisions through token governance.</li>
        <p className="mt-1">Token Burns:</p>
        <li>Enhance value through intentional token removal.</li>
        <li>Join us in creating a deflationary token economy.</li>
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
  const [tab, setTab] = useState("contract");
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
              selectTab={() => handleTabChange("contract")}
              active={tab === "contract"}
            >
              {" "}
              Contract{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tokenomics")}
              active={tab === "tokenomics"}
            >
              {" "}
              Tokenomics{" "}
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
