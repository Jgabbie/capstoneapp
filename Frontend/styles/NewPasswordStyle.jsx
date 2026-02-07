import { StyleSheet } from "react-native";


const NewPasswordStyle = StyleSheet.create({


    newpasswordheading: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 0,
        margin: 20,
        height: 40
    },
    newpasswordsecondheading: {
        fontSize: 25,
        fontWeight: 600,
        fontFamily: "Montserrat_500Medium",
        color: "#305797",
        marginTop: 0,
        margin: 20,
    },
    newpasswordlabel: {
        fontSize: 16,
        color: "#305797",
        marginLeft: 20
    },
    newpasswordinputs: {
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
    newpasswordlinks: {
        fontSize: 16,
        color: "#305797",
    },
    newpasswordlinkscontainer: {
        margin: 20
    },
    newpasswordbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#305797",
        width: 360,
        height: 45,
        marginLeft: 20,
        borderRadius: 10
    },
    newpasswordbuttontext: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 22,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 10
    },
    modalText: {
        fontSize: 16,
        fontFamily: "Roboto_400Regular",
        textAlign: "center",
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: "#305797",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    }
})

export default NewPasswordStyle