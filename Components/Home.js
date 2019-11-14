import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get("window")


const Home = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={() => props.navigation.toggleDrawer()}>
                <Feather style={{
                    marginRight: 15
                }} name="menu" size={30} />

            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 150 }}>
                <Text style={{ fontSize: 36 }}>Home</Text>
            </View>


        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        width,
        height
    },
    menu: {
        position: "absolute",
        marginLeft: 20,
        marginTop: 30
    }

})
