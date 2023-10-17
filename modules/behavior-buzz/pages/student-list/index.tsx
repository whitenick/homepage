'use client'

import { Icon } from "@chakra-ui/react";
import { PiClipboardBold, PiClipboardThin, PiGearThin, PiStudentThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { supabase } from "../../../../components/supabase/supabase";
import { BeeSeeNav } from "../../components/navigation";


const StudentListTable = async () => {
    const { data, error } = await supabase.from('students').select();
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