export function reducers(state:any,action:any){
    switch (action.type) {
        case "SWITCH_THEME": return{...state,isDarkModeEnabled:!state.isDarkModeEnabled}
        default: return state;        
    }
}