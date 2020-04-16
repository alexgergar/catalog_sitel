import React, { Component } from 'react';
import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Filter from "../components/Filter";
import { filterCatagories } from "../data/filtercatagorydata";
import FilterButton from '../components/FilterButton';
import { X } from 'react-feather';

export default class Search extends Component {
  state = {
    searchResults: null,
    filterCatagories: filterCatagories,
    numOfCatagoriesToShow: 3,
    filterButtonText: 'See All Filter Options',
    filterSearchOptionsList: [],
    showSearchResults: false,
  }

  submitSearchValue = text => {
    this.setState({searchResults: text, showSearchResults: true});
  }

  onFilterButtonClick = event => {
    const {
      numOfCatagoriesToShow,
      filterCatagories,
      filterButtonText,
    } = this.state;
    event.preventDefault();
    numOfCatagoriesToShow == filterCatagories.length
      ? this.setState({
          numOfCatagoriesToShow: 3,
          filterButtonText: "See All Filter Options",
        })
      : this.setState({
          numOfCatagoriesToShow: filterCatagories.length,
          filterButtonText: "See Less Filter Options",
        });
  }

  onCheckBoxClick = data => {
    const indexInSearchList = this.state.filterSearchOptionsList.findIndex(list => list.catagoryName === data.catagoryName);
    indexInSearchList === -1 ?
      this.setState(prevState => ({filterSearchOptionsList: [data, ...prevState.filterSearchOptionsList]}))
    :
      this.state.filterSearchOptionsList[indexInSearchList] = data;
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
        <Filter
          filterCatagories={filterCatagories}
          numOfCatagoriesToShow={this.state.numOfCatagoriesToShow}
          onCheckBoxClick={this.onCheckBoxClick}
        />
        
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
