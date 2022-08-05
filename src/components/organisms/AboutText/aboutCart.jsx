
export default function AboutCart({ thumbnail, title, desc }){
    return (
        <div className="flex items-center">
            <img className="w-24" src={thumbnail} alt="mahlul qiyam" />
            <div className="ml-4">
                <h3 className="text-green-1 font-semibold">{title}</h3>
                <p className="text-gray-1 text-[13px] mt-1.5 max-w-[180px]">{desc}</p>
            </div>
        </div>
    )
}