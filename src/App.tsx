import React from "react";
import { colors } from './styles/defaults'
import GlobalStyle from './styles/GlobalStyle';

import InformationSection from './components/InformationSection';
import ImageSection from './components/ImageSection';
import ImageTile from "./components/ImageTile";


const App = () => {
  return <div className="App">
    <GlobalStyle></GlobalStyle>
    <InformationSection background={colors.skyblue}>
      <h1>#Onefortheocean</h1>
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
        <h2>Let's save the ocean!</h2>
        <p>The virus has changed the world we used to know. The world
          is changing and we are able to shape our future. While sitting
          home and doing nothing, why not help the planet while we humans heal?
          Go out moving and pick up some garbage befor it ends up in the ocean.
          Save a turtle - save a whale - save the ocean!
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
      <h3>#onefortheocean</h3>
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
        <h2>Let´s get to work!</h2>
        <p>
          #1 Go out to get some fresh air <br></br>
          #2 Bring a bag <br></br>
          #3 Fill your bag with garbage <br></br>
          #4 Keep distance!
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
  </div>;
};

export default App;
