import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions/plate.js'
import { withRouter } from "react-router-dom";


const PlateCard = ({plates,search ,history}) => {
  const handleOnsubmit = (event) => {

  event.preventDefault();
 
    let data = { number: event.currentTarget.attributes[1].textContent, state: event.currentTarget.attributes[2].textContent}
    
    search(data)
      .then(res => {
        if (res.error) {
          alert(res.error)
        } else if (res.notice) {
          alert(res.notice)
        } else {
          history.push('/violations')
        }
      })
    }
  return (
    <div className="plates" >
     {plates.map((tickets, index) => {
       return <fieldset key= {index+3}>
        <legend>Past Plates</legend>
         <p className="column" key={index+1}>{tickets.number} -- {tickets.state}</p>
      
         <button className="uneven-end" onClick={handleOnsubmit} number={tickets.number} state={tickets.state} >Find Tickets</button> 
        
       </fieldset>
       }) }    
    </div>
  )
}




export default  withRouter(connect(null,{search})(PlateCard));

