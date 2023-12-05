import { ComponentType } from "react";

import Products from "../Containers/InnovatieveProducten";
import Home from "../Containers/Home";
import AboutUs from "../Containers/AboutUs";

interface route {
    path: string;
    name: string;
    component: ComponentType;
}

const routes: route[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Producten',
        component: Products
    },
    {
        path: '/over-ons',
        name: 'over-ons',
        component: AboutUs
    }


];

export default routes;
