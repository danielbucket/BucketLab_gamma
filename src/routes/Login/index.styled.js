import styled from 'styled-components'
import { BasePageLayout, ContentContainer } from '../Root/index.styled'

export const LoginContainer = styled(BasePageLayout)``
export const LoginWrapper = styled(ContentContainer)`
  flex-direction: column;
  justify-content: start;
  margin-top: 5rem;
  
  & form {
    width: 98%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem;
    border: 0.1rem solid var(--special-blue);
    border-radius: 0.5rem;
    background-color: var(--special-blue);
    box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
  }
  
  & label {
    font-size: 2rem;
    font-family: Orbitron;
    color: #EEE;
  }
  
  & input {
    font-size: 2rem;
    font-family: Ubuntu_Reg;
    padding: 0.5rem;
    border: 0.1rem solid #EEE;
    border-radius: 0.5rem;
    background-color: #EEE;
  }
  
  & input[type='submit'] {
    font-size: 2rem;
    font-family: Ubuntu_Reg;
    padding: 0.5rem;
    border: 0.1rem solid var(--special-blue);
    border-radius: 0.5rem;
    background-color: var(--special-blue);
    color: #EEE;
    box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
    
    &:hover {
      background-color: #EEE;
      color: var(--special-blue);
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem 0.25rem var(--special-blue);
      transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
    }
  }
`