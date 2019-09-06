const Reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETQUOTES':
      return { ...state, loading: true };
    case 'QUOTES':
      return { ...state, newsData: action.news, loading: false }
    default:
      return state;
  }
};
export default Reducer;