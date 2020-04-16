import React, { Component } from "react";
import Checkbox from "./Checkbox";

export default class FilterItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map()
    }
  }

  onCheckboxChange = event => {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
    const containerData = {
      catagoryName: this.props.catagoryData.name,
      checkedItems: this.state.checkedItems
    }
    this.props.onCheckBoxClick(containerData);
  };

  render() {
    const checkboxes = this.props.catagoryData.options.map((item) => {
      return (
          <li className="list-group-item" key={item.key}>
            <label>
              <Checkbox
                name={item.name}
                checked={this.state.checkedItems.get(item.name)}
                onChange={this.onCheckboxChange}
              />
              <span className="pl-2">{item.label}</span>
            </label>
          </li>
      );
      
    });
    return (
      <div className="col-lg-3 col-md-6 pt-2" key={this.props.catagoryData.key}>
        <h6>{this.props.catagoryData.name}</h6>
        <ul className="list-group">{checkboxes}</ul>
      </div>
    );
  }
}
