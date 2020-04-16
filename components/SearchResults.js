import React, { Component } from "react";
import CourseListItem from "./CourseListItem";
import { data } from "../data/coursedata";

const SearchResults = props => {
  const results = data.map((course) => {
      return (
        <CourseListItem 
          key={course.id}
          course={course}
          />
      )
    });

  return (
     <div>
       {results}
     </div> 
    )
}

export default SearchResults;