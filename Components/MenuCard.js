import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'


const MenuCard = (props) => {
    return (
        <TouchableOpacity onPress={props.changeScreen}>

            <View style={styles.linksContainer}>
                <Feather style={{
                    marginRight: 15
                }} name={props.iconName} size={30} />
                <Text style={styles.linkText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MenuCard;

const styles = StyleSheet.create({
    linksContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    linkText: {
        fontSize: 20,
        fontWeight: "600"
    }
})
