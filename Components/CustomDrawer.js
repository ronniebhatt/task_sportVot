import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import MenuCard from './MenuCard'

const { width, height } = Dimensions.get("window")


const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={require('../images/avatar.jpg')} />
                </View>
                <View style={styles.profileTextContainer}>
                    <Text style={styles.nameContainer}>Chicken</Text>
                    <Text style={styles.nameContainer}>Dinner</Text>
                    <Text style={styles.addressContainer}>Food</Text>
                    <Text style={styles.addressContainer}>513,nagar</Text>
                </View>
            </View>

            <View>
                <MenuCard name="Orders" iconName="shopping-bag" />
                <MenuCard name="Products" iconName="package" />
                <MenuCard name="Categories" iconName="list" />
                <MenuCard name="Reports" iconName="file" />
                <MenuCard name="Past Orders" iconName="rotate-cw" />
                <MenuCard name="Profile" iconName="package" changeScreen={() => props.navigation.navigate("Profile")} />
            </View>

            <View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>Logout</Text>
                    <Text style={{ marginTop: 10 }}>App versions 2.0.7</Text>
                </View>
            </View>


        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        height,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginTop: 50,
        marginLeft: 20

    },
    profileContainer: {
        flexDirection: "row",
        backgroundColor: "#423661",
        height: 210
    },
    profileTextContainer: {
        marginTop: 60,
        marginLeft: 20
    },
    nameContainer: {
        fontSize: 22,
        fontWeight: "500",
        color: "#fff"
    },
    addressContainer: {
        fontSize: 18,
        margin: 3,
        color: "rgba(255,255,255,0.5)"
    },
})