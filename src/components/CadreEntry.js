import React from 'react';
import dwyer1 from '../assets/dwyer1.svg';

export default function CadreEntry({match}) {
    return (
      <div className="App-main">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Welcome to {match.params.cadreId}</h1>
            <img src={dwyer1} class="img-fluid"/>
          </div>
        </div>
      </div>
    );
}