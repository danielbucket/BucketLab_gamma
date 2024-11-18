import { useEffect, useState } from 'react'
import { AboutContainer, StyledModalWrapper } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/danielBucket_ai_01.jpeg'

export default function About() {
  const [pageText, setPageText] = useState('')
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setPageText(() => loaderData.text)
  }, [])
  
  return (
    <>
      <AboutContainer>
        <StyledModalWrapper className="img-wrapper">
          <img className='modal-image' src={ pageImage } />
        </StyledModalWrapper>
        <div className="page-body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </AboutContainer>
    </>
  )
}