import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledFooter = styled.footer`
  box-shadow: 0 0 .5rem .25rem #0e66f0eb;
  grid-area: Footer;
  display: flex;
  width: 100%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: auto;

  & img {
    height: 5rem;
  }

  & p {
    font-size: 1.25rem;
    font-family: Ubuntu_Reg;
  }  
`