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
  }

  .img-wrapper {
    // max-height: 25rem;
    display: flex;
    justify-content: center;
    padding: .75rem;
    
    img {
      border-radius: .5rem;
      width: 100%;
      box-shadow: 0 0 .5rem .25rem #0e66f0eb;
    }
  }
`
