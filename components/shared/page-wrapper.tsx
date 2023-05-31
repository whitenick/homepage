import { Header } from "./header"
import { DefaultNavBar, NavBar } from "./nav-bar"

export const PageWrapper : React.FunctionComponent<any> = (props) => {
    return (
        <div className="grid auto-cols-auto px-[20%]">
            <title>{props.title}</title>
            { props.children }
        </div>
    )
}

export const PageWrapperWithHeader : React.FunctionComponent<{
    title?: String,
    children?: any
}> = (props) => {
    return (
        <PageWrapper title={props.title}>
            <DefaultNavBar />
            {props.children}
        </PageWrapper>
    )
}