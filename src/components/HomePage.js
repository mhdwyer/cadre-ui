import React from 'react';
import workHome1 from '../assets/work-home-1.jpg';
import workHome2 from '../assets/work-home-2.jpg';

export default function HomePage() {
    return (
      <div className="App-main">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">A virtual workplace solution</h1>
            <p class="lead">Taking presence to a new level for your virtual workforce</p>
            <img src={workHome1} width="500" className="App-intro" alt="guy working at home" />
            <img src={workHome2} width="500" className="App-intro" alt="woman working at home" />
          </div>
        </div>
      </div>
    );
}