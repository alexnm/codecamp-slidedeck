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
import CodeSlide from "spectacle-code-slide";

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

const Logo = ( { name, height = 50 } ) => (
    <Appear>
        <Image src={ logos[ name ] } height={ `${ height }px` } margin="10px 20px" />
    </Appear>
);

export default ( ) => (
    <Spectacle theme={ theme }>
        <Deck transition={ [ "slide" ] } transitionDuration={ 500 } controls={ false } progress="bar">
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
                    A brief history of JavaScript
                </Heading>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#f1c40f">
                <div>
                    <Logo name="js" />
                    <Logo name="jquery" />
                </div>
                <div>
                    <Logo name="backbone" />
                    <Logo name="knockout" />
                    <Logo name="angular" />
                    <Logo name="ember" />
                    <Logo name="polymer" />
                    <Logo name="vue" />
                    <Logo name="react" />
                    <Logo name="angular2" />
                </div>
                <div>
                    <Logo name="node" />
                    <Logo name="npm" />
                    <Logo name="express" />
                    <Logo name="hapi" />
                    <Logo name="koa" />
                    <Logo name="yarn" />
                </div>
                <div>
                    <Logo name="grunt" />
                    <Logo name="browserify" />
                    <Logo name="gulp" />
                    <Logo name="webpack" />
                    <Logo name="bower" />
                    <Logo name="yeoman" />
                </div>
                <div>
                    <Logo name="underscore" height="35" />
                    <Logo name="lodash" />
                    <Logo name="ramda" />
                    <Logo name="immutable" height="35" />
                </div>
                <div>
                    <Logo name="flux" />
                    <Logo name="redux" />
                    <Logo name="mobx" />
                    <Logo name="rxjs" />
                </div>
                <div>
                    <Logo name="karma" />
                    <Logo name="jasmine" />
                    <Logo name="mocha" />
                    <Logo name="chai" />
                </div>
                <div>
                    <Logo name="typescript" />
                    <Logo name="clojurescript" />
                    <Logo name="elm" />
                </div>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                <Heading textColor="#f1c40f" fit>ES 2015</Heading>
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
            <Slide transition={ [ "fade" ] } bgColor="#f1c40f">
                <Text textSize="1.5em" textColor="#2c3e50" bold>
                    New Features in Depth
                </Text>
            </Slide>
            <CodeSlide
                transitionDuration={ 500 }
                transition={ [ "slide" ] }
                lang="js"
                code={ require( "raw!../assets/code/blockScopedVars.example" ) }
                ranges={ [
                    { loc: [ 0, 0 ], title: "Block-Scoped Variables" },
                    { loc: [ 0, 3 ], note: "var is hoisted outside the block" },
                    { loc: [ 0, 5 ] },
                    { loc: [ 8, 11 ], note: "let defines the variable only inside the block" },
                    { loc: [ 8, 13 ] },
                    { loc: [ 14, 16 ], note: "const defined a constant ASSIGNMENT" },
                    { loc: [ 14, 19 ], note: "const cannot be reassigned!" },
                ] }
            />
            <CodeSlide
                transition={ [ "slide" ] }
                lang="js"
                code={ require( "raw!../assets/code/enhancedObjectLiteral.example" ) }
                ranges={ [
                    { loc: [ 0, 0 ], title: "Enhanced Object Literals" },
                    { loc: [ 0, 11 ] },
                    { loc: [ 0, 1 ], note: "A lot of repetitive code" },
                    { loc: [ 4, 5 ], note: "A lot of repetitive code" },
                    { loc: [ 1, 2 ], note: "A lot of repetitive code" },
                    { loc: [ 5, 6 ], note: "A lot of repetitive code" },
                    { loc: [ 14, 25 ] },
                    { loc: [ 18, 20 ] },
                    { loc: [ 18, 21 ], note: "notice how the old and the new style can mix" },
                    { loc: [ 21, 24 ], note: "and we're dropping boilerplate code" },
                ] }
            />
            <CodeSlide
                transition={ [ "slide" ] }
                lang="js"
                code={ require( "raw!../assets/code/arrowFunctions.example" ) }
                ranges={ [
                    { loc: [ 0, 0 ], title: "Arrow Functions" },
                    { loc: [ 0, 3 ] },
                    { loc: [ 6, 7 ], note: "anonymous function becomes one-liner" },
                    { loc: [ 8, 9 ] },
                    { loc: [ 10, 17 ], note: "function blocks works the same as before" },
                    { loc: [ 20, 23 ] },
                    { loc: [ 26, 31 ] },
                    { loc: [ 29, 30 ], note: "does not create its own this context" },
                    { loc: [ 26, 27 ], note: "no more 'that = this;'" },
                ] }
            />
            <CodeSlide
                transition={ [ "slide" ] }
                lang="js"
                code={ require( "raw!../assets/code/stringTemplates.example" ) }
                ranges={ [
                    { loc: [ 0, 0 ], title: "String Templates" },
                    { loc: [ 0, 4 ] },
                    { loc: [ 2, 3 ], note: "four '+' signs for a simple sentence" },
                    { loc: [ 7, 11 ], note: "notice how we're using the feature we previously learned" },
                    { loc: [ 9, 10 ] },
                ] }
            />
            <CodeSlide
                transition={ [ "slide" ] }
                lang="js"
                code={ require( "raw!../assets/code/destructuring.example" ) }
                ranges={ [
                    { loc: [ 0, 0 ], title: "Destructuring" },
                    { loc: [ 0, 8 ] },
                    { loc: [ 11, 12 ] },
                    { loc: [ 13, 14 ], note: "simple renaming" },
                    { loc: [ 15, 21 ] },
                    { loc: [ 20, 21 ] },
                    { loc: [ 15, 16 ] },
                    { loc: [ 15, 19 ] },
                    { loc: [ 24, 25 ] },
                    { loc: [ 26, 27 ] },
                    { loc: [ 28, 30 ] },
                ] }
            />
            <Slide transition={ [ "fade" ] } bgColor="#f1c40f">
                Rest & Spread Operators
            </Slide>
            <Slide transition={ [ "fade" ] } bgColor="#d35400">
                Classes(ish)
            </Slide>
            <Slide transition={ [ "fade" ] } bgColor="#2ecc71">
                Generators
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                <Heading textColor="#f1c40f" fit>ES 2016</Heading>
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                <Heading textColor="#f1c40f">Great! Can I use it?</Heading>
            </Slide>
            <Slide transition={ [ "spin" ] } bgColor="#2c3e50">
                <Image fit src={ images.babel } margin="auto" height="400px" />
            </Slide>
            <Slide transition={ [ "slide" ] } bgColor="#2c3e50">
                <Heading textColor="#f1c40f">What about node?</Heading>
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
            <Slide bgImage={ images.canyon } bgDarken={ 0.75 } transition={ [ "slide" ] }>
                <Heading>Thank you!</Heading>
                <Heading textColor="#f1c40f">Questions?</Heading>
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
        </Deck>
    </Spectacle>
);
