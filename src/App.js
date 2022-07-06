import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }

  handleGamePlay = (index) => {
    alert(index)
  }


  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard'>
        {this.state.squares.map((value, index) => {
            return(
              <Square 
                key={index}
                value={value} 
                handleGamePlay={this.handleGamePlay}
               />
               )
            })}
        </div>
      </>
    )
  }
}
export default App
