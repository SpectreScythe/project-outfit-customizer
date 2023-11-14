import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { CanvasContainer } from "../styles/StylesCanvas";

function Model({ props, color }) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.009}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material-color={color}
            geometry={nodes.default_default_0.geometry}
            // material={materials["default"]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

const ModelShirt = ({ color }) => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping={false}
          />
          <ambientLight
            amount={5}
            radius={9}
            intensity={0}
            ambient={0.25}
            position={[5, 5, -10]}
          />
          <Center>
            <Model color={color} />
          </Center>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default ModelShirt;
