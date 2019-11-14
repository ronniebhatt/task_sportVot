import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import ProfileCard from './ProfileCard'
const { width, height } = Dimensions.get("window")


const Profile = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={() => props.navigation.toggleDrawer()}>
                <Feather style={{
                    marginRight: 15
                }} name="menu" size={30} />

            </TouchableOpacity>

            <View style={{ marginTop: 100 }}>
                <Text style={styles.storeText}>Store Details</Text>

                <ProfileCard iconName="phone" name="Phone" value="+9145678922" />
                <ProfileCard iconName="mail" name="Email" value="test@gmail.com" />
                <ProfileCard iconName="map-pin" name="Address" value="Uttar Pradesh ,Lucknow" />
                <ProfileCard name="FSSAI Number" />
                <ProfileCard name="GSTIN Number" />
                <ProfileCard name="Min Order Amount" value="0" />
                <ProfileCard name="Packing Cost" value="0" />
                <ProfileCard name="Delivery Type" value="Internal" />

            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width,
        height
    },
    menu: {
        position: "absolute",
        marginLeft: 20,
        marginTop: 30
    },
    storeText: {
        marginLeft: 20,
        marginBottom: 30,
        fontSize: 18
    }
})