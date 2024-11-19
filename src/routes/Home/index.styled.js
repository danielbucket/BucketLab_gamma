import styled from 'styled-components'
import { BasePageLayout, ModalContainer, ContentContainer } from '../Root/index.styled'

export const HomeContainer = styled(BasePageLayout)``
export const ModalWrapper = styled(ModalContainer)``
export const ContentWrapper = styled(ContentContainer)`
  flex-direction: column;

  & p:first-child {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: Roboto;
    padding-left: 1rem;
  }
    
  & p:last-child {
    padding-top: 1rem;
    font-size: 1.25rem;
    font-family: Orbitron;
    text-align: end;
    padding-right: 1rem;
  }
`