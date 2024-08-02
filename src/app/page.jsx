"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Together from "../../public/together.jpg";
import Box from "../../public/box.jpg";

export default function Home() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [yes, setYes] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  function handleMouseEnter() {
    setXPos((prev) => -prev + Math.random() * 76);
    setYPos((prev) => -prev + Math.random() * 200);
  }
  function handleYes() {
    setYes((prev) => !prev);
  }
  return (
    <>
      {yes && <Confetti width={width} height={height} />}{" "}
      <div className="flex w-screen h-screen justify-center items-center">
        <div className=" flex flex-col w-[90vw] h-[90vh] bg-white rounded shadow-md items-center justify-evenly">
          <p className="text-center text-2xl text-black font-sans font-averta">
            Thank you for 30years of companionship would you like to renew for
            30 more?
          </p>
          <Image
            className="w-[80vw] h-fit"
            width={100}
            height={100}
            src={yes ? Box : Together}
          ></Image>
          <div className="w-[7rem] flex justify-between">
            <button
              onClick={handleYes}
              className="transition duration-100 w-[3rem] h-[3rem] bg-black text-white rounded-md shadow-md"
            >
              Yes
            </button>
            <button
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseEnter}
              className="transition duration-100 w-[3rem] h-[3rem] bg-black text-white rounded-md shadow-md"
              style={{
                transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${xPos}, ${yPos}, 0, 1)`,
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
