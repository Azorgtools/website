import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Components/Atoms/Logo";

import Cover from '../Assets/Images/a-zorg-banner-over-ons-1.jpg';

const Home: FunctionComponent = () => {
    return (
        <div className="home-cover">
            <img src={ Cover } />
            <div className="home-buttons">
                <h1>
                    A Zorg Innovation
                </h1>
                <Logo height={ 100 } />
                <NavLink className="m-top" to="/products">
                    <button className="home-cover-button">Producten</button>
                </NavLink>
                <NavLink to="/over-ons">
                    <button className="home-cover-button">Over ons</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;
