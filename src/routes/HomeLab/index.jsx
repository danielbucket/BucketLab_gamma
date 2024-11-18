import { useEffect, useState } from 'react'
import { HomeLabContainer, StyledModalWrapper } from './index.styled.js'
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
        <StyledModalWrapper>
          <img className='modal-image' src={ pageImage } />
        </StyledModalWrapper>
        <div className="page-body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </HomeLabContainer>
    </>
  )
}