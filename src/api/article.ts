import { GET,POST,PUT,DELETE } from './config';

/**
 * 게시글 태그 
 * @param query 
 */
export const getArticleTags = () => GET(`/tags`);


/**
 * 게시글 리스트 조회
 * @param query string
 */
export const getArticles = ( query?: string )=> GET(`/articles${query}`);