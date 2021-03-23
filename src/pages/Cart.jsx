import styled from "styled-components";
import CartEmpty from "../components/CartPizza/CartEmpty";
import CartPizza from "../components/CartPizza/CartPizza";

import Header from "../components/Header/Header";

const StyledContainer = styled.div`
  padding: 40px 0;
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledContentPizzas = styled.div`
  width: 90%;
  max-width: 820px;
  margin: 90px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCartBottom = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const StyledCartBottomDetails = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 22px;

    &:last-of-type {
      b {
        color: #fe5f1e;
      }
    }
  }
`;

const Cart = () => {
  const pizzas = null;
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContent>
          {pizzas ? (
            <StyledContentPizzas>
              <CartPizza />
              <StyledCartBottom>
                <StyledCartBottomDetails>
                  <span>
                    Всего пицц: <b>3 шт.</b>
                  </span>
                  <span>
                    Сумма заказа: <b>900 ₽</b>
                  </span>
                </StyledCartBottomDetails>
              </StyledCartBottom>
            </StyledContentPizzas>
          ) : (
            <StyledContentPizzas>
              <CartEmpty />
            </StyledContentPizzas>
          )}
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Cart;
