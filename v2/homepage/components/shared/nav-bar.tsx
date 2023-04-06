import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const NavBar : React.FunctionComponent<{
    items: { name: string, route: string }[] 
}> = (props) => {
    const router = useRouter();
    const path = useMemo(() => {
        if (!router) return "";
        console.log(router.asPath)
        return router.asPath;
    }, [router.asPath])
    return (
        <div className="bg-Gray-Gray p-1 rounded font-montserrat text-[#FFFFFF]">
            <NavigationMenu.Root>
                <NavigationMenu.List className="grid grid-rows-1 grid-flow-col justify-start gap-4">
                    { props.items?.length > 0 && props.items?.map(item => {
                        return (
                            <Link href={item.route ?? ""}>
                                <NavigationMenu.Item className={`${path.toLowerCase() === item.route?.toLowerCase() ? "bg-dark-green text-white" : ""} hover:bg-dark-green hover:text-white hover:cursor-pointer text-Jet p-4 rounded`}>
                                    { item?.name }
                                </NavigationMenu.Item>
                            </Link>
                        )
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}

export const NavBarVertical : React.FunctionComponent<{
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
                    { props.items?.length > 0 && props.items?.map(item => {
                        return (
                            <Link href={item.route ?? ""}>
                                <NavigationMenu.Item className={`${path.toLowerCase() === item.route?.toLowerCase() ? "bg-dark-green text-white" : ""} hover:bg-dark-green hover:text-white font-semibold hover:cursor-pointer text-Jet p-4 text-center rounded`}>
                                    { item?.name }
                                </NavigationMenu.Item>
                            </Link>
                        )
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}