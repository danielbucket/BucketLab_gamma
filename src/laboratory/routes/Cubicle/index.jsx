import { StyledCubicle } from './index.styled';
import Sidebar from './SideBar';
import Content from './Content';

export default function Cubicle() {
  return (
    <>
      <StyledCubicle>
        <Sidebar className='cubicle-sidebar' />
        <Content className='cubicle-content'/>
      </StyledCubicle>
    </>
  );
};