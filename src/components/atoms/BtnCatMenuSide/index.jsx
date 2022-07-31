export default function BtnCatMenuSide({ children, isActive }) {
    return (
        <button className={`text-start w-auto text-[13px] font-semibold my-0.5 px-4 py-2 hover:bg-gray-2 rounded-lg ${isActive ? 'bg-gray-2' : ''}`}>
            {children}
        </button>
    )
}