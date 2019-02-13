import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const ParamsExample=()=>(
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">NetFlix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child}></Route>

      <Route path="/order/:direction(asc|desc)" component={ComponentWithRegix}></Route>
    </div>
  </Router>
)

const Child=({match})=>(
  <div>
    <h3>ID:{match.params.id}</h3>
  </div>
)

const ComponentWithRegix=({match})=>(
  <div>
    <h3>Only asc/desc are allowed:{match.params.direction}</h3>
  </div>
)

export default ParamsExample