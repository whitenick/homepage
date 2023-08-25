import { SpaceCanvas, UFOCanvas } from "../../games/animation/space-animations"
import { ThreeJSWrapper } from "../../../components/layout/page-wrapper"
import { UFONavBar } from "../../../components/navbar/nav-bar"

const SpacePageWrapper = (props) => {
    return (
        <ThreeJSWrapper>
            <SpaceCanvas />
            <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
                <UFONavBar />
                {props.children}
            </div>
        </ThreeJSWrapper>
    )
}

export default SpacePageWrapper;