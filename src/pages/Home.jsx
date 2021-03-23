import { useSelector } from "react-redux";
import { useParams } from "react-router";
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
  const { pizzas } = useSelector((state) => state);
  const { pizzasType } = useParams();
  console.log(pizzasType);
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContent>
          <Filter />
          <StyledContentHeader>Все пиццы</StyledContentHeader>
          <StyledContentPizzas>
            {pizzas
              ? pizzasType
                ? pizzas.map((item) => {
                    if (+item.category === +pizzasType) {
                      return <Pizza key={item.id} {...item} />;
                    }
                    return null;
                  })
                : pizzas.map((item) => <Pizza key={item.id} {...item} />)
              : null}
          </StyledContentPizzas>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Home;
