import React from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";


  export default class Plant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plants: null
      };
    }

    componentDidMount() {
      this.fetchPlants(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
      if (this.props.match.params.id !== newProps.match.params.id) {
        this.fetchPlants(newProps.match.params.id);
      }
    }
  
    fetchPlants = id => {
  
    axios
      .get(`/api/plants/${id}`)
      .then(res => this.setState({ plants: res.data }))
      .catch(err => console.log(err.response));
  };

//   saveMovie = () => {
//     const addToSavedList = this.props.addToSavedList;
//     addToSavedList(this.state.movie);
//   };

  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`/api/plants/${id}`)
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    // if (!this.state.plant) {
    //   return <div>Loading plant information...</div>;
    // }
    return (
      <div className='save-wrapper'>
        <PlantCard plants={this.state.plants} />
        <div className='save-button' onClick={this.savePlants}>
          Save
          <Link to={`/update-plant/${this.props.match.params.id}`}>
            Update Plant
          </Link>
          <button onClick={this.handleDelete}>Delete Plant</button>
        </div>
      </div>
    );
  }
}

