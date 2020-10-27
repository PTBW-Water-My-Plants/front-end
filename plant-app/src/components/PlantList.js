import React, { useState, useEffect, useContext } from "react"; 
import { Link } from 'react-router-dom';

import {StoreContext} from '../contextAPI/Context.js'; 
import { axiosWithAuth } from "../auth/axiosWithAuth.js";
import AddPlant from './AddPlant.js'; 
import UpdatePlant from './UpdatePlant.js'
import PlantCard from "./PlantCard.js";


export default class PlantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: []
    };
  }




  componentDidMount() {
    axiosWithAuth()
      .get(`/api/plants/`)
      .then(res => {
        console.log(res);
        this.setState({ plants: res.data });
      })
      .catch(err=> console.log(err.response));
  }

  render() {
    
    return (
      <div>
          {/* {this.state.plants.map(plants => (
          <PlantDetails key={plants.id} plants={plants} />
        ))} */}

          {this.state.plants.map(plants => (
          <PlantDetails key={plants.id} plants={plants} />
        ))
        // <button {onClick} ={() => 
        //   axiosWithAuth()
        //   .delete(`/plant/${id}`)
        //   .then(res => (plants.filter(event => event.id !== id)))} >Delete Plant</button>
      
        }

        <AddPlant /> 
        {/* <Link to={`/plants/${id}`}><div> src={UpdatePlant} </div></Link>  */}


        {/* <ul>
          {this.state.plants.map(plants => 
          <li key={plants.id}>{plants.nickname}</li>)}
        </ul>
        <PlantCard />
        <AddPlant /> */}
      </div>
    )
  }

}

function PlantDetails({ plants }) {
  return (
    <Link to={`/plants/${plants.id}`}>
    <PlantCard plants={plants} />
  </Link>
);
}

