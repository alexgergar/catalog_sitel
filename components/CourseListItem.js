import React, { Component } from "react";
import { Star, Youtube } from "react-feather";

export default class CourseListItem extends Component {

  render() {
    const {course} = this.props;
    return (
      <div className="card col-md-10 offset-md-1 my-2 p-0">
        <div className="row no-gutters">
          <div className="col-md-2 bg-danger">
            <img
              src="/medstar-health.png"
              className="card-img"
              alt="course alt text"
            />
          </div>
          <div className="col-md-10">
            <div className=".container-fluid">
              <div className="card-body p-2">
                <h5 className="card-title mb-0">{course.title}</h5>
                <p className="card-text">{course.instructor}</p>
                <div className="row align-items-end">
                  <p className="card-text col-3 mb-0">
                    <Star size={15} /> <Youtube size={15} />
                  </p>
                  <p className="card-text courseListItem shortDescription col-9">
                    {course.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
