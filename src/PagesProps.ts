import { PageProps } from "gatsby"

export interface PagesProps extends PageProps{
  data: {
    kontakt: {
      childImageSharp: {
        fluid: object
      }
    },

    allContentfulTeam: {
      edges: [{
        node: object
      }]
    },
    header: {
      childImageSharp: {
        fluid: object
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
        fluid: object
    }
    }
  }
}