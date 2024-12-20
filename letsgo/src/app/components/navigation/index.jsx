"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  //calculatin the angle of the button for circular animatio

  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;