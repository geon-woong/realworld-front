import { Link } from "react-router-dom";
import { Author } from "./Author";
import { FavoriteButton } from "./FavoriteButton";
import { TimeStamp } from "./TimeStamp";
import { TagsList } from "./TagsList";
export const ArticleView = ({article})=>{
    const { slug, title, description, author, createdAt,favorited,favoritesCount,tagList  } = article;
    const { username } = author;
    return(
        <div className="p-5 border-b border-black">
            <>
            <div className="flex justify-between">
            <Link to={`/profile/${username}`} className="font-semibold inline-block hover:underline">
                <Author author={author} />
            </Link>
            <FavoriteButton slug={slug} favorite={favorited} favoritesCount={favoritesCount} />
            </div>

            <Link to={`/article/${slug}`}>
                <h1 className="text-lg font-semibold hover:underline"> { title } </h1>
            </Link>
            <p className="text-gray-400 text-sm"> { description } </p>
            <TagsList tagList={tagList} />
            
            <div className="flex justify-between">
                <TimeStamp createdAt={createdAt} />
                <Link to="/article" className="text-xs underline text-right">Read more</Link>
            </div>
            </>
           
        </div>
    )
}