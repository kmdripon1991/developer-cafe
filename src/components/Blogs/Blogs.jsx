/* eslint-disable no-unused-vars */
import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="mt-12 font-bold ">
        <h1 className="text-3xl mb-3">
          1. What is the difference between props and state in react ?
        </h1>
        <p>
          In react props are used to pass data from parent component to child
          component. Props are immutable. In child component props only be read.<br />
          State is used to manage data within the component. State is mutable
        </p>
      </div>
      
    </>
  );
};

export default Blogs;
