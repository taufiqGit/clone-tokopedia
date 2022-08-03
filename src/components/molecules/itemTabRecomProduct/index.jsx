export default function ItemTabRecomProduct({ text, bgColor }) {
    return (
        <button className={`w-52 h-16 flex p-2.5 justify-start ${bgColor} bg-no-repeat bg-cover rounded-md`}>
            <span className=" font-bold text-white">{text}</span>
        </button>
    )
}