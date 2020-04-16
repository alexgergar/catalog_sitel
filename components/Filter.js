import React, { Component } from "react";
import FilterItemContainer from './FilterItemContainer';

export default class Filter extends Component {
  static defaultProps = {
    numOfCatagoriesToShow: 3,
  };

  render() {
    return (
      <div className="row px-4 pt-3 justify-content-between">
        <ListOfShownCatagories
          listOfAllCatagories={this.props.filterCatagories}
          numOfCatagoriesToShow={this.props.numOfCatagoriesToShow}
          onCheckBoxClick={this.props.onCheckBoxClick}
        />
      </div>
    );
  }  
}

// This reduces the list to a desired number defaults to 3, but will then give it the ability to expanded when needed
const ListOfShownCatagories = props => 
  props.listOfAllCatagories.reduce((shownCatagories, catagory, index) => {
    if (index < props.numOfCatagoriesToShow) {
      shownCatagories.push(
        <FilterItemContainer key={index} catagoryData={catagory} onCheckBoxClick={props.onCheckBoxClick} />
      );
    }
    return shownCatagories;
  }, []);