import styled from 'styled-components';

export const RootContainer = styled.div`
  display: grid;
  grid-template-rows:
    [Navigate] 10rem
    [Content] 1fr
    [Footer] 10rem;
  height: 100vh;
`;