import { ContactContainer, StyledModalWrapper } from './index.styled.js'
import { useEffect, useState } from 'react'
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
        <StyledModalWrapper>
          <img className='modal-image' src={ pageImage } />
        </StyledModalWrapper>
        <div className="page-body-container">
          <p>{pageText}</p>
        </div>
      </ContactContainer>
    </>
  )
}