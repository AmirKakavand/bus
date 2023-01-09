import { useState } from "react";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bus = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  useFrame((state) => {
    const currentWidth = state.viewport.width;
    const currentHeight = state.viewport.height;
    if (width !== currentWidth) {
      setWidth(currentWidth);
      console.log(width / height);
    }
    if (height !== currentHeight) {
      setHeight(currentHeight);
      console.log(width / (height));
    }
  });

  let domain = "";
  process.env.NODE_ENV === "development"
    ? (domain = "http://localhost:3000")
    : (domain = "");
  const gltf = useLoader(GLTFLoader, domain + "/Bus.glb");

  console.log(gltf);
  const bus = gltf.scene.children[0];
  return <primitive object={bus} scale={width / (height * 2)} />;
};

export default Bus;
