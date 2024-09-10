import * as THREE from "three";
import { useState, useRef } from "react";
import SpacePageWrapper from "./components/space-page-wrapper";
import TypedDiv from "../../components/typed";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Card } from "../../components/layout/card";
import { Project } from "../projects/projects-list";
import { useRouter } from "next/router";

const SpacePage = () => {
    const router = useRouter();

    return (
        <SpacePageWrapper>
            <div className="flex flex-col p-4 gap-8">
                <div className="flex">
                    <span className="text-lg font-semibold p-2">Welcome to my Project Space. Here, you'll find a collection of my personal work. The applications are various, and completeness questionable. Projects are usually ordered by most active.</span>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Project
                        title={"TaskGraph"}
                        description="A store of knowledge and working group consisting of engineering colleagues"
                        githubLink="https://tasgraph.io"
                        externalLink="https://taskgraph.io"
                    />
                    <Project
                        title={"Localyst"}
                        description="Translation management; A joint project - under TaskGraph"
                        externalLink="https://localyst.app"
                    />
                    <Project
                        title={"Dotta"}
                        description="Childhood behavior analytics tracking"
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink={router.basePath + "/app/behavior-buzz"}
                    />
                    <Project
                        title={"This Homepage"}
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink="/app"
                    />
                    <Project
                        title={"The Very Tiny Teacher"}
                        description="A teacher's website for her students/parents/colleagues. Links to learning materials and resources."
                        // githubLink=""
                        externalLink="https://www.theverytinyteacher.com"
                    />
                    <Project
                        title={"Itch"}
                        description="Engine to translate ingredient lists from images of nutrition labels"
                        githubLink="https://github.com/whitenick/itchy"
                        externalLink="https://github.com/whitenick/itchy"
                    />
                    <Project
                        title={"NHL Predictions"}
                        description="Over/under predictions on game goal totals"
                        githubLink="https://github.com/whitenick/NHL-Predictions"
                        externalLink="https://github.com/whitenick/NHL-Predictions"
                    />
                    <Project
                        title={"Bird TV"}
                        description={"Bird feeder live cam. Live streaming of a video data feed."}
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink={router.basePath + "/app/bird-tv"}
                    />
                </div>
            </div>
        </SpacePageWrapper>
    )
}

export default SpacePage;