const reducer = (state, action) => {

    console.log(state)
    switch (action.type) {
        case 'ADD':
            return [{
                ...action.song
            }]
        default:
            return state;
    }
}

export default reducer;