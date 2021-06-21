import React, { FC } from "react"
import {useStaticQuery, graphql} from 'gatsby'

const ErlebnisseK: FC = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulErlebnisseTextHomepage(filter: {name: {eq: "Erlebnisse für Kinder"}}) {
    edges {
      node {
        beschreibung {
          beschreibung
        }
      }
    }
  }
 }   `)


  const items = data.allContentfulErlebnisseTextHomepage.edges;
  return (
    <div>
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                <span>{node.beschreibung.beschreibung}</span>
              </li>
            )
          })
        }
      </ul>
      <br></br>

      <a className="menu-link" href="https://fahr-erleben.ch" target="_blank" rel="noopener noreferrer">zur Anmeldung</a>

    </div>
  )
}

export default ErlebnisseK;