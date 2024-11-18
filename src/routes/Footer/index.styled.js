import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledFooter = styled.footer`
  grid-area: Footer;
  display: flex;
  width: 100%;
  margin: auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: auto;

  & img {
    height: 6rem;
  }

  & p {
    font-size: 1.25rem;
    font-family: Ubuntu_Reg;
  }  
`