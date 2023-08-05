import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../rotes";
import React from "react";

class AppRouter extends React.Component {

    inPrivateRoute(Component) {
        return !this.props.user.isAuth ? Component : <Navigate to={"/"}/>
    }

    privateRoute(Component)  {
        return this.props.user.isAuth ? Component : <Navigate to={"/login"}/>
    }
    render() {
        return (
            <Routes>
                {authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={this.privateRoute(<Component handleLogout={this.props.handleLogout}/>)} exact/>
                ))}
                {publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={this.inPrivateRoute(<Component handleLogin={this.props.handleLogin}/>)}  exact/>
                ))}
            </Routes>
        )
    }
}

export default AppRouter;
