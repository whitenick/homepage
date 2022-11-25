import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export const NavBar : React.FunctionComponent<{
    items: { name: string, route: string }[]
}> = (props) => {
    return (
        <div className="bg-Gray-Gray p-1 rounded font-inconsolata text-[#FFFFFF]">
            <NavigationMenu.Root>
                <NavigationMenu.List className="grid grid-rows-1 grid-flow-col justify-start gap-4">
                    { props.items?.length > 0 && props.items?.map(item => {
                        return (
                            <Link href={item.route ?? ""}>
                                <NavigationMenu.Item className="hover:bg-dark-green hover:text-white hover:cursor-pointer text-Jet p-4 rounded">
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