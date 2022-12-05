import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFoundError from "../../components/NotFoundError";

const LoggedInComponentRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<h1>Home page</h1>
			</Route>
			<Route>
				<NotFoundError />
			</Route>
		</Switch>
	);
};

export default LoggedInComponentRoutes;
