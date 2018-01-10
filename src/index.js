import React , { Component } from 'react';

import ReactDOM from 'react-dom';

import './index.css';

//公共header组件
import Header from './components/Common/header'

import Index from './pages/index/index';

import About from './pages/about/about';

// import { Router, Route , Link } from 'react-router';

// import { HashRouter as Router, Route, hashHistory, Switch , Link} from 'react-router-dom'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

const Basic = () => (
  <Router>
    <div>
      <Header />
      <div className="page-content">
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={About}/>
      </div>
    </div>
  </Router>
)

ReactDOM.render(<Basic />, document.getElementById('root'));
registerServiceWorker();
