import React from "react";
import { FormattedMessage } from "react-intl";

import { colors } from "../../global";
import {
  StyledHome,
  ImageTile,
  ImageSection,
  InformationSection,
} from "./Home.styled";

export const Home = () => (
  <StyledHome>
    <InformationSection background={colors.skyblue}>
      <h1>
        <FormattedMessage id="header" />
      </h1>
    </InformationSection>

    <ImageSection>
      <ImageTile background={colors.peach}>
        <img src="./../assets/images/coral.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.mediumblue}>
        <img src="./../assets/images/whale2.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.mediumgreen}>
        <img src="./../assets/images/turtle.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.mediumyellow}>
        <img src="./../assets/images/seahorse.png" alt=""></img>
      </ImageTile>
    </ImageSection>

    <InformationSection background={colors.mintgreen}>
      <div>
        <img src="./../assets/images/trash.png" alt=""></img>
      </div>
      <div>
        <h2>
          <FormattedMessage id="information.section.trash.header" />
        </h2>
        <p>
          <FormattedMessage id="information.section.trash.paragraph" />
        </p>
      </div>
    </InformationSection>

    <ImageSection>
      <ImageTile background={colors.teal}>
        <img src="./../assets/images/jellyfish.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.hotpink}>
        <img src="./../assets/images/starfish-pink.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.lightyellow}>
        <img src="./../assets/images/fish-yellow.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.lightblue}>
        <img src="./../assets/images/dolphin2.png" alt=""></img>
      </ImageTile>
    </ImageSection>

    <InformationSection background={colors.lightpink}>
      <img src="./../assets/images/heart.png" alt=""></img>
      <h3>
        <FormattedMessage id="hashtag" />
      </h3>
    </InformationSection>

    <ImageSection>
      <ImageTile background={colors.lightbrown}>
        <img src="./../assets/images/starfish-yellow.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.lightpink}>
        <img src="./../assets/images/lobster1.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.crystal}>
        <img src="./../assets/images/dolphin1.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.purple}>
        <img src="./../assets/images/octopus.png" alt=""></img>
      </ImageTile>
    </ImageSection>

    <InformationSection background={colors.seagreen}>
      <div>
        <img src="./../assets/images/recycle.png" alt=""></img>
      </div>
      <div>
        <h2>
          <FormattedMessage id="information.section.recycle.header" />
        </h2>
        <p>
          <FormattedMessage id="information.section.recycle.paragraph" />
        </p>
      </div>
    </InformationSection>

    <ImageSection>
      <ImageTile background={colors.paleyellow}>
        <img src="./../assets/images/seal.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.lightteal}>
        <img src="./../assets/images/shark.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.yellowmellow}>
        <img src="./../assets/images/fish-yellow.png" alt=""></img>
      </ImageTile>
      <ImageTile background={colors.babypink}>
        <img src="./../assets/images/lobster2.png" alt=""></img>
      </ImageTile>
    </ImageSection>

    <InformationSection background={colors.skyblue}>
      <img src="./../assets/images/earth-sad.png" alt=""></img>
    </InformationSection>
  </StyledHome>
);
