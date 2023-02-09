export const listReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[LIST] Add item':
            return [...initialState , action.payload]
        case '[LIST] Remove item':
            return initialState.filter(item => item.id !== action.payload)
        case '[LIST] Toggle item':
            return initialState.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item
            })
        default:
            return initialState;
    }
}
