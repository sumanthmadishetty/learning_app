const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state = state + 1
    case 'DECREMENT':
      return state = state - 1
    case 'ODD-DECREMENT':
      if (state % 2 !== 0) {
        return state = state - 2;
      }
      else return state
    case 'EVEN-INCREMENT':
      if (state % 2 === 0) {
        return state = state + 2;
      }
      else return state
    case 'RESET':
      return state = 0
    default: return state;
  }
}
export default CounterReducer;
