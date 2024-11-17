import { useEffect, useState } from 'react'
import { HomeLabContainer } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory.jpeg'

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
        <div className="img-wrapper">
          <img src={ pageImage } alt='image of a laboratory'/>
        </div>
        <div className="page-body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </HomeLabContainer>
    </>
  )
}