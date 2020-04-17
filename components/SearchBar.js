import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchValue: '',
  }

// for value change of the searchbar input
handleChange = event => {
  this.setState({searchValue: event.target.value});
}

// to submit to search page - where state is held - so it can be used to query the db
handleSearchSubmit = e => {
  e.preventDefault();
  this.props.submitSearchValue(this.state.searchValue);
}

  render() {
    return (
      <form onSubmit={(e) => this.handleSearchSubmit(e)}>
        <div className="input-group m-0">
          <input
            type="text"
            className="form-control searchbar"
            value={this.state.searchValue}
            onChange={this.handleChange}
            placeholder="Search for Course"
            aria-label="Course Search"
            aria-describedby="searchbar"
          />
          <div className="input-group-append">
            <button type="submit" className="searchbutton">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  };
}
