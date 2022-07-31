import { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialStateUI = {
    openOverlay: false,
    openModalSearch: false,
    openModalCategory: false
}

export const UIContext = createContext()

function WrapperContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialStateUI)

    const handleModalCategory =()=>{
        if (state.openModalSearch) {
            return {
                type: 'SET_MODAL_SEARCH',
                pay
            
            }
        }
    }

    return (
        <UIContext.Provider value={{
            dispatch,
            openOverlay: state.openOverlay,
            openModalSearch: state.openModalSearch,
            openModalCategory: state.openModalCategory,
            
        }}>
            { children }
        </UIContext.Provider>
    )
}

export default WrapperContext