'use client'

import { Icon } from "@chakra-ui/react";
import { PiClipboardBold, PiClipboardThin, PiGearThin, PiStudentThin } from "react-icons/pi";
import { usePocketbaseClient } from "../../../components/pocketbase/pocketbase";
import { useSupabaseClient } from "../../../components/supabase/supabase";
import { useEffect, useState } from "react";

const BeeSeeNav = () => {
    return (
        <div className="grid grid-cols-1 shadow">
            <div className="flex flex-col justify-start items-center gap-6 w-full p-2">
                <div className="flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded w-full">
                    <PiStudentThin size={50} color="gray" />
                    {/* <Icon as={PiStudentThin}/> */}
                    <div className="text-gray-500 font-montserrat">Students</div>
                </div>
                <div className="flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded w-full">
                    <PiClipboardThin size={50} color="gray" />
                    <div className="text-gray-500 font-montserrat">Classes</div>
                    {/* <Icon as={PiStudentThin}/> */}
                </div>
            </div>
            <div className="flex flex-col items-center justify-end p-2">
                <div className="flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded w-full">
                    <PiGearThin size={50} color="gray" />
                    <div className="text-gray-500 font-montserrat">Settings</div>
                </div>
            </div>
        </div>
    )
}

const StudentListTable = async () => {
    const db = useSupabaseClient();
    const { data, error } = await db.from('students').select();
    let students = data;

    console.log(JSON.stringify(students));

    return (
        <div>
            Hello
        </div>
    )
}

const StudentList = () => {
    let [content, setContent] = useState(null);

    // useEffect(() => {
    //     let result = async () => {
    //         let response = await StudentListTable()
    //         setContent(response);
    //     };
    //     result();
    // }, []);

    return (
        <>
            {/* Desktop layout first (2 columns, one for nav bar, one for content) */}
            <div className="grid grid-cols-[108px_1fr] h-[100vh]">
                <BeeSeeNav />
                <div>
                    hello
                </div>
            </div>
        </>
    );
}

export default StudentList;