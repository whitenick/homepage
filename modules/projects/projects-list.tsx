import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Header } from "../../components/layout/header"
import { PageWrapper, PageWrapperWithHeader } from "../../components/layout/page-wrapper";
import { useRouter } from "next/router";

export const Project: React.FunctionComponent<{
    title: string
    description?: string
    githubLink?: string
    externalLink?: string
}> = (props) => {
    return (
        <div className="grid auto-rows-auto shadow rounded p-4 bg-Snow gap-y-2 w-full">
            <div className="grid grid-cols-2 items-center justify-center">
                <div className="flex flex-col">
                    <div className="text-xl font-inconsolata justify-center">
                        {props.title}
                    </div>
                    {props.description &&
                        <div className="flex">
                            {props.description}
                        </div>
                    }
                </div>
                <div className="flex justify-end gap-x-4">
                    {props.githubLink &&
                        <a href={props.githubLink} target="_blank">
                            <FiGithub />
                        </a>
                    }
                    {props.externalLink &&
                        <a href={props.externalLink} target="_blank">
                            <FiExternalLink />
                        </a>
                    }
                </div>
            </div>
            {/* <div className="pb-2">
                        <div className="font-bold">
                            Purpose
                        </div>
                        <div className="font-montserrat">
                            Create a website to host personalized teaching content, share teaching resources, and offer materials for purchase through Teachers Pay Teachers.
                        </div>
                    </div>
                    <div className="font-bold">
                        Description
                    </div>
                    <div className="font-montserrat">
                        A custom made blog site for 3rd Grade Teacher, Sarah Adler. <br/> Hosted on GCP.
                    </div> */}
        </div>
    )
}

const ProjectsPage: React.FunctionComponent = () => {
    const router = useRouter();

    return (
        <PageWrapperWithHeader>
            <div className="flex flex-col items-center gap-y-4 px-4">
                <Project
                    title={"This Homepage"}
                    githubLink="https://github.com/whitenick/homepage"
                    externalLink="/app"
                />
                <Project
                    title={"The Very Tiny Teacher"}
                    githubLink=""
                    externalLink="https://www.theverytinyteacher.com"
                />
                <Project
                    title={"Itch"}
                    githubLink="https://github.com/whitenick/itchy"
                    externalLink="https://github.com/whitenick/itchy"
                />
                <Project
                    title={"NHL Predictions"}
                    githubLink="https://github.com/whitenick/NHL-Predictions"
                    externalLink="https://github.com/whitenick/NHL-Predictions"
                />
                <Project
                    title={"Cashflow"}
                    githubLink="https://github.com/whitenick/cashflow"
                    externalLink="https://github.com/whitenick/cashflow"
                />
                <Project
                    title={"BeeSee (or something idk)"}
                    githubLink="https://github.com/whitenick/homepage"
                    externalLink={router.basePath + "/app/behavior-buzz"}
                />
                <Project
                    title={"BirdTV"}
                    githubLink="https://github.com/whitenick/homepage"
                    externalLink={router.basePath + "/app/bird-tv"}
                />
                <Project
                    title={"TaskGraph"}
                    githubLink="https://tasgraph.io"
                    externalLink="https://taskgraph.io"
                />
            </div>
        </PageWrapperWithHeader>
    )
}

export default ProjectsPage;