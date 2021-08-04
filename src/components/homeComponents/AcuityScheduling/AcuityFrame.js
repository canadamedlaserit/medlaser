import React from "react"
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
    padding: 0;
  }
`

const MainSection = styled.section`
  margin: 0 auto;
  a:nth-child(1) {
    top: 50;
  }
`
const Title = styled.h3`
  font-size: 2rem !important;
  margin: 0 auto 30px;
`
const IframeBox = styled.div`
  position: relative;
  padding: 35px;
  max-width: 800px;
  margin: 20px auto 30px;
  height: fit-content;
  background: #fff;
  iframe {
    width: 100%;
  }
`
const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #000;
  font-width: 700;
  font-size: 30px;
  cursor: pointer;
`
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
          value="19508119"
          radioName="myRadio"
          label="ONLINE (Zoom)"
          selectedValue={this.props.selectedValue}
          runChange={this.props.runChange}
        />
      </ChooseForm>
    )
  }
}

class ChooseLock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: "",
    }
    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState(
      {
        selectedValue: value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state)
        }
      }
    )
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

const AcuityScheduling = props => {
  let iFr = document.getElementById("iframe")
  let ifb = document.getElementById("iframebox")
  let src = document.createAttribute("src")
  src.value =
    "https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=" +
    props
  iFr.setAttributeNode(src)
  ifb.classList.remove("hidden")
}

const eventhandler = data => {
  var { selectedValue } = data
  let appType = selectedValue
  AcuityScheduling(appType)
}
const eventclose = () => {
  document.getElementById("iframebox").classList.add("hidden")
}
const AcuityFrame = () => (
  <>
    <MainSection>
      <Title>Choose location</Title>
      <ChooseLock onChange={eventhandler} />
      <IframeBox className="hidden" id="iframebox">
        <CloseBtn onClick={eventclose}></CloseBtn>
        <iframe
          id="iframe"
          src="https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType="
          title="Schedule Appointment"
          width="100%"
          height="610"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </IframeBox>
    </MainSection>
  </>
)

export default AcuityFrame
