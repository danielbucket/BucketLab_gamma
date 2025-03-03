import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeLabContainer, ModalWrapper, ContentWrapper } from './index.styled.js';
import { fakeLoaderData } from './stub.js';
import importedImage from '../../assets/images/laboratory_01.jpeg';

export default function HomeLab() {
  const [pageText, setPageText] = useState('');
  const [pageImage, setPageImage] = useState();

  const loaderData = fakeLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    setPageImage(() => importedImage);
    setPageText(() => loaderData.text);
  }, []);

  const handleClick = () => {
    navigate('/homelab/login',
      {
        state: { isNew: false }
      }
    );
  };

  return (
    <>
      <HomeLabContainer>
        <ModalWrapper>
          <img id="modalImage" src={ pageImage } />
        </ModalWrapper>
        <ContentWrapper>
          <button onClick={() => handleClick()}>BucketLab<br/>Log-In</button>
        </ContentWrapper>
      </HomeLabContainer>
    </>
  );
};