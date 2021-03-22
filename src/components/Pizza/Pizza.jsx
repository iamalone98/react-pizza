import styled from "styled-components";

const StyledPizza = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 65px;

  img {
    width: 260px;
  }
`;

const StyledPizzaTitle = styled.h4`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const StyledPizzaSelector = styled.h4`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;

  ul {
    display: flex;
    list-style-type: none;

    &:first-of-type {
      margin-bottom: 6px;
    }

    li {
      padding: 8px;
      flex: 1;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      &.active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }
  }
`;

const StyledPizzaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledPizzaBottomPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

const StyledPizzaBottomButton = styled.div`
  display: inline-block;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  color: #fe5f1e;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  border: 1px solid #fe5f1e;

  span {
    font-weight: 600;
    font-size: 16px;
    color: #fe5f1e;
  }

  svg {
    margin-right: 2px;
    path {
      fill: #fe5f1e;
    }
  }

  i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }

  &:hover {
    background-color: #fe5f1e;

    &,
    span {
      color: #fff;
    }

    i {
      background-color: #fff;
      color: #fe5f1e;
    }

    svg {
      path {
        fill: #fff;
      }
    }
  }
`;

const Pizza = () => {
  return (
    <StyledPizza>
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <StyledPizzaTitle>Чизбургер-пицца</StyledPizzaTitle>
      <StyledPizzaSelector>
        <ul>
          <li class="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li class="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </StyledPizzaSelector>
      <StyledPizzaBottom>
        <StyledPizzaBottomPrice>от 395 ₽</StyledPizzaBottomPrice>
        <StyledPizzaBottomButton>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </StyledPizzaBottomButton>
      </StyledPizzaBottom>
    </StyledPizza>
  );
};

export default Pizza;
