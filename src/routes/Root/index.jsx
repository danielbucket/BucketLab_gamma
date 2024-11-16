import { Outlet } from 'react-router-dom'
import Navigate from '../Navigate'
import Footer from '../Footer'
import { RootContainer, BasePageLayout } from './index.styled'

export default function Root() {

  return (
    <>
      <RootContainer>
        <Navigate Layout={BasePageLayout}/>
        <Outlet Layout={BasePageLayout}/>
        <Footer Layout={BasePageLayout}/>
      </RootContainer>
    </>
  );
}