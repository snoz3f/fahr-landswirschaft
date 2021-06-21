import { jobs } from "gatsby/dist/redux/reducers"

export interface PagesProps{
  data: {
    kontakt: {
      childImageSharp: {
        fluid: object;
      }
    },

    allContentfulTeam: {
      edges: [{
        node: object
      }];
    };
    header: {
      childImageSharp: {
        fluid: object
      }
    };
    allContentfulAktuell:{
      nodes: object;
  }
    allContentfulContainerTexteHomepage:{
      nodes: object;
    }
    coffeeShop: object;
  }
}