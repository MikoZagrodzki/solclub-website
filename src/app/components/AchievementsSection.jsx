"use client";
import React, { useState, useEffect, useMemo } from 'react';
import dynamic from "next/dynamic";
import { useSpring, animated } from 'react-spring';

const SpringNumber = ({ n }) => {
  const roundedNumber = useMemo(() => {
    const num = parseFloat(n) || 0;

    if (Math.abs(num) >= 1e6) {
      const formattedM = (num / 1e6).toFixed(1);
      return formattedM.endsWith('.0') ? formattedM.slice(0, -2) + 'M' : formattedM + 'M';
    } else if (Math.abs(num) >= 1e3) {
      const formattedK = (num / 1e3).toFixed(1);
      return formattedK.endsWith('.0') ? formattedK.slice(0, -2) + 'K' : formattedK + 'K';
    } else if (Math.abs(num) >= 1001) {
      return num.toFixed(1);
    } else if (Math.abs(num) >= 101) {
      return num.toFixed(2);
    } else if (Math.abs(num) >= 11) {
      return num.toFixed(3);
    } else {
      return num.toFixed(9).replace(/\.?0+$/, '');
    }
  }, [n]);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: parseFloat(n) || 0 }, // Ensure n is a number
    delay: 200,
    config: { mass: 1, tension: 100, friction: 10 },
  });

  return <animated.div>{number.to((num) => (typeof num === 'number' ? roundedNumber : num))}</animated.div>;
};


const AchievementsSection = () => {
  
  // const [tokenData, setTokenData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tokenPrice, setTokenPrice] = useState('');
  const [tokenLiquidity, setTokenLiquidity] = useState('');
  const [tokenMarketCap, setTokenMarketCap] = useState('');
  const [tokenVolume, setTokenVolume] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.pairs[0].priceUsd&&setTokenPrice(data.pairs[0].priceUsd)
        data.pairs[0].liquidity.usd&&setTokenLiquidity(data.pairs[0].liquidity.usd)
        data.pairs[0].fdv&&setTokenMarketCap(data.pairs[0].fdv)
        data.pairs[0].volume.h24&&setTokenVolume(data.pairs[0].volume.h24)
        // setTokenData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const achievementsList = [
    {
      prefix: '$',
      metric: "Price",
      value: tokenPrice,
    },
    {
      prefix: '$',
      metric: "Liquidity",
      value: tokenLiquidity,
    },
    {
      prefix: '$',
      metric: "Market Cap",
      value: tokenMarketCap,
    },
    {
      prefix: '$',
      metric: "24h Volume",
      value: tokenVolume,
    },
  ];


  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className=" bg-black bg-opacity-10 sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:gap-x-4 sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 sm:mx-0"
            >
              <h2 className="text-white text-4xl font-bold sm:text-lg md:text-xl lg:text-4xl flex flex-row">
                {achievement.prefix}
                <SpringNumber n={achievement.value}/>
                {/* {achievement.postfix} */}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;

