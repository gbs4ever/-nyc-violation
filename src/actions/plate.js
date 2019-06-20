//add action for violation response
/// state = []    each violation object    should be a json object 

export const violationresponse = tickets=> {

  return {
    type: "ADD_VIOLATION",
    tickets
  }

}
export const plateupdate= plates => {

  return {
    type: "ADD_PLATES",
    plates
  }

}






export const search = data => {
  return dispatch => {

    return fetch("http://localhost:3001/violations", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    } 
    ).then(r => r.json())

      .then(d => {
        dispatch(plateupdate(data))
        if (!d.notice  && !d.error ) {
      
          dispatch(violationresponse(d))
        }
        return d
      }
      )
  }
}
//back up not being used yet 
export const getplates = () => {

  return dispatch => {

    return fetch("http://localhost:3001/plates", {

      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },

    }
    ).then(r => r.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          console.log(data)
        }
      }
      )
  }
}



