import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const BasePageLayout = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ModalContainer = styled.div`
  display: flex;
  padding: .75rem;
  height: 40rem;

  #modalImage {
    border-radius: .5rem;
    box-shadow: 0 0 .5rem .25rem #0E66F0EB;
    width: 100%;
    max-width: 40rem;
    margin: auto;
  }
`
  
  export const ContentContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
  `