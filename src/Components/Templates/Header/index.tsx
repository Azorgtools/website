import { Fragment, FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import routes from '../../../Constants/routes';
import { Close, Menu, LocationOn, AccessTime, Phone } from '@material-ui/icons';


import Logo from '../../Atoms/Logo';

const Header: FunctionComponent = () => {
    const [ showNavbarMenu, setShowNavbarMenu ] = useState(false);

    const menuClasses = clsx({
        'is--active': showNavbarMenu
    });

    return (
        <Fragment>
            <div className='topbar-usp'>
                <ul>
                    <li><LocationOn />Eindhoven</li>
                    <li><Phone />040 845 7955</li>
                </ul>
            </div>
            <header className='header'>
                <div className='header__navbar'>
                    <NavLink className='header__navbar__logo' to='/' >
                        <Logo />
                    </NavLink>
                    <div className='header__navbar__menu'>
                        <ul className={ menuClasses }>
                            <Close className='header__navbar__menu-button' onClick={ () => setShowNavbarMenu(false) } />
                            { routes.map((route, index) => (
                                <li key={ index }><NavLink
                                    to={ route.path }
                                    className={ ({ isActive }) => isActive ? "is--active" : undefined }
                                    onClick={ () => setShowNavbarMenu(false) }>{ route.name }</NavLink></li>
                            )) }
                        </ul>
                        <Menu className='header__navbar__menu-button' onClick={ () => setShowNavbarMenu(true) } />
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
