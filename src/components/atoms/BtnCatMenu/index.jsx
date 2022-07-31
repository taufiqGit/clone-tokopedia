export default function BtnCatMenu({ children, isActive }) {
    return (
        <button className={`${isActive ? 'border-green-1' : 'border-transparent'} border-b-2  w-auto min-w-max text-sm text-gray-1 px-6 py-3 `}>{children}</button>
    )
}