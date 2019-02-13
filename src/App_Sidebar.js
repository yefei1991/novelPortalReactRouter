import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const routes=[
  {
    path:"/",
    exact:true,
    sidebar:()=><div>home!</div>,
    main:()=><div>HOME</div>
  },
  {
    path:"/bubblegun",
    sidebar:()=><div>bubblegun!</div>,
    main:()=><div>BUBBLEGUN</div>
  },
  {
    path:"/shoelaces",
    sidebar:()=><div>shoelaces!</div>,
    main:()=><div>SHOELACES</div>
  }
]

const SidebarExample=()=>(
  <Router>
    <div style={{display:"flex"}}>
      <div style={{padding:"10px",width:"40%",background:"#f0f0f0"}}>
        <ul style={{listStyleType:"none",padding:0}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bubblegun">bubblegun</Link>
          </li>
          <li>
            <Link to="/shoelaces">shoelaces</Link>
          </li>
        </ul>
        {
          routes.map((route,index)=>(
            <Route key={index} path={route.path} exact={route.exact} component={route.sidebar}></Route>
          ))
        }
      </div>
      <div style={{flex:1,padding:"10px"}}>
          {
            routes.map((route,index)=>(
              <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
            ))
          }
      </div>
    </div>
  </Router>
)

export default SidebarExample