import styled from 'styled-components'
import { BasePageLayout, ContentContainer, ModalContainer } from '../Root/index.styled'
import { Link } from 'react-router-dom'

export const ProjectsContainer = styled(BasePageLayout)``
export const ContentWrapper = styled(ContentContainer)``

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  font-family: Ubuntu_Reg;
  font-size: 2rem;
  padding: 0;
`

export const StyledLink = styled(Link)`
  padding: 0.1rem 0.5rem;

  &:hover {
    color: #EEE;
    background-color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }
`

export const ModalWrapper = styled(ModalContainer)`
  height: 100%;

  .repo-modal {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: start;
    border-radius: .5rem;
    box-shadow: 0 0 .5rem .25rem #0E66F0EB;
    padding: 1rem;
    align-items: center;

    & p:first-child {
      font-size: 2.5rem;
      font-weight: bold;
      font-family: Orbitron;
      border-bottom: 0.1rem solid var(--special-blue);
    }
      
    & p:last-child {
      padding-top: 2rem;
      font-size: 1.75rem;
      font-family: Roboto;
    }
  }
`