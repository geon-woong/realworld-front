import { useState,useEffect } from "react"
import { useParams } from "react-router";
import { getProfile } from '../api/profile'
import { Author } from "../components/Author";
import { FollowButton } from "../components/FollowButton";
import { Feed } from "../components/Feed";
import { Skeleton } from "../components/Skeleton";
export const Profile = ()=>{
    const { username } = useParams();
    const [profile, setProfile] = useState({
        profile: {
            usename: '',
            bio:'',
            followng:'',
        }
    })
    const [ loading, setLoading ] = useState(false)
    const fetchProfile = async (username:string) => {
        try {
            setLoading(true)
            const { profile } = await getProfile(username);
            setProfile(profile);
            setLoading(false);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchProfile(username);
    }, [])
    return(
            loading ?
            <Skeleton /> :
            <>  
                <div className="p-5 justify-center grid gap-2">
                    <Author author={profile}  />
                    <FollowButton username={profile.username} following={profile.following} />
                    <p>{profile.bio}</p>
                </div>
                <Feed query={`?author=${username}&`} url={`/profile/${username}`} limit={10}/>
            </>

    )
}