import { useState,useEffect } from "react";
import { useParams } from "react-router"
import { getArticle,editArticle } from "../api/article";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
export const EditArticle = ()=>{
    const { slug } = useParams();
    
    const { register ,handleSubmit, reset } = useForm({
        defaultValues:{
            title: '',
            description:'',
            body:'',
        }
    })
    
    useEffect(()=>{
        const initArticle = async() => {
            try {
                const { article } = await getArticle(slug);
                 reset({
                     title: article.title,
                     description: article.description,
                     body: article.body
                 })
            } catch (error) {
            }
        }
        initArticle();
    },[slug])

    const onSubmit = async(data)=>{
        try {
            await editArticle(slug,{
                article : {
                    title : data.title,
                    description : data.description,
                    body : data.body,
                }
            })
        toast('Succeed')            
        } catch (error) {
            
        }
    }
   
    return(
        <div className="form-container">
             <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} type="text" name="title" placeholder="Title" />
                <input {...register("description")} type="text" name="description" placeholder="Description"/>
                <textarea {...register("body")} name="body" placeholder="Article body" />
                <button type="submit" onSubmit={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </div>
    )
}