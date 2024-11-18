import { useEffect, useState } from 'react'
import { HomeLabContainer, ModalWrapper, ContentWrapper } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_01.jpeg'

export default function HomeLab() {
  const [pageText, setPageText] = useState('')
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData.text)
  }, [])

  return (
    <>
      <HomeLabContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <p>{pageText}</p>
        </ContentWrapper>
      </HomeLabContainer>
    </>
  )
}