import React from 'react';



const ViolationCard = ({violations}) => {
  const output =  violations.map((violation) => (
    ///added conditional if empty aarry  
   violation.map((tickets,index) =>{
   console.log(tickets.summons_number)
    return  <li key={index}>{tickets}</li>;
})
 
  ));

 

  return (
    <div>
      These are your tickets 
      {output}
    </div>
  );

};

export default ViolationCard ;