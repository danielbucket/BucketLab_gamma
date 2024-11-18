import {useEffect, useState } from 'react'
import  { ProjectsContainer, StyledLink, StyledUL } from './index.styled'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_02.jpeg'

export default function Projects() {
  const [repotList, setRepoList] = useState([])
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setRepoList(() => loaderData)
  }
  , [])

  const renderRepoList = () => {
    return (
      <>
        <StyledUL>
          {
            repotList.map((repo, index) => {
              return (
                <li key={index}>
                  <CustomLink to={repo.url}>{repo.repo}</CustomLink>
                </li>
              )
            })
          }  
        </StyledUL>
      </>
    )
  }
  
  return (
    <>
      <ProjectsContainer>
        <div className="img-wrapper">
          <img src={ pageImage } alt="" />
        </div>
        <div className="page-body-container">
          <p>Some of my projects...</p>
          { renderRepoList() }
        </div>
      </ProjectsContainer>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}