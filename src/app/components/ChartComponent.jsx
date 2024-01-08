"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ChartComponent = () => {

  return (
    <div id="chart" className="relative w-full pb-[125%] md:pb-[65%]">
      <iframe
        className="absolute w-full h-full top-0 left-0 border-0"
        src="https://dexscreener.com/solana/4vuiFB38TrU1adpDGHBvcZ4C7hXHEs1HFA2V8xJFErFW?embed=1&theme=dark"
        title="DexScreener"
      ></iframe>
    </div>

  );
};

export default ChartComponent;
