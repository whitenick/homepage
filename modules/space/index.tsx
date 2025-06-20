import SpacePageWrapper from "./components/space-page-wrapper";
import { Project } from "../projects/projects-list";
import { useRouter } from "next/router";

const SpacePage = () => {
    const router = useRouter();

    return (
        <SpacePageWrapper>
            <div className="flex flex-col p-4 gap-8">
                <div className="flex">
                    <span className="text-lg p-2">Welcome to my Project Space. Here, you'll find a collection of my personal work. The applications are various, and completeness questionable. Projects are usually ordered by most active.</span>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Project
                        title={"MealMind"}
                        description="A meal planning application. Chat with LLM. Generate weekly meal plan with ingredients and instructions."
                        externalLink="https://mlb-4e2.pages.dev/meals/chat"
                    />
                    <Project
                        title={"TaskGraph"}
                        description="A store of knowledge and working group consisting of engineering colleagues"
                        externalLink="https://taskgraph.io"
                    />
                    <Project
                        title={"Localyst"}
                        description="Translation management. Localization and internationalization of web applications."
                        externalLink="https://localyst.app"
                    />
                    {/* <Project
                        title={"Dotta"}
                        description="Behavior analytics tracking"
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink={router.basePath + "/app/behavior-buzz"}
                    /> */}
                    <Project
                        title={"This Homepage"}
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink="/app"
                    />
                    <Project
                        title={"The Very Tiny Teacher"}
                        description="A teacher's website for students/parents/colleagues."
                        githubLink="https://github.com/whitenick/"
                        externalLink="https://www.theverytinyteacher.com"
                    />
                    <Project
                        title={"Itch"}
                        description="Engine to translate ingredient lists from images of nutrition labels"
                        githubLink="https://github.com/whitenick/itchy"
                        // externalLink="https://github.com/whitenick/itchy"
                    />
                    <Project
                        title={"NHL Predictions"}
                        description="Over/under predictions on game goal totals"
                        githubLink="https://github.com/whitenick/NHL-Predictions"
                        // externalLink="https://github.com/whitenick/NHL-Predictions"
                    />
                    {/* <Project
                        title={"Bird TV"}
                        description={"Bird feeder live cam. Live streaming of a video data feed."}
                        githubLink="https://github.com/whitenick/homepage"
                        externalLink={router.basePath + "/app/bird-tv"}
                    /> */}
                </div>
            </div>
        </SpacePageWrapper>
    )
}

export default SpacePage;