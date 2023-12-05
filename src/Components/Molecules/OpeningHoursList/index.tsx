import { FunctionComponent } from "react";

import openingHours from "../../../Constants/openingHours";


const OpeningHoursList: FunctionComponent = () => {
    const day = new Date().getDay();


    return (
        <ul>
            { openingHours.map((openingHour, index) => {
                return (

                    <li key={ index } className={(index === 0 && day === 6) || index + 1 === day ? 'current-day' : undefined}>
                        <b>{ openingHour.day }:</b>
                        { openingHour.time }
                    </li>
                );
            }) }
        </ul>
    );
}

export default OpeningHoursList;
