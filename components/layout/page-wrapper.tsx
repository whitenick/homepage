import { DefaultNavBar } from "../navbar/nav-bar"
import Slot from "./slots/slot"
import { getSlotChild } from "./slots/slot-children";

export const PageWrapper: React.FunctionComponent<any> = (props) => {
    return (
        <div {...props} className={props.className + " h-[100vh]"}>
            <title>{props.title}</title>
            {props.children}
        </div>
    )
}

const NavBar = Slot();
const PageContent = Slot();

const Container: React.FunctionComponent<any> = (props) => {
    const navbar = getSlotChild(props.children, NavBar);
    const pageContent = getSlotChild(props.children, PageContent);

    return (
        <PageWrapper title={props.title} {...props}>
            <div className="grid grid-cols-[108px_1fr] h-[100vh] max-h-[100vh] overflow-hidden">
                { navbar }
                { pageContent }
            </div>
        </PageWrapper>
    );
};

export const PageWrapperWithNavBar = {
    Container,
    NavBar,
    PageContent
}

export const PageWrapperWithHeader: React.FunctionComponent<{
    title?: string,
    className?: string,
    children?: any
}> = (props) => {
    return (
        <PageWrapper title={props.title} {...props}>
            <DefaultNavBar />
            {props.children}
        </PageWrapper>
    )
}

export const ThreeJSWrapper: React.FunctionComponent<{
    title?: string,
    className?: string,
    children?: any
}> = (props) => {
    return (
        <>
            { props.children }
        </>
    )
}