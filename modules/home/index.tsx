import { DesktopLayout } from "../../components/layout/desktop-layout";
import { DesktopWrapper } from "../../components/layout/desktop-wrapper";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Tabs from "@radix-ui/react-tabs";
import { Header } from "../../components/layout/header";
import { PageWrapper, PageWrapperWithHeader, SpacePageWrapper } from "../../components/layout/page-wrapper";

const Home : React.FunctionComponent<any> = () => {
    return (
        <SpacePageWrapper title={"Nick White - About"}>
            {/* <Header /> */}
            <div className="p-6">
                <span className="text-3xl">Hello, and welcome.</span>
                <br/>
                <br/> 
                <span className="text-xl !leading-10 font-montserrat">I am a software engineer by trade, but my mind wanders. My main interests revolve around tech, business, space, and the outdoors. This site will serve as my playground. Here you can find my current experiments and random thoughts.</span> 
            </div>
        </SpacePageWrapper>
    )
}

export default Home;