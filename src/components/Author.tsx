import { useState,useEffect } from "react";
export const Author = ({author}) => {
    const [_author, setAuthor] = useState({
        username:'',
        image:'',
        bio:'',
        following:false,
    })

    return (
        <div className="flex gap-2">
            <img src={author.image} alt="profile-image" className="rounded-full w-8 h-8" />
            <p className="leading-[2rem]" >{author.username}</p>
        </div>
    )
}