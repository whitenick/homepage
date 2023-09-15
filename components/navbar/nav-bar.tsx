import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { UFOCanvas } from '../../modules/animations/space-animations';
import cx from "classnames";
import { URLS } from '../utils/urls';

export const DefaultNavBar = () => {
    return (
        <>
            <NavBar
                items={DefaultNavBarOptions}
            />
        </>
    )
}

export const UFONavBar = () => {
    return (
        <>
            <div className='h-[35%]'>
                <UFOCanvas />
            </div>
            <NavBar
                className='absolute top-44 left-0 right-0 bottom-0 '
                items={DefaultNavBarOptions}
            />
        </>
    )
}

export const DefaultNavBarOptions = [
    {
        name: 'about',
        route: '/app'
    },
    {
        name: 'projects',
        route: '/app/projects'
    },
    {
        name: 'space',
        route: '/app/space'
    }, 
    {
        name: 'animations',
        route: '/app/games'
    }

]

export const NavBar: React.FunctionComponent<{
    items: { name: string, route: string }[],
    className?: string
}> = (props) => {
    const router = useRouter();
    const path = useMemo(() => {
        if (!router) return "";
        console.log(router.asPath)
        return router.asPath;
    }, [router.asPath])
    return (
        <div className={cx("p-1 rounded items-center font-sans py-12", props.className)}>
            <div className={"grid grid-rows-2 justify-center w-[100%]"}>
                <a href={URLS.home} className="text-5xl content-center font-lobster text-Jet">
                    Nick White
                </a>
                <div className="flex justify-center items-center gap-x-2">
                    <a href="https://www.linkedin.com/in/nick-white-a4ba63110/" target="_blank" className="justify-end p-2" title="Github">
                        <FiLinkedin />
                    </a>
                    <a href="https://github.com/whitenick" target="_blank" className="p-2" title="Github">
                        <FiGithub />
                    </a>
                </div>
            </div>
            <NavigationMenu.Root>
                <NavigationMenu.List className="grid grid-rows-1 grid-flow-col justify-center gap-4">
                    {props.items?.length > 0 && props.items?.map(item => {
                        return (
                            <Link key={"key_" + item?.name} href={item.route ?? ""}>
                                <NavigationMenu.Item className={`${path.toLowerCase() === item.route?.toLowerCase() ? "border-b border-Jet text-Jet" : "text-gray-500"} hover:border-b hover:cursor-pointer font-mono p-4`}>
                                    {item?.name}
                                </NavigationMenu.Item>
                            </Link>
                        )
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}

export const NavBarVertical: React.FunctionComponent<{
    items: { name: string, route: string }[]
}> = (props) => {
    const router = useRouter();
    const path = useMemo(() => {
        if (!router) return "";
        console.log(router.asPath)
        return router.asPath;
    }, [router.asPath])
    return (
        <div className="w-60 bg-Gray-Gray p-1 rounded font-montserrat text-[#FFFFFF]">
            <NavigationMenu.Root>
                <NavigationMenu.List className="flex flex-col max-w-12 justify-start gap-4">
                    {props.items?.length > 0 && props.items?.map(item => {
                        return (
                            <Link href={item.route ?? ""}>
                                <NavigationMenu.Item className={`${path.toLowerCase() === item.route?.toLowerCase() ? "bg-dark-green text-white" : ""} hover:bg-dark-green hover:text-white font-semibold hover:cursor-pointer text-Jet p-4 text-center rounded`}>
                                    {item?.name}
                                </NavigationMenu.Item>
                            </Link>
                        )
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}