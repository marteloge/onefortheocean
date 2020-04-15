import styled from 'styled-components';

const ImageTile = styled.div<{background: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  background: ${props => props.background};
  
  img {
    width: 40%;
    padding: 20%;
    max-width: 100px;
    float: left;
  }
`;

export default ImageTile;