import React, { SyntheticEvent } from "react";
import { CustomInput, LoginState, User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import history from "../utils/history";
import "../styles/LoginStyle.css";

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

export class LoginComponent extends React.Component<LoginProps, LoginState> {
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
      this.props.setUser(result);
      history.push("/profile");
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
