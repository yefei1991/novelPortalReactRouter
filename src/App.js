import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Book from "./components/Book"
import Chapter from "./components/Chapter"
import ChapterDetail from "./components/ChapterDetail"
import './App.css';

const SidebarExample=()=>(
  <Router>
    <div>
      <Route exact path="/book" component={Book}></Route>
      <Route exact path="/book/:bookId" component={Chapter}></Route>
      <Route path="/book/:bookId/:chapterId" component={ChapterDetail}></Route>
    </div>
  </Router>
)

export default SidebarExample