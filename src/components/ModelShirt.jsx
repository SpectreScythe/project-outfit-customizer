import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { CanvasContainer } from "../styles/StylesCanvas";

function Model(props) {
  const { nodes, materials } = useGLTF("/T_shirt_gltf.zip.gltf");
  return (
    <group {...props} dispose={null} scale={10}>
      <mesh
        geometry={nodes.Ribbing.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_1.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_2.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_3.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_4.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Ribbing_5.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Front.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Front_1.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Front_2.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back_1.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Body_Back_2.geometry}
        material={materials.Body_FRONT_2664}
      />
      <mesh
        geometry={nodes.Sleeves.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_1.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_2.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_3.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_4.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
      <mesh
        geometry={nodes.Sleeves_5.geometry}
        material={materials.Sleeves_FRONT_2669}
      />
    </group>
  );
}

const ModelShirt = () => {
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
            <Model />
          </Center>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default ModelShirt;
