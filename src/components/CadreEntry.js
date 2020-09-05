import React from 'react';
import CadreAvatar from './CadreAvatar';
import './CadreEntry.css'
import floorPlan from '../assets/example1.PNG';

export default function CadreEntry({match}) {
    return (
      <div className="container">  ..
        <div className="floorArea">
          <img src={floorPlan} /> x/.
          <CadreAvatar positionTop={58} positionLeft={360} />
          <CadreAvatar positionTop={250} positionLeft={380} />
        </div>
      </div>
    );
}