import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followProfile,unfollowProfile} from '../api/profile'
import { isLoggedInAtom } from '../atom';

interface FollowBtnProps{
    username: string,
    following: boolean,
}
export const FollowButton = ( {username , following }: FollowBtnProps ) => {
    const [isFollowing, setFollowing] = useState(following);
    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    const navigate = useNavigate()

    const postFollow = async()=>{
        if(!isLoggedIn){
            navigate('/login')
            return
        }
        followProfile(username)
    }
    const postUnfollow = async()=>{
        if(!isLoggedIn){
            navigate('/login')
            return
        }
        unfollowProfile(username)
    }

    return(
        <button 
        className={`px-2 rounded-md hover:bg-slate-600 text-xs
        ${
            isFollowing ?
            "bg-slate-500 text-white  " :
            "border border-slate-500 hover:text-white "
        }
        `
              }
        onClick={
            (e)=>{
                e.preventDefault()
                setFollowing(!isFollowing)
                isFollowing ?
                postUnfollow() :
                postFollow()
            }
        }
              >
            { isFollowing ? `UnFollow ${username}` : `Follow ${username}` }
        </button>

    )
}