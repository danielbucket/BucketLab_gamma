import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { HomeLabContainer, ModalWrapper, ContentWrapper } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_01.jpeg'

export default function HomeLab() {
  const [pageText, setPageText] = useState('')
  const [pageImage, setPageImage] = useState()
  const [loging, setLogin] = useState(false)
  const loaderData = fakeLoaderData()

  const navigate = useNavigate()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData.text)
  }, [])

  const handleClick = () => {
    setLogin(true)
    navigate('/homelab/login')
  }

  return (
    <>
      <HomeLabContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <button onClick={() => handleClick()}>HomeLab<br/>Log-In</button>
        </ContentWrapper>
      </HomeLabContainer>
    </>
  )
}