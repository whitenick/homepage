import * as THREE from "three";
import { useState, useRef } from "react";
import SpacePageWrapper from "./components/space-page-wrapper";
import TypedDiv from "../../components/typed";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const SpacePage = () => {
    return (
        <SpacePageWrapper/>
    )
}

export default SpacePage;