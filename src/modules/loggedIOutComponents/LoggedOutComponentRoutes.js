import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFoundError from "../../common/NotFoundError";
import LandingPage from "./landingpage/LandingPage";

const LoggedOutComponentRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<LandingPage />
			</Route>
			<Route>
				<NotFoundError />
			</Route>
		</Switch>
	);
};

export default LoggedOutComponentRoutes;
