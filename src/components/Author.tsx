import { useState, } from "react";
import { Link } from "react-router-dom";
import { Feed } from "./Feed";
export const Author = ({author}) => {
   

    const { username,image } = author;

    return (
        <div className="flex gap-2">
            <img src={image} alt="profile-image" className="rounded-full w-8 h-8" />
            <Link to={`/profile/${username}`} className="leading-[2rem] font-semibold inline-block hover:underline">
                {username}
            </Link>
        </div>
    )
}