import { StyledFooter, StyledLink } from './index.styled.js'
import githubIcon from '../../assets/icons/github/github-mark.png'
import linkedInIcon from '../../assets/icons/linkedin/linkedin.png'
export default function Footer() {

  return (
    <StyledFooter>
      <StyledLink to='https://github.com/danielbucket'><img src={ githubIcon } alt='GitHub icon' /></StyledLink>
      <p>@danielBucket <span>© 2024</span></p>
      <StyledLink to='https://www.linkedin.com/in/daniel-ludwick/'><img src={ linkedInIcon } alt='LinkedIn icon'/></StyledLink>
    </StyledFooter>
  )
}