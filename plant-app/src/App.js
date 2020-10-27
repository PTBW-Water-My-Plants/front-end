import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import SignUp from './components/SignUp';
import Login from './components/Login'
import PlantList from './components/PlantList'
import AddPlant from './components/AddPlant';
import PlantCard from './components/PlantCard';
import UpdatePlant from './components/UpdatePlant';
import Plant from './components/Plant';

function App() {
  return (
    <Router>
      {/* <StyledApp> */}
      <div className="App">

        <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/home" component={PlantList} />
        <PrivateRoute path="/add-plant" component={AddPlant} />
        <PrivateRoute path='/update-plant/:id' component={Plant} />

        {/* <PrivateRoute path="/MyEntries" component={EntryArchive} />
        <PrivateRoute path="/edit/:id" component={Edit} />    */}
        </Switch>


      </div>

      {/* </StyledApp> */}
    </Router>
  );
}


export default App;


