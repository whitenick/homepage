import { useGLTF } from "@react-three/drei"
import { PageWrapperWithHeader } from "../../../../components/layout/page-wrapper"
import { BouncingLemon } from "../../../../modules/animations/bouncing-lemon"

const Page = () => {
    return (
        <PageWrapperWithHeader>
            <BouncingLemon />
        </PageWrapperWithHeader>
    )
}

export default Page;