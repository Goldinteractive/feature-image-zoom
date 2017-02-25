## `image-zoom` feature

Image zooming functionality.

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`zooming`](https://github.com/kingdido999/zooming)

### Installation

Install this package with sackmesser:

    make feature-install-image-zoom

or when sackmesser is not used:

    yarn install gi-feature-image-zoom

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import ImageZoom from 'gi-feature-image-zoom'
// ...
base.features.add('image-zoom', ImageZoom)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-image-zoom/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
