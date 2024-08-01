"use client";
import { useState } from "react";

export default function Home() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  function handleMouseEnter() {
    setXPos((prev) => -prev + Math.random() * 76);
    setYPos((prev) => -prev + Math.random() * 200);
  }
  console.log(xPos);
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className=" flex flex-col w-[90vw] h-[90vh] bg-white rounded shadow-md items-center justify-evenly">
        <p className="text-center text-lg font-sans">
          Thank you for 30years of companionship would you like to renew for 30
          more?
        </p>
        <div className="w-[7rem] flex justify-between">
          <button className="transition duration-100 w-[3rem] h-[3rem] bg-black text-white rounded-md shadow-md">
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
  );
}


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/noelalam9999/mimiXhali.com.git
git push -u origin main