const DateReducer = (state = [], action) => {
  switch (action.type) {
    case 'DATE':
      return state.concat([action.dates])
    default:
      return state;
  }
}
export default DateReducer