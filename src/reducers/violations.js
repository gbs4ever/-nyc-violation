export default (state = [], action) => {

  switch (action.type) {
    case "ADD_VIOLATION":

     
      return [...state,action.tickets] 


    default:
      return state
  




  }

}