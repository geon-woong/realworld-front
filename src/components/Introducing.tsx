import { Link } from "react-router-dom"
export const Introducing = () => {

    return(
        <div className="px-10 py-5 text-xl ">
            <h1>
                This Web Site is created for learning React.js
            </h1>
            <p>
               It used the <Link to="https://www.realworld.how/" target="_blank" className="inline-block underline">RealWorld API.</Link> 
            </p>
            <p>
               Member Sign Up, Sign In, Articles CRUD implemented.
            </p>
        </div>
    )
}