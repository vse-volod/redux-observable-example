import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    flex-flow: row;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default Layout;
