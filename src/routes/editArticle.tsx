import { useState,useEffect } from "react";
import { useParams } from "react-router"
import { getArticle,editArticle } from "../api/article";
import { toast } from "react-toastify";
export const EditArticle = ()=>{
    const { slug } = useParams();
    const [article, setArticle] = useState({
        title:'',
        description:'',
        body: '',
    })
    const { title, description, body } = article;
    useEffect(()=>{
        const initArticle = async() => {
            try {
                const { article } = await getArticle(slug);
                 setArticle(article)
            } catch (error) {
            }
        }
        initArticle();
    },[slug])

    const onSubmit = async(event)=>{
        event.preventDefault();
        try {
            await editArticle(slug,{
                article : {
                    title : title,
                    description : description,
                    body : body,
                }
            })
        toast('Succeed')            
        } catch (error) {
            
        }
    }
    const onChange = (event)=>{
        const { name, value } = event.target;
        setArticle({
            ...article,
            [name] : value,
        })
    }
    return(
        <div className="form-container">
             <form action="submit" onSubmit={(event)=> onSubmit(event)}>
                <input type="text" value={title} onChange={onChange} name="title" placeholder="Title" />
                <input type="text" value={description} onChange={onChange} name="description" placeholder="Description"/>
                <input type="text" value={body} onChange={onChange} name="body" placeholder="Article body" />
                <button type="submit" onClick={event=>onSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}