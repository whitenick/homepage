export const PageWrapper : React.FunctionComponent<any> = (props) => {
    return (
        <div className="grid grid-cols-1 px-[30%]">
            { props.children }
        </div>
    )
}