import { DesktopLayout } from "../../modules/layout/desktop-layout";
import { DesktopWrapper } from "../../modules/layout/desktop-wrapper";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Tabs from "@radix-ui/react-tabs";
import { Header } from "../shared/header";
import { PageWrapper } from "../shared/page-wrapper";

const Home : React.FunctionComponent<any> = () => {
    return (
        <PageWrapper title={"Nick White - About"}>
            <Header />
            <div className="py-6">
                <span className="text-3xl">Hello, and welcome to my website.</span>
                <br/>
                <br/> 
                <span className="text-xl !leading-10">I am a software engineer by trade, but my mind wanders. My main interests revolve around technology, space, and the outdoors. This site will serve as my playground. Here you can find my current experiments and random thoughts.</span> 
            </div>
        </PageWrapper>
    )
}

export default Home;