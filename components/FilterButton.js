import React, { Component } from "react";

export default class FilterButton extends Component {

  render() {
    return (
      <div className="row filter-button" onClick={this.props.onClick}>
        <div className="col-auto p-0 align-self-end offset-sm-1 offset-2">
          <img
            src="/filtericon.png"
            className="img-fluid"
            alt="filter catagories icon"
          />
        </div>
        <div className="col p-0 align-self-start align-self-center">
          <p className="m-0 pl-2">{this.props.title}</p>
        </div>
      </div>
    );
  }
}
