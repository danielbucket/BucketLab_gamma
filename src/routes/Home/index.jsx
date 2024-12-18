import { useEffect, useState } from 'react'
import { HomeContainer, ModalWrapper, ContentWrapper } from './index.styled.js'
import TypeWriter from '../utils/TypeWriterEffect.jsx'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_04.jpeg'

export default function Home() {
  const [pageText, setPageText] = useState({})
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData)
  }, [])

  const { quote, author } = pageText
  return (
    <>
      <HomeContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <TypeWriter text={quote} />
          <TypeWriter text={author} />
        </ContentWrapper>
      </HomeContainer>
    </>
  )
}