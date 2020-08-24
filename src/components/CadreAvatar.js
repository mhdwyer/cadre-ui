import React from 'react';
import avatarCurve1 from '../assets/curve1.svg';
import bubble1 from '../assets/bubble.svg';
import personImage from '../assets/michaeldwyer.png';

export default function CadreAvatar() {
    return (
      <div style={{position:'absolute',top:250,left:380,width:80}}>
        <img src={personImage} width="40" style={{position:'absolute',top:0,left:3}} />
        <img src={avatarCurve1} width="45" style={{position:'absolute',top:6,left:0,margin:0,padding:0}}/><br/>
        <div style={{position:'absolute',top:0,left:-90,width:100,fontSize:'0.7em',margin:0,padding:0,backgroundColor:'white'}}>Michael Dwyer</div>
      </div>
    );
}