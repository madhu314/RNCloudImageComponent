import React, { PropTypes, Component } from "react"
import {
  Image, View, StyleSheet, PixelRatio
} from "react-native"
import * as CLOUDINARY from "cloudinary-core"

const cloudinary = CLOUDINARY.Cloudinary.new({ cloud_name: "dkseevgvv" })

export default class CLImage extends Component {
  constructor() {
    super()
    this.state = {
      layoutDone  : false,
      imageWidth  : 0,
      imageHeight : 0
    }
  }

  render() {
    return (
      this.state.layoutDone ? this.renderImage() : this.renderFreeForm()
    )
  }

  renderFreeForm() {
    return (
      <View style={[this.props.style, styles.background]} onLayout={(event) => this.onLayoutDone(event.nativeEvent.layout)}>
      </View>
    )
  }

  renderImage() {
    let opts = {}
    Object.assign(opts, this.props.options, { width: this.state.imageWidth, height: this.state.imageHeight })
    return (
      <Image style={{ width: this.state.imageWidth, height: this.state.imageHeight }} source={{ uri: this.imageUrl(this.props.cloudId, opts) }}/>
    )
  }

  onLayoutDone(layout) {
    if (layout.width > 0 && layout.height > 0) {
      this.setState({
        layoutDone  : true,
        imageWidth  : layout.width,
        imageHeight : layout.height
      })
    }
  }

  imageUrl(cloudId, options={}) {
    let opts = {}
    Object.assign(opts, { crop: "fill", gravity: "face", format: "jpg", quality: 75, secure: true }, options)
    opts.width = PixelRatio.getPixelSizeForLayoutSize(options.width)
    opts.height = PixelRatio.getPixelSizeForLayoutSize(options.height)
    let url = cloudinary.url(cloudId, opts)
    console.log("Image url is:" + url)
    return url
  }
}

CLImage.propTypes = {
  ...View.props,
  cloudId : PropTypes.string,
  options : PropTypes.object
}

const styles = StyleSheet.create({ background: { backgroundColor: "rgba(0,0,0,0.2)" }})
