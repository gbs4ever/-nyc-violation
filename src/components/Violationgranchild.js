import React, { Component } from 'react'

// 
class Violationgranchild extends Component {
  state = {
    number: 0,

  }


  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  } 
render(){
return (
<tr>
  <td key={this.props.index}> $ {this.props.tickets.fine_amount} </td>
  <td key={this.props.index + 1}>$ {this.props.tickets.payment_amount}</td>
  <td key={this.props.index + 2}> {this.props.tickets.summons_number}</td>
  <td key={this.props.index + 3}> {this.props.tickets.violation}<button  onClick={this.handleClick}>{this.state.number}  like</button></td>
  <td key={this.props.index + 4}> {this.props.tickets.violation_status}</td>
    <td key={this.props.index + 5}> <a target="_blank" rel="noopener noreferrer" href={this.props.tickets.summons_image.url}>View Summons</a></td>
  </tr>




)




}




}
export default Violationgranchild 