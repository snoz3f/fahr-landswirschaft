import { PageProps } from "gatsby"
import { iFluid } from "../contentfulTypes/iFluid";
import  { iNode } from "../contentfulTypes/iNode"

export interface PagesProps extends PageProps{
  data: {
    kontakt: {
      childImageSharp: {
        fluid: iFluid
      }
    },

    allContentfulTeam: {
      edges: [{
        node: iNode
      }]
    },
    header: {
      childImageSharp: {
        fluid: iFluid
      }
    };
    allContentfulAktuell:{
      nodes: object
  }
    allContentfulContainerTexteHomepage:{
      nodes: object
    }
    coffeeShop: {
      childImageSharp:{
        fluid: iFluid
    }
    }
  }
}