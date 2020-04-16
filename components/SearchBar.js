import React, { Component } from 'react';
import styles from "./SearchBar.module.css";
import { Search } from "react-feather";

export default class SearchBar extends Component {
  state = {
    searchValue: '',
  }

handleChange = event => {
  this.setState({searchValue: event.target.value});
}

handleSearchSubmit = e => {
  e.preventDefault();
  this.props.submitSearchValue(this.state.searchValue);

}

  render() {
    return (
      <form
        className={styles.container}
        onSubmit={(e) => this.handleSearchSubmit(e)}
      >
        <input
          type="text"
          className={styles.innerForm}
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder="Search for Course"
        />
        <button type="submit" className={styles.searchbutton}>
          <Search />
        </button>
      </form>
    );
  };
}
