import { SpaceCanvas, UFOCanvas } from "../../animations/space-animations"
import { ThreeJSWrapper } from "../../../components/layout/page-wrapper"
import { UFONavBar } from "../../../components/navbar/nav-bar"

const SpacePageWrapper = (props) => {
    return (
        <div className="">
            <div className="h-[100vh]">
                <div className="w-full h-full">
                    <SpaceCanvas />
                </div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="flex flex-col h-full z-100">
                        <UFONavBar />
                        <div className="flex overflow-auto">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpacePageWrapper;