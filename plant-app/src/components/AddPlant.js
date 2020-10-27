import React, { useState, useEffect, useContext } from 'react'; 
import { axiosWithAuth } from '../auth/axiosWithAuth.js'; 

import {StoreContext} from '../contextAPI/Context';


class AddPlant extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      species: '',
      h2ofrequency: ''
    };
  }

handleChanges = (e) => {

  this.setState({[e.target.name]: e.target.value})
}

handleSubmit = e => {

  e.preventDefault();
  //console.log(plantData)
  axiosWithAuth()
    .post(`api/plants`, this.state)
    .then (res => {
      localStorage.setItem('token', res.data.token)
      console.log(res.data)
  })
    //.then(res => {props.history.push("/home")})
    .catch(error => {
    console.log(error)
  })

}

    // const { nickname, species,h2ofrequency }
      render() {

        const { nickname, species, h2ofrequency } = this.state;
        
        return(
        <div>
          <form onSubmit = {this.handleSubmit}>
            <div>
            <input 
              type="text" 
              name="nickname" 
              placeholder="nickname" 
              value={this.state.nickname || ''} 
              onChange={this.handleChanges}/> 

            <input 
            type="text" 
            name="species" 
            placeholder="species" 
            value={this.state.species || ''} 
            onChange ={this.handleChanges}/>

            <input 
            type="text" 
            name="h2ofrequency" 
            placeholder="h2ofrequency" 
            value={this.state.h2ofrequency || ''} 
            onChange={this.handleChanges}/>

          <button type ="submit">Add Plant!</button>
          </div>
          </form>
        </div>

       )}
}


export default AddPlant;

