import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledCategory = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
`;

const StyledCategoryItem = styled.li`
  background-color: #f9f9f9;
  margin-bottom: 20px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    a {
      color: black;
    }
  }

  a {
    display: block;
    padding: 13px 30px;
    color: black;
    text-decoration: none;
  }

  ${(props) =>
    props.activeItem
      ? css`
          background-color: #282828;

          a {
            color: #fff;
          }
        `
      : null}
`;

const Category = () => {
  const { categories } = useSelector((state) => state);
  const location = useLocation();

  return (
    <StyledCategory>
      <ul>
        <StyledCategoryItem
          activeItem={location.pathname === "/" ? true : false}
        >
          <NavLink exact to="/">
            Все
          </NavLink>
        </StyledCategoryItem>
        {categories.map(({ id, name, type }) => (
          <StyledCategoryItem
            activeItem={location.pathname === `/pizzas/${id}` ? true : false}
            key={id}
          >
            <NavLink exact to={`/pizzas/${id}`}>
              {name}
            </NavLink>
          </StyledCategoryItem>
        ))}
      </ul>
    </StyledCategory>
  );
};

export default Category;
