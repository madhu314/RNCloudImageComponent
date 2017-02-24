import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native"

import CLImage from "./CLImage"
export default class App extends Component {
  render() {
    return (      
      <View style={styles.mainContainer}>
        <CLImage style={styles.flexOneContainer} cloudId={"sample_1"} />        
        <View style={styles.portraitContainer}>
          <CLImage style={styles.flexOneContainer} cloudId={"sample_3"} />
          <CLImage style={styles.flexOneContainer} cloudId={"sample_4"} />
          <CLImage style={styles.flexOneContainer} cloudId={"sample_2"} />
        </View>
        <CLImage style={styles.flexOneContainer} cloudId={"sample_6"} />
        <CLImage style={styles.flexOneContainer} cloudId={"sample_5"} />
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
  mainContainer: { 
    flex: 5
  },
  flexOneContainer: {
    flex: 1
  },
  portraitContainer: {
    flex: 2,
    flexDirection: 'row'
  },
})
