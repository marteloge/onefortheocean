import styled from 'styled-components';

const IconSection = styled.section<{background: string}>`
  width: 100%;
  background: ${props => props.background};
`;

export default IconSection;