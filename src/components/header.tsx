import React, { FC, useEffect, useState } from "react"
import { Link } from "gatsby"
import cn from "classnames"
import companyThumbnail from "../images/fahr_erlebnis_weiss_transparent.png"

import "../styles/components/_header.scss"

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

interface HeaderProps{
  siteTitle?: string;
  logo?: string;
}

const Header: FC<HeaderProps> = ({ siteTitle, logo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleScroll = (event) => {
    if (scrollY <= event.currentTarget.scrollY) {
      setScrollY(event.currentTarget.scrollY)
      setIsVisible(false)
    }

    if (scrollY > event.currentTarget.scrollY || event.currentTarget.scrollY === 0) {
      setIsVisible(true)
      setScrollY(event.currentTarget.scrollY)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar
      fixed={"top"}
      dark
      expand="lg"
      className={cn("navbar sticky", { 'is-hidden': !isVisible })}
    >
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src={companyThumbnail}
            alt={`${siteTitle} Logo`}
            className="navbar-logo"
            />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              

            <NavItem>
                <Link className="nav-link"
                 activeStyle={{ fontWeight: "bold" }}
                to="/"
                >
                Home
                </Link>
              </NavItem>
              <NavItem>
                <a className="nav-link"
                 activeStyle={{ fontWeight: "bold" }}
                href="https://fahr-erleben.ch"
                >
                Erlebnisse
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  href="https://fahr-hofladen.ch/"
                >
                  Hofladen
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  href="https://fahr-landwirtschaft.ch"
                >
                  Landwirtschaft
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  href="https://fahr-event.ch"
                >
                  Trotte
                </a>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  to="/gastronomie"
                >
                  Gastronomie
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  to="/das-team"
                >
                  Über uns
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ fontWeight: "bold" }}
                  to="/kontakt"
                >
                  Kontakt
                </Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  )
}

export default Header
