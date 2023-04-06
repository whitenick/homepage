import { Header } from "./header"

export const PageWrapper : React.FunctionComponent<any> = (props) => {
    return (
        <div className="grid auto-cols-auto px-[20%]">
            <title>{props.title}</title>
            { props.children }
        </div>
    )
}

export const PageWrapperWithHeader : React.FunctionComponent<{
    title?: String
}> = (props) => {
    return (
        <PageWrapper title={props.title}>
            <Header />
            {props.children}
        </PageWrapper>
    )
}