import {h} from 'preact';
import * as s from "./citiesGrid.css"

export const CitiesGrid = (props) => {
    const {children} = props;
    return <div className={s.container}>
        {children}
    </div>
}
