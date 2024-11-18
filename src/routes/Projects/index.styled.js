import styled from 'styled-components'
import { BasePageLayout } from '../Root/index.styled'
import { Link } from 'react-router-dom'

export const ProjectsContainer = styled(BasePageLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const StyledUL = styled.ul`
  border: 3px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  font-size: 2rem;
  padding: 0;
`

export const StyledLink = styled(Link)``