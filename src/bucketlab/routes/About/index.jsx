import { useEffect, useState } from 'react';
import { AboutContainer, ModalWrapper, ContentWrapper } from './index.styled.js';
import { fakeLoaderData } from './stub.js';
import importedImage from '../../assets/images/danielBucket_ai_01.jpeg';
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx';

export default function About() {
  const [pageText, setPageText] = useState('');
  const [pageImage, setPageImage] = useState();
  const loaderData = fakeLoaderData();

  useEffect(() => {
    setPageImage(() => importedImage);
    setPageText(() => loaderData);
  }, []);
  
  return (
    <>
      <AboutContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <TypeWriterEffect text={pageText.bio} speed={50} /> 
          <p>{pageText.title}</p>
        </ContentWrapper>
      </AboutContainer>
    </>
  );
};