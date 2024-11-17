import { useEffect, useState } from 'react'
import { AboutContainer } from './index.styled'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/danielBucket.jpg'

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
        <div className="img-wrapper">
          <img src={ pageImage } alt="" />
        </div>
        <div className="page-body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </AboutContainer>
    </>
  )
}