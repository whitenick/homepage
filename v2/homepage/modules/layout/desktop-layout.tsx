import React from "react"
import { DesktopNavBar } from "../navbar"
import { DesktopWrapper } from "./desktop-wrapper"

export const DesktopLayout: React.FunctionComponent<any> = (props) => {
    return (
        <DesktopWrapper>
            <div className="grid grid-cols-4 h-[100vh]">
                <DesktopNavBar />
                <div className="col-span-3 m-4">
                    { props.children }
                </div>
            </div>
        </DesktopWrapper>
    )
}