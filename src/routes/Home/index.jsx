import { useEffect, useState } from 'react'
import { HomeContainer } from './index.styled.js'
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
        <div className="img-wrapper">
          <img src={ pageImage } alt="" />
        </div>
        <div className="page-body-container">
          <p>{pageText}</p>
        </div>
      </HomeContainer>
    </>
  )
}