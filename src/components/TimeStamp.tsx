export const TimeStamp = ({createdAt})=>{
    const date = createdAt.split('T')[0].split('-').join('.');
    return(
        <span className="font-thin text-gray-400 text-xs">
            { date }
        </span>
    )
}