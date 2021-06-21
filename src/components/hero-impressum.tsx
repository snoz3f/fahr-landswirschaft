import React, { FC } from "react"
import Img from 'gatsby-image'

import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"

interface HeroImpressumProps{
  title?: string,
  image?: object
}

const HeroImpressum :FC<HeroImpressumProps> = ({ image, title="Impressum"}) => {
    return (
        <section className="hero">
            <div className="hero-description">
            <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-head"
              />    
                <h1>{title}</h1>
                {/* <h2>{subtitle}</h2> */}
            </div >
           

            {image && (
                <Img fluid={image} className="hero-image"/>
            )}


         
        </section>
    )
}

export default HeroImpressum;
