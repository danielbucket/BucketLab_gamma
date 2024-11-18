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

  .page-body-container {
    flex-grow: 1;
  }
`
export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 35rem;
  padding: .75rem;

  .modal-image {
    border-radius: .5rem;
    box-shadow: 0 0 .5rem .25rem #0E66F0EB;
  }
`