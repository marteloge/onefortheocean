import styled from 'styled-components';

type Props = {
  background: string
};

const InformationSection = styled.section<Props>`
  width: 100%;
  padding: 40px 0;
  background: ${props => props.background};
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

  h1, h2, h3, p, img {
    margin: 0 15px;
  }
`;

export default InformationSection;