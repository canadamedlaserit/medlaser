import React from 'react'
import styled from "styled-components"

const ChooseForm = styled.div`
display: grid;
@media (min-width: 374px) {
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}
@media (min-width: 600px) {
  grid-template-columns: 1fr 1fr 1fr;
}
max-width: 700px;
margin: 10px auto;
padding: 5px;
input {
  margin: 1px 10px;
}
label { 
  margin: 0;
  padding: 0;}
`
var place = ""
class SingleRadio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
  }

  render() {
    return (
      <label>
        <input
          type="radio"
          value={this.props.value}
          name={this.props.radioName}
          checked={this.props.selectedValue === this.props.value}
          onChange={this.props.runChange}
        />
        {this.props.label}
      </label>
    )
  }
}

class RadioButtons extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChooseForm>
        <SingleRadio
          value="19135190"
          radioName="myRadio"
          label="MISSISSAUGA"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="19135184"
          radioName="myRadio"
          label="TORONTO"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="19135168"
          radioName="myRadio"
          label="THORNHILL"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="18280821"
          radioName="myRadio"
          label="MAPLE"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="19135179"
          radioName="myRadio"
          label="VAUGHAN"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="19135175"
          radioName="myRadio"
          label="NEWMARKET"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        <SingleRadio
          value="18976481"
          radioName="myRadio"
          label="ONLINE"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
        {/* <input type="submit" value="Submit" /> */}
      </ChooseForm>
    )
  }
}

class ChooseLock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: "19135190",
    }
    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({
      selectedValue: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
    })
        console.log(this.state)

  }

  handleSubmit(event) {
    event.preventDefault()
    const value = event.target.value
    this.setState(
      {
        selectedValue: value,
      },
      () => {
        if (this.props.onSubmit) {
          this.props.onSubmit(this.state)
        }
      }
    )
    console.log(value)
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
          <RadioButtons
            selectedValue={this.state.selectedValue}
            runChange={this.handleChange}
          />
        {/* </form> */}
      </div>
    )
  }
}

export default ChooseLock