import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CadreAvatar from './CadreAvatar';
import './CadreEntry.css'
import floorPlan from '../assets/example1.PNG';

export default function CadreEntry({match}) {
    
    const [persons, setPersons] = useState([]);
    
    useEffect(() => {
      setPersons([{
              "name": "Michael Dwyer",
              "email": "mhdwyer@hotmail.com",
              "positionTop": 250,
              "positionLeft": 380,
              "status": 1,
              "availability": "available",
              "mood": "happy"
          },{
              "name": "Jennifer Dwyer",
              "email": "jdwyercpa@hotmail.com",
              "positionTop": 58,
              "positionLeft": 360,
              "status": 1,
              "availability": "available",
              "mood": "relaxed"
          }]);
    },[]);

    return (
      <div className="container">  ..
        <div className="floorArea">
          <img src={floorPlan} />
          {persons.map((person) => (
            <CadreAvatar positionTop={person.positionTop} positionLeft={person.positionLeft} 
                        name={person.name} email={person.email}
                        mood={person.mood} />
          ))}
        </div>
      </div>
    );
}