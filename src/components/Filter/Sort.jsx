import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { setSortType } from "./../../redux/reducers/appSlice";

const StyledSort = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.active
      ? css`
          svg {
            transform: rotate(180deg);
          }
        `
      : null}
`;

const StyledSortPopup = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;

  ul {
    overflow: hidden;
  }
`;

const StyledSortPopupItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background: rgba(254, 95, 30, 0.05);
  }

  ${(props) =>
    props.activeItem
      ? css`
          font-weight: bold;
          color: #fe5f1e;
          background: rgba(254, 95, 30, 0.05);
        `
      : null}
`;

const StyledSortLabel = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  b {
    margin-right: 8px;
  }

  span {
    color: #fe5f1e;
    border-bottom: 1px dashed #fe5f1e;
    cursor: pointer;
  }
`;

const Sort = () => {
  const sorts = [
    {
      id: 0,
      text: "популярности",
      field: "rating",
    },
    {
      id: 1,
      text: "цене",
      field: "price",
    },
    {
      id: 2,
      text: "алфавиту",
      field: "name",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const sortType = useSelector(({ app }) => app.sortType);
  const onSetSort = (field) => {
    dispatch(setSortType(field));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <StyledSort active={showPopup ? true : false} onClick={togglePopup}>
      <StyledSortLabel>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sorts.find((item) => sortType === item.field).text}</span>
      </StyledSortLabel>
      {showPopup ? (
        <StyledSortPopup>
          <ul>
            {sorts.map(({ id, text, field }) => (
              <StyledSortPopupItem
                activeItem={sortType === field ? true : false}
                key={id}
                onClick={() => onSetSort(field)}
              >
                {text}
              </StyledSortPopupItem>
            ))}
          </ul>
        </StyledSortPopup>
      ) : null}
    </StyledSort>
  );
};

export default Sort;
