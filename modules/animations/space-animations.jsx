import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, useGLTF, useAnimations, Environment } from "@react-three/drei"
import { useRef, useState, useEffect } from "react";
import * as random from 'maath/random/';


export const UFOCanvas = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <directionalLight />
            <UFO />
            <Environment preset="sunset" />
        </Canvas>
    )
}

const UFO = (props) => {
    const ref = useRef();

    const { viewport, camera } = useThree();

    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 1]);

    const result = useGLTF("/bob_lazar_ufo (1).glb");

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI
    });

    useFrame((state, dt) => {
        // if (dt < 0.1) ref?.current?.position?.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)

        (ref)?.current?.rotation?.set(0, Math.sin(0 + state.clock.elapsedTime / 10) * Math.PI, 0)

        let newX = ref?.current?.position?.x;
        let newY = ref?.current?.position?.y;
        let newZ = ref?.current?.position?.z;

        if (ref?.current?.position?.z < 0) {
            newZ = newZ + 0.1
        }

        if (ref?.current?.position?.y < 0.1) {
            newY = newY + 0.001
        }

        if (ref?.current?.position?.x < 0) {
            newX = newX + 0.1
        }

        ref?.current?.position?.set(newX, newY, newZ);
        // ref?.current?.position?.set(data.x, data.y += , 0)

        // if (data.y > height) data.y = -(height)
    });

    return (
        <group ref={ref} position={[0, -0.2, -10]} {...props} dispose={null} scale={0.5}>
            <group rotation={[-Math.PI / 2, 0, 4]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={result?.nodes.defaultMaterial.geometry}
                        material={result?.materials.material}
                    />
                </group>
            </group>
        </group>
    )
}

export const SpaceCanvas = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);

    return (
        <>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <directionalLight />
                <Stars />
                <StarCluster />
                <Environment preset="sunset" />
            </Canvas>
        </>
    )
}

const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random?.inSphere(new Float32Array(100000), { radius: 1.5 }))

    useFrame((state, delta) => {
        // ref.current.rotation.x += delta / 10
        (ref.current).rotation.y += delta / 15
        // ref.current.rotation.z += delta / 20
    });

    return (
        <group rotation={[2, 0, -Math.PI / 0.1]}>
            {/* <StarCluster /> */}
            <Points ref={ref} positions={sphere} stride={3} frustrumCulled={false} {...props}>
                <PointMaterial transparent color="#fff1cc" size={0.008} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

const StarCluster = (props) => {
    const result = useGLTF("/need_some_space.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                <points
                    geometry={result?.nodes.Object_2.geometry}
                    material={result?.materials["Scene_-_Root"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/need_some_space.glb");
useGLTF.preload("/bob_lazar_ufo (1).glb");