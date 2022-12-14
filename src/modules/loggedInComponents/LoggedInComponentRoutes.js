import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFoundError from "../../components/NotFoundError";
import Home from "./home/Home";
import Navbar from "./navigation/Navbar";
import Profile from "./profile/Profile";

const LoggedInComponentRoutes = () => {
	return (
		<div>
			<Navbar />
			<div className="tw-p-2 md:tw-max-w-2xl lg:tw-max-w-4xl xl:tw-max-w-5xl tw-items-center tw-justify-between tw-mx-auto">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route>
						<NotFoundError />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default LoggedInComponentRoutes;
