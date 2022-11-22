import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup/Signup";

const LoggedOutComponent = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Signup />
			</Route>
			<Route path="/sign-in">
				<div>Loggedout Signin Component</div>
			</Route>
			<Route path="/about-us">
				<div>Loggedout About us Component</div>
			</Route>
			<Route path="/contact-us">
				<div>Loggedout Contact us Component</div>
			</Route>
			<Route>
				<div>Loggedout 404 Component</div>
			</Route>
		</Switch>
	);
};

export default LoggedOutComponent;
