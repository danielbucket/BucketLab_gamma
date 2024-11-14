import { NavContainer, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js'

export default function Navigate() {
  return (
    <>
      <NavContainer>
        <SiteTitleLink to='/'>BucketLabs</SiteTitleLink>
        <StyledUL>
          <CustomLink to='/about'>About</CustomLink>
          <CustomLink to='/contact'>Contact</CustomLink>
          <CustomLink to='/projects'>Projects</CustomLink>
        </StyledUL>
      </NavContainer>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}