/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useEffect, useState } from "react";
import SingleBookmark from "../SingleBookmark/SingleBookmark";



const Bookmark = ({ totalSpentTime, showBookmark}) => {

  const getBookmarkItem = JSON.parse(localStorage.getItem("bookmark"));
  

  const [storageSpentTime, setStorageSpentTime] = useState(totalSpentTime);
  useEffect(() => {
    const getTotalSpentTimeFromStorage = localStorage.getItem("spent-time");
    setStorageSpentTime(getTotalSpentTimeFromStorage);
  }, [totalSpentTime]);

  

  return (
    <div className="sticky top-0 mt-4">
      <div className="rounded-lg bg-slate-200 mb-2">
        <h1 className="font-bold p-12 text-base text-violet-950">
          Spent time on read : {storageSpentTime ? storageSpentTime : 0}
        </h1>
      </div>
      <div className="rounded-lg bg-slate-200 my-2 h-screen px-4">
        <h1 className="font-bold p-8 text-base">
          Bookmarked Blogs : {getBookmarkItem ? getBookmarkItem.length : 0}
        </h1>
        {
          getBookmarkItem ? getBookmarkItem.map((item)=><SingleBookmark
          key={item.id}
          item={item}
          ></SingleBookmark>) : null
        }
      </div>
      
    </div>
  );
};

export default Bookmark;
