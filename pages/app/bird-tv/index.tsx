import { useState } from "react"
import { PageWrapper } from "../../../components/layout/page-wrapper"
import Hamburger from "hamburger-react";
import { FiExternalLink, FiNavigation } from "react-icons/fi";
import { SlideoutNavbar } from "../../../components/navbar/nav-bar";
import BirdVideo from "../../../modules/bird-tv/components/bird-video";



const NavItemList = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex p-3 text-3xl font-montserrat gap-2">
                Feeders
            </div>
            <div className="flex p-3 text-3xl font-montserrat gap-2">
                Twitch
                <span><FiExternalLink /></span>
            </div>
        </div>
    )
}

const VideoBox = () => {
    return (
        <div className="flex justify-center items-center w-32 h-32 border">
            <span className="">Video Box</span>
        </div>
    )
}

const Page = () => {
    return (
        <PageWrapper className="bg-inherit">
            <div className="flex h-[100vh]">
                <SlideoutNavbar.Container>
                    <SlideoutNavbar.Item>
                        <NavItemList />
                    </SlideoutNavbar.Item>
                </SlideoutNavbar.Container>
                
                <div className="flex w-full">
                    <div className="flex flex-col h-full border p-4 gap-y-4">
                        <div><VideoBox /></div>
                        <div><VideoBox /></div>
                    </div>
                    <BirdVideo />
                </div>
            </div>
        </PageWrapper>
    )
};

export default Page;