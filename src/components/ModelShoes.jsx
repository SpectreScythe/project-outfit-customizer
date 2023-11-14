import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { CanvasContainer } from "../styles/StylesCanvas";

function Model({ props, color }) {
  const { nodes, materials } = useGLTF("/myShoes.gltf.glb");
  return (
    <group {...props} dispose={null} scale={0.17}>
      <mesh
        geometry={nodes.shoe_shoe_0.geometry}
        material={nodes.shoe_shoe_0.material}
        material-color={color}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.shoelace_shoelace_0.geometry}
        material={nodes.shoelace_shoelace_0.material}
        material-color={color}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
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
            intensity={1}
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
