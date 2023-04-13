import { ImageBackground, View } from 'react-native'
import React, { Component } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default class Home extends Component {
  render() {
    return (
      <View>
        <ImageBackground 
            source={require('../assets/images/image2.jpg')} 
            style={{ height: deviceHeight, height: deviceWidth}}
            imageStyle={{ opacity: 0.6, backgroundColor: "black"}}
        />
      </View>
    )
  }
}