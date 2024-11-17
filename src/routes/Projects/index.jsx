import {useEffect, useState } from 'react'
import  { ProjectsContainer } from './index.styled'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/selfi_klr250.jpg'

export default function Projects() {
  const [repotList, setRepoList] = useState([])
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setRepoList(() => loaderData.repoList)
  }
  , [])
  
  return (
    <>
      <ProjectsContainer>
        <div className="img-wrapper">
          <img src={ pageImage } alt="" />
        </div>
        <div className="body-container">
          <div className="text-content-container">
            <p>{repotList}</p>
          </div>
        </div>
      </ProjectsContainer>
    </>
  )
}