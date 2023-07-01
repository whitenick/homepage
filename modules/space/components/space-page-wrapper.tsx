import { SpaceCanvas, UFOCanvas } from "../../../components/animations/space/space-animations"
import { ThreeJSPageWrapper } from "../../../components/layout/page-wrapper"
import { UFONavBar } from "../../../components/navbar/nav-bar"

const SpacePageWrapper = (props) => {
    return (
        <ThreeJSPageWrapper>
            <SpaceCanvas />
            <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
                <UFONavBar />
                {props.children}
            </div>
        </ThreeJSPageWrapper>
    )
}

export default SpacePageWrapper;