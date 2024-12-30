import styled from 'styled-components'

export const StyledDashboard = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 0.1rem solid #EEE;

  & .dash-main {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: #EEE;

    & h1 {
      font-size: 2rem;
      font-family: Orbitron;
    }
  }

  & .dash-status {
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    background-color: var(--special-blue);
    width: 12rem;

    & .permissions-status {
      flex-grow: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 1rem;
      font-size: 1.15rem;
      padding: 1rem;
      background-color: var(--special-blue);
      color: #EEE;
  
      & p > span {
        margin-left: 0.25rem;
      }
    }

    & button {
      font-size: 1.35rem;
      height: 3.5rem;
      width: 98%;
      margin: auto;
      font-family: Orbitron;
      font-weight: bold;
      font-size: 1.35rem;
      border-radius: 0.25rem;
      background-color: #EEE;
      color: var(--special-blue);

      & :hover {
        background-color: var(--special-blue);
        color: #EEE;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
        transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
      }
    }
  }
`