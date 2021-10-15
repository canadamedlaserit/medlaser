import { graphql, Link } from "gatsby"
import React from "react"
import "./Locationspecificherotreatments.scss"

export const fragment = graphql`
  fragment LocationspecificheroTreatments on WPGraphQL_Page_Sectionfields_Sections_Locationspecificherotreatments {
    fieldGroupName
    treatments {
      title
      url
    }
  }
`

const LocationspecificheroTreatments = ({treatments}) => {
    console.log(treatments)
  return (
    <section className="LocationspecificheroTreatments">
        <div className="treatments">
            <ul>
                {
                    treatments.map((item, index) => {
                        if (item.url === null) {
                            return <li key={index}>{item.title}</li>
                        }
                        else{
                            return <li key={index}><Link to={item.url}>{item.title}</Link></li>
                        }
                    })
                }
            </ul>
        </div>
    </section>
  )
}
export default LocationspecificheroTreatments