

export default function BtnTabTopup({ children, isActive, handleClickTab }) {

    let className = ""
    if (isActive) {
        className = "flex-1 font-semibold text-sm text-green-1 py-2.5 border-b-2 border-green-1"
    } else {
        className = "flex-1 font-semibold text-sm text-gray-1 py-2.5 border-b hover:text-black-1"
    }

    return (
        <button className={className} onClick={handleClickTab}>
            { children }
        </button>
    )
}