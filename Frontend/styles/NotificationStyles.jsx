import { StyleSheet } from "react-native";

const NotificationStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom: 20
    },
    sideBarButton: {
        backgroundColor: '#E0E0E0',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sideBarImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5
    },
    bellButton: {
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 1
    },
    bellIcon: {
        width: 25,
        height: 25
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        padding: 15
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3
    },
    icon: {
        marginRight: 12,
    },
    textContainer: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#305797',
    },
    message: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    time: {
        fontSize: 12,
        color: '999'
    }
})

export default NotificationStyles