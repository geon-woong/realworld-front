import { useState,useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getArticles } from '../api/article';
import { pageAtom } from '../atom';
import { ArticleProps } from '../types';
import { ArticleView } from './ArticleView';

/**
 * 피드 프롭스 인터페이스
 */
interface FeedProps{
    url:string,
    limit:number,
    query:string,
}
export const Feed = ({url,limit,query}:FeedProps) => {
    const [articles,setArticles] = useState<ArticleProps[]>([])
    const [articlesCount, setArticlesCount] = useState(0);
    const [page,setPage] = useRecoilState(pageAtom)
    
    const initFeed = async() =>{
        const { data } = await getArticles(
            `${query}limit=${limit}`
            );
        setArticles(data.articles);
        setArticlesCount(data.articlesCount);
    }

    useEffect(() => {
        initFeed();
        
    }, [url,limit,query])

    return (
        <div 
            className={articles.length < 1 && 'p-5'}
        >
            {
                articles.length < 1 && "No article Yet . . "
            }
            {articles.map((article)=>(
                <ArticleView article={article} key={article.slug} />
            ))}
        </div>
    )
}