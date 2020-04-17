import React, { Component } from 'react';
import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { filterCatagories } from "../data/filtercatagorydata";
import FilterButton from '../components/FilterButton';
import { Activity } from 'react-feather';
import Filter from '../components/Filter';
import Collapse from "react-bootstrap/Collapse";
import Button from 'react-bootstrap/Button';

export default class Search extends Component {
  state = {
      searchResults: null,
      filterCatagories: filterCatagories,
      numOfCatagoriesToShow: 3,
      filterButtonText: "See All Filter Options",
      filterSearchOptionsList: [],
      showSearchResults: false,
      filterOpen: true,
    };
  

  submitSearchValue = text => {
    this.setState({searchResults: text, showSearchResults: true, filterOpen: false});
  }

  onFilterButtonClick = event => {
    const {
      numOfCatagoriesToShow,
      filterCatagories,
      filterButtonText,
      filterOpen,
    } = this.state;
    event.preventDefault();
    numOfCatagoriesToShow == filterCatagories.length
      ? this.setState({
          numOfCatagoriesToShow: 3,
          filterButtonText: "See All Filter Options",
          filterOpen: true,
        })
      : this.setState({
          numOfCatagoriesToShow: filterCatagories.length,
          filterButtonText: "See Less Filter Options",
          filterOpen: true,
        });
  }

  onCheckBoxClick = data => {
    const indexInSearchList = this.state.filterSearchOptionsList.findIndex(list => list.catagoryName === data.catagoryName);
    indexInSearchList === -1 ?
      this.setState(prevState => ({filterSearchOptionsList: [data, ...prevState.filterSearchOptionsList]}))
    :
      this.state.filterSearchOptionsList[indexInSearchList] = data;
  }

  toggleFilters = () => {
    this.setState(prevState => ({filterOpen: !prevState.filterOpen}));
    }

  render() {
    return (
      <Layout title="Course Search">
        <h3>Find Your Next Course</h3>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <SearchBar
              submitSearchValue={(text) => this.submitSearchValue(text)}
            />
          </div>
          <div className="col-md-5">
            <FilterButton
              title={this.state.filterButtonText}
              onClick={this.onFilterButtonClick}
            />
          </div>
        </div>
        <Collapse in={this.state.filterOpen}>
          <div id="toggle-filter">
            <Filter
              filterCatagories={filterCatagories}
              numOfCatagoriesToShow={this.state.numOfCatagoriesToShow}
              onCheckBoxClick={this.onCheckBoxClick}
            />
          </div>
        </Collapse>
        {this.state.filterOpen && (
          <div
            className="hide-button text-right pt-2"
            onClick={this.toggleFilters}
            aria-controls="toggle-filter"
            aria-expanded={this.state.filterOpen}
          >
            - Hide Filters
          </div>
        )}

        {this.state.showSearchResults && (
          <>
            <h4 className="pt-3 ml-2">Search Results</h4>
            <SearchResults />
          </>
        )}
      </Layout>
    );
  }

  
}
