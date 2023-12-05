import React from 'react';
import type { FunctionComponent } from 'react';
import Logojpeg from '../../../Assets/Images/A-zorg-removebg.png';

interface LogoProps {
    height?: number;
}

const Logo: FunctionComponent<LogoProps> = ({ height = 100 }) => {
    return (
        <div>
            <img src={Logojpeg} alt="Logo" style={{ height: `${height}px`, width: 'auto' }} />
        </div>
    );
};
export default Logo;
