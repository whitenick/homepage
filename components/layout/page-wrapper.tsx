import { Header } from "./header"
import { DefaultNavBar, NavBar, UFONavBar } from "../navbar/nav-bar"
import cx from "classnames"
import { SpaceCanvas } from "../animations/space/space-animations"

export const PageWrapper: React.FunctionComponent<any> = (props) => {
    return (
        <div className="h-full">
            <title>{props.title}</title>
            {props.children}
        </div>
    )
}

export const PageWrapperWithHeader: React.FunctionComponent<{
    title?: string,
    className?: string,
    children?: any
}> = (props) => {
    return (
        <PageWrapper title={props.title}>
            <DefaultNavBar />
            {props.children}
        </PageWrapper>
    )
}

export const SpacePageWrapper: React.FunctionComponent<{
    title?: string,
    className?: string,
    children?: any
}> = (props) => {
    return (
        <div className={"h-[100vh] w-[100vw]"}>
            <SpaceCanvas />
            <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
                <UFONavBar />
                {props.children}
            </div>
        </div>
    )
}