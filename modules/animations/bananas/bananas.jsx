import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import { FadeIn } from "./banana-styles";
import dynamic from 'next/dynamic';

// Consolidated dynamic imports
const ThreeComponents = {
    Canvas: dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false }),
    Environment: dynamic(() => import("@react-three/drei").then(mod => mod.Environment), { ssr: false }),
    Detailed: dynamic(() => import("@react-three/drei").then(mod => mod.Detailed), { ssr: false }),
    DepthOfField: dynamic(() => import("@react-three/postprocessing").then(mod => mod.DepthOfField), { ssr: false }),
    EffectComposer: dynamic(() => import("@react-three/postprocessing").then(mod => mod.EffectComposer), { ssr: false })
};

// Direct imports for hooks (they're client-side by nature)
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const BananaBackground = ({ }) => (
    <div className="h-[100vh] w-screen overflow-hidden">
        <Suspense fallback={null}>
            <Bananas />
            <FadeIn />
        </Suspense>
    </div>
);

function Banana({ index, z, speed }) {
    const ref = useRef(null);
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
    const { scene, nodes, materials } = useGLTF('/banana.glb');

    // Debug model structure
    useEffect(() => {
        console.log('Model structure:', { nodes, materials });
    }, [nodes, materials]);

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI
    });

    useFrame((state, dt) => {
        if (!ref.current || dt >= 0.1) return;

        const pos = ref.current.position;
        const rot = ref.current.rotation;

        pos.set(
            index === 0 ? 0 : data.x * width,
            (data.y += dt * speed),
            -z
        );

        rot.set(
            (data.rX += dt / data.spin),
            Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
            (data.rZ += dt / data.spin)
        );

        if (data.y > height * (index === 0 ? 4 : 1)) {
            data.y = -(height * (index === 0 ? 4 : 1));
        }
    });

    return (
        <group ref={ref} scale={5}>
            <primitive object={scene.clone()} />
        </group>
    );
}

function Bananas({ speed = 1, count = 80, depth = 80 }) {
    const easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));
    const { Canvas, Environment, EffectComposer, DepthOfField } = ThreeComponents;

    return (
        <Canvas
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}
        >
            <color attach="background" args={['#E5E4E2']} />
            {Array.from({ length: count }, (_, i) => (
                <Banana
                    key={i}
                    index={i}
                    z={Math.round(easing(i / count) * depth)}
                    speed={speed}
                />
            ))}
            <Environment preset="sunset" />
            <EffectComposer>
                <DepthOfField />
            </EffectComposer>
        </Canvas>
    );
}

useGLTF.preload("/banana.glb");

export default BananaBackground;