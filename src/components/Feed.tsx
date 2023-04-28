import { useState,useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getArticles } from '../api/article';
import { pageAtom } from '../atom';
import { ArticleProps } from '../types';
import { ArticleView } from './ArticleView';
import { Pagenation } from './Pagination';
import { Skeleton } from './Skeleton';

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
    const [isLoading, setIsLoading] = useState(false);

    const initFeed = async() =>{
        setIsLoading(true);
        const { articles,articlesCount } = await getArticles(
            `${query}limit=${limit}&offset=${10 * (page - 1)}`
            );
        setArticles(articles);
        setArticlesCount(articlesCount);
        setIsLoading(false);
    }

    useEffect(() => {
        setPage(1);
      }, [setPage, query]);
    
    useEffect(() => {
        initFeed();
    }, [page,limit,query])

    return (
        <div 
            className={articles.length < 1 ? 'p-5' : undefined}
        >
            {
                isLoading  ?
                <Skeleton height="min-h-screen"/> 
                : articles.length > 0 
                ? articles.map((article)=>(
                <ArticleView  article={article} key={article.slug} />
                ))
                : <p>There's No article</p>
            }
            <Pagenation articlesCount={articlesCount} url={url} />
        </div>
    )
}