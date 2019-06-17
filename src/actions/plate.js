//add action for violation response
/// state = []    each violation object    should be a json object 

export const violationresponse = tickets=> {

  return {
    type: "ADD_VIOLATION",
    tickets
  }

}






export const search = data => {
  console.log(data, "lsearch data")
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
      .then(data => {
        if (data.notice) {

          alert (data.notice)
        }
        else {
//dispatch   
          dispatch(violationresponse(data))

        }
 
      }
      )
  }
}



