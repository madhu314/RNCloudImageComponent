/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { AppRegistry, View, StatusBar } from "react-native"
import App from "./js/app"
export default class CloudImageComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default"/>
        <App/>
      </View>
    )
  }
}
AppRegistry.registerComponent("CloudImageComponent", () => CloudImageComponent)
