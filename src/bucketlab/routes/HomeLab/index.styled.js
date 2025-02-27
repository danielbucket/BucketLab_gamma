import styled from 'styled-components'
import { BasePageLayout, ModalContainer, ContentContainer } from '../Root/index.styled'

export const HomeLabContainer = styled(BasePageLayout)``
export const ModalWrapper = styled(ModalContainer)``
export const ContentWrapper = styled(ContentContainer)`
  button {
    font-size: 2rem;
    font-family: Orbitron;
    background-color: var(--special-blue);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
    width: 20rem;
    height: 10rem;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;

    &:hover {
      background-color: #0E66F0;
      color: #FFF;
      border-radius: 0.75rem;
      box-shadow: 0 0 0.75rem 0.5rem #0E66F0Eb;
    }
  }
`