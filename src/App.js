import React from 'react';
import logo from './logo.svg';
import './App.css';



class Sum extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleInt1Change = this.handleInt1Change.bind(this);
    this.handleInt2Change = this.handleInt2Change.bind(this);
    this.state = { intA: 0, intB: 0, result: 0};
  }

  handleInt1Change(e) {
    let { intB } = this.state;
    let string = e.target.value;
    console.log(string.charAt(string.length - 1))
    this.setState({
      intA: e.target.value.replace(/[a-z]/g, ''),
      result: intB ? parseInt(e.target.value) + parseInt(intB) : parseInt(e.target.value)
    });
  }

  handleInt2Change(e) {
    let { intA } = this.state;
    this.setState({
      intB: e.target.value.replace(/\+|-/ig, ''),
      result: intA ? parseInt(e.target.value) + parseInt(intA) : parseInt(e.target.value)
    });
  }

  render()
  {
    return (
      <div className="Sum">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>I am an autobot number 1612213</h3>
          <h3>Let me sum 2 integers for you</h3>
          <table>
          <td>
            <p>Integer 1: </p>
            <input id="int-1"
                  type="number"
                  onkeypress="return isNumberKey(evt)"
                  value={this.state.intA}
                  onChange={this.handleInt1Change}></input>
            <p>Integer 2: </p>
            <input id="int-2"
                  type="number"
                  pattern="[0-9]*"
                  onInput={this.handleInt2Change.bind(this)}
                  value={this.state.intB}
                  onChange={this.handleInt2Change}
                  ></input>
            </td>
            <td></td>
            <td>
              <div class="line"></div>
            </td>
            <td>
            <p>Result: </p>
            <input
              id="result"
              type="number"
              value={this.state.result}
               />
            </td>
          </table>
        </header>
      </div>
    );
  }
}



export default Sum;
