import { Fragment, FunctionComponent } from "react";
import GridItem from "../Components/Atoms/GridItem";
import gridItems from "./productmap";

const Products: FunctionComponent = () => {
    return (
        <div style={{ backgroundColor: '#dddddf' }} className="page-container">
            <div className="grid-container">
                { gridItems.map((props) => <GridItem { ...props } />) }
            </div>
        </div>
    );
}

export default Products;
