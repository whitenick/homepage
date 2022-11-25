import { NavBar } from "./nav-bar"

export const Header : React.FunctionComponent<any> = () => {
    return (
        <div className="flex flex-col justify-center py-6 gap-4 w-full">
            <div className={"grid text-7xl font-inconsolata text-Jet w-[500px]"}>
                Nick White
            </div>
            <div className="bg-Gray-Gray p-1 rounded font-inconsolata text-[#FFFFFF]">
                <NavBar />
            </div>
        </div>
    )
}