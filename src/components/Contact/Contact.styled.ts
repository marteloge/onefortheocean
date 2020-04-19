import styled from 'styled-components';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 10px;
  padding: 5rem 10%;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export default StyledContact;
