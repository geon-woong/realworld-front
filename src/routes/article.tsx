import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticle,removeArticle } from "../api/article"
import { Author } from "../components/Author";
import { ArticleAction } from "../components/ArticleAction";
import { useRecoilValue } from "recoil";
import { userAtom } from '../atom'
import { Skeleton } from "../components/Skeleton";
import { TagsList } from "../components/TagsList";
export const Article = ()=>{
    const [article, setArticle] = useState({
        slug: '',
        title: '',
        description: '',
        tagList: [],
        body: '',
        createdAt: '',
        favorited: false,
        favoritesCount: 0,
        author: {
          username: '',
          bio: '',
          image: '',
          following: false,
        }
    });
    const { author,favorited,favoritesCount,tagList } = article;
    const { slug } = useParams();
    const currentUser = useRecoilValue(userAtom)
    const [isUser, setIsUser] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const boundaryLine = "border-b border-black"
    const initArticle = async()=>{
        const { article } = await getArticle(slug);
        setIsLoading(false);
        setArticle(article);
        setIsUser( currentUser.username === article.author.username )
        
    }
    
    useEffect(() => {
        initArticle();
      
    }, [slug])
    return (
<>
        {!isLoading ? 

            <div className="grid">
            <div className={`bg-gray-100 p-5 boundaryLine ${boundaryLine}`}>
                {/* 제목 및 작성자 */}
                <h1 className="font-bold text-lg">{article.title}</h1>
                <div className="flex justify-between">
                <Author author={author}/> 
                {/* 팔로우 언팔로우 에딧 리뭅 */}
                <ArticleAction isUser={isUser} author={author} favorited={favorited} favoritesCount={favoritesCount}  removeArticle={()=>removeArticle(slug)} slug={slug}  />
                </div>
                <TagsList tagList={tagList} clickable={false} />

            </div>
            <div className={`p-5 ${boundaryLine}`}>
                {/* 설명 및 본문 */}
                <p className="mb-5 boundaryLine">
                    {article.description}
                </p>
                <p>
                    {article.body}
                </p>
            </div>
        </div>
        : <Skeleton height="h-full"/>}
        </>
    )
}