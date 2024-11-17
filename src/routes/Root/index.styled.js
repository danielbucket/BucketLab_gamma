import styled from 'styled-components'

export const RootContainer = styled.div`
  display: grid;
  grid-template-rows:
    [Navigate] 10rem
    [Content] 1fr
    [Footer] 6rem;
  height: 100vh;
  background-color: #efefef;
`

export const BasePageLayout = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;

  .page-body-container {
    flex-grow: 1;
    background-color: lime;
  }

  .img-wrapper {
    max-height: 25rem;
    display: flex;
    justify-content: center;
    padding: .75rem;
    
    img {
      border-radius: .5rem;
      width: 100%;
    }
  }
`
