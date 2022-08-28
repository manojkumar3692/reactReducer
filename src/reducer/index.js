export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
            break;
        case 'decrement':
            return { count: state.count - 1 }
        case 'onInputChange': 
            return {...state, inputValue: action.payload.inputValue}    
        default:
            throw new Error('Default Case Reched');
    }
}