import styled from "styled-components";
import Filter from "../components/Filter/Filter";

import Header from "../components/Header/Header";

const StyledContainer = styled.div`
  padding: 40px 0;
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContent>
          <Filter />
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Home;
