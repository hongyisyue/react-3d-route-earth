### Demo
https://react-3d-route-earth.netlify.app/

If you wish to run this repo locally:
### `npm i`
### `npm start`
You can find a complete example at *pages/main.jsx*

If you wish to install the npm package:
https://www.npmjs.com/package/react-3d-earth
> npm i react-3d-route-earth
## Component Usage:
### Space
> `<Space content={__OTHER_COMPONENTS__}></Space>`

Space component contains `<pointLight/>` & `<Starts/>` as the default scene. If you wish to create other elements in the 'Space', you must pass them as 1 component via the `content` property.
Tips: if you have more then 1 elements to pass in, wrap them with `<React.Fragment>`

### Earth
> `<Earth isEnter={isEnter} content={__OTHER_COMPONENTS__}></Earth>`

A 3d earth spins by default. If you wish to create other components on the surface of the 'Earth', you need to pass them as 1 component via the `content` property, the same with `<Space/>`.

### MapDot
> `<MapDot dot={__POINT__}></MapDot>`

A 3d dot object(default to color red), that serves as a pin on the tellurian.
To place a MapDot on the surface of the `<Earth>`:
> 1. Find the latitude and longitude of the place, and create an object like: `myPlace = {lat: 10.1234, lng: 20.5678}`.
> // Tips: I recommend putting all the locations data in one file under one folder(e.g. '/data/locations.js'), for easier look-up and update.
> 2. Pass in that object to the function `geoToXYZ()`, then pass the return value of the function to `<MapDot>` via the `dot` property. 

### TextPole
> `<TextPole
>   dot={__POINT__} text={__TEXT__} rotate={0.1}
>   length={1}
>   mouseEnterEvent={(e) => setEnter(true)}
>   mouseLeaveEvent={(e) => setEnter(false)}
>   mouseDownEvent={(e) => {__YOUR_EVENT__}}>
> </TextPole>`

A 3d pole(default to grey) that will go through the point `dot` and display `__TEXT__` at the end of the pole.
> To create a TextPole on the surface of the `<Earth>`:
> 1. The same as creating a MapDot, pass the return value of `geoToXYZ()` to `<TextPole>` via the `dot` property.
> 2. Adjust the rotate, ranges from 0-1.
> 3. Adjust the length, which is the length of the pole.
> 4. Add mouse events if needed.

### MovingPath
> `<MovingPath from={beijing_xyz} to={berlin_xyz} frameTime={time}></MovingPath>`
A dashing route goes from  `from` to `to`. `time` is a state variable that should be created on the level where `<Earth/>` is being created.
}
