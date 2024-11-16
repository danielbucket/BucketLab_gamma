import styled from 'styled-components';

export const RootContainer = styled.div`
  display: grid;
  grid-template-rows:
    [Navigate] 10rem
    [Content] 1fr
    [Footer] 10rem;
  height: 100vh;
  
  img {
    width: 100%;
  }
`;

export const BasePageLayout = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
