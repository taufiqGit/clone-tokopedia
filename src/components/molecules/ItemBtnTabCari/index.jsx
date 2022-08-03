export default function ItemBtnTabCari({ children, isActive }) {
    return (
        <button 
        className={`font-bold  py-3 px-8 min-w-max border-b-2 ${isActive ? 'border-green-1 text-green-1' : 'text-gray-500 hover:text-black-1 '} `}>
            { children }
        </button>
    )
}