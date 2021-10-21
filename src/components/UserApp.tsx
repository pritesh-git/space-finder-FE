import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { LoginComponent } from "./LoginComponent";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import ProfileComponent from "./ProfileComponent";
import "../styles/UserStyle.css";

interface UserState {
  user: User | undefined;
}

export default class UserApp extends React.Component<{}, UserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }
  private authService: AuthService = new AuthService();

  private setUser(user: User) {
    this.setState({
      user: user,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <NavbarComponent user={this.state.user} />
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/profile">
                <ProfileComponent
                  authService={this.authService}
                  user={this.state.user}
                />{" "}
              </Route>
              <Route path="/login">
                <LoginComponent
                  authService={this.authService}
                  setUser={this.setUser}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
