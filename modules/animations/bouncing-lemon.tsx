import { useRef, useState } from "react";
import { ThreeJSWrapper } from "../../components/layout/page-wrapper"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";


const conf = {
    fov: 10,
    cameraZ: 1,
    xyCoef: 25,
    zCoef: 5,
    lightIntensity: 0.9,
    ambientColor: 0x000000,
    light1Color: 0x0E09DC,
    light2Color: 0x1CD1E1,
    light3Color: 0x18C02C,
    light4Color: 0xee3bcf
};

const OtherLemon = (props) => {
    const { nodes, materials }: any = useGLTF("/lemon (2).glb");

    return (
        <group {...props} dispose={null}>
            <group rotation={[0.5, 0, 0]} scale={0.02}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lemon_0.geometry}
                    material={materials.Lemon_Material}
                    position={[2, 0, 4]}
                    rotation={[0.16, 0.1, -.5]}
                    scale={2}
                />
                <meshStandardMaterial color="yellow" />
            </group>
        </group>
    )
}

export const Lemon = (props: {
    [key: string]: any
}) => {
    const { nodes, materials }: any = useGLTF('/lemon_real.glb');
    const lemonRef = useRef<any>();

    return (
        <>
            <mesh
                ref={lemonRef}
                geometry={nodes?.Lemon_Lemon_0.geometry}
                material={materials?.Lemon}
                // position={[props.lemonPosition?.position.x, props.lemonPosition?.position.y, props.lemonPosition?.position.z]}
                rotation={[0, 0, 0]}
                scale={1}
            />
        </>
    )
}

const FallingLemon = (props) => {
    let threeState = useThree();
    let xRand = Math.random();
    let yRand = Math.random();
    let zRand = Math.random();
    xRand = xRand > 0.5 ? xRand * -1 : xRand;
    yRand = yRand > 0.5 ? yRand * -1 : yRand;
    zRand = zRand > 0.5 ? zRand * -1 : zRand;
    const [lemonPosition, setLemonPosition] = useState({
        coef: {
            x: xRand * 10,
            y: yRand * 10,
            z: zRand * 10
        },
        position: {
            // Include modulo to normalize the width distribution of the lemons
            x: xRand * 10000 % 5000,
            y: yRand * 10000 % 5000,
            z: zRand * 5000
        },
        delta: Math.max(Math.random() * 15, 1) % 15
    })
    const planeMesh: any = useRef();
    const { nodes, materials }: any = useGLTF('/lemon_real.glb');
    console.log(lemonPosition.position)

    useFrame((state, delta) => {
        (planeMesh.current).rotation.y += delta / 15;
        (planeMesh.current).rotation.z += delta / lemonPosition.coef.z;
        (planeMesh.current).rotation.x += delta / lemonPosition.coef.x;
        let lemonY = lemonPosition.position.y < -5000 ? 5000 : lemonPosition.position.y;
        setLemonPosition({
            ...lemonPosition,
            position: {
                ...lemonPosition.position,
                y: lemonY - lemonPosition.delta,
            }
        });
    });

    return (
        <>
            <group {...props} dispose={null}>
                <group scale={0.02}>
                    <mesh
                        ref={planeMesh}
                        castShadow
                        receiveShadow
                        geometry={nodes?.Lemon_Lemon_0.geometry}
                        material={materials?.Lemon}
                        position={[lemonPosition.position.x, lemonPosition.position.y, lemonPosition.position.z]}
                        rotation={[-0.207, 0.82, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </>
    )
}

const lemons = (): any[] => {
    let lemons : any = []
    for (let i = 0; i < 100; i++) {
        lemons.push(<FallingLemon />)
    }
    return lemons;
}

export const BouncingLemon = (props) => {
    const [cameraState, setCameraState] = useState({
        position: {
            x: 0,
            y: 0,
            z: 0
        },
    });

    return (
        <>
            <ThreeJSWrapper>
                <Canvas camera={{ position: [cameraState.position.x, cameraState.position.y, cameraState.position.z] }}>
                    <directionalLight />
                    {lemons()}
                    <OtherLemon />
                    <Environment preset="sunset" />
                </Canvas>
            </ThreeJSWrapper>
        </>
    )
};

useGLTF.preload("/lemon (2).glb");
useGLTF.preload('/lemon_real.glb');