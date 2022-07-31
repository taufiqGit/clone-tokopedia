import { useContext } from "react"
import { UIContext } from "../../../context"

export default function BlackShadow({ handleMenu }) {
    const { dispatch } = useContext(UIContext)
    
    return (
        <div onClick={() => dispatch({ type: 'CLOSE_MODAL_ALL'})} className="w-full absolute h-screen opacity-30 z-10 top-[-26px] left-0 right-0 bg-neutral-700"/>
    )
}