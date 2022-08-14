
export default function ItemCatSearch({ thumbnail, text }) {
    return (
        <div className="w-auto flex p-1.5 items-center hover:bg-gray-2 cursor-pointer">
            <img className="w-14 rounded" src={thumbnail} alt="ad" />
            <p className="ml-2.5 text-lg font-semibold text-black-1">{text}</p>
        </div>
    )
}