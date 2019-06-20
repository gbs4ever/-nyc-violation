export default (state = [], action) => {

  switch (action.type) {
    case "ADD_BUILDINGS_VIOLATIONS":


      return [...state, action.tickets]


    default:
      return state





  }

}