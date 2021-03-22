import styled from "styled-components";

const StyledCategory = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;

    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      margin-bottom: 20px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &.active {
        background-color: #282828;
        color: #fff;
      }
    }
  }
`;

const Category = () => {
  return (
    <StyledCategory>
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </StyledCategory>
  );
};

export default Category;
