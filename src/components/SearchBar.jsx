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
      <div className="p-3 fixed md:w-2/6 bg-white border-b border-primary-500">
        <input name="term" type="text" value={term} onChange={this.inputChange} placeholder="Search..." className="input border-primary-500 rounded w-full" />
      </div>
    )
  }
}

export default withContacts(SearchBar)