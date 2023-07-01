import * as THREE from "three";
import { ThreeJSPageWrapper } from "../../components/layout/page-wrapper";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

const Plane = props => {
    const mesh = useRef()
  
    useFrame(() => {
      // animate the mesh here, similar to the animatePlane() function
      // mesh.current.geometry.attributes.position.array...
    })
  
    return (
      <mesh ref={mesh} {...props}>
        <planeBufferGeometry attach="geometry" args={[100, 100, 50, 50]} />
        <meshLambertMaterial attach="material" color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
    )
  }

const PointLightColor = props => {
    const light = useRef()
    useFrame(state => {
        // animate the light here, similar to the animateLights() function
        // light.current.position.x...
    })
    return (
        <pointLight ref={light} {...props} />
    )
}

const SoundWave = () => {
    return (
        <div>
            <ThreeJSPageWrapper>
                <Canvas style={{ background: '#000000' }}>
                    <Suspense fallback={null}>
                        <Plane position={[0, -25, 0]} rotation={[-Math.PI / 2 - 0.2, 0, 0]} />
                        <PointLightColor position={[0, 10, 30]} color={0x0E09DC} intensity={0.9} distance={500} />
                        <PointLightColor position={[0, -10, -30]} color={0x1CD1E1} intensity={0.9} distance={500} />
                        <PointLightColor position={[30, 10, 0]} color={0x18C02C} intensity={0.9} distance={500} />
                        <PointLightColor position={[-30, 10, 0]} color={0xee3bcf} intensity={0.9} distance={500} />
                    </Suspense>
                </Canvas>
            </ThreeJSPageWrapper>
        </div>
    )
}

export default SoundWave;