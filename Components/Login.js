import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    TextInput
} from 'react-native';

const { width } = Dimensions.get("window")

const Login = (props) => (
    <>
        <View>
            <View style={styles.topContainer}>
                <Text style={styles.signInText}>Sign In</Text>
                <Image style={styles.logo} source={require('../images/shop.png')} />
            </View>
            <View style={styles.middleContainer}>
                <TextInput style={styles.inputContainer} placeholder="Email/Phone" />
                <TextInput secureTextEntry={true} style={styles.inputContainer} placeholder="Password" />
                <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>

                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.termsContainer}>
                    <Text>Terms & Condition</Text>
                    <Text>Shop Registration</Text>

                </View>
            </View>
        </View>
    </>
);

const styles = StyleSheet.create({
    topContainer: {
        alignItems: "center",
        marginTop: 60,


    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 40
    },
    signInText: {
        fontSize: 32,
        fontWeight: "600",

    },
    middleContainer: {
        marginTop: 30,
        alignItems: "center",
    },
    inputContainer: {
        borderBottomWidth: 1,
        padding: 20,
        width: width - 60,
        margin: 5,
        fontSize: 18
    },
    forgotText: {
        fontSize: 18,
        marginTop: 18,
    },
    forgotContainer: {
        alignItems: "flex-end",
        width,
        marginRight: 45
    },
    bottomContainer: {
        alignItems: "center",
        marginTop: 60,

    },
    loginContainer: {
        width: width - 60,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#38761D"
    },
    loginText: {
        fontSize: 20,
        color: "#fff"

    },
    termsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 60,
        marginTop: 15
    }
});

export default Login;
