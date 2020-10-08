import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import {Home} from "./Home";
import {About} from "./About";
import {Contact} from "./Contact";
import {NoMatch} from "./NoMatch";
import {Layout} from "./component/Layout";
import {NavigationBar} from "./component/NavigationBar";
import {Jumbotron} from "./component/Jumbotron";
function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
