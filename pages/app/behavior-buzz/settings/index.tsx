import { BeeSeeNav } from "../../../../modules/behavior-buzz/components/navigation";
import { PageWrapperWithNavBar } from "../../../../components/layout/page-wrapper";
import Settings from "../../../../modules/behavior-buzz/pages/settings";

const Page = () => {
    return (
        <PageWrapperWithNavBar.Container className="bg-inherit">
            <PageWrapperWithNavBar.NavBar>
                <BeeSeeNav />
            </PageWrapperWithNavBar.NavBar>
            <PageWrapperWithNavBar.PageContent>
                <Settings />
            </PageWrapperWithNavBar.PageContent>
        </PageWrapperWithNavBar.Container>
    );
};

export default Page;