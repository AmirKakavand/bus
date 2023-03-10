import {useState, useEffect} from "react"
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Text, Button, Box } from "@chakra-ui/react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bus from "../models/Bus";
import { Suspense } from "react";

export default function Home() {
  // const [width, setWidth] = useState()
  // const [height, setHeight] = useState()
  // useEffect(() => {
  //   setWidth(window.innerWidth)
  //   setHeight(window.setHeight)
  // }, [])
  return (
    <div className={styles.canvasContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Bus />
        </Suspense>
      </Canvas>
    </div>
  );
}
