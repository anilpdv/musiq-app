import uuid from 'uuid/v4';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [{
                id: uuid(),
                songId: action.songId,
                author: action.author,
                name: action.name,
                content: action.content,
                backgroundImg: action.backgroundImg,
                playing: false
            }, ...state]

        case "TOGGLE":
            return state.map(song => song.id === action.id ? {
                ...song,
                playing: !song.playing
            } : song)
        default:
            return state;
    }
}

export default reducer;