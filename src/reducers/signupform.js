const intstate = {
  email: "",
  password: ""
}


export default (state = intstate, action) => {

  switch (action.type) {
    case "SIGN_UP_FORM":
 
      return action.form

    default:
      return state





  }

}