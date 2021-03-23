import styled from "styled-components";

import emptyIcon from "./../../assets/img/empty-cart.png";

const StyledCartEmpty = styled.div`
  margin: 0 auto;
  width: 560px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;
  }

  icon {
    position: relative;
    top: 2px;
  }

  img {
    display: block;
    width: 300px;
    margin: 45px auto 60px;
  }
`;

const CartEmpty = () => {
  return (
    <StyledCartEmpty>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyIcon} alt="Empty cart" />
    </StyledCartEmpty>
  );
};

export default CartEmpty;
