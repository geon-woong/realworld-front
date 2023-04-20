import { useState,useEffect } from "react";
import { createNewArticle } from "../api/article";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../atom";
export const CreateArticle = ()=>{
    const isLoggedIn = useRecoilValue(isLoggedInAtom);
    const navigate = useNavigate();
    const [newArticle, setNewArticle] = useState({
        title: '',
        description:'',
        body:'',
    })
    
    const onChange = (event) => {
        const { name,value } = event.target;
        setNewArticle({
            ...newArticle,
            [name]: value,
        })
        console.log(newArticle);
    }

    const onSubmit = async(event) =>{
        event.preventDefault();
        try {
            await createNewArticle({article:newArticle})
             navigate('/dashboard',{replace:true});
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
            <form action="submit" onSubmit={(event)=> onSubmit(event)}>
                <input type="text" onChange={onChange} name="title" placeholder="Title" />
                <input type="text" onChange={onChange} name="description" placeholder="Description"/>
                <input type="text" onChange={onChange} name="body" placeholder="Article body" />
                <button type="submit" onClick={event=>onSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}