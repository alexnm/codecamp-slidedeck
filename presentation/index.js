// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { logos, images } from "./images";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require( "normalize.css" );
require( "spectacle/lib/themes/default/index.css" );

preloader( images );
preloader( logos );

const theme = createTheme( {
    primary: "#343F3E",
    secondary: "#505A5B",
    default: "8F91A2",
} );

export default ( ) => (
    <Spectacle theme={ theme }>
        <Deck transition={ [ "slide" ] } transitionDuration={ 500 }>
            <Slide bgImage={ images.map } bgDarken={ 0.75 }>
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#f1c40f">
                    Start writing
                </Heading>
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#f1c40f">
                    modern JavaScript
                </Heading>
                <Text textSize="1.5em" margin="100px 0px 0px 0px" textAlign="left" bold textColor="#DCEDFF">
                    Alex Moldovan
                </Text>
                <Text textSize="1.5em" margin="20px 0px 0px 0px" textAlign="left" bold textColor="#DCEDFF">
                    Full Stack Developer @ Fortech
                </Text>
                <Text textSize="1.5em" margin="20px 0px 0px 0px" textAlign="left" bold textColor="#DCEDFF">
                    @alexnmoldovan
                </Text>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#f1c40f" >
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#34495e">
                    State of JavaScript in 2016
                </Heading>
            </Slide>
            <Slide transition={ [ "zoom" ] } bgColor="#16a085">
                <Appear>
                    <Image src={ logos.angular } margin="0px auto" height="50px" />
                </Appear>
                <Appear>
                    <Image src={ logos.ember } margin="0px auto" height="50px" />
                </Appear>
                <Appear>
                    <Image src={ logos.aurelia } margin="0px auto" height="50px" />
                </Appear>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                ES 2016?
            </Slide>
            <Slide transition={ [ "spin" ] } bgColor="#2c3e50">
                <Heading>TC39 process</Heading>
                <List>
                    <Appear><ListItem textColor="#e74c3c">Stage 0 - Strawman</ListItem></Appear>
                    <Appear>
                        <ListItem textColor="#e67e22">
                            Stage 1 - Proposal
                            <img src={ images.lichKing } alt="lich-king" style={ { position: "absolute", height: 280, right: 200, top: 190 } } />
                        </ListItem>
                    </Appear>
                    <Appear><ListItem textColor="#2ecc71">State 2 - Draft</ListItem></Appear>
                    <Appear><ListItem textColor="#3498db">Stage 3 - Candidate</ListItem></Appear>
                    <Appear><ListItem textColor="#8e44ad">Stage 4 - Finished</ListItem></Appear>
                    <Appear><ListItem textColor="#DCEDFF">https://github.com/tc39/ecma262</ListItem></Appear>
                </List>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                New Features in depth
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                Can I use it?
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                Babel
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                What about node?
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#f1c40f">
                <BlockQuote>
                    <Quote>Any application that can be written in JavaScript, will eventually be written in JavaScript.</Quote>
                    <Cite>Atwood's Law</Cite>
                </BlockQuote>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                <Appear><Heading size={ 1 } fit caps lineHeight={ 1 }>This slide deck</Heading></Appear>
                <Appear><Heading size={ 1 } fit caps lineHeight={ 1 }>is written</Heading></Appear>
                <Appear><Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#f1c40f">in JavaScript!</Heading></Appear>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                Thank you!
                Questions?
            </Slide>
        </Deck>
    </Spectacle>
);
