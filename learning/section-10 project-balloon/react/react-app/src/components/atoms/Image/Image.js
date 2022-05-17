import React from "react";
import { Imaged } from "./Image.style";
import { useState, useEffect } from "react";
import data from "../../../data/elements";

const Image = () => {
  const [posX, setPosX] = useState("");
  const [posY, setPosY] = useState("");

  const setNewPosition = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    setPosX(posX * -0.3);
    setPosY(posY * -0.4);
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => setNewPosition(e));
    return document.removeEventListener("mousemove", (e) => setNewPosition(e));
  }, []);

  return (
    <>
      {data.map((element) => (
        <Imaged
          className={element.className}
          src={element.src}
          ratioX={element.ratioX}
          ratioY={element.ratioY}
          style={{
            transform: `translate(${posX}px, ${posY}px)`,
            top: element.top,
            left: element.left,
          }}
        />
      ))}
    </>
  );
};

export default Image;
