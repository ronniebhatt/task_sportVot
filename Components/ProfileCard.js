import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get("window")

const ProfileCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconTextContainer}>
                <Feather style={{
                    marginRight: 15
                }} name={props.iconName} size={30} />
                <Text style={styles.text}>{props.name}</Text>

            </View>
            <Text style={styles.valueText}>{props.value}</Text>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        marginBottom: 12
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        width: width - 250
    },
    valueText: {
        marginLeft: 40,
        paddingLeft: 30,
        fontSize: 15,
        marginRight: 20,
        width: width - 200,
        textAlign: "left"
    },
    text: {
        fontSize: 14
    }
})