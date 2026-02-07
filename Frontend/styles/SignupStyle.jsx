import { StyleSheet } from "react-native";


const SignupStyle = StyleSheet.create({


    signupheading: {
        fontSize: 60,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 60
    },
    signupsecondheading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_500Medium",
        color: "#305797",
        marginTop: 0,
        margin: 20,
    },
    signuplabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    signupinputs: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        width: 360,
        height: 45
    },
    fullnamecontainer: {
        display: "flex",
        flexDirection: "row"
    },
    nameinputs: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6d6d6d",
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        width: 170,
        height: 45
    },
    signuplinks: {
        fontSize: 16,
        color: "#305797",
    },
    signuplinkscontainer: {
        margin: 20
    },
    signupbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    signupbuttontext: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    }
})

export default SignupStyle