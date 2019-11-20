import {h} from 'preact';
import styled from 'reshadow';
import styles from './citiesGrid.css';

export const CitiesGrid = (props) => {
    const {children} = props;
    return styled(styles)(<container>
        {children}
    </container>)
}
