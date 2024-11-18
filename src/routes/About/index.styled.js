import styled from 'styled-components'
import { BasePageLayout, ModalContainer, ContentContainer } from '../Root/index.styled.js'

export const AboutContainer = styled(BasePageLayout)``
export const ModalWrapper = styled(ModalContainer)``
export const ContentWrapper = styled(ContentContainer)`
  flex-direction: column;

  & p:first-child {
    font-size: 1.25rem;
    font-family: Roboto;
    text-indent: 1rem;
  }
    
  & p:last-child {
    padding-top: 0.5rem;
    font-size: 1rem;
    font-family: Orbitron;
    font-weight: bold;
    text-align: right;
  }
`