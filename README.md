
```irojs-react-wrapper```: A React Wrapper for Iro.js
============================================

Introduction
------------
```Iro.js``` is a Modular, design-conscious color picker widget for JavaScript.

```irojs-react-wrapper```, is a React wrapper for Iro.js.

Installation
------------

To start using ```irojs-react-wrapper``` in your React project, follow these straightforward installation steps:

1.  Open your project directory in your preferred terminal.
2.  Run the following command to install ```irojs-react-wrapper``` and its dependencies:

bash

```bash
npm install irojs-react-wrapper
```

```bash
pnpm install irojs-react-wrapper
```

```bash
yarn install irojs-react-wrapper
```

3.  Wait for the installation process to complete. Once finished, you're ready to integrate ```irojs-react-wrapper``` into your React application.

Basic Usage
-----------

Integrating ```irojs-react-wrapper``` into your React components is a breeze. Here's a quick guide to get you started:

1.  Import the necessary modules:

typescript

```typescript
import React from 'react';
import IroColorPicker  from 'irojs-react-wrapper';
```

2.  In your component's render method, add the `IroColorPicker` component:

typescript

```typescript
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to [Irojs React Wrapper]!</h1>
        <IroColorPicker />
      </div>
    );
  }
}
```

3.  Customize the color picker by passing props:

typescript

```typescript
<IroColorPicker
  color="#ff0000"
  setColor={setColor}
  styleProps={{
    width: 400,
    height: 250,
    borderWidth: 2,
  }}
/>
```

4.  Implement the `setColor` method to respond to color changes:

typescript

```typescript
setColor = (color) => {
  console.log('Selected color:', color.hexString);
  // Perform desired actions with the selected color
};
```

Advanced Usage
--------------

```irojs-react-wrapper``` is just a wrapper around Iro.js

### Customizing Appearance

You can customize the appearance of the color picker by modifying its dimensions, adding a label, or changing the initial color:

typescript

```typescript
<IroColorPicker
  color="#00ff00"
  width={400}
  height={250}
  wheelLightness={true}
  wheelAngle={0}
  handleColorChange={this.handleColorChange}
  label="Choose a Color"
/>
```

### Accessing Color Information

Retrieve the selected color information by accessing the `color` object:

typescript

```typescript
handleColorChange = (color) => {
  console.log('Selected color:', color.hexString);
  console.log('Red:', color.red);
  console.log('Green:', color.green);
  console.log('Blue:', color.blue);
  console.log('Hue:', color.hue);
  console.log('Saturation:', color.saturation);
  console.log('Lightness:', color.lightness);
};
```

### Using Color Events

You can respond to color changes in real-time using the `onChange` event:

typescript

```typescript
<IroColorPicker
  color="#0000ff"
  setColor={setColor}
/>
```

Conclusion
----------

Congratulations! You've successfully integrated ```irojs-react-wrapper``` into your React application. With its seamless integration of Iro.js, you can now offer your users an interactive and feature-rich color selection experience. Explore the extensive possibilities provided by ```irojs-react-wrapper```, and unleash the power of advanced color management in your projects.

For more detailed information on ```iro.js```'s API and advanced features, refer to the official documentation.