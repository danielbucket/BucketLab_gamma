import styled from 'styled-components'

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: .25rem;

  .lab-dashboard {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 10rem;
  }

  .lab-terminal {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

