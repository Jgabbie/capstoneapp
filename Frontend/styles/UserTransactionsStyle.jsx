import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


const UserTransactionsStyle = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    sideBarButton: {
        backgroundColor: '#E0E0E0', 
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    sideBarImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    bellButton: {
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 1,
    },
    bellIcon: {
        width: 25,
        height: 25,
    },


    usertransactionheading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 20,
        height: 40
    },
    container: {
        flex: 1,
        padding: 20
    },
    SearchBar: {
        borderWidth: 1,
        borderColor: "#6d6d6d",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    filtersContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    picker: {
        flex: 1,
        height: 40,
        marginHorizontal: 5
    },
    table: {
        marginTop: 10
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#6d6d6d",
        paddingBottom: 5,
        marginBottom: 5
    },
    tableHeaderCell: {
        flex: 1,
        fontWeight: '700',
        color: "#305797"
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
        alignItems: "center"
    },
    tableCell: {
        flex: 1,
        fontSize: 10
    },
    viewButton: {
        backgroundColor: "#305797",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    viewButtonText: {
        color: "#fff",
        fontWeight: '500'
    }

})

export default UserTransactionsStyle