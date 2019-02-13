import React from 'react';
import {BrowserRouter as Router, Route, Link,Prompt} from 'react-router-dom';

const PreventingTransitionsExample=()=>(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">From</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
      <Route path="/" exact component={Form}></Route>
      <Route path="/one" render={()=><h3>One</h3>}></Route>
      <Route path="/two" render={()=><h3>Two</h3>}></Route>
    </div>
  </Router>
)
class Form extends React.Component{
  state={
    isBlocking:false
  }
  render(){
    const {isBlocking}=this.state
    return(
      <from
        onSubmit={event=>{
          event.preventDefault()
          event.target.reset()
          this.setState({isBlocking:false})
        }}
      >
        <Prompt
          when={isBlocking} message={location=>`Are you sure you want go to ${location.pathname}`}
        ></Prompt>
        <p>
          Blocking?{" "}
          {isBlocking?"Yes, click a link or the back button":"Nope"}
        </p>
        <p>
          <input size="50" placeholder="tyep something to block transitions" onChange={event=>{this.setState({isBlocking:event.target.value.length>0})}}>
          </input>
        </p>
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </from>
    )
  }
}

export default PreventingTransitionsExample