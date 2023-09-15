'use client'

import { Icon } from "@chakra-ui/react";
import { PiClipboardBold, PiClipboardThin, PiGearThin, PiStudentThin } from "react-icons/pi";

const BeeSeeNav = () => {
    return (
        <div className="grid grid-cols-1 p-4 shadow">
            <div className="flex flex-col justify-start items-center gap-6">
                <div className="flex flex-col p-2">
                    <PiStudentThin size={50} />
                    {/* <Icon as={PiStudentThin}/> */}
                    <div>Students</div>
                </div>
                <div className="flex flex-col">
                    <PiClipboardThin size={50} />
                    <div>Classes</div>
                    {/* <Icon as={PiStudentThin}/> */}
                </div>
                <div className="flex flex-col">
                    <PiGearThin size={50} />
                    <div>Settings</div>
                </div>
            </div>
        </div>
    )
}

const StudentListTable = () => {
    return (
        <>
            Hello
        </>
    )
}

const StudentList = () => {
    let Content = <StudentListTable/>
    return (
        <>
            {/* Desktop layout first (2 columns, one for nav bar, one for content) */}
            <div className="grid grid-cols-[84px_1fr] h-[100vh]">
                <BeeSeeNav />
                <div>
                    { Content }
                </div>
            </div>
        </>
    );
}

export default StudentList;