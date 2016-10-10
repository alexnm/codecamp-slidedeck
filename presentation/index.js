// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require( "normalize.css" );
require( "spectacle/lib/themes/default/index.css" );

const images = {
    city: require( "../assets/city.jpg" ),
    angular: require( "../assets/angular.png" ),
    aurelia: require( "../assets/aurelia.png" ),
    backbone: require( "../assets/backbone.png" ),
    ember: require( "../assets/ember.png" ),
    jquery: require( "../assets/jquery.gif" ),
    handlebars: require( "../assets/handlebars.png" ),
    react: require( "../assets/react.svg" ),
};

preloader( images );

const theme = createTheme( {
    primary: "#343F3E",
    secondary: "#505A5B",
    default: "8F91A2",
} );

export default ( ) => (
    <Spectacle theme={ theme }>
        <Deck transition={ [ "zoom", "slide" ] } transitionDuration={ 500 }>
            <Slide transition={ [ "zoom" ] } bgColor="primary">
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#3498db">
                    Start writing
                </Heading>
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#3498db">
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
            <Slide transition={ [ "slide" ] } bgImage={ images.city.replace( "/", "" ) } bgDarken={ 0.75 }>
                <Heading size={ 1 } fit caps lineHeight={ 1 } textColor="#f39c12">
                    State of JavaScript in 2016
                </Heading>
            </Slide>
            <Slide transition={ [ "zoom" ] } bgColor="#16a085">
                <Appear>
                    <Image src={ images.angular.replace( "/", "" ) } margin="0px auto" height="50px" />
                </Appear>
                <Appear>
                    <Image src={ images.ember.replace( "/", "" ) } margin="0px auto" height="50px" />
                </Appear>
                <Appear>
                    <Image src={ images.aurelia.replace( "/", "" ) } margin="0px auto" height="50px" />
                </Appear>
            </Slide>
        </Deck>
    </Spectacle>
);
