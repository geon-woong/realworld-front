
export const ArticleView = ({article})=>{
    const { title, description, body, author, createdAt  } = article;
    return(
        <div className="p-5">
            {/* autho.image 이미지와 이름에 프로필 링크  */}
            <p className="text-sm font-bold">{ author.username } <span className="font-thin text-gray-400">{createdAt}</span> </p>
            <h1 className="font-semibold text-lg"> { title } </h1>
            <p className="text-gray-400 text-sm"> { description } </p>
        </div>
    )
}