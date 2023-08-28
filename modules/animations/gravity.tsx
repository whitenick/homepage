import { Suspense, useRef, useState } from "react";
import { ThreeJSWrapper } from "../../components/layout/page-wrapper"
import { Canvas } from "@react-three/fiber";
import { Environment, Sphere, Torus } from "@react-three/drei";
import CANNON from 'cannon';
import { BallCollider, ConvexHullCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Lemon } from "./bouncing-lemon";

const GravityLemon = () => {
    let max = 50;

    return (
        <RigidBody colliders={"hull"} restitution={0.5} gravityScale={0.5} position={[1, Math.floor(Math.random() * max), -1]}>
            <Lemon />
        </RigidBody>
    )
}

const Gravity = (props) => {
    const [cameraState, setCameraState] = useState({
        position: {
            x: 0,
            y: 0,
            z: 0
        },
    });
    const lemonRef = useRef();

    return (
        <ThreeJSWrapper>
            <Canvas dpr={[1.5, 2]} camera={{ position: [0, 10, 50], fov: 50,  }}>
                {/* <directionalLight /> */}
                <Suspense>
                    <Physics gravity={[0, -50, 0]} >
                        <GravityLemon />
                        <GravityLemon />
                        <GravityLemon />
                        <GravityLemon />
                        <GravityLemon />
                        
                        {/* <RigidBody colliders={"trimesh"} restitution={1} position={[1, 50, -1]}>
                            <Lemon />
                        </RigidBody> */}
                        <CuboidCollider position={[0, -6, 0]} args={[100, 1, 100]} />
                        <CuboidCollider position={[0, 0, -30]} args={[30, 100, 1]} />
                        <CuboidCollider position={[0, 0, 10]} args={[30, 100, 1]} />
                        <CuboidCollider position={[-30, 0, 0]} args={[1, 100, 30]} />
                        <CuboidCollider position={[30, 0, 0]} args={[1, 100, 30]} />
                    </Physics>
                    <Environment preset="sunset" />
                </Suspense>

            </Canvas>
        </ThreeJSWrapper>
    )
}

export default Gravity;