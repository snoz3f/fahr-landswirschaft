import React, { FC } from "react"
import Img from 'gatsby-image'

import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"
import {iFluid} from "../contentfulTypes/iFluid";
import {HeroProps} from "../props/HeroProps";

const HeroKontakt: FC<HeroProps> = ({ image, title="Kontakt" }) => {
    return (
        <section className="hero">
            <div className="hero-description">
            <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-head"
              />    
                <h1>{title}</h1>
            </div >
           

            {image && (
                <Img fluid={image} className="hero-image"/>
            )}


         
        </section>
    )
}

export default HeroKontakt;
