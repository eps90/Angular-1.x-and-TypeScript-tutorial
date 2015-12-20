# AngularJS 1.x and TypeScript: The biggest tutorial
## Source code

You can checkout to different tags for the code related to the following parts of the tutorial.

 * `part-1` : [http://blog.kubaturek.pl/angularjs-1x-and-typescript-pt-1/](http://blog.kubaturek.pl/angularjs-1x-and-typescript-pt-1/)

## Installation

### Packages

Assuming you have **node.js, bower** installed, run:
```sh
npm install
bower install
```

### Definitions

This project uses [tsd](http://definitelytyped.org/tsd/) for TypeScript definitions

```sh
tsd reinstall
tsd rebundle
```

### Tests

Once you have your sources compiled, run

```sh
node_modules/.bin/karma start
```
