import { DesktopLayout } from "../../components/layout/desktop-layout";
import { DesktopWrapper } from "../../components/layout/desktop-wrapper";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Tabs from "@radix-ui/react-tabs";
import { Header } from "../../components/layout/header";
import { PageWrapper, PageWrapperWithHeader } from "../../components/layout/page-wrapper";
import TypedDiv from "../../components/typed";
import { UFONavBar } from "../../components/navbar/nav-bar";
import { useSupabaseClient } from "../../components/supabase/supabase";
import { useState } from "react";

const Home : React.FunctionComponent<any> = () => {
    return (
        // <PageWrapperWithHeader title={"Nick White - About"}>
        //     {/* <Header /> */}
        //     <div className="p-6">
        //         <span className="text-3xl">Hello, and welcome.</span>
        //         <br/>
        //         <br/> 
        //         <span className="text-xl !leading-10 font-montserrat">I am a software engineer by trade, but my mind wanders. My main interests revolve around tech, business, space, and the outdoors. This site will serve as my playground. Here you can find my current experiments and random thoughts.</span> 
        //     </div>
        // </PageWrapperWithHeader>
        <PageWrapper>
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
            {/* <NavBar items={[
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
            ]} /> */}
            <UFONavBar />
            <div className="flex items-center justify-center px-[20%] py-32">
                <TypedDiv style={{ alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }} strings={["Hey! Nice to see you."]} className="text-6xl font-montserrat text-Jet" />
            </div>
        </PageWrapper>
    )
}

export default Home;