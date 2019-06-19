//add action for violation response
/// state = []    each violation object    should be a json object 

export const violationresponse = tickets=> {

  return {
    type: "ADD_VIOLATION",
    tickets
  }

}






export const search = data => {
  console.log(data, "we have hit the data ")
  return dispatch => {
    debugger
    return fetch("http://localhost:3001/violations", {
        method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    } 
    ).then(r => r.json())

      .then(data => {
        debugger
        console.log(data, "1")
        if (!data.notice  && !data.error ) {
          console.log(data, "2")
          dispatch(violationresponse(data))
        }
        return data
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



