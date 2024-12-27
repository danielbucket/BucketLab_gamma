import styled from 'styled-components'
import { BasePageLayout, ContentContainer } from '../Root/index.styled'
import { FormStyle } from '../Root/formStyle.styled'

export const StyledForm = styled(FormStyle)``
export const LoginContainer = styled(BasePageLayout)``
export const LoginWrapper = styled(ContentContainer)`
  flex-direction: column;
  justify-content: start;
  margin-top: 5rem;

  .register-new {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    font-family: Ubuntu_Reg;
    font-size: 2rem;

    & button {
      font-size: 2rem;
      text-decoration: underline;
    }
    
    & button:hover {
      color: var(--special-blue);
  }
`

