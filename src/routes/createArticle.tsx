import { useState,useEffect } from "react";
import { createNewArticle } from "../api/article";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
export const CreateArticle = ()=>{

    interface INewArticle{
        title: string,
        description: string,
        body: string,
    }

    const isLoggedIn = useRecoilValue(isLoggedInAtom);
    const navigate = useNavigate();
    
    const { register,handleSubmit,formState:{errors} } = useForm({
        defaultValues:{
            title: '',
            description:'',
            body: '',
        }
    })

    const onSubmit = async(data: INewArticle) =>{
        try {
            await createNewArticle({
                article:{
                    title: data.title,
                    description: data.description,
                    body: data.body,
                }})
            toast('New Article submit')
             navigate('/',{replace:true});
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        if(!isLoggedIn){
           navigate('/')
        }
    },[])

    return(
        <div className="form-container">
            <h1 className="page-title">Write New Article</h1>
            <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('title',{required:'title is required'})} name="title" placeholder="Title" />
                <p className="text-xs text-red-600 font-semibold">{errors.title?.message}</p>

                <input type="text" {...register('description',{required:'description is required'})} name="description" placeholder="Description"/>
                <p className="text-xs text-red-600 font-semibold">{errors.description?.message}</p>
                <textarea {...register('body',{required:'body is required'})} name="body" placeholder="Article body" />
                <p className="text-xs text-red-600 font-semibold">{errors.body?.message}</p>
                <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </div>
    )
}