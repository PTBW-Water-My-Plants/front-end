import React, { useState } from "react";
import { axiosWithAuth } from '../auth/axiosWithAuth.js'; 
import Plant from './Plant.js';
import {StoreContext} from '../contextAPI/Context';


class UpdatePlant extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        // nickname: '',
        // species: '',
        // h2ofrequency: ''
        //id: ''
      };
    }

    handleChanges = (e) => {

        this.setState({[e.target.name]: e.target.value})
      }
      

    handleSubmit = e => {

    e.preventDefault();
    axiosWithAuth()
    .put(`api/plants/${id}`)
    .then (res => {
      localStorage.setItem('token', res.data.token)
      console.log(res.data)
  })
  .catch(error => {
    console.log(error)
  })
    }
  render() {

    const { nickname, species, h2ofrequency } = this.state
    
    return(
    <div>
      <form onSubmit = {this.handleSubmit}>
        <div>
        <input 
          type="text" 
          name="nickname" 
          placeholder="update name" 
          value={this.state.nickname || ''} 
          onChange={this.handleChanges}/> 

        <input 
        type="text" 
        name="species" 
        placeholder="update species" 
        value={this.state.species || ''} 
        onChange ={this.handleChanges}/>

        <input 
        type="text" 
        name="h2ofrequency" 
        placeholder="update h2ofrequency" 
        value={this.state.h2ofrequency || ''} 
        onChange={this.handleChanges}/>

      <button type ="submit">Update</button>
      </div>
      </form>
    </div>

   )}
}


export default UpdatePlant;

// const UpdatePlant = props => {


//   const [plant, setPlant] = useState({id: props.match.params.id});

//   const handleChange = e => {
//     setPlant({
//       ...plant,
//       [e.target.name]: e.target.value,
//     });
//     console.log(plant);
// };

// const handleSubmit = e => {
//   e.preventDefault();
// //   const plantEditor = {
// //     ...plant,
// //     stars: plant.stars.split(", "),
// //   }
//   // make a PUT request to edit the movie
//   axios.put(`/plants/${props.match.params.id}`)
//   .then(res => {
//     console.log(res);
//     //document.querySelector('form').reset();
//     //props.history.push("/")
//   })
//   .catch(err => {
//     console.log(err);
//   })
// };

//   return (
//     <div className='plant-card'>
//       <p>Edit the Plant</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Edit Plant Name"
//           name="nickname"
//           onChange={handleChange}/>
//         <input
//           placeholder="Edit Plant species"
//           name="species"
//           onChange={handleChange}/>
//         <input
//           placeholder="Edit h2ofrequency"
//           name="h2ofrequency"
//           onChange={handleChange}/>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdatePlant;