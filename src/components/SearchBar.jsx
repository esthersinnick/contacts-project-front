import React, { Component } from 'react'
import withContacts from './withContacts';

class SearchBar extends Component {
  state = {
    term: '',
  }

  inputChange = (event) => {
    this.props.filterContacts(event.target.value)
    this.setState({
      term: event.target.value
    })
  }

  render() {
    const { term } = this.state;
    return (
      <input name="term" type="text" value={term} onChange={this.inputChange} />
    )
  }
}

export default withContacts(SearchBar)