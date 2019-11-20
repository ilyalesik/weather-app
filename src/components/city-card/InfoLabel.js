import {h} from 'preact';
import cc from "classcat";
import * as typography from "../typography/typography.css";
import styled from "reshadow";
import * as s from "./infoLabel.css";

export const InfoLabel = (props) => {
    const {type, title} = props;
    return styled(s)(<div className={s.container}>
        <icon use:type={type} />
        <div className={s.container__title}>
            <p className={cc([s.title, typography.body])}>{title}</p>
        </div>
    </div>)
}
