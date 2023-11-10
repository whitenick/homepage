import { ThreePanelWrapper } from "../../../../components/layout/three-panel";
import StudentList from "../../../../modules/behavior-buzz/pages/student-list";

const Page = () => {
    return (
        <ThreePanelWrapper.Container>
            <ThreePanelWrapper.LeftPanel>
                <StudentList />
            </ThreePanelWrapper.LeftPanel>
            <ThreePanelWrapper.RightPanel>
                <div>
                    Motherfucker
                </div>
            </ThreePanelWrapper.RightPanel>
        </ThreePanelWrapper.Container>
    )
}

export default Page;