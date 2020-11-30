import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step3 = ({
  values,
  setFieldValue,
  handleNext,
  hanldleAnswers,
  selected,
}) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",

          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            {/* What colour is your hair in the area you are hoping to have treated? */}
          </h1>
        </Col>
      </div>
      <Col
        md={10}
        lg={4}
        className="flex justify-content-center text-center"
        style={{ margin: "auto", padding: "2em" }}
      >
        <ul className="radio-btn">
          <li>
            <h1 style={{ backgroundColor: "initial", color: "#000" }}>
              Promotion detail
            </h1>
          </li>
          <li className="my-4 py-4">
            {(() => {
              switch (selected) {
                case promoData[0].heading:
                  return <CardComponent data={promoData[0]} />
                case promoData[1].heading:
                  return (
                    // <a
                    //   href="https://shop.canadamedlaser.ca/checkout/?add-to-cart=1135"
                    //   target="_blank"
                    //   class="vc_single_image-wrapper   vc_box_border_grey"
                    // >
                    //   <img
                    //     width="480"
                    //     height="480"
                    //     src="https://shop.canadamedlaser.ca/wp-content/uploads/2020/10/skin-resurfacing-bundle.png"
                    //     class="vc_single_image-img attachment-full"
                    //     alt=""
                    //     loading="lazy"
                    //     srcset="https://shop.canadamedlaser.ca/wp-content/uploads/2020/10/skin-resurfacing-bundle.png 480w, https://shop.canadamedlaser.ca/wp-content/uploads/2020/10/skin-resurfacing-bundle-300x300.png 300w, https://shop.canadamedlaser.ca/wp-content/uploads/2020/10/skin-resurfacing-bundle-150x150.png 150w"
                    //     sizes="(max-width: 480px) 100vw, 480px"
                    //   />
                    // </a>
                    <CardComponent data={promoData[1]} />
                  )
                case promoData[2].heading:
                  return <CardComponent data={promoData[2]} />

                default:
                  break
              }
            })()}
          </li>
          {/* <li>
              <input
                type="radio"
                id="option1"
                name="question3"
                value="Blonde/red/grey"
                checked={values.question3 === "Blonde/red/grey"}
                onChange={() => {
                  setFieldValue("question3", "Blonde/red/grey")
                  hanldleAnswers("red")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Blonde/red/grey</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question3"
                value="Black"
                checked={values.question3 === "Black"}
                onChange={() => {
                  setFieldValue("question3", "Black")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Black</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question3"
                value="Brown"
                checked={values.question3 === "Brown"}
                onChange={() => {
                  setFieldValue("question3", "Brown")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">Brown</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question3"
                value="Dark blonde"
                checked={values.question3 === "Dark blonde"}
                onChange={() => {
                  setFieldValue("question3", "Dark blonde")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Dark blonde</label>
            </li> */}
          <li style={{ display: "flex" }}>
            <input type="radio" />
            <Button className="next-btn  py-3" onClick={handleNext}>
              Next &nbsp; &nbsp;
            </Button>
          </li>
        </ul>
      </Col>
    </>
  )
}

export default Step3

const CardComponent = ({ data }) => (
  <div
    style={{
      width: "480px",
      height: "480px",
      backgroundImage: `url(${data.img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100%",
        textAlign: "left",
        padding: "8vh",
      }}
    >
      <button type="button">
        <i class="fas fa-gift"></i> Promo
      </button>
      <h3 className="py-4" style={{ color: "white", textAlign: "left" }}>
        {data.heading}
      </h3>
      <p style={{ color: "white" }}>{data.desc}</p>
    </div>
  </div>
)

const promoData = [
  {
    heading: "LHR: 50% OFF + Additional 5% OFF",
    desc:
      "Our Laser Hair Removal treatments are here with a BIG DISCOUNT! That's 50% off with any laser hair removal treatment. Plus you get to enjoy an additional 5% off if you contact us now. Hurry, this promo is for limited slots only!",
    img:
      "http://api.canadamedlaser.ca/wp-content/uploads/2020/08/maple-city-laser.jpg",
  },
  {
    heading: "Botox: Buy first 10 units for $59 (New clients only)",
    desc:
      "We've got a treat for first-time clients for our BOTOX injections. Enjoy your first 10 units of BOTOX for only $59!",
    img:
      "http://api.canadamedlaser.ca/wp-content/uploads/2020/09/How-to-Get-Rid-of-Skin-Pigmentation-3.jpeg",
  },
  {
    heading: "CoolSculpting: Flat 40% OFF",
    desc:
      "Getting rid of fat has never been better with CoolSculpting! And you get to have a 40% discount on your next CoolSculpting treatment! Visit Canada Med Laser Clinics today!",
    img:
      "http://api.canadamedlaser.ca/wp-content/uploads/2020/08/outstanding-results.jpg",
  },
]
