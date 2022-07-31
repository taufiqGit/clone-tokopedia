
const reducer =(state, action)=>{
    switch (action.type) {
        case "OPEN_MODAL_CATEGORY":
            return {
                ...state,
                openOverlay: true,
                openModalSearch: false,
                openModalCategory: true
            }
        case "CLOSE_MODAL_CATEGORY":
            return {
                ...state,
                openOverlay: false,
                openModalSearch: false,
                openModalCategory: false
            }    
        case "OPEN_MODAL_SEARCH":
            return {
                ...state,
                openOverlay: true,
                openModalSearch: true,
                openModalCategory: false
            }
        case "CLOSE_MODAL_ALL":
            return {
                ...state,
                openOverlay: false,
                openModalSearch: false,
                openModalCategory: false
            }    
        default:
            throw new Error('Reducer Error Lurr..')
    }
}

export default reducer