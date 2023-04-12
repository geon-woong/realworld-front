export const TimeStamp = ({createdAt})=>{
    // 2022-12-09T13:46:24.264Zff

    const date = createdAt.split('T')[0].split('-').join('.');
    return(
        <span className="font-thin text-gray-400 text-xs">
            { date }
        </span>
    )
}