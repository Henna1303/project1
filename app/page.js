"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <Image
          src="/landingPageRoom.jpg"
          layout="fill"
          objectFit="cover"
          alt="room"
          className={styles.heroImage}
          style={hover&&{filter:"saturate(150%) brightness(110%)"}}
        />
        <div className={styles.content}>
          <h1>Design Your Dream Room in 3D</h1>
          <p>
            Enter your room dimensions and preferences, and let our AI bring
            your vision to life with an interactive 3D model. Start creating
            your perfect space today!
          </p>
        </div>
        <div className={styles.shade}></div>
        <Button
          text={"Get Started"}
          mainClass={{
            position: "absolute",
            bottom: "4rem",
            left: "1rem",
            animation: "reveal 0.8s ease-in-out",
          }}
          hoverFunction={() => {
            setHover(!hover);
          }}
          linkURL={'/userInput'}
        />
      </div>
    </div>
  );
}
