import { useNavigate,useParams } from "react-router"

export const ArticleAction = ({isUser,slug,removeArticle,follow,unFollow,favorite,unFavorite}) =>{
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
                            } catch (error) {
                                
                            }
                        }

                        }>delete</button>
                    <button onClick={()=> navigate(`/edit/${slug}`)}>edit</button>
                    <p>{isUser}</p>
                </>
            }
            <button>Follow </button>
            <button>Favorite </button>
        </div>
    )
}