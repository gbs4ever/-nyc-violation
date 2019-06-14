export const updateLoginForm = form =>{
console.log(form ,"action hit ")
  return {
    type: "UPDATE_LOGIN_FORM" , 
    form

  }

}
