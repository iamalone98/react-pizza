import styled from "styled-components";
import Filter from "../components/Filter/Filter";

import Header from "../components/Header/Header";
import Pizza from "../components/Pizza/Pizza";

const StyledContainer = styled.div`
  padding: 40px 0;
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledContentHeader = styled.h2`
  margin: 35px 0;
  font-weight: 600;
  font-size: 28px;
`;
const StyledContentPizzas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContent>
          <Filter />
          <StyledContentHeader>Все пиццы</StyledContentHeader>
          <StyledContentPizzas>
            <Pizza />
          </StyledContentPizzas>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Home;
