import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Home from '../../components/home';
import { NavBar, NavBarVertical } from '../../components/shared/nav-bar';
import ReactTyped from 'react-typed';

const HomePage: React.FunctionComponent<any> = () => {
    return (
        // <Home/>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
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
            ]} />
            <div className="flex items-center text-center px-[20%] py-32">
                <ReactTyped style={{ alignItems: 'center', justifyContent: 'center' }} strings={["Hey! I'm glad you came."]} typeSpeed={100} className="text-6xl font-montserrat text-Jet" />
            </div>
        </div>
    )
}

export default HomePage;