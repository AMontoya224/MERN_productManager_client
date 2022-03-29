import React from 'react';
import { Switch, withRouter, BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Detail from './views/Details/Details';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <BrowserRouter>
        <Switch>
          <Route path="/products/:_id" render={ routeProps => <Detail {...routeProps} />} />
          <Route path="/" render={ routeProps => <Main {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;