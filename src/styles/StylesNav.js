import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 5rem;
  align-items: center;
  display: flex;
  background-color: #252b48;
`;

export const NavSubContainer = styled.div`
  width: 50%;
`;

export const NavSubRight = styled.div`
  justify-content: center;
  display: flex;
`;

export const NavSubLeft = styled.div`
  justify-content: center;
  display: flex;
`;

export const NavStyledUl = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavStyledLi = styled.li`
  font-size: 1.25rem;
  padding: 1rem;
  color: #fff;
  transition: 1s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    display: flex;
    color: #fff;
    text-decoration: none;
    transition: 0.25s all ease-in-out;
  }

  :hover {
    color: #f7e987;
    letter-spacing: 2px;

    > p {
      transition: 0.5s all ease-in-out;
      transform: rotateZ(360deg);
    }
  }
`;

export const NavStyledIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  padding-left: 0.55rem;
`;
