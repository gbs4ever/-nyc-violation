import React from 'react'




const PlateCard = ({plates,search}) => {
  const handleOnsubmit = (event) => {

  event.preventDefault();
    let data = {number: event.target.value ,state: "" }
    
    search(data)
 
}
  return (
    <div className="plates" >
     {plates.map((tickets, index) => {
       return <fieldset key= {index+3}>
        <legend>Past Plates</legend>
         <p className="column" key={index+1}>{tickets.number} -- {tickets.state}</p>
         
         <button className="uneven-end" onClick={handleOnsubmit} value={tickets.number}>Find Tickets</button> 
        
 </fieldset>
   }) }    
    </div>
  )
}



export default PlateCard



