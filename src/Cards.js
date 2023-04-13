import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import { TouchableOpacity } from 'react-native'

export default function Cards({ name, image, navigation }) {
    return (
        <TouchableOpacity
            style={{ marginHorizontal: 10 }}
            onPress={() => navigation.navigate('Details', { name })}
        >
            <ImageBackground source={image}
                style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50 }}
                imageStyle={{ borderRadius: 16 }}
            />
            <View style={{
                position: 'absolute',
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                opacity: 0.6,
                borderRadius: 16,
                borderWidth: 2,
                shadowColor: "#ccc",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <Text style={{
                    fontSize: 22,
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    textAlignVertical: "center",
                    color: '#000',
                    fontWeight: 'bold'
                }}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}