import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Home from '../../components/home';
import { NavBar, NavBarVertical } from '../../components/shared/nav-bar';

const HomePage: React.FunctionComponent<any> = () => {
    return (
        // <Home/>
        <div className="flex flex-col items-center py-6 gap-4 w-full">
            {/* <div className={"grid grid-flow-col auto-cols-auto w-[100%]"}>
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
            </div> */}
            <div className={"grid grid-rows-2 justify-center w-[100%]"}>
                <div className="text-6xl content-center font-marion text-Jet">
                    Nick White
                </div>
                <div className="flex justify-center gap-x-2">
                    <a href="https://github.com/whitenick" target="_blank" className="justify-end p-2" title="Github">
                        <FiLinkedin href="https://github.com/whitenick" />
                    </a>
                    <a href="https://github.com/whitenick" target="_blank" className="p-2" title="Github">
                        <FiGithub href="https://github.com/whitenick" />
                    </a>
                </div>
            </div>
            <NavBarVertical items={[
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
            ]} />
        </div>
    )
}

export default HomePage;