import styled from 'styled-components'
import { BasePageLayout } from '../Root/index.styled'
import { Link } from 'react-router-dom'

export const ProjectsContainer = styled(BasePageLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }
`

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  font-family: Ubuntu_Reg;
  font-size: 2rem;
  padding: 0;
`

export const StyledLink = styled(Link)``