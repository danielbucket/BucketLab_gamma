import styled from 'styled-components'
import { BasePageLayout } from '../Root/index.styled'

export const HomeContainer = styled(BasePageLayout)`
  grid-area: Content;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;

    img {
      width: 98%;
    }
`;