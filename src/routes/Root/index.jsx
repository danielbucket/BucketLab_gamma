import { Outlet } from 'react-router-dom'
import Navigate from '../Navigate'
import Footer from '../Footer'
import { RootContainer } from './index.styled.js'

export default function Root() {
  return (
    <>
      <RootContainer>
        <Navigate />
        <Outlet /> 
        <Footer />
      </RootContainer>
    </>
  )
}