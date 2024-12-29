import styled from 'styled-components'

export const StyledDashboard = styled('div')`
  display: flex;
  padding: .25rem;
  border: 2px solid red;

  & .lab-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--special-blue);
    color: #EEE;
  }

  & .lab-header h1 {
    font-size: 2rem;
    font-family: Orbitron;
  }

  & .lab-header button {
    font-size: 1.5rem;
    font-family: Orbitron;
    padding: .5rem;
    border: 0.1rem solid #EEE;
    border-radius: 0.5rem;
    background-color: #EEE;
    color: var(--special-blue);
  }

  & .lab-header button:hover {
    background-color: var(--special-blue);
    color: #EEE;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem #0E66F0Eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }

  & .lab-body {
    display: flex;
    flex-grow: 1;
    padding: 1rem;
    gap: 1rem;
  }
`