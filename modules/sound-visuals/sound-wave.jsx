import * as THREE from "three";
import { PageWrapperWithHeader, ThreeJSPageWrapper } from "../../components/layout/page-wrapper";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { createNoise2D, createNoise4D } from "simplex-noise";
import { request } from "http";


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

const Plane = props => {
  // const mesh = useRef()

  // const noise2D = createNoise2D();

  // useFrame((state) => {
  //     let position = mesh.current.geometry.attributes.position;
  //     let time = state.clock.elapsedTime;

  //     for(let i = 0; i < position.array.length; i += 3){
  //       let x = position.array[i];
  //       let y = position.array[i + 1];
  //       position.array[i + 2] = noise2D(x / 10, y / 10 + time);
  //     }

  //     position.needsUpdate = true;
  //   });

  return (
    <mesh ref={props.mesh} {...props} scale={5}>
      <planeGeometry attach="geometry" args={[100, 100, 500, 500]} />
      <meshLambertMaterial attach="material" color={0xffffff} side={THREE.DoubleSide} />
    </mesh>
  )
}

// function animatePlane() {
//   gArray = plane.geometry.attributes.position.array;
//   const time = Date.now() * 0.0002;
//   for (let i = 0; i < gArray.length; i += 3) {
//     gArray[i + 2] = simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) * conf.zCoef;
//   }
//   plane.geometry.attributes.position.needsUpdate = true;
//   // plane.geometry.computeBoundingSphere();
// }

const PointLightColor = props => {
  const light = useRef()
  useFrame((state) => {
    let time = state.clock.elapsedTime

    // Update the light's position
    light.current.position.x = Math.sin(time) * 30
    light.current.position.z = Math.cos(time) * 30
  })
  return (
    <pointLight ref={light} {...props} />
  )
}

const SoundWave = () => {
  const [cameraState, setCameraState] = useState({
    position: {
      x: 0,
      y: 0,
      z: conf.cameraZ
    },
  });

  useEffect(() => {
    setCameraState({
      ...cameraState,
      position: {
        ...cameraState.position,
        y: 5,
        z: 5
      }
    });
  }, []);

  return (
    <ThreeJSPageWrapper>
      <div className="absolute bottom-0 z-1000">
        <a href="https://codepen.io/soju22/pen/PLeLwo">
          <div className="text-xl italic text-Light-Gray">
            Inspired by Kevin Levron 
          </div>
        </a>
      </div>
      <Canvas style={{}} camera={{ position: [cameraState.position.x, cameraState.position.y, cameraState.position.z], fov: 90 }}>
        <Suspense fallback={null}>
          <PlaneAnimation />
        </Suspense>
      </Canvas>
    </ThreeJSPageWrapper>
  )
}

const PlaneAnimation = (props) => {
  const { renderer, camera } = useThree();
  const [planeState, setPlaneState] = useState({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: -Math.PI / 2 - 0.2,
      y: 0,
      z: 0
    },
    width: 0,
    height: 0
  });
  const[geoArray, setGeoArray] = useState([]);
  const plane = useRef();
  const noise4D = createNoise4D();
  useEffect(() => {
    init();
  }, []);
  // const noise4D = createNoise4D();
  const init = () => {
    // renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el), antialias: true, alpha: true });
    // camera = new THREE.PerspectiveCamera(conf.fov);
    // camera.position.z = conf.cameraZ;

    // updateSize();
    // window.addEventListener('resize', updateSize, false);

    // document.addEventListener('mousemove', e => {
    //   const v = new THREE.Vector3();
    //   camera.getWorldDirection(v);
    //   v.normalize();
    //   mousePlane.normal = v;
    //   mouse.x = (e.clientX / width) * 2 - 1;
    //   mouse.y = - (e.clientY / height) * 2 + 1;
    //   raycaster.setFromCamera(mouse, camera);
    //   raycaster.ray.intersectPlane(mousePlane, mousePosition);
    // });

    initScene();
    // initGui();
    // animate();
  }

  const updateSize = () => {
    let width = window.innerWidth; 
    let cx = width / 2;
    let height = window.innerHeight; 
    let cy = height / 2;
    if (renderer && camera) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const wsize = getRendererSize();
      let wWidth = wsize[0];
      let wHeight = wsize[1];
      setPlaneState({
        ...planeState,
        width: wWidth,
        height: wHeight
      });
    }
  }

  const initScene = () => {
    // scene = new THREE.Scene();
    initLights();

    // let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    // // let mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    // // let mat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.8 });
    // let geo = new THREE.PlaneBufferGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
    // plane = new THREE.Mesh(geo, mat);
    // scene.add(plane);

    setPlaneState({
      ...planeState,
      rotation: {
        ...planeState.rotation,
        x: -Math.PI / 2 - 0.2
      },
      position: {
        ...planeState.position,
        x: 0,
        y: -15,
        z: 0
      }
    });

    // plane.rotation.x = -Math.PI / 2 - 0.2;
    // plane.position.y = -25;
    // camera.position.z = 60;
  }
  const initLights = () => {

  }
  useFrame((state) => {
    animate();
  });
  const animate = () => {
    animatePlane();
  }
  const animatePlane = () => {
    // let gArray = [...geoArray];
    let gArray = plane.current?.geometry?.attributes?.position?.array;
    const time = Date.now() * 0.0002;
    // const noise4D = createNoise4D();
    console.log(gArray);
    for (let i = 0; i < gArray?.length; i += 3) {
      gArray[i + 2] = noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, 1) * conf.zCoef;
    }
    // setGeoArray(gArray);
    plane.current.geometry.attributes.position.array = gArray;
    plane.current.geometry.attributes.position.needsUpdate = true;
  }

  return (
    <>
      <Plane mesh={plane} position={[planeState.position.x, planeState.position.y, planeState.position.z]} rotation={[planeState.rotation.x, planeState.rotation.y, planeState.rotation.z]} />
      <PointLightColor position={[0, 10, 30]} color={0x0E09DC} intensity={0.9} distance={500} />
      <PointLightColor position={[0, -10, -30]} color={0x1CD1E1} intensity={0.9} distance={500} />
      <PointLightColor position={[30, 10, 0]} color={0x18C02C} intensity={0.9} distance={500} />
      <PointLightColor position={[-30, 10, 0]} color={0xee3bcf} intensity={0.9} distance={500} />
    </>
  );
}

export default SoundWave;