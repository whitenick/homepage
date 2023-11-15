import { TwoPanel } from "../../../../components/layout/two-panel";
import StudentList from "../../../../modules/behavior-buzz/pages/student-list";

const Page = () => {
    return (
        <TwoPanel.Container>
            <TwoPanel.MainPanel>
                <StudentList />
            </TwoPanel.MainPanel>
        </TwoPanel.Container>
    )
}

export default Page;