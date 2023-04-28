import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState,useSetRecoilState } from 'recoil';
import { feedTag, feedToggle } from '../atom';

interface ITagListProps{
    tagList : string[];
    clickable? : boolean;
}

export const TagsList = ( {tagList, clickable }:ITagListProps )=>{
    const [tagNm,setTagNm] = useRecoilState(feedTag);
    const setToggle = useSetRecoilState(feedToggle);
    const [disabled,setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(clickable)
    }, [clickable])
    return(
        <div className="p-1 flex flex-wrap gap-1">
            {
                tagList.map(tag=>
                    <Link key={tag} onClick={()=>{
                        if( !disabled ) return
                        setToggle(2)
                        setTagNm(tag)
                    }} className={`
                    ${disabled && (tagNm === tag && "bg-slate-600 text-white")}
                    border rounded-md p-1`}
                    to={disabled && '/dashboard'}
                    >{tag}</Link>)
            }
        </div>
    )
}