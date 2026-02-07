// import { StyleSheet, Dimensions, Platform } from "react-native";

// const { width, height } = Dimensions.get("window");

// const MyStyleSheet = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#F5F8FF',
//         flexDirection: Platform.OS === 'web' ? 'row' : 'column', // row for web, column for mobile
//     },
//     formContainer: {
//         flex: Platform.OS === 'web' ? 6 : 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: Platform.OS === 'web' ? 40 : 20,
//     },
//     heading: {
//         fontFamily: 'Montserrat',
//         fontSize: Platform.OS === 'web' ? 70 : 36,
//         fontWeight: '600',
//         color: '#305797',
//         lineHeight: Platform.OS === 'web' ? 40 : 44,
//         marginBottom: Platform.OS === 'web' ? 35 : 20,
//         textAlign: 'center',
//     },
//     secondaryHeading: {
//         fontFamily: 'Montserrat',
//         fontSize: Platform.OS === 'web' ? 35 : 22,
//         fontWeight: '600',
//         color: '#305797',
//         marginBottom: Platform.OS === 'web' ? 50 : 25,
//         textAlign: 'center',
//     },
//     inputGroup: {
//         width: '100%',
//         marginBottom: 20,
//     },
//     label: {
//         fontSize: Platform.OS === 'web' ? 16 : 14,
//         fontFamily: 'Roboto',
//         color: '#305797',
//         marginBottom: 5,
//     },
//     input: {
//         height: Platform.OS === 'web' ? 60 : 50,
//         fontSize: Platform.OS === 'web' ? 22 : 16,
//         fontFamily: 'Montserrat',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//     },
//     inputError: {
//         borderColor: '#ff0000',
//     },
//     error: {
//         color: '#ff0000',
//         marginBottom: 10,
//     },
//     linksContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         marginBottom: 40,
//         flexWrap: 'wrap', // wrap on small screens
//     },
//     labelLink: {
//         fontSize: Platform.OS === 'web' ? 18 : 14,
//         fontWeight: '600',
//         color: '#305797',
//     },
//     buttonLink: {
//         color: '#992A46',
//         textDecorationLine: 'underline',
//     },
//     loginButton: {
//         backgroundColor: '#305797',
//         width: Platform.OS === 'web' ? 240 : 180,
//         height: Platform.OS === 'web' ? 50 : 45,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//     },
//     loginButtonText: {
//         color: '#fff',
//         fontSize: Platform.OS === 'web' ? 20 : 16,
//         fontFamily: 'Roboto',
//         fontWeight: '500',
//     },
//     bannerContainer: {
//         flex: Platform.OS === 'web' ? 4 : 0,
//         width: Platform.OS === 'web' ? undefined : '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     bannerImage: {
//         width: Platform.OS === 'web' ? 300 : width * 0.7, // responsive width
//         height: Platform.OS === 'web' ? 750 : height * 0.5, // responsive height
//         resizeMode: 'contain',
//     },
// });

// export default MyStyleSheet;
