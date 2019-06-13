 const intstate ={
   email:"",
  password:""
 }


export default (state = intstate, action) => {
console.log(state,"init")
  console.log(state, "yes you have hit me ")
  switch (action.type) {
   case "UPDATE_LOGIN_FORM":
      console.log(action.form, "reducers update data ")
     return  action.form
      
    default:
      return state





  }

}