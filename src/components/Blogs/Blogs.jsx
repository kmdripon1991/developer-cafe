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
          component. Props are immutable. In child component props only be read.
          <br />
          State is used to manage data within the component. State is mutable
        </p>
      </div>
      <div className="mt-12 font-bold ">
        <h1 className="text-3xl mb-3">2. How does useState work ?</h1>
        <p>
          useState is a react hook. It allows to add component in functional
          component. It's returns an array with Current state value and a
          function to change state value.
        </p>
      </div>
      <div className="mt-12 font-bold ">
        <h1 className="text-3xl mb-3">3. What does useEffect do?</h1>
        <p>
          React hook useEffect is used to perform side effect from component.
          Side effects are fetching data, directly updating the DOM, and timers.
        </p>
      </div>
      <div className="mt-12 font-bold ">
        <h1 className="text-3xl mb-3">4. How does react work?</h1>
        <p>React creates a VIRTUAL DOM in memory. React create a tree for virtual dom. React allows to effectively re-construct your DOM in JavaScript</p>
      </div>
    </>
  );
};

export default Blogs;
