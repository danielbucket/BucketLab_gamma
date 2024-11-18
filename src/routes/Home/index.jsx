import { useEffect, useState } from 'react'
import { HomeContainer, StyledModalWrapper } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_04.jpeg'

export default function Home() {
  const [pageText, setPageText] = useState('')
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData.text)
  }, [])

  return (
    <>
      <HomeContainer>
        <StyledModalWrapper>
          <img className='modal-image' src={ pageImage } />
        </StyledModalWrapper>
        <div className="page-body-container">
          <p>{pageText}</p>
        </div>
      </HomeContainer>
    </>
  )
}