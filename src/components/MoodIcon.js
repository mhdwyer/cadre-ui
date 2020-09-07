import React from 'react';
import './MoodIcon.css';
import { EmojiAngry, EmojiDizzy, EmojiExpressionless, EmojiFrown, EmojiLaughing, EmojiNeutral, EmojiSmileUpsideDown, EmojiSunglasses, EmojiSmile, ZoomIn } from 'react-bootstrap-icons';
 
export default function MoodIcon(props) {
    var result;
    switch (props.name) {
        case "angry":
        case "frustrated":
            result = <React.Fragment>
                        <div className={props.className}><EmojiAngry /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="firebrick"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="red"></circle>
                        </svg>
                    </React.Fragment>
            break;
        case "sad":
        case "down":
            result = <React.Fragment>
                        <div className={props.className}><EmojiFrown /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="powderblue"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="powderblue"></circle>
                        </svg>
                    </React.Fragment>
            break;
        case "confused":
            result = <React.Fragment>
                        <div className={props.className}><EmojiDizzy /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="green"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="green"></circle>
                        </svg>
                    </React.Fragment>
            break;
        case "relaxed":
        case "chill":
            result = <React.Fragment>
                        <div className={props.className}><EmojiSunglasses /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="royalblue"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="royalblue"></circle>
                        </svg>
                    </React.Fragment>
            break;
        case "happy":
        case "good":
            result = <React.Fragment>
                        <div className={props.className}><EmojiSmile /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="orange"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="orange"></circle>
                        </svg>
                    </React.Fragment>
            break;
        case "neutral":
        case "okay":
        default:
            result = <React.Fragment>
                        <div className={props.className}><EmojiNeutral /></div>
                        <svg className="beacon" width="40" height="40">
                            <circle cx="50%" cy="50%" r="7px" fill="khaki"></circle>
                            <circle className="pulse" cx="50%" cy="50%" r="10px" fill="khaki"></circle>
                        </svg>
                    </React.Fragment>
            break;
    }
    return result;
}