import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Packages from './screens/Packages';
import PackageDetails from './screens/PackageDetails';
import WishlistScreen from './screens/WishlistScreen';
import ResetPassword from './screens/ResetPassword';
import NewPassword from './screens/NewPassword';
import Profile from './screens/Profile';
import UserBookings from './screens/UserBookings';
import UserTransactions from './screens/UserTransactions';
import UserInvoice from './screens/UserInvoice';
import TransactionReceipt from './screens/TransactionReceipt';
import PaymentMethod from './screens/PaymentMethod';
import VisaAssistance from './screens/VisaAssistance';
import VisaDetails from './screens/VisaDetails';
import PassportAssistance from './screens/PassportAssistance';
import PassportDetails from './screens/PassportDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="resetpassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="userbookings" component={UserBookings} options={{ headerShown: false }} />
        <Stack.Screen name="usertransactions" component={UserTransactions} options={{ headerShown: false }} />
        <Stack.Screen name="bookinginvoice" component={UserInvoice} options={{ headerShown: false }} />
        <Stack.Screen name="transactionreceipt" component={TransactionReceipt} options={{ headerShown: false }} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="wishlist" component={WishlistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="packages" component={Packages} options={{ headerShown: false }} />
        <Stack.Screen name="package-details" component={PackageDetails} options={{ headerShown: false }} />
        <Stack.Screen name="VisaAssistance" component={VisaAssistance} options={{ headerShown: false }} />
        <Stack.Screen name="VisaDetails" component={VisaDetails} options={{ headerShown: false }} />
        <Stack.Screen name="PassportAssistance" component={PassportAssistance} options={{ headerShown: false }} />
        <Stack.Screen name="PassportDetails" component={PassportDetails} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

