interface Iskeleton{
    height? : string
}

export const Skeleton = ({height}:Iskeleton) => {
    return(
        <div className={`w-full bg-slate-400 rounded animate-pulse p-10 ${height}`}></div>
    )
}