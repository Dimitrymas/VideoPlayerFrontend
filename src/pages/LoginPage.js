import React from "react";
import axios from "axios";



class LoginPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {login: "", password: "", error: ""}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    async handleSubmit(e) {
        e.preventDefault()
        let data;
        try {
            data = (await axios.post("/user/login", {
                    login: this.state.login,
                    password: this.state.password
                }
            )).data
            this.props.handleLogin(data.response.token)
        } catch (error) {
            console.log(error)
            data = error.response.data
            this.setState({error: data.response.error})
        }
    }


    render() {
        return (<div className={"d-flex justify-content-center"} style={{height: "80vh", WebkitAlignItems: "center"}}>
            <div className={"login-registration-card"}>
                <form ref={(element) => (this.myForm = element)} onSubmit={this.handleSubmit}>
                    {this.state.error && <h4 style={{textAlign: "center"}}>{this.state.error}</h4>}
                    <h1>Логин</h1>

                    <input className={"inp form-control"} onChange={(event) => {
                        this.setState({login: event.target.value})
                    }}/>
                    <h1>Пароль</h1>
                    <input className={"inp form-control"} onChange={(event) => {
                        this.setState({password: event.target.value})
                    }}/>
                    <button className={"btn lgrg-btn"} onClick={this.handleSubmit}>Ввойти</button>
                </form>
            </div>

        </div>)
    }
}


export default LoginPage