import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../model/Model";
import { AuthService } from "../services/AuthService";

interface ProfileState {
  userAttributes: UserAttribute[];
}
interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export default class ProfileComponent extends React.Component<
  ProfileProps,
  ProfileState
> {
  state: ProfileState = {
    userAttributes: [],
  };
  async componentDidMount() {
    if (this.props.user) {
      const userAtrs = await this.props.authService.getUserAttributes(
        this.props.user
      );
      this.setState({
        userAttributes: userAtrs,
      });
    }
  }
  private renderUserAttributes() {
    const rows = [];
    for (const userAttributes of this.state.userAttributes) {
      rows.push(
        <tr key={userAttributes.Name}>
          <td>{userAttributes.Name}</td>
          <td>: {userAttributes.Value}</td>
        </tr>
      );
    }
    return <table>{rows}</table>;
  }
  render() {
    let ProfileSpace: any;
    if (this.props.user) {
      ProfileSpace = (
        <div>
          <h3>Hello {this.props.user.userName}</h3>
          {this.renderUserAttributes()}
        </div>
      );
    } else {
      ProfileSpace = (
        <div>
          hey please <Link to="/login">Login</Link>
        </div>
      );
    }
    return (
      <div>
        || ==============Profile Page =================== ||
        <br />
        {ProfileSpace}
      </div>
    );
  }
}
