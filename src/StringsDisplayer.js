import React from "react";
import uuid from "uuid/v1";

class StringsDisplayer extends React.Component {
  state = {
    strings: [],
    newString: ""
  };

  inputChange = event =>
    this.setState({
      newString: event.target.value
    });

  addString = event => {
    event.preventDefault();

    this.setState({
      newString: "",
      strings: this.state.strings.concat({
        string: this.state.newString,
        key: uuid()
      })
    });
  };

  render() {
    return (
      <form onSubmit={this.addString}>
        <input value={this.state.newString} onChange={this.inputChange} />
        <button onClick={this.addString}>DODAJ!</button>
        <ul>
          {this.state.strings
            .concat()
            .reverse()
            .map(string => (
              <li key={string.key}>{string.string}</li>
            ))}
        </ul>
      </form>
    );
  }
}

export default StringsDisplayer;
