import styled from 'styled-components';

export const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  font-size: 1.75rem;

  .header {
    width: 90%;

    & h2 {
      font-size: 2.5rem;
      font-family: Orbitron;
      text-align: center;
      margin-bottom: 5rem;
    }
  
    & p {
      margin: 1rem;
      font-family: Ubuntu_Reg;
      font-size: 1.75rem;
      width: 90%;
      margin: 2rem auto;
      text-align: center;
    }
  }

  .development-update {
    font-size: 1.5rem;
    font-family: Ubuntu_Reg;
    text-align: start;
    width: 90%;
    margin: 1.25rem auto;

    & p::first-letter {
      font-size: 1.75rem;
      font-weight: bold;
      text-indent: 1rem;
    }
      // margin-bottom: 1.25rem;
    }
  }

  .footer {
    margin-top: 10rem;
    font-size: 1.5rem;
    font-family: Ubuntu_Reg;
    text-align: center;
    width: 90%;
    margin: 2rem auto;

    & p {
      margin-bottom: 2rem;
    }

    & a {
      text-decoration: underline;
  }
`;