import React from 'react';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Editor extends React.Component {

  render() {
    return (
      <div id="editor-container">
        <div className="title-bar"><FontAwesomeIcon icon={faFileAlt} color="#fff" />  Editor</div>
        <textarea id="editor" onChange={this.props.handleEditorChange} value={this.props.markdown} />
      </div>);
  }

}

export default Editor;
