import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavigation = styled.nav`
  grid-area: Navigation;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0.5rem;
  font-family: Ubuntu_Reg;
  font-size: 1.25rem;
  width: 100vw;
  box-shadow: 0 0 .5rem .25rem black;
  background-color: #f0f0f0;
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
  justify-content: end;
  gap: 0.5rem;
  flex-grow: 1;
  list-style: none;
  font-size: 2rem;
  padding: 0;
`