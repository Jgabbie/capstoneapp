import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;

const SidebarStyle = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-start',
    },
    sidebarContainer: {
        width: '75%',
        flex: 1,
        backgroundColor: '#4076A0',
        paddingTop: 40,
        paddingHorizontal: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    nameContainer: {
        marginLeft: 15,
    },
    userName: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userHandle: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'normal',
        fontSize: 14,
    },
    divider: {
        height: 2,
        backgroundColor: '#fff',
        marginVertical: 15,
        opacity: 0.8,
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    navIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    navText: {
        color: '#fff',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22,
        marginLeft: 12,
        fontWeight: '500',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    xIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 2,
        marginTop: 2,
    },
    modalTitle: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 20,
        fontWeight: '600',
        color: '#305797',
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    logoutIconBig: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    modalText: {
        fontSize: 16,
        color: '#305797',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 15,
    },
    cancelBtn: {
        backgroundColor: '#305797',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    logoutBtn: {
        backgroundColor: '#9E2847',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    }
});

export default SidebarStyle;