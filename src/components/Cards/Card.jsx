/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";

const Card = ({data, handleSpentTime, totalSpentTime, handleBookmark, bookmark, showBookmark}) => {
  // console.log(data)

  return (
    <div className="flex gap-4 mt-16">
      <div className="w-2/3">
        {data.map((card) => 
          <SingleCard 
          key={card.id} 
          card={card}
          handleSpentTime = {handleSpentTime}
          handleBookmark={handleBookmark}
          ></SingleCard>
        )}
      </div>
      <div className="w-1/3 ">
        <Bookmark
        data={data}
        bookmark={bookmark}
        totalSpentTime={totalSpentTime}
        showBookmark={showBookmark}
        ></Bookmark>
      </div>
    </div>
  );
};

export default Card;
