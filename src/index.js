import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Home from './components/Home.js';
import Find from './components/Find.js';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/About" component={About}/>
        <Route path="/Work" component={Work}/>
        <Route path="/Find" component={Find}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
