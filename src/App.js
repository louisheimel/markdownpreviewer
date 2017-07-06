import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const marked = require('marked')

class ControlledInput extends Component {
  render() {
    return (<div className="App">
      <h1>Markdown Previewer (using Marked library)</h1>
      <p>Type text here: </p>
      <textarea type="text" onChange={this.props.onChange} ></textarea>
    </div>);
  }
}

class DisplayText extends Component {
  markup() {
    return {__html: marked(this.props.text) };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.markup()}></div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    }) 
  }

  render() {
    return (
      <div className="App">
        <ControlledInput onChange={this.onChange.bind(this)} />
        <DisplayText text={this.state.text} />
      </div>
    );
  }
}

export default App;
