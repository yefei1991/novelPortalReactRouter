import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom';

const Home=()=>(
  <p>
    A <code>&lt;Switch></code> render the first child  <code>&lt;Route></code>{" "}
    that matches. A <code>&lt;Route></code> with no <code>path</code> always matches.
  </p>
)

const WillMatch=()=><h3>Matched!</h3>;

const NoMatch=({location})=>(
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

const NoMatchExample=()=>(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match,to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect from="/old-match" to="will-match"></Redirect>
          <Route path="/will-match" component={WillMatch}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </ul>
    </div>
  </Router>
)

export default NoMatchExample