import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './pages/Home';
import Exams from './pages/Exams';
import ExamsByProfessor from './pages/ExamsByProfessor';
import ExamsBySubject from './pages/ExamsBySubject';


const App = () => {
  return (
  <>        
      <Router>
      <Switch>

            <Route path='/' exact >
              <Redirect to="/home" />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/exams'>
              <Exams />
            </Route>
            <Route exact path='/exams-list-by-prof'>
              <ExamsByProfessor />
            </Route>
            <Route exact path='/exams-list-by-subj'>
              <ExamsBySubject />
            </Route>
            
        </Switch>
      </Router>
    </>
  );
}

export default App;