import styled from 'styled-components'
import { BasePageLayout, ModalWrapper } from '../Root/index.styled'
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
  // justify-content: center;
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

export const StyledModalWrapper = styled(ModalWrapper)``

export const RepoPopup = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 98%;
  padding: .75rem;
  border: 1px solid var(--special-blue);
  border-radius: 0.5rem;
  background-color: #EEE;
  font-family: Ubuntu_Reg;
  font-size: 1.5rem;
  color: var(--special-blue);
`