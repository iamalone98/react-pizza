import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";

import Header from "../components/Header/Header";
import Pizza from "../components/Pizza/Pizza";
import PizzaLoader from "../components/Pizza/PizzaLoader";

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
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  @media screen and (max-width: 1360px) {
    grid-template-columns: 33.3333333333% 33.3333333333% 33.3333333333%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 50% 50%;
  }
`;

const Home = () => {
  const { pizzas } = useSelector((state) => state);
  const { pizzasType } = useParams();
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContent>
          <Filter />
          <StyledContentHeader>Все пиццы</StyledContentHeader>
          <StyledContentPizzas>
            {pizzas.length
              ? pizzasType
                ? pizzas.map((item) => {
                    if (+item.category === +pizzasType) {
                      return <Pizza key={item.id} {...item} />;
                    }
                    return null;
                  })
                : pizzas.map((item) => <Pizza key={item.id} {...item} />)
              : Array(12)
                  .fill(0)
                  .map(() => <PizzaLoader />)}
          </StyledContentPizzas>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Home;
