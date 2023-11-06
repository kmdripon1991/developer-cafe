/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleBookmark = ({item}) => {
  console.log(item)
  return (
    <>
      <div className="h-20 card bg-white rounded place-items-center p-3 mt-4">
        <h1>{item.title}</h1>
      </div>
    </>
  );
};

export default SingleBookmark;
