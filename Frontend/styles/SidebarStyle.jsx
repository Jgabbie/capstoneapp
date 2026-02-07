import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;

const SidebarStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Dims the background
        justifyContent: 'flex-start',
    },
    sidebarContainer: {
        width: '75%', // Sidebar width
        height: screenHeight,
        backgroundColor: '#4076A0', // The blue color you wanted
        paddingTop: 40,
        paddingHorizontal: 30,
        // Optional: adds a slight shadow to the edge of the sidebar
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    profileSection: {
        flexDirection: 'row', // KEY: Aligns image and text horizontally
        alignItems: 'center', // Aligns items in the middle vertically
        marginBottom: 20,
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 30, // Perfect circle
    },
    nameContainer: {
        marginLeft: 15, // Gap between image and text
    },
    userName: {
        color: '#fff',
        fontFamily: 'Roboto', 
        fontWeight: 'semibold', // Roboto Bold for name
        fontSize: 16,
    },
    userHandle: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'regular', // Roboto Medium for handle
        fontSize: 14,
    },
    divider: {
        height: 2,
        backgroundColor: '#fff', // White line divider
        marginVertical: 15,
        opacity: 0.8,
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, // Spacing between buttons
    },
    navIcon: {
        width: 40, // Fixed width for icons
        height: 40,
        resizeMode: 'contain',
    },
    navText: {
        color: '#fff',
        fontFamily: 'Montserrat', // Montserrat for buttons
        fontSize: 22,
        marginLeft: 12,
        fontWeight: '500', // Adjust this for Semibold weight
    }
});

export default SidebarStyle;