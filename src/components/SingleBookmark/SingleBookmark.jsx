/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleBookmark = ({item}) => {
  return (
    <>
      <div className="h-20 card font-medium bg-white rounded place-items-center p-3 mt-4">
        <h1>{item.title}</h1>
      </div>
    </>
  );
};

export default SingleBookmark;
