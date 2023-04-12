import { GET,POST,PUT,DELETE } from './config';
import { Article } from '../types';
/**
 * 게시글 태그 조회
 * @param query 
 */
export const getArticleTags = () => GET(`/tags`);

/**
 * 새 게시글 작성
 * @param body 
 */
export const createNewArticle = (body: {article :Article}) => POST(`/articles`,body)
/**
 * 게시글 리스트 조회
 * @param query string
 */
export const getArticles = ( query?: string )=> GET(`/articles${query}`);

/**
 * 게시글 단건 조회
 * @param slug string
 */
export const getArticle = ( slug: string ) => GET(`/articles/${slug}`);

/**
 * 게시글 삭제
 */
export const removeArticle = ( slug:string ) => DELETE(`/articles/${slug}`);

/**
 * 게시글 수정
 * @param body
 */
export const editArticle = ( slug:string , body: { article: Article}) => PUT(`/articles/${slug}`,body);