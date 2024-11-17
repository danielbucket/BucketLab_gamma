import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.nav`
  grid-area: Navigate;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 0.5rem;
  font-family: Ubuntu_Reg;
  width: 100vw;
  box-shadow: 0 0 .5rem .25rem #0e66f0eb;
  background-color: var(--special-blue);
  postion: fixed;
`


export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.25rem;

  &.active, &:hover {
    color: #777;
  }
`

export const SiteTitleLink = styled(StyledLink)`
  font-size: clamp(2rem, 2.75rem, 5rem);
  font-family: Laila_Med;
  width: 30%;

  &.active {
    color: black;
  }
`

export const StyledUL = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
  list-style: none;
  font-size: 1.75rem;
  padding: 0;
`