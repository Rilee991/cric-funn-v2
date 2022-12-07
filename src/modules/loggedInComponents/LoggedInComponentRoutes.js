import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFoundError from "../../components/NotFoundError";
import Home from "./Home";
import Navbar from "./navigation/Navbar";

const LoggedInComponentRoutes = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/abc">
					<Home />
				</Route>
				<Route>
					<NotFoundError />
				</Route>
			</Switch>
		</div>
	);
};

export default LoggedInComponentRoutes;
