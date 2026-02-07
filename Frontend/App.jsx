import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import NewPassword from './screens/NewPassword';
import Profile from './screens/Profile';
import UserBookings from './screens/UserBookings';
import UserTransactions from './screens/UserTransactions';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="usertransactions">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="resetpassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="userbookings" component={UserBookings} options={{ headerShown: false }} />
        <Stack.Screen name="usertransactions" component={UserTransactions} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

