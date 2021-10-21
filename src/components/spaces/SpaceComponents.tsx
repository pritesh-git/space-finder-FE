import React from "react";
import HomeImage from "../../assets/HomeImage.png";
import "../../styles/SpacesStyle.css";

interface SpaceComponentsProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpaceComponents extends React.Component<SpaceComponentsProps> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="" />;
    } else {
      return <img src={HomeImage} alt="" />;
    }
  }
  render() {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <label className="name">{this.props.name}</label>
        <br />
        <label className="spaceId">{this.props.spaceId}</label>
        <br />
        <label className="location">{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
