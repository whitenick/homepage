import { Suspense, useRef, useState } from "react";
import { ThreeJSWrapper } from "../../../components/layout/page-wrapper"
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";


const conf = {
    fov: 10,
    cameraZ: 175,
    xyCoef: 25,
    zCoef: 5,
    lightIntensity: 0.9,
    ambientColor: 0x000000,
    light1Color: 0x0E09DC,
    light2Color: 0x1CD1E1,
    light3Color: 0x18C02C,
    light4Color: 0xee3bcf
};

const BouncingLemon = (props) => {
    const [cameraState, setCameraState] = useState({
        position: {
            x: 0,
            y: 0,
            z: conf.cameraZ
        },
    });
    const planeMesh = useRef();
    // const gltf = useLoader(GLTFLoader, './lemon.glb');
    const { nodes, materials } : any = useGLTF("/lemon_real.glb");

    return (
        <>
            <ThreeJSWrapper>
                <Canvas camera={{ position: [cameraState.position.x, cameraState.position.y, cameraState.position.z], fov: 0 }}>
                    {/* <primitive object={gltf.scene} /> */}
                    <group {...props} dispose={null}>
                        <group scale={0.01}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Lemon_Lemon_0.geometry}
                                material={materials.Lemon}
                                position={[-7.014, 256.978, -107.347]}
                                rotation={[-0.207, 0.82, 0]}
                                scale={100}
                            />
                        </group>
                    </group>
                </Canvas>
            </ThreeJSWrapper>
        </>
    )
};

export default BouncingLemon;

useGLTF.preload("/lemon.glb");