// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, Alert, MyStyleSheetheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
// import axios from 'axios';
// import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
// import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
// import { useNavigation } from '@react-navigation/native';
// import MyStyleSheet from '../styles/MyStyleSheet';

// export default function LoginPage() {
//     const navigation = useNavigation();

//     const [values, setValues] = useState({
//         username: '',
//         password: ''
//     });

//     const [error, setError] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post(
//                 'http://192.168.1.20:8000/api/auth/signupUser',
//                 { username: values.username, password: values.password },
//             );
//             console.log("register successful")
//             Alert.alert("Login Successful");
//         } catch (err) {
//             const errorMsg = err.response?.data?.message || "Verification failed";
//             console.error("Error: ", errorMsg);
//             setError(errorMsg);
//         }
//     };

//     return (
//         <KeyboardAvoidingView
//             style={{ flex: 1 }}
//             behavior={Platform.OS === "ios" ? "padding" : undefined}
//         >
//             <ScrollView contentContainerStyle={MyStyleSheet.container}>
//                 <View style={MyStyleSheet.formContainer}>
//                     <Text style={MyStyleSheet.heading}>M&RC Travel and Tours</Text>
//                     <Text style={MyStyleSheet.secondaryHeading}>Login Account</Text>

//                     <View style={MyStyleSheet.inputGroup}>
//                         <Text style={MyStyleSheet.label}>Username</Text>
//                         <TextInput
//                             style={[MyStyleSheet.input, error && MyStyleSheet.inputError]}
//                             placeholder="Enter your Username"
//                             value={values.username}
//                             autoCapitalize="none"
//                             maxLength={20}
//                             onChangeText={(text) => setValues({ ...values, username: text.replace(/[^A-Za-z0-9]/g, '') })}
//                         />
//                     </View>

//                     <View style={MyStyleSheet.inputGroup}>
//                         <Text style={MyStyleSheet.label}>Password</Text>
//                         <TextInput
//                             style={[MyStyleSheet.input, error && MyStyleSheet.inputError]}
//                             placeholder="Enter your Password"
//                             value={values.password}
//                             secureTextEntry
//                             maxLength={20}
//                             onChangeText={(text) => setValues({ ...values, password: text.replace(/\s/g, '') })}
//                         />
//                     </View>

//                     {error ? <Text style={MyStyleSheet.error}>{error}</Text> : null}

//                     <View style={MyStyleSheet.linksContainer}>
//                         <Text style={MyStyleSheet.labelLink}>
//                             Need an Account?{' '}
//                             <Text style={MyStyleSheet.buttonLink} onPress={() => navigation.navigate('Signup')}>
//                                 Signup here
//                             </Text>
//                         </Text>
//                         <Text style={MyStyleSheet.labelLink}>
//                             Forgot your{' '}
//                             <Text style={MyStyleSheet.buttonLink} onPress={() => navigation.navigate('ResetPassword')}>
//                                 Password?
//                             </Text>
//                         </Text>
//                     </View>

//                     <TouchableOpacity style={MyStyleSheet.loginButton} onPress={handleLogin}>
//                         <Text style={MyStyleSheet.loginButtonText}>Login</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={MyStyleSheet.bannerContainer}>
//                     {/* <Image
//                         source={require('../assets/images/LoginPage_Banner.png')} // adjust path
//                         style={MyStyleSheet.bannerImage}
//                         resizeMode="cover"
//                     /> */}
//                 </View>
//             </ScrollView>
//         </KeyboardAvoidingView>
//     );
// }


