import { useNavigate,useParams } from "react-router"
import { FavoriteButton } from "./FavoriteButton";
import { FollowButton } from "./FollowButton";
import { toast } from "react-toastify";

export const ArticleAction = ({isUser,slug,removeArticle,author,favorited,favoritesCount}) =>{
    const navigate = useNavigate();
    return(
        <div className="flex justify-end text-sm gap-1">
            {
                isUser &&
                <>
                    <button onClick={
                        ()=>{
                            try {
                                removeArticle()
                                navigate(-1)
                                toast('succeed')
                            } catch (error) {
                                
                            }
                        }

                        }>delete</button>
                    <button onClick={()=> navigate(`/edit/${slug}`)}>edit</button>
                    <p>{isUser}</p>
                </>
            }
            <FollowButton username={author.username} following={author.following} />
            <FavoriteButton  slug={slug} favorite={favorited} favoritesCount={favoritesCount} />
        </div>
    )
}