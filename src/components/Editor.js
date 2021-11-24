import React from 'react';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Window from './Window.js';

class Editor extends React.Component {

  render() {
    return (
      <Window desc="editor" icon={faFileAlt} text="Editor">
        <textarea id="editor" onChange={this.props.handleEditorChange} value={this.props.markdown} />
      </Window>
    );
  }

}

export default Editor;
