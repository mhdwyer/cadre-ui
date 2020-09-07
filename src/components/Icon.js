import React from 'react';
import { ArrowRight, EmojiSmile, ZoomIn } from 'react-bootstrap-icons';
 
export default function Icon(props) {
    switch (props.name) {
        case "ArrowRight":
            return <div className={props.className}><ArrowRight /></div>;
            break;
        case "EmojiSmile":
            return <div className={props.className}><EmojiSmile /></div>;
            break;
        default:
            return <div className={props.className}>No icon found</div>;
            break;
    }
    return <div></div>;
}