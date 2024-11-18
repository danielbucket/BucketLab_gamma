import { ContactContainer } from './index.styled'
import { useEffect, useState } from 'react'
import { fakeLoaderData } from './stub'
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
        <div className="img-wrapper">
          <img src={ pageImage } alt="" />
        </div>
        <div className="page-body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </ContactContainer>
    </>
  )
}