export const resetLoginForm = () => {

  return {
    type: "CLEAR_LOGIN_FORM",
  }

}
export const setCurrentUser = user => {

  return{
    type: "SET_CURRENT_USER",
    user 
  }
}
export const clearCurrentUser = () => {

  return {
    type: "CLEAR_CURRNET_USER",
    
  }
}
export const logout = () =>{
  return  dispatch =>{
    dispatch(clearCurrentUser())
    dispatch(resetLoginForm())
    return fetch("http://localhost:3001/logout",{
        method: "DELETE",
        credentials: "include"
        
     
    }).then(r => r.json())
    .then(data => {
      alert(data.notice)
    })
//response for logged out from server 
  }
}
export const login = credentials => {
  console.log(credentials,"logins")
  return dispatch =>{
    return fetch("http://localhost:3001/sessions",{
     
      method :"POST",
      credentials: "include",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(credentials)
    }
    ).then(r => r.json())
   .then(user =>{
      if(!user.error){
       dispatch(setCurrentUser(user))
      }
      return user
     }
    )
    }
}


export const getCurrentUser = () => {
 
  return dispatch => {
    return fetch("http://localhost:3001/profile", {
      credentials: "include",
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
      
    }
    ).then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        }
        else {
          dispatch(setCurrentUser(user))
        }
      }
      )
  }
}
export const signup = credentials => {
  console.log(credentials, "logins")
  return dispatch => {
    const data = { user: credentials }
    return fetch("http://localhost:3001/users", {

      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    ).then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        }
        else {
          dispatch(setCurrentUser(user))
        }
      }
      )
  }
}
