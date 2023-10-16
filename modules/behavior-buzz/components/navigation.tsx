import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";
import { PiStudentThin, PiClipboardThin, PiGearThin } from "react-icons/pi";

const isSelected = (name: string, route: string) => {
    return route.includes(name);
};

export const BeeSeeNav = () => {
    const router = useRouter();

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
            <div className={"flex flex-col items-center justify-end p-2 "} onClick={() => router.push('/app/behavior-buzz/settings')}>
                <div className={"flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer p-2 rounded w-full " + (isSelected('settings', router.asPath) ? "bg-gray-100" : null)}>
                    <PiGearThin size={50} color="gray" />
                    <div className="text-gray-500 font-montserrat">Settings</div>
                </div>
            </div>
        </div>
    )
}

export const NavItemList = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex p-3 text-3xl font-montserrat gap-2">
                Students
            </div>
        </div>
    );
};