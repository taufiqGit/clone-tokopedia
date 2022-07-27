

export default function ItemSlideCategory({ icon, text }) {
    return (
        <button className="flex w-auto min-w-max items-center ml-2 border py-2 px-3 rounded-2xl">
            <img className="w-7" src={icon} alt="ss" />
            <p className="text-sm min-w-max ml-1.5 text-gray-1">{text}</p>
        </button>
    )
}