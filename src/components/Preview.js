import React from 'react';
import { faEye, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Preview extends React.Component {

  render() {
    return (
      <div id="preview-container">
        <div className="title-bar">
          <FontAwesomeIcon icon={faEye} color="#fff" /> Preview
          <span className="window-icon"><FontAwesomeIcon icon={faWindowMaximize} color="#000" size="sm" /></span>
          <span className="window-icon"><FontAwesomeIcon icon={faWindowMinimize} color="#000" size="sm" /></span>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.markdown }} />
      </div>);
  }

}

export default Preview;
