import React from 'react';



const BuildingCard= ({ violations }) => {


  const output = violations.map((violation, index) => {

    return <tbody key={index + 5}>
      <tr>
        <td key={index}> {violation.number} </td>
        <td key={index + 1}> {violation.house_number}</td>
        <td key={index + 2}> {violation.street}</td>
        <td key={index + 3}> {violation.violation_type_code}</td>
        <td key={index + 4}> {violation.violation_category}</td>
        <td key={index + 5}> {violation.violation_type}</td>

      </tr>
    </tbody>
  })


  return (
    <div>

      <table className="center">
        <tbody>
          <tr>
            <th> Fine Number   </th>
            <th> House Number</th>
            <th>  Street  </th>
            <th>Violation Type code</th>
            <th>Violation Catergory</th>
            <th>Violation Type </th>
          </tr>
        </tbody>
        {output}



      </table>
    </div>
  )


}





export default BuildingCard;