# JQ-Engine
Game engine based on jquery
# Example game:
https://bjazdzyk.github.io/JQ-Engine/
# Documentation:
## Scene
Scene helps rendering your game. You add Sprites to it.
#### Constructor

***Scene***( **id** : *String*, **width** : *Integer*, **height** : *Integer*, **bgColor**="skyblue" : *String*)

#### Properties
**.width** : Integer
Scene width in pixels
**.height** : Integer
Scene height in pixels
**.id** : String
Scene id
**.bgColor** : String
Scene background color

#### Methods
###### .addSprite ( sprite : Sprite )
Adds Sprite to scene
**sprite** - A sprite that will be added to Scene

###### .onKeydown ( key : String, f : Function )
Adds listener for a key
**key** - A string letter that will be listened if clicked
**f** - A function that runs when *key* clicked

## Texture
Texture can be added to *Sprites*. It should be a grid consisting of rectangles with same width & height which are animation frames. If you're not using animations you can use simple image and set *cols* and *rows* values to 1.
#### Constructor

***Texture***( **url** : *String*, **cols** : *Integer*, **rows** : *Integer*, **defaultCell**=[0, 0] : *Array*)

#### Properties
**.url** : String
Path to texture image
**.cols** : Integer
Number of columns in texture grid
**.rows** : Integer
Number of rows in texture grid
**.defaultCell** : Array
Grid coordinates of texture fragment that will be set on sprite while not playing any animation

## Sprite
Fundamental JQ-Engine element, object that can be moved, animated, etc.
#### Constructor

***Sprite***( **id** : *String*, **width** : *Integer*, **height** : *Integer*, **texture** : *Texture*)

#### Properties
**.id** : String
Sprite id
**.width** : Integer
Sprite width in pixels
**.height** : Integer
Sprite height in pixels
**.texture** : Texture
Sprite *Texture*
**.position** : Object
Sprite position in format of { x : *xPosition*, y : *yPosition* }
**.animationTick** : Integer
Number of tick in animation
**.currentAnimation** : Array
An array consisting of arrays with grid coordinates on sprite's texture and animation offset associated with each animation frame
**.frameNum** : Integer
Number of animation frame
**.currentFrame** : Array
An element of *.currentAnimation*, 
[0] - x coordinate on texture grid
[1] - y coordinate on texture grid
[2] - (optional) Sprite *animationOffset*
**.ticksBetweenFrames** : Integer
Animation frame delay
**.animationOffset** : Object
Sprite shift from its position - { x : *xPosition*, y : *yPosition* }
**.toggleAnimation** : Boolean
To play/stop sprite animation
**.fliped** : Object
{ x : *flipX*, y : *flipY*}
*flipX*, *flipY* - value 1(not fliped in that axis) or -1(fliped in that axis)

#### Methods
###### .addToScene ( scene : Scene )
Adds sprite to Scene
**scene** - scene that Sprite wil be added to
###### .setPos ( x : Integer, y : Integer )
Sets sprite position
**x** - set x position
**y** - set y position

###### .move ( x : Integer, y : Integer )
Changes sprite position
**x** - delta x
**y** - delta y

###### .setAnimation ( frames : Array, frameDelay : Integer, frame=0 : Integer )
Sets Sprite animation
**frames** - A new value of *.currentAnimation*
**frameDelay** - Delay between animation frames
**frame** - first frame of animation

###### .update ()
Updates player position, animation etc. Should be run in game loop function

###### .play ()
Plays/resumes animation

###### .stop ()
Pauses animation

###### flip ( axes : Object )
Flips sprite in selected axes
**axes** - A new value of *.fliped*







