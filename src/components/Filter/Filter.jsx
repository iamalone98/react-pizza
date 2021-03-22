import styled from "styled-components";
import Category from "./Category";
import Sort from "./Sort";

const StyledFilter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Filter = () => {
  return (
    <StyledFilter>
      <Category />
      <Sort />
    </StyledFilter>
  );
};

export default Filter;
