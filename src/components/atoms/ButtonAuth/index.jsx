
export default function ButtonAuth({ children, outline = false }) {
    let classname = ''
    if (outline) {
        classname = 'px-3.5 py-2 rounded-lg text-xs ml-2 text-green-1 font-semibold bg-white border border-green-1'
    } else {
        classname = 'px-3.5 py-2 rounded-lg text-xs ml-2 text-white font-semibold bg-green-1 border border-green-1'
    }

    return (
        <button className={classname}>
            { children }
        </button>
    )
}