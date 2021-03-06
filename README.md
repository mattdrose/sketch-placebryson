# [Download v1.0.0](https://s3.us-east-2.amazonaws.com/placebryson/releases/placebryson-1.0.0.zip)

<img src="https://user-images.githubusercontent.com/1107972/36083815-0e173112-0f85-11e8-9947-bd8c2ee69800.png" alt="Placebryson Sketch Plugin" width="250px" />

## Placebryson Sketch Plugin [![Build Status](https://travis-ci.org/mattdrose/sketch-placebryson.svg)](https://travis-ci.org/mattdrose/sketch-placebryson)
A Sketch Plugin for placing Bryson where he belongs, in your Sketch project.

![Placebryson Demo](https://user-images.githubusercontent.com/1107972/36083865-946fe600-0f85-11e8-90e5-89d61e3adc0b.gif)

## Installation

- [Download the latest version (v1.0.0)](https://s3.us-east-2.amazonaws.com/placebryson/releases/placebryson-1.0.0.zip)
- Unzip the file
- Double-click `Placebryson.sketchplugin` to install

## What Does It Do?
It allows you to insert customized images of Bryson into any Sketch document.

## How to use it
 - Open a new or existing Sketch document
 - `Plugins` > `Place Bryson` > `Add some sass...`
 - Update the options to your liking, OK
 - The image is created on the canvas

### Appending images to an Artboard or Group
- Open a new or existing Sketch document
- Select the Artboard or Group
- `Plugins` > `Place Bryson` > `Add some sass...`
- Update the options to your liking, OK
- The image is created within the Artboard or Group
- Image will be placed in the top left corner of the Artboard or Group

### Creating images with dimensions and position of existing Layers
- Open a new or existing Sketch document
- Select the desired Layer
- `Plugins` > `Place Bryson` > `Add some sass...`
- Update the options to your liking, OK/Enter
- The image is created in the parent group of the selected layer
- Image will inherit the x, y, width, and height of the selected layer

-------

## Contributing to this project

As with most open source projects, pull requests for bug fixes, and new functionality are always welcome.

Prerequisites

- Node `5.x.x`+
- Yarn

Fork this repo and clone a local copy of your fork.

Install dependencies:

```
yarn install
```

Create necessary application bundle from source by running:

```
make install
```

Watch the `src` and `resources` directories and recompile when changes are made by running:

```
make watch
```

`make install` and `make watch` will copy the application bundle to the default Sketch plugins location `~/Library/Application Support/com.bohemiancoding.sketch3/Plugins/` as `Placebryson.sketchplugin`.

See the `Makefile` for further details on the build process.

#### Plugin inspired by [Day Player](https://github.com/tylergaw/day-player)
