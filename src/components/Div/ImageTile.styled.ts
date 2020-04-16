import styled from 'styled-components';

import { calculateResponsiveSize } from '../../global';

const ImageTile = styled.div<{background: string}>`
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${calculateResponsiveSize(70, 110)};
  border-radius: 5px;
  
  img {
    max-width: ${calculateResponsiveSize(40, 70)};
  }
`;

export default ImageTile;