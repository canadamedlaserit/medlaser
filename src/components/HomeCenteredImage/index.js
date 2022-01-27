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
          fluid(quality: 100, maxWidth: 1250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const HomeCenteredImage = ({image}) => {
  return (
    <div className={styles.HomeCenteredImage}>
      <div className={styles.wrap}>
        <Img
          alt={image.altText}
          fluid={image.imageFile.childImageSharp.fluid}
        />
      </div>
    </div>
  );
};

export default HomeCenteredImage;
