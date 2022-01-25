import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from 'react';
import * as styles from './HomeCenteredImage.module.scss';


export const fragment = graphql`
  fragment HomeCenteredImage on WPGraphQL_Page_Sectionfields_Sections_HomeCenteredImage {
    fieldGroupName
    image {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
const HomeCenteredImage = ({image}) => {
  return (
    <div className={styles.HomeCenteredImage}>
      <Img
        className={styles.img}
        alt={image.altText}
        fluid={image.imageFile.childImageSharp.fluid}
      />
    </div>
  );
};

export default HomeCenteredImage;
