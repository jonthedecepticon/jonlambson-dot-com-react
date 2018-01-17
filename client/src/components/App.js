import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => {
  return <h2>Dashboard</h2>
};
const MessageNew = () => {
  return <h2>New Message</h2>
};
const Landing = () => {
  return <h2>Landing</h2>
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route  exact path="/" component={Landing}/>
          <Route  exact path="/messages" component={Dashboard}/>
          <Route  path="/messages/new" component={MessageNew}/>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
