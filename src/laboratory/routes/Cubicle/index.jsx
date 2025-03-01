import { StyledCubicle } from './index.styled';
import Sidebar from './SideBar';
import Content from './Content';

export default function Cubicle() {
  return (
    <>
      <StyledCubicle>
        <Sidebar />
        <Content />
      </StyledCubicle>
    </>
  );
};