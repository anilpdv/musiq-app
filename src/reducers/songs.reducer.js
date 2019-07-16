const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return action.songs;
    default:
      return state;
  }
};

export default reducer;
