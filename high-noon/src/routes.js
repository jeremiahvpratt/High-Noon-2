import Home from './home';
import T1 from './time-1';
import T2 from './time-2';
import QuestionPage from './questions/questionPage';
import ResponsePage from './responses/responsePage';

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Route exact path={"/"} component={() => <Home />}/>
      <Route exact path={"/time-1"} component={() => <T1 />}/>
      <Route exact path={"/time-2"} component={() => <T2 />}/>
      <Route exact path={"/do/"} component={() => <QuestionPage />}/>
      <Route exact path={"/look/"} component={() => <ResponsePage />}/>
    </div>
  </Router>
);

export default Routes;

