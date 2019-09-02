import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Sidenav from './components/layouts/Sidenav';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import OwnerList from './components/owner/OwnerList';
import OwnerAdd from './components/owner/OwnerAdd';

function App() {
  return (
    <BrowserRouter>
		<Navbar />
		<div className="row">
			<div className="col s12 m4 l3">
				<Sidenav />
			</div>
			<div className="col s12 m8 l9">
				<Switch>
					<Route exact path="/" component={ Dashboard } />
					<Route path="/dashboard" component={ Dashboard } />
					<Route path="/login" component={ Login } />
					<Route exact path="/owner" component={ OwnerList } />
					<Route exact path="/owner/add" component={ OwnerAdd } />
				</Switch>
			</div>
		</div>
    </BrowserRouter>
  );
}

export default App;
