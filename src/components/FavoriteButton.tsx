import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { favoriteArticle,unfavoriteArticle } from '../api/article'
import { isLoggedInAtom } from '../atom';

interface FavoriteBtnProps{
    username: string,
    favorite: boolean,
    favoritesCount? : number,
}
export const FavoriteButton = ( {username , favorite, favoritesCount }: FavoriteBtnProps ) => {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const [favoritesCounts, setFavoritesCount] = useState(favoritesCount);
    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    const navigate = useNavigate()

    const postFavoriteArticle = async()=>{
        if(!isLoggedIn){
            navigate('/login')
            return
        }
        favoriteArticle(username)
        setFavoritesCount(favoritesCount + 1)
    }
    
    const postUnfavoriteArticle = async()=>{
        if(!isLoggedIn){
            navigate('/login')
            return
        }
        unfavoriteArticle(username)
        setFavoritesCount(favoritesCount - 1)
    }

    return(
        <button
        className={`px-2 rounded-md hover:bg-slate-600 text-xs
        ${
            isFavorite ?
            "bg-slate-500 text-white  " :
            "border border-slate-500 hover:text-white "
        }
        `
              }
        onClick={
            (e)=>{
                e.preventDefault()
                setIsFavorite(!isFavorite)
                isFavorite ?
                postUnfavoriteArticle() :
                postFavoriteArticle()
            }
        }
              >
            { isFavorite ? 'Unfavorite' : 'Favorite' }
            <span className="px-1">
                {/* { !!favoritesCounts } */}
            </span>
        </button>

    )
}