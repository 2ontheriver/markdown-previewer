import React from "react";
import {
  faWindowMaximize,
  faWindowRestore,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Window extends React.Component {
  constructor(props) {
    super();
    this.state = {
      maximized: false,
    };
    this.handleMaximize = this.handleMaximize.bind(this);
  }

  handleMaximize() {
    this.setState((state) => {
      return { maximized: !state.maximized };
    });
  }

  render() {
    return (
      <div
        id={this.props.desc + "-container"}
        className={this.state.maximized ? "maximized" : ""}
      >
        <div className="title-bar">
          <FontAwesomeIcon icon={this.props.icon} color="#fff" />{" "}
          {this.props.text}
          <span className="window-icon" onClick={this.handleMaximize}>
            <FontAwesomeIcon
              icon={this.state.maximized ? faWindowRestore : faWindowMaximize}
              color="#000"
              size="sm"
            />
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Window;
