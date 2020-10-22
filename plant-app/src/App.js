import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login'


function App() {
  return (
    <Router>
      {/* <StyledApp> */}
      <div className="App">

        <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/NewEntry" component={NewEntryPage} />
        <PrivateRoute path="/MyEntries" component={EntryArchive} />
        <PrivateRoute path="/edit/:id" component={Edit} />  */}
        </Switch>


      </div>

      {/* </StyledApp> */}
    </Router>
  );
}


export default App;


