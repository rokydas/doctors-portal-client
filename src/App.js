import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/HomeComponents/Home/Home';
import Test from './Components/HomeComponents/Test/Test';
import Appointment from './Components/AppointmentComponents/Appointment/Appointment';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/appointment">
          <Appointment/>
        </Route>
      </Switch>
    </Router>
    // <Test></Test>
  );
}

export default App;
