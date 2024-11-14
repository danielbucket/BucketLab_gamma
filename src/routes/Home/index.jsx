import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { HomeContainer } from './index.styled.js'
import importedImage from '../../assets/images/T100_0724.jpg'

export default function Home() {
  const [content, setContent] = useState({})
  const [image, setImage] = useState(null)
  const data = useLoaderData()

  useEffect(() => {
    setContent(() => data)
    setImage(() => importedImage)
  }, [])

  return (
    <>
      <HomeContainer>
        <div className="header-container">
          <img src={ image } alt="image of a truck" />
        </div>
        <div className="body-container">
          <div className="text-content-container">
            {/* <p>{content.text}</p> */}
          </div>
        </div>
      </HomeContainer>
    </>
  );
}