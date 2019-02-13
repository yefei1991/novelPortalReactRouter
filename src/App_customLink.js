import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const CustomLinExample=()=>(
  <Router>
    <div>
      <OldSchoolMenuLink activeWhenExact={true} to="/" label="Home"></OldSchoolMenuLink>
      <OldSchoolMenuLink to="/about" label="About"></OldSchoolMenuLink>
      <hr/>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  </Router>
)

const OldSchoolMenuLink=({label,to,activeWhenExact})=>(
  <Route
    path={to}
    exact={activeWhenExact}
    children={
      ({match})=>(
        <div className={match?"active":""}>
          {match?">":""}
          <Link to={to}>{label}</Link>
        </div>
      )
    }
  />
)

const Home=()=>(
  <div>
    <h2>Home</h2>
  </div>
)

const About=()=>(
  <div>
    <h2>About</h2>
  </div>
)

export default CustomLinExample