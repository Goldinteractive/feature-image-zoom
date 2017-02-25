import Zooming from 'zooming'

/**
 * Image zoom feature class.
 */
class ImageZoom extends base.features.Feature {

  init() {
    this.zooming = new Zooming(this.options)
    this.zooming.listen(this.node)
  }

}

/**
 * Default feature options (also used to initialize zooming library).
 *
 * @see https://github.com/kingdido999/zooming
 */
ImageZoom.defaultOptions = {
  enableGrab: false,
  bgOpacity: 0.4,
  bgColor: 'rgb(0, 0, 0)',
  scaleBase: 0.9
}

export default ImageZoom
