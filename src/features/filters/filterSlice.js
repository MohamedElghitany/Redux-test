
export const statusFilters={
    All:'All',
    Active:'Active',
    Completed:'Completed'
}
const intialState = {
    status:statusFilters.All,
    colors:[]
}

export default function filterReducer(state = intialState, action) {
    switch(action.type){
        case'filters/statusFilterChanged':{
            return{
                ...state,
                status: action.payload
            }
        }
        case'filters/colorFilterChanged':{
            const {color,ChangeType} = action.payload
            const {colors} = state
            switch(ChangeType){
                case 'added': {
                    if(colors.includes(color)) {
                        return state
                    }
                    return {
                        ...state,
                        colors: [...colors, color]
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        colors: colors.filter(c => c !== color)
                    }
                }
                default: {
                    return state
                }
            }
        }
        default:
            return state
    }
}