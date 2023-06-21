import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Home from '../../modules/home';
import { NavBar, NavBarVertical } from '../../components/navbar/nav-bar';
import TypedDiv from '../../components/typed';
import { PageWrapperWithHeader, SpacePageWrapper } from '../../components/layout/page-wrapper';

const HomePage: React.FunctionComponent<any> = () => {
    return (
        <>
            <Home/>
        </>
    )
}

export default HomePage;