/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Cards/Card";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [totalSpentTime, setTotalSpentTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  const [data, setData] = useState([]);

  const [showBookmark, setShowBookmark] = useState(null);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
     
  }, []);

  const handleSpentTime = (spentTime) => {
    const previousSpentTime = JSON.parse(localStorage.getItem("spent-time"));
    if (previousSpentTime) {
      const total = previousSpentTime + parseInt(spentTime);
      localStorage.setItem("spent-time", total);
      setTotalSpentTime(total);
    } else {
      localStorage.setItem("spent-time", parseInt(spentTime));
      setTotalSpentTime(parseInt(spentTime));
    }
  };

  const handleBookmark = (item, id) => {
    let newBookmark = [];
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    if (previousBookmark) {

      const isThisItemBookmark = previousBookmark.find(
        (singleItem) => singleItem.id === id
      );
      if (isThisItemBookmark) {
        notify();
      } else {
        newBookmark.push(...previousBookmark, item);
        localStorage.setItem("bookmark", JSON.stringify(newBookmark));
        setBookmark(newBookmark);
        showBookmarkItem(id)
      }
    } else {
      
      newBookmark.push(item);
      localStorage.setItem("bookmark", JSON.stringify(newBookmark));
      setBookmark(newBookmark);
      showBookmarkItem(id)
      
    }
  };

  const showBookmarkItem = (id) =>{
    
    const bookmarkedItem = bookmark.find(item=>item.id === id)
    if(!bookmarkedItem){
      
      setShowBookmark(true)
    }
    
  }
  


  const notify = () => toast("All ready Bookmarked!");
  

  return (
    <div className="m-12 p-8 h-full">
      <Navbar></Navbar>
      <Card
        data={data}
        handleSpentTime={handleSpentTime}
        totalSpentTime={totalSpentTime}
        handleBookmark={handleBookmark}
        bookmark={bookmark}
        toastContainer={ToastContainer}
        showBookmark={showBookmark}
      ></Card>
      <ToastContainer />
    </div>
  );
};

export default App;
