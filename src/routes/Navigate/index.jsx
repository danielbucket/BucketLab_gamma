import { NavContainer, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js'

export default function Navigate() {
  return (
    <>
      <NavContainer>
        <div>
          <SiteTitleLink to='/'>BucketLab</SiteTitleLink>
        </div>
        <div>
          <StyledUL>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            <CustomLink to='/projects'>Projects</CustomLink>
          </StyledUL>
        </div>
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