import React, { Component } from "react";
import withContacts from "./withContacts";

class SearchBar extends Component {
  state = {
    term: ""
  };

  inputChange = event => {
    this.props.filter(event.target.value, this.props.toFilter);
    this.setState({
      term: event.target.value
    });
  };

  render() {
    const { term } = this.state;
    return (
      <input
        name="term"
        type="text"
        value={term}
        onChange={this.inputChange}
        placeholder="Search..."
        className="input border-primary-500 rounded w-5/6 md:w-full"
      />
    );
  }
}

export default withContacts(SearchBar);
