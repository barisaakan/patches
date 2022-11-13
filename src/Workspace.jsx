import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './style.scss';

// Pages
import LandingFirst from './pages/LandingFirst';
import LandingSecond from './pages/LandingSecond';

import Header from './statics/Header';
import Sidebar from './statics//Sidebar';

const Workspace = () => {
    return (<>
      <Header/>
      <Sidebar />
      <div className="mainWrapper">
        <Router>
          <Routes>
              <Route path='/' element={<LandingFirst/>}/>
              <Route path='/light' element={<LandingSecond/>}/>
          </Routes>
        </Router>
      </div>
    </>);
}


export default Workspace;