import './App.css';
import React  from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {API_ROUTE} from "./utils/constants";

class App extends React.Component {
    constructor(props) {
        super(props);
        axios.defaults.baseURL = API_ROUTE
        const authToken = localStorage.getItem('authToken')

        this.state = {isAuth: Boolean(authToken)}
        if (authToken) {
            axios.defaults.headers.common['authorization'] = `Bearer ${authToken }`
        }

        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }


    handleLogout() {
        localStorage.removeItem('authToken');
        delete axios.defaults.headers.common['authorization']
        this.setState({isAuth: false});
    }

    handleLogin(authToken) {
        localStorage.setItem('authToken', authToken);
        axios.defaults.headers.common['authorization'] = `Bearer ${authToken}`
        this.setState({isAuth: true})
    }

    render() {
        return (
                <BrowserRouter>
                    <AppRouter user={this.state} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
                </BrowserRouter>
        );
    }


}

export default App;
