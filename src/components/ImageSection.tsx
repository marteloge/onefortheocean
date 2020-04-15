import styled from 'styled-components';
import { calculateResponsiveMargin } from '../styles/helpers';

const InformationSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${ calculateResponsiveMargin(5, 10) } 0;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

export default InformationSection;