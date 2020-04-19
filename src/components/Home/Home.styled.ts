import styled from 'styled-components';

import { calculateResponsiveSize } from '../../global';
type Props = {
  background: string;
};

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 10px;
  margin: 10px 0;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    margin: 0;
  }
`;

export const IconSection = styled.section<{ background: string }>`
  width: 100%;
  background: ${(props) => props.background};
`;

export const ImageSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const ImageTile = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${calculateResponsiveSize(70, 110)};
  border-radius: 5px;

  img {
    max-width: ${calculateResponsiveSize(40, 70)};
  }
`;

export const InformationSection = styled.section<Props>`
  width: 100%;
  padding: 40px 0;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;

  img {
    max-width: 100px;
    margin: 0 15px;
    display: block;

    @media (max-width: 600px) {
      max-width: 70px;
      margin: 0 5px;
    }
  }

  div {
    max-width: 50%;
  }

  h1,
  h2,
  h3,
  p,
  img {
    margin: 0 15px;
  }
`;
