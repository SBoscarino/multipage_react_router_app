import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout.js';
import About from './components/About.js';
import Social from './components/Social.js';
import Home from './components/Home.js';
import Find from './components/Find.js';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/About" component={About}/>
        <Route path="/Social" component={Social}/>
        <Route path="/Find" component={Find}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
