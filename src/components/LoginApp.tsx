import React, { SyntheticEvent } from "react";
import { CustomInput, LoginState } from "../model/Model";
import { AuthService } from "../services/AuthService";
import "../styles/LoginStyle.css";

interface LoginProps {
  authService: AuthService;
}

export class LoginApp extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessfull: false,
  };

  private setUserName(event: CustomInput) {
    this.setState({
      userName: event.target.value,
    });
  }
  private setUserPassword(event: CustomInput) {
    this.setState({
      password: event.target.value,
    });
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({
      loginAttempted: true,
    });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    if (result) {
      this.setState({
        loginSuccessfull: true,
      });
    } else {
      this.setState({
        loginSuccessfull: false,
      });
    }
  }

  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      if (this.state.loginSuccessfull) {
        loginMessage = "You Successfully Login";
      } else {
        loginMessage = "Login Failed";
      }
    }
    return (
      <div className="divStyle">
        <h2>LoginForm</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
            className="inputStyle"
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setUserPassword(e)}
            className="inputStyle"
          />
          <br />
          <input type="submit" value="login" className="btnStyle" />
        </form>

        <h3> {loginMessage} </h3>
      </div>
    );
  }
}
