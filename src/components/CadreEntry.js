import React from 'react';
import CadreAvatar from './CadreAvatar';
import dwyer1 from '../assets/example1.PNG';

export default function CadreEntry({match}) {
    return (
      <div class="container">
        <h1 class="display-4">Welcome to {match.params.cadreId}</h1>
        <div style={{position:'absolute'}}>
          <img src={dwyer1} style={{position:'absolute'}} />
          <CadreAvatar />
        </div>
      </div>
    );
}