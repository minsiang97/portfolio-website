import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import CanvasLoader from "./canvasLoader";
import { ComputerInterface } from "../types/canvas";

const Computers: React.FC<ComputerInterface> = ({ isMobile, isTablet }) => {
  const computer = useGLTF("desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        decay={0}
        penumbra={1}
        intensity={Math.PI}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight decay={0} intensity={Math.PI} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : isTablet ? 0.6 : 0.75}
        position={
          isMobile
            ? [0, -2.4, -0.75]
            : isTablet
            ? [0, -2.9, -1]
            : [0, -3.5, -1.2]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const tabletQuery = window.matchMedia(
      "(max-width: 1024px) and (min-width: 640px)"
    );
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 640);
    };

    // Add the callback function as a listener for changes to the media query
    window.addEventListener("resize", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
