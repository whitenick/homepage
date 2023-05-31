import { NavBar } from "./nav-bar";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Header : React.FunctionComponent<any> = () => {
    return (
        <div className="flex flex-col justify-center py-6 gap-4 w-full">
            <div className={"grid grid-flow-col auto-cols-auto w-[100%]"}>
                <div className="text-6xl font-montserrat text-Jet">
                    Nick White
                </div>
                <div className="flex justify-end gap-x-2">
                    <a href="https://github.com/whitenick" target="_blank" className="grid justify-end p-2" title="Github">
                        <FiLinkedin href="https://github.com/whitenick"/>
                    </a>
                    <a href="https://github.com/whitenick" target="_blank" className="grid justify-end p-2" title="Github">
                        <FiGithub href="https://github.com/whitenick"/>
                    </a>
                </div>
                {/* <a href="https://github.com/whitenick" target="_blank" className="grid justify-end p-2" title="Github">
                    <FiGithub href="https://github.com/whitenick"/>
                </a> */}
            </div>
            <div className="bg-Gray-Gray p-1 rounded font-inconsolata text-[#FFFFFF]">
                <NavBar items={[
                    {
                        name: 'About',
                        route: '/app'
                    },
                    {
                        name: 'Projects',
                        route: '/app/projects'
                    },
                    {
                        name: 'Posts',
                        route: '/app/posts'
                    }
                ]}/>
            </div>
        </div>
    )
}