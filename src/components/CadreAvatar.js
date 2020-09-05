import React from 'react';
import avatarCurves1 from '../assets/curve1.svg';
import './CadreAvatar.css'
import personImage from '../assets/michaeldwyer.png';

export default function CadreAvatar(props) {
    return (
      <div className="avatar" style={{top:props.positionTop,left:props.positionLeft}} >
        <img className="personImage" src={personImage} width="40" />
        <img className="avatarCurves" src={avatarCurves1} width="45" /><br/>
        <div className="avatarNameLabel">Michael Dwyer</div>
        <svg className="beacon" width="40" height="40">
          <circle cx="50%" cy="50%" r="7px" fill="orange"></circle>
          <circle className="pulse" cx="50%" cy="50%" r="10px" fill="orange"></circle>
        </svg>
      </div>
    );
}