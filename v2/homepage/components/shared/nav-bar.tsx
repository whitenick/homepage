import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const NavBar : React.FunctionComponent<any> = (props) => {
    return (
        <div className="bg-Gray-Gray p-1 rounded font-inconsolata text-[#FFFFFF]">
            <NavigationMenu.Root>
                <NavigationMenu.List className="grid grid-rows-1 grid-flow-col justify-start gap-4">
                    <NavigationMenu.Item className="hover:bg-dark-green hover:text-white hover:cursor-pointer text-Jet p-4 rounded">
                        About
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="hover:bg-dark-green hover:text-white hover:cursor-pointer text-Jet p-4 rounded">
                        Projects
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}