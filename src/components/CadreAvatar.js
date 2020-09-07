import React, { useState } from 'react';
import avatarCurves1 from '../assets/curve1.svg';
import './CadreAvatar.css';
import Gravatar from 'react-gravatar';
import MoodIcon from './MoodIcon';

export default function CadreAvatar(props) {
    const [isShown, setIsShown] = useState(false);
    return (
      <div className="avatar" style={{top:props.positionTop,left:props.positionLeft}}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        {/* <img className="personImage" src={personImage} width="40" /> */}
        <Gravatar className="personImage" email={props.email} size="35"/> 
        <img className="avatarCurves" src={avatarCurves1} width="45" /><br/>
        { isShown && (
          <div className="avatarNameLabel">{props.name}</div>
        )}
        <MoodIcon className="moodICon" name={props.mood} />
      </div>
    );
}