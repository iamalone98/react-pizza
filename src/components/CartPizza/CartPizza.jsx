import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { setCartItems, setCartTotal } from "../../redux/reducers/appSlice";

import { removePizza, toggleCount } from "../../redux/reducers/cartSlice";

const StyledCartPizza = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #f6f6f6;
  padding-top: 30px;
  margin-top: 30px;
`;

const StyledCartImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;

  img {
    width: 80px;
    height: 80px;
  }
`;

const StyledCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
  }

  p {
    font-size: 18px;
    color: #8d8d8d;
  }
`;

const StyledCartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;
`;

const StyledCartPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  b {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.01em;
  }
`;

const StyledCartRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledCartPizzaButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fe5f1e;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #fe5f1e;
    svg {
      path {
        fill: #fff;
      }
    }
  }

  ${(props) =>
    props.remove
      ? css`
          border-color: #ddd;
          svg {
            transform: rotate(45deg);
            path {
              fill: #ddd;
            }
          }

          &:hover {
            background: black;
            border-color: black;
          }
        `
      : null}

  ${(props) =>
    props.minus
      ? css`
          svg {
            path {
              &:first-child {
                display: none;
              }
            }
          }
        `
      : null}
`;

const CartPizza = ({
  imageUrl,
  name,
  currentSize,
  currentType,
  count,
  price,
  id,
}) => {
  const dispatch = useDispatch();
  const onHandleAdd = (id) => {
    dispatch(
      toggleCount({
        operator: "+",
        id,
      })
    );
    dispatch(setCartItems("+"));
    dispatch(setCartTotal({ operator: "+", price: price }));
  };

  const onHandleRemove = (id) => {
    dispatch(
      toggleCount({
        operator: "-",
        id,
      })
    );
    dispatch(setCartItems("-"));
    dispatch(setCartTotal({ operator: "-", price: price }));
  };

  const onHandleRemovePizza = (id) => {
    dispatch(removePizza(id));
    dispatch(setCartItems("-"));
    dispatch(setCartTotal({ operator: "-", price: price * count }));
  };

  return (
    <StyledCartPizza>
      <StyledCartImg>
        <img src={imageUrl} alt="Pizza" />
      </StyledCartImg>
      <StyledCartInfo>
        <h3>{name}</h3>
        <p>
          {currentType}, {currentSize} см.
        </p>
      </StyledCartInfo>
      <StyledCartCount>
        <StyledCartPizzaButton
          onClick={count > 1 ? () => onHandleRemove(id) : null}
          minus
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </StyledCartPizzaButton>
        <b>{count}</b>
        <StyledCartPizzaButton onClick={() => onHandleAdd(id)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </StyledCartPizzaButton>
      </StyledCartCount>
      <StyledCartPrice>
        <b>{price * count} ₽</b>
      </StyledCartPrice>
      <StyledCartRemove>
        <StyledCartPizzaButton onClick={() => onHandleRemovePizza(id)} remove>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </StyledCartPizzaButton>
      </StyledCartRemove>
    </StyledCartPizza>
  );
};

export default CartPizza;
