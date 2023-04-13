import { ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/images/image2.jpg')}
          style={{ height: deviceHeight, width: deviceWidth }}
          imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
        />
        <View style={{
          position: "absolute",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "center",
            width: deviceWidth - 20
          }}>
            <Icon name="menu" size={46} color="white" />
            <Image source={require('../assets/images/user.jpg')}
              style={{ height: 46, width: 46, borderRadius: 50 }}
            />
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
            <Text style={{ fontSize: 40, color: "white" }} >Hello User</Text>
            <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }} >Search City By Name</Text>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'space-between',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              paddingHorizontal: 10
            }}>
              <TextInput placeholder='Search City' placeholderTextColor="white"
                style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }} />
              <TouchableOpacity onPress={()=>{}}>
                <Icon name="search" size={22} color="white" />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    )
  }
}