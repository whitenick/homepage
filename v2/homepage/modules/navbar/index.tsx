export const DesktopNavBar : React.FunctionComponent<any> = () => {
    return (
        <div className="flex flex-col p-4 bg-[#361D2E] items-center rounded m-4 h-[50%] shadow-md">
            <div className="text-center text-Snow py-4 row-start-1">
                <div className="text-Snow text-3xl">
                    Jobin
                </div>
                <div>email@placeholder.com</div>
            </div>
            <div className="text-Snow text-center">
                <div>About</div>
                <div>Projects</div>
            </div>
        </div>
    )
}