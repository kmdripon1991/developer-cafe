/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


const SingleCard = ({card, handleSpentTime, handleBookmark}) => {
  const {author_image, author_name, cover_image, id, time, title} = card

  
  return (
    <>
      <div className="card rounded-none w-full bg-base-100 shadow-xl mt-4">
        <figure className="">
          <img
            src={cover_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body h-80">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="w-12">
                <img
                  className="rounded-full cursor-pointer"
                  src={author_image}
                />
              </div>
              <div>
                <h2 className="card-title">{author_name}</h2>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p><span>{time}</span> min read </p>
              <span 
              onClick={()=>handleBookmark(card, id)}
              className='cursor-pointer'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <h1 className="font-bold	text-4xl">{title}</h1>
          <div className="card-actions justify-start">
            <div className="flex gap-2">
              <p>
                <span className="text-blue-500">#hashtag</span>.
              </p>
              <p>
                <span className="text-blue-500">#hashtag</span>.
              </p>
            </div>
          </div>

          <div>
            <a 
            onClick={()=>handleSpentTime(time)}
            className="link link-primary"
            >mark as read</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
