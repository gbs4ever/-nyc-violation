import React from 'react';



const ViolationCard = ({violations}) => {

 
    const output = violations.map((tickets, index) => {

  return  <tbody>
        <tr>
        <td key={index}> $ {tickets.fine_amount} </td>
        <td key={index+1}>$ {tickets.payment_amount}</td>
        <td key={index+2}> {tickets.summons_number}</td>
      <td key={index + 3}> {tickets.violation}</td>
      <td key={index + 4}> {tickets.violation_status}</td>
      <td key={index + 5}> <a href={tickets.summons_image.url}>View Summons</a></td>
        </tr>
        </tbody>
    })
  
  
  return (
    <div>
      <button ><a href="https://secure24.ipayment.com/NYCPayments/nycbookmark_1.htm">pay your tickets </a> </button> 
      <table>
        <tbody>
        <tr>
          <th> Fine Amount    </th>
          <th>  Payment Amount</th>
          <th>  Summons Number   </th>
            <th>Violation</th>
            <th>Violation Status</th>
          <th>To see tickets click here  </th>
        </tr>
        </tbody>
        {output}



      </table>
      </div>
  )
          
         
  }     
   
  
     


export default ViolationCard ;

// amount_due: "0"
// county: "NY"
// fine_amount: "115"
// interest_amount: "0"
// issue_date: "05/15/2019"
// issuing_agency: "POLICE DEPARTMENT"
// license_type: "COM"
// payment_amount: "0"
// penalty_amount: "0"
// plate: "39386ML"
// precinct: "010"
// reduction_amount: "115"
// state: "NY"
// summons_image: { url: "http://nycserv.nyc.gov/NYCServWeb/ShowImage?search…dOM1RVRTlQUT09&locationName=_____________________", description: "" }
// summons_number: "1459305700"
// violation: "NO STANDING-DAY/TIME LIMITS"
// violation_status: "HEARING HELD-NOT GUILTY"
// violation_time: "09:21A"