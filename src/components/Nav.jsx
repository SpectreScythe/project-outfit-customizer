import React from "react";
import * as NLS from "../styles/StylesNav";
import { NavLinksLeft, NavLinksRight } from "../config/ObjectNav";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NLS.NavContainer>
      <NLS.NavSubContainer>
        <NLS.NavSubLeft>
          <NLS.NavStyledUl>
            {NavLinksLeft.map((navLink, index) => (
              <NLS.NavStyledLi key={index}>
                <Link to={navLink.path}>
                  {navLink.title}
                  <NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
                </Link>
              </NLS.NavStyledLi>
            ))}
          </NLS.NavStyledUl>
        </NLS.NavSubLeft>
      </NLS.NavSubContainer>

      <NLS.NavSubContainer>
        <NLS.NavSubRight>
          <NLS.NavStyledUl>
            {NavLinksRight.map((navLink, index) => (
              <NLS.NavStyledLi key={index}>
                <Link to={navLink.path}>
                  {navLink.title}
                  <NLS.NavStyledIcon>{navLink.icon}</NLS.NavStyledIcon>
                </Link>
              </NLS.NavStyledLi>
            ))}
          </NLS.NavStyledUl>
        </NLS.NavSubRight>
      </NLS.NavSubContainer>
    </NLS.NavContainer>
  );
};

export default Nav;
