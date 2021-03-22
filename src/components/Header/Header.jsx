import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./../../assets/img/pizza-logo.svg";
import cart from "./../../assets/img/cart.svg";

const StyledHeader = styled.div`
  border-bottom: 1px solid $gray-line;
  padding: 40px 0;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
const StyledHeaderLogo = styled.div`
  display: flex;

  img {
    margin-right: 15px;
  }

  h1 {
    color: #181818;
    font-size: 24px;
    letter-spacing: 1%;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    color: #7b7b7b;
  }
`;
const StyledHeaderCart = styled.div`
  a {
    display: flex;
    align-items: center;
    background-color: #fe5f1e;
    padding: 12px 35px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s;
    color: #fff;

    &:hover {
      background-color: #f24701;
    }

    img {
      margin-right: 8px;
    }
  }
`;

const StyledDelimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderLogo>
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </StyledHeaderLogo>
        <StyledHeaderCart>
          <Link to="/cart">
            <span>520 ₽</span>
            <StyledDelimiter />
            <img src={cart} alt="Cart" />
            <span>3</span>
          </Link>
        </StyledHeaderCart>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
