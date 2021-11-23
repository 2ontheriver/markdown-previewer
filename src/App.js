import './App.css';
import * as Constants from './constants/index.js';
import React from 'react';
import Editor from './components/Editor.js';
import Preview from './components/Preview.js';
import { Remarkable } from 'remarkable';

var md = new Remarkable();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: Constants.placeholder
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e){
    this.setState({markdown: e.target.value});
  }
  render() {
    return (
      <>
      <h1 id="page-title">Simple React Markdown Previewer</h1>
      <div id="container">
        <Editor handleEditorChange={this.handleEditorChange} markdown={this.state.markdown} />
        <Preview markdown={md.render(this.state.markdown)} />
      </div>
      </>
    );
  }
}


export default App;
