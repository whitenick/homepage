import { Header } from "./header"
import { DefaultNavBar, NavBar } from "../navbar/nav-bar"
import cx from "classnames"
import { Space } from "../animations/space/space-animations"

export const PageWrapper: React.FunctionComponent<any> = (props) => {
    return (
        <div className="grid auto-cols-auto">
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
        <div className={props.className}>
            <PageWrapper title={props.title}>
                <DefaultNavBar />
                {props.children}
            </PageWrapper>
        </div>
    )
}

export const SpacePageWrapper: React.FunctionComponent<{
    title?: string,
    className?: string,
    children?: any
}> = (props) => {
    return (
        <div className={"h-[100vh] w-[100vw]"}>
            <Space />
            <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
                <PageWrapperWithHeader title={props.title}>
                    {props.children}
                </PageWrapperWithHeader>
            </div>
        </div>
    )
}