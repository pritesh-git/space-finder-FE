import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { LoginApp } from "./LoginApp";

interface UserState {
  user: User | undefined;
}

export default class UserApp extends React.Component<{}, UserState> {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <div>
        <LoginApp authService={this.authService} />
      </div>
    );
  }
}
