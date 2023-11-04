import React from "react";
import * as NavLinkStyled from "../styles/NavLinks";
import { NavLinksLeft, NavLinksRight } from "../config/myObjects";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavLinkStyled.NavContainer>
      <NavLinkStyled.NavSubContainer>
        <NavLinkStyled.NavSubLeft>
          <NavLinkStyled.NavStyledUl>
            {NavLinksLeft.map((navLink, index) => (
              <NavLinkStyled.NavStyledLi key={index}>
                <Link to={navLink.path}>
                  {navLink.title}
                  <NavLinkStyled.NavStyledIcon>
                    {navLink.icon}
                  </NavLinkStyled.NavStyledIcon>
                </Link>
              </NavLinkStyled.NavStyledLi>
            ))}
          </NavLinkStyled.NavStyledUl>
        </NavLinkStyled.NavSubLeft>
      </NavLinkStyled.NavSubContainer>

      <NavLinkStyled.NavSubContainer>
        <NavLinkStyled.NavSubRight>
          <NavLinkStyled.NavStyledUl>
            {NavLinksRight.map((navLink, index) => (
              <NavLinkStyled.NavStyledLi key={index}>
                <Link to={navLink.path}>
                  {navLink.title}
                  <NavLinkStyled.NavStyledIcon>
                    {navLink.icon}
                  </NavLinkStyled.NavStyledIcon>
                </Link>
              </NavLinkStyled.NavStyledLi>
            ))}
          </NavLinkStyled.NavStyledUl>
        </NavLinkStyled.NavSubRight>
      </NavLinkStyled.NavSubContainer>
    </NavLinkStyled.NavContainer>
  );
};

export default Nav;
