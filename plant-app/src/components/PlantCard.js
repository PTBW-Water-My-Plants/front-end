import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UpdatePlant from './UpdatePlant.js';

import { axiosWithAuth } from '../auth/axiosWithAuth.js';


const PlantCard = props => {
  const { nickname, species, h2ofrequency } = props.plants;
  
  return (
    <div className="plant-card">

            <h2>{nickname}</h2>
            <div className="plant-species">
                Species: <em>{species}</em>
            </div>
            <div className="plant-h2ofrequency">
                H2O frequency: <strong>{h2ofrequency}</strong>
            </div>
            <Route path='/update-plant/:id' component={UpdatePlant} />

            {/* <Link to='/update-plant/${this.props.match.params.id}'>Update</Link> */}

    </div>
  );
};

export default PlantCard;