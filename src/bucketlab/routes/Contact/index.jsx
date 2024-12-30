import { useEffect, useState } from 'react'
import { ContactContainer, ModalWrapper, ContentWrapper } from './index.styled.js'
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_03.jpeg'

export default function Contact() {
  const [pageText, setPageText] = useState('')
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData.text)
  }, [])

  return (
    <>
      <ContactContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <TypeWriterEffect text={pageText} speed={50} />
        </ContentWrapper>
      </ContactContainer>
    </>
  )
}