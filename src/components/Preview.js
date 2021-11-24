import React from 'react';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Window from './Window.js';

class Preview extends React.Component {

  render() {
    return (
      <Window desc="preview" icon={faEye} text="Preview">
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.markdown }} />
      </Window>
    );
  }

}

export default Preview;
