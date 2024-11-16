import { useEffect, useState } from 'react'
import { HomeContainer } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/T100_0724.jpg'

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
        <div className="header-container">
          <img src={ pageImage } alt="" />
        </div>
        <div className="body-container">
          <div className="text-content-container">
            <p>{pageText}</p>
          </div>
        </div>
      </HomeContainer>
    </>
  )
}