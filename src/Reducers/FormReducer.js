const FormReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat([action.data])
    case 'DELETE':
      return state.filter((data) => data.id !== action.id)
    case 'EDIT':
      return state.map((data) => data.id === action.id ? { ...data, editing: !data.editing } : data)
    case 'UPDATE':
      return state.map((data) => {
        if (data.id === action.data.id) {
          return {
            ...data,
            name: action.data.name,
            email: action.data.email,
            editing: !data.editing
          }
        } else return data;
      })

    default:
      return state;
  }
}
export default FormReducer;