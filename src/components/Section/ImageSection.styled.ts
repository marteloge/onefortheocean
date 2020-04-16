import styled from 'styled-components';

const ImageSelection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export default ImageSelection;