import React from 'react';
import CadreAvatar from './CadreAvatar';
import './CadreEntry.css'
import floorPlan from '../assets/example1.PNG';

export default function CadreEntry({match}) {
    return (
      <div className="container">  ..
        <div className="floorArea">
          <img src={floorPlan} />
          <CadreAvatar positionTop={58} positionLeft={360} name="Jennifer Dwyer" email="jdwyercpa@hotmail.com"/>
          <CadreAvatar positionTop={250} positionLeft={380} name="Michael Dwyer" email="mhdwyer@hotmail.com"/>
        </div>
      </div>
    );
}