import { Canvas } from "@react-three/fiber"
import React from "react";
// import * as THREEx from "threex.terrain";

// const Mesh = () => {
//     const geomtery = new THREE.PlaneGeometry(10, 10, 10, 10);

//     return (
//         <mesh 
//             geometry={geomtery}
//             material={new THREE.MeshBasicMaterial({
//                 wireframe: true
//               })}
//         >

//         </mesh>
//     )
// }

// const Wave = () => {
//     return (
//         <Canvas>

//             <ambientLight />
//             <directionalLight />
//         </Canvas>
//     )
// }

// class Wave extends React.Component {
//     render() {
//         // const THREEx = require('threex.terrain');
//         const THREEx : any = null;

//         var renderer = new THREE.WebGLRenderer({
//             antialias: true
//         });
//         /* Fullscreen */
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         /* Append to HTML */
//         document.body.appendChild(renderer.domElement);
//         var onRenderFcts : any[] = [];
//         var scene = new THREE.Scene();
//         var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
//         /* Play around with camera positioning */
//         camera.position.z = 15;
//         camera.position.y = 2;
//         /* Fog provides depth to the landscape*/
//         scene.fog = new THREE.Fog(0x000, 0, 45);
//         ; (function () {
//             var light = new THREE.AmbientLight(0x202020)
//             scene.add(light)
//             var light2 = new THREE.DirectionalLight('white', 5)
//             light.position.set(0.5, 0.0, 2)
//             scene.add(light2)
//             var light3 = new THREE.DirectionalLight('white', 0.75 * 2)
//             light.position.set(-0.5, -0.5, -2)
//             scene.add(light3)
//         })()
//         var heightMap = THREEx?.Terrain.allocateHeightMap(256, 256)
//         THREEx?.Terrain.simplexHeightMap(heightMap)
//         var geometry = THREEx?.Terrain.heightMapToPlaneGeometry(heightMap)
//         THREEx?.Terrain.heightMapToVertexColor(heightMap, geometry)
//         /* Wireframe built-in color is white, no need to change that */
//         var material = new THREE.MeshBasicMaterial({
//             wireframe: true
//         });
//         var mesh = new THREE.Mesh(geometry, material);
//         scene.add(mesh);
//         mesh.lookAt(new THREE.Vector3(0, 1, 0));
//         /* Play around with the scaling */
//         mesh.scale.y = 3.5;
//         mesh.scale.x = 3;
//         mesh.scale.z = 0.20;
//         mesh.scale.multiplyScalar(10);
//         /* Play around with the camera */
//         onRenderFcts.push(function (delta, now) {
//             mesh.rotation.z += 0.2 * delta;
//         })
//         onRenderFcts.push(function () {
//             renderer.render(scene, camera);
//         })
//         var lastTimeMsec : any = null
//         requestAnimationFrame(function animate(nowMsec) {
//             requestAnimationFrame(animate);
//             lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
//             var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
//             lastTimeMsec = nowMsec
//             onRenderFcts.forEach(function (onRenderFct) {
//                 onRenderFct(deltaMsec / 1000, nowMsec / 1000)
//             })
//         })

//         return (
//             <>
//                 { renderer.domElement }
//             </>
//         )
//     }
// }

const Wave = () => {
    return (
        <div>
            Hello
        </div>
    )
}
export default Wave;