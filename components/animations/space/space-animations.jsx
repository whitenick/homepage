import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useState, useEffect } from "react";
// import dynamic from 'next/dynamic';
// const random = dynamic(() => import('maath/random/dist/maath-random.esm'), { ssr: false });
// import 'maath/random/dist/maath-random.esm';
import * as random from 'maath/random/'

export const Space = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);

    return (
        <>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </>
    )
}

const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random?.inSphere(new Float32Array(5001), { radius: 1.5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    });

    return (
        <group rotation={[0, 0, Math.PI / 8 * 10]}>
            <Points ref={ref} positions={sphere} stride={3} frustrumCulled={false} {...props}>
                <PointMaterial transparent color="#818479" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>   
        </group>
    )
}