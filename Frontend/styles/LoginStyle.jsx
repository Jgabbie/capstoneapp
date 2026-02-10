import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 120
    },
    loginheading: {
        fontSize: 60,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 60
    },
    loginsecondheading: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: "Montserrat_500Medium",
        color: "#305797",
        marginTop: 0,
        margin: 20,
    },
    loginlabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    logininputs: {
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
    loginlinks: {
        fontSize: 16,
        color: "#305797",
    },
    loginlinkscontainer: {
        margin: 20
    },
    loginbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    loginbuttontext: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    }
})

export default LoginStyle