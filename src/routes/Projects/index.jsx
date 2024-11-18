import { useEffect, useState } from 'react'
import { ProjectsContainer, StyledLink, StyledUL, RepoPopup, StyledModalWrapper } from './index.styled.js'
import { fakeLoaderData } from './stub.js'
import importedImage from '../../assets/images/laboratory_02.jpeg'

export default function Projects() {
  const [repotList, setRepoList] = useState([])
  const [activeRepo, setActiveRepo] = useState(null)
  const [pageImage, setPageImage] = useState()
  const loaderData = fakeLoaderData()

  useEffect(() => {
    setPageImage(() => importedImage)
    setRepoList(() => loaderData)
  }
  , [])

  const handleHover = (repot) => {
    repot === null ? setActiveRepo(null) : setActiveRepo(repot)
  }

  function renderRepoList(repotArr) {
    return (
      <StyledUL
        onMouseLeave={() => handleHover(null, false)}
      >
        {
          repotArr.map((repo, index) => {
            return (
              <li key={ index }>
                <CustomLink
                  to={ repo.url }
                  onMouseEnter={ () => handleHover(repo) }
                >{ repo.repo }</CustomLink>
              </li>
            )
          })
        }  
      </StyledUL>
    )
  }
  
  const repoList = renderRepoList(repotList)

  return (
    <>
      <ProjectsContainer>
        <StyledModalWrapper>
          {
            activeRepo === null
            ? (
                <img className='modal-image' src={ pageImage }/>
              )
            : (
              <RepoPopup>
                <h3>{activeRepo.repo}</h3>
                <p>{activeRepo.description}</p>
              </RepoPopup>
            )
          }
        </StyledModalWrapper>
        <div className="page-body-container">
          <p>Some of my projects...</p>
          { repoList }
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