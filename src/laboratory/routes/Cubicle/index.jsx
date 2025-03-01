import { StyledCubicle } from './index.styled';
import Sidebar from '../SideBar';
import Content from '../Content';

export default function Cubicle() {
  return (
    <>
      <StyledCubicle>
        <Sidebar className='cubicle-sidebar'>
          <h1>Virtual Cubicle</h1>
          <p>Do some work, or don't. It's up to you.</p>
        </Sidebar>
        <Content className='cubicle-content'>
          <h2>What's on your mind?</h2>
          <p>Write a note, or draw a picture with letters. It's your space.</p>
        </Content>
      </StyledCubicle>
    </>
  );
};